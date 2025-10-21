import { cloudApi, getHeaders, proxyError } from 'utils/cloud';

export async function GET(req) {
  const baseHeaders = getHeaders(req.headers);

  if (!baseHeaders.authorization) {
    return Response.json(
      {},
      {
        status: 400,
      }
    );
  }

  try {
    const { data } = await cloudApi.get('/playgrounds-health', {
      headers: {
        authorization: baseHeaders.authorization,
      },
    });

    return Response.json(data);
  } catch (error) {
    const { data, status } = proxyError(error);

    return Response.json(data, {
      status,
    });
  }
}
