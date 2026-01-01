import { NextResponse } from 'next/server';

export interface ApiErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown): NextResponse<ApiErrorResponse> {
  if (error instanceof ApiError) {
    console.error(`[API Error] ${error.statusCode}: ${error.message}`, error.details);
    return NextResponse.json(
      {
        error: `Error ${error.statusCode}`,
        message: error.message,
        statusCode: error.statusCode,
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof SyntaxError) {
    console.error('[API Error] Invalid JSON:', error.message);
    return NextResponse.json(
      {
        error: 'Bad Request',
        message: 'Invalid JSON in response',
        statusCode: 400,
      },
      { status: 400 }
    );
  }

  if (error instanceof Error && error.message.includes('ENOENT')) {
    console.error('[API Error] File not found:', error.message);
    return NextResponse.json(
      {
        error: 'Not Found',
        message: 'Requested resource not found',
        statusCode: 404,
      },
      { status: 404 }
    );
  }

  console.error('[API Error] Unexpected error:', error);
  return NextResponse.json(
    {
      error: 'Internal Server Error',
      message: 'An unexpected error occurred',
      statusCode: 500,
    },
    { status: 500 }
  );
}
