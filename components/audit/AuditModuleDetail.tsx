"use client";

import { AuditModule } from "@/types";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

interface AuditModuleDetailProps {
  module: AuditModule;
}

export function AuditModuleDetail({ module }: AuditModuleDetailProps) {
  return (
    <AnimatePresence mode="wait">
      <div className="space-y-8">
        <motion.div
          key={module.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <SectionTitle
            pill={`Score: ${module.score}/100`}
            title={`${module.id.replace(/-/g, ' ').toUpperCase()} Overview`}
            description={`Detailed analysis and recommendations for ${module.id.replace(/-/g, ' ')}.`}
            className="text-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Key Insights" content={module.insights.map((insight, index) => <p key={index}>{insight}</p>)} />
            <Card title="Issues / Flags" content={module.issues.map((issue, index) => <p key={index}>{issue}</p>)} />
          </div>

          <Card title="Recommendations" content={module.recommendations.map((rec, index) => <p key={index}>{rec}</p>)} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

