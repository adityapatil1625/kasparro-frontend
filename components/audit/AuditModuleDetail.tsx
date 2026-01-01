"use client";

import { AuditModule } from "@/types";
import { SectionTitle } from "@/components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { ScoreBadge } from "@/components/ScoreBadge";
import { ProgressBar } from "@/components/ProgressBar";
import { Badge } from "@/components/Badge";

interface AuditModuleDetailProps {
  module: AuditModule;
}

export function AuditModuleDetail({ module }: AuditModuleDetailProps) {
  const formatModuleName = (id: string) => {
    return id
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <AnimatePresence mode="wait">
      <div className="space-y-8" key={module.id}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Header */}
          <div>
            <SectionTitle
              pill={formatModuleName(module.id)}
              title="Module Analysis"
              description={`Comprehensive audit results and recommendations for improving your ${formatModuleName(
                module.id
              ).toLowerCase()}.`}
              className="text-left"
            />
          </div>

          {/* Score Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Overall Score</p>
                <ScoreBadge score={module.score} size="lg" />
              </div>
              <div className="flex-1 ml-8">
                <ProgressBar value={module.score} maxValue={100} size="lg" showLabel={false} />
              </div>
            </div>
          </motion.div>

          {/* Key Insights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-blue-500 rounded"></span>
                Key Insights
              </h3>
              <div className="grid gap-3">
                {module.insights.map((insight, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20"
                  >
                    <p className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {insight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Issues / Flags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-red-500 rounded"></span>
                Issues & Flags
              </h3>
              <div className="grid gap-3">
                {module.issues.length > 0 ? (
                  module.issues.map((issue, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"
                    >
                      <p className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex-shrink-0 mt-0.5">
                          !
                        </span>
                        {issue}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                    <p className="text-green-700 dark:text-green-300 flex items-center gap-2">
                      <span>✓</span>
                      No critical issues detected. Great work!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-green-500 rounded"></span>
                Recommendations
              </h3>
              <div className="space-y-3">
                {module.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-3">
                      <Badge variant="success" size="sm" className="flex-shrink-0">
                        {index + 1}
                      </Badge>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{rec}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

