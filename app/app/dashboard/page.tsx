"use client";

import { useEffect, useState } from "react";
import { DashboardSnapshot, Brand } from "@/types";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { BrandSelector } from "@/components/dashboard/BrandSelector";
import { useStore } from "@/store/useStore";
import { CardSkeleton } from "@/components/CardSkeleton";

export default function DashboardPage() {
  const { selectedBrand } = useStore();
  const [snapshot, setSnapshot] = useState<DashboardSnapshot | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBrands() {
      const res = await fetch('/api/brands');
      const brandsData = await res.json();
      setBrands(brandsData);
    }
    getBrands();
  }, []);

  useEffect(() => {
    async function getSnapshot() {
      setLoading(true);
      if (selectedBrand) {
        const res = await fetch(`/api/snapshot/${selectedBrand}`);
        if (res.ok) {
          const snapshotData = await res.json();
          setSnapshot(snapshotData);
        } else {
          setSnapshot(null);
        }
      }
      setLoading(false);
    }
    getSnapshot();
  }, [selectedBrand]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <SectionTitle
              pill="Overview"
              title="Brand Snapshot"
              description="A high-level overview of your brand's key performance indicators."
              className="text-left"
            />
            <BrandSelector brands={brands} />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : snapshot ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card title="AI Visibility Score" value={snapshot.aiVisibilityScore} unit="/100" />
              <Card title="Trust / EEAT Score" value={snapshot.trustEEATScore} unit="/100" />
              <Card title="Non-Branded Keyword Coverage" value={snapshot.nonBrandedKeywordCoverage} unit="%" />
              <Card title="Last Audit Timestamp" value={new Date(snapshot.lastAuditTimestamp).toLocaleDateString()} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a brand to view the snapshot.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}