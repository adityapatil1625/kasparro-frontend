
import brandsData from "../data/brands.json"

export function getFirstBrandId(): string {
  if (brandsData && brandsData.length > 0) {
    return brandsData[0].id
  }
  return "brand-a" // Fallback in case brands.json is empty or malformed
}
