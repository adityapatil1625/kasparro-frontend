import { loadBrands, loadDashboardSnapshot } from "@/lib/data";
import { DashboardSnapshot, Brand } from "@/types";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card"; // Assuming a Card component exists
import { BrandSelector } from "@/components/dashboard/BrandSelector"; // Will create this

export default async function DashboardPage() {
  const snapshot: DashboardSnapshot = await loadDashboardSnapshot();
  const brands: Brand[] = await loadBrands();

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="AI Visibility Score" value={snapshot.aiVisibilityScore} unit="/100" />
            <Card title="Trust / EEAT Score" value={snapshot.trustEEATScore} unit="/100" />
            <Card title="Non-Branded Keyword Coverage" value={snapshot.nonBrandedKeywordCoverage} unit="%" />
            <Card title="Last Audit Timestamp" value={new Date(snapshot.lastAuditTimestamp).toLocaleDateString()} />
          </div>
        </div>
      </main>
    </div>
  );
}