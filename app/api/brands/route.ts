import { NextResponse } from 'next/server';
import { loadBrands } from '@/lib/data';

export async function GET() {
  const brands = await loadBrands();
  return NextResponse.json(brands);
}
