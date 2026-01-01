"use client";

import { useEffect, useState } from "react";
import { DashboardSnapshot, Brand } from "@/types";
import { SectionTitle } from "@/components/SectionTitle";
import { BrandSelector } from "@/components/dashboard/BrandSelector";
import { useStore } from "@/store/useStore";
import { CardSkeleton } from "@/components/CardSkeleton";
import { motion } from "framer-motion";
import { StatCard } from "@/components/StatCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ScoreBadge } from "@/components/ScoreBadge";
import { Badge } from "@/components/Badge";

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
          setTimeout(() => {
            setSnapshot(snapshotData);
            setLoading(false);
          }, 500);
        } else {
          setSnapshot(null);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
    getSnapshot();
  }, [selectedBrand]);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'Audit Completed';
      case 'in-progress':
        return 'Audit In Progress';
      default:
        return 'Pending';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 py-4 border-b bg-gradient-to-r from-background to-secondary">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <BrandSelector brands={brands} />
        </div>
      </header>
      <main className="flex-1 p-6 bg-gradient-to-b from-background via-background to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <SectionTitle
              pill="Overview"
              title="Brand Performance Snapshot"
              description="Real-time insights into your brand's AI visibility, authority, and keyword coverage."
              className="text-left"
            />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : snapshot ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              as="div" className="space-y-6"
            >
              {/* Status Badge */}
              <div className="flex items-center gap-3">
                <Badge variant={getStatusColor(snapshot.auditStatus)} size="md">
                  {getStatusText(snapshot.auditStatus)}
                </Badge>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Last audit: {new Date(snapshot.lastAuditTimestamp).toLocaleDateString()}
                </span>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* AI Visibility Score */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <StatCard
                    label="AI Visibility Score"
                    value={<ScoreBadge score={snapshot.aiVisibilityScore} />}
                    trend={snapshot.aiVisibilityTrend}
                    description="Your brand's presence in AI search results"
                  >
                    <div className="mt-4">
                      <ProgressBar value={snapshot.aiVisibilityScore} maxValue={100} showLabel={false} />
                    </div>
                  </StatCard>
                </motion.div>

                {/* Trust & EEAT Score */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <StatCard
                    label="Trust & EEAT Score"
                    value={<ScoreBadge score={snapshot.trustEEATScore} />}
                    trend={snapshot.trustEEATTrend}
                    description="Expertise, authority, and trustworthiness metrics"
                  >
                    <div className="mt-4">
                      <ProgressBar value={snapshot.trustEEATScore} maxValue={100} showLabel={false} />
                    </div>
                  </StatCard>
                </motion.div>

                {/* Non-Branded Keyword Coverage */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <StatCard
                    label="Keyword Coverage"
                    value={<ScoreBadge score={snapshot.nonBrandedKeywordCoverage} />}
                    trend={snapshot.keywordTrend}
                    description="Non-branded keyword ranking coverage"
                  >
                    <div className="mt-4">
                      <ProgressBar value={snapshot.nonBrandedKeywordCoverage} maxValue={100} showLabel={false} />
                    </div>
                  </StatCard>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <div className="flex items-center justify-center h-96 text-gray-500 dark:text-gray-400 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
              <div className="text-center">
                <p className="text-lg font-medium mb-2">No brand selected</p>
                <p className="text-sm">Select a brand from the dropdown to view performance metrics.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
