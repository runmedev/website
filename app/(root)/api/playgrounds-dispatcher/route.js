import * as cookie from "cookie";
import { cloudApi, getHeaders, proxyError } from "utils/cloud";

export async function POST(req) {
  const baseHeaders = getHeaders(req.headers);

  const body = await req.json();

  if (!baseHeaders.authorization) {
    return Response.json(
      {
        message: "Unauthorized",
      },
      {
        status: 400,
      }
    );
  }

  const isCaptchaValid = await verifyCaptcha(body?.captchaCode);
  if (!isCaptchaValid) {
    return Response.json(
      {
        message: "Service Unavailable",
      },
      {
        status: 503,
      }
    );
  }

  try {
    const { data } = await cloudApi.post(
      "/playgrounds-dispatcher",
      {
        type: "runme",
        folder: body?.folder,
      },
      {
        headers: {
          authorization: baseHeaders.authorization,
        },
      }
    );

    const session = data.data.session;

    const codeServerSession = cookie.serialize(session.key, session.value, {
      domain: ".runme.dev",
      expires: new Date(session.expires),
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });

    return Response.json(data, {
      headers: {
        "set-cookie": codeServerSession,
      },
    });
  } catch (error) {
    const { data, status } = proxyError(error);

    return Response.json(data, {
      status,
    });
  }
}

async function verifyCaptcha(captchaCode) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    // Ping the google recaptcha verify API to verify the captcha code you received
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaCode}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );
    const captchaValidation = await response.json();
    /**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
    if (captchaValidation.success) {
      return true;
    }

    // accept timeout-or-duplicate as valid, this makes retries work
    const timeoutOrDuplicate = "timeout-or-duplicate";
    if (captchaValidation["error-codes"].includes(timeoutOrDuplicate)) {
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
