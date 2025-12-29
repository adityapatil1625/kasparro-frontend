
import brandsData from "../data/brands.json"

export function getFirstBrandName(): string {
  if (brandsData && brandsData.length > 0) {
    return brandsData[0].name
  }
  return "Default Brand" // Fallback in case brands.json is empty or malformed
}
