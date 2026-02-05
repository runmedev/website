import type { NextRequest } from 'next/server';

export type { NextRequest, NextResponse } from 'next/server';
export type { NextApiRequest, NextApiResponse } from 'next';

export interface ProxyErrorResult {
  status: number;
  data: Record<string, unknown>;
}

export interface DispatchRequestBody {
  folder?: string;
  captchaCode?: string;
}

export interface HealthCheckParams {
  name?: string;
}

export interface CaptchaValidationResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export interface CloudApiSession {
  key: string;
  value: string;
  expires: string;
}

export interface CloudApiResponse {
  data: {
    session: CloudApiSession;
  };
}

export interface HeadersObject {
  [key: string]: string;
}
