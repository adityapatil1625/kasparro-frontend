"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assuming shadcn/ui select components
import { Brand } from "@/types";
import { useStore } from "@/store/useStore";

interface BrandSelectorProps {
  brands: Brand[];
}

export function BrandSelector({ brands }: BrandSelectorProps) {
  const { selectedBrand, setBrand } = useStore();

  const handleBrandChange = (value: string) => {
    setBrand(value);
  };

  return (
    <Select onValueChange={handleBrandChange} value={selectedBrand}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a brand" />
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            {brand.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
