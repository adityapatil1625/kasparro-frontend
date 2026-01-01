import brandsData from '../data/brands.json';
import { Brand } from '@/types';

export function getFirstBrandId(): string {
  const brands = brandsData as Brand[];
  if (brands && brands.length > 0) {
    return brands[0].id;
  }
  return 'brand-a'; // Fallback in case brands.json is empty or malformed
}
