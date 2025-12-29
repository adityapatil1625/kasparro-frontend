import { NextResponse } from 'next/server';
import { loadDashboardSnapshot } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: { brandId: string } }
) {
  const brandId = params.brandId;
  try {
    const snapshot = await loadDashboardSnapshot(brandId);
    return NextResponse.json(snapshot);
  } catch (error) {
    return new NextResponse('Snapshot not found', { status: 404 });
  }
}
