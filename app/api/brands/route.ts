import { NextResponse } from 'next/server';
import { loadBrands } from '@/lib/data';
import { handleApiError } from '@/lib/api-errors';

export async function GET(): Promise<NextResponse> {
  try {
    const brands = await loadBrands();
    return NextResponse.json(brands);
  } catch (error) {
    return handleApiError(error);
  }
}
