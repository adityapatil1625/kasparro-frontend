import { NextResponse } from 'next/server';
import { loadDashboardSnapshot } from '@/lib/data';
import { handleApiError, ApiError } from '@/lib/api-errors';

export async function GET(
  _request: Request,
  { params }: { params: { brandId: string } }
): Promise<NextResponse> {
  try {
    if (!params.brandId) {
      throw new ApiError(400, 'Brand ID is required');
    }

    const snapshot = await loadDashboardSnapshot(params.brandId);
    return NextResponse.json(snapshot);
  } catch (error) {
    return handleApiError(error);
  }
}
