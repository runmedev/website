import { cloudApi, getHeaders, proxyError } from '@/utils/cloud';
import type { NextRequest } from 'next/server';
import type { AxiosError } from 'axios';

export async function GET(req: NextRequest) {
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
    const { data, status } = proxyError(error as AxiosError);

    return Response.json(data, {
      status,
    });
  }
}
