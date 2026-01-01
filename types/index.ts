export interface AuditModule {
  id: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
}

export interface Brand {
  id: string;
  name: string;
}

export interface Trend {
  direction: 'up' | 'down' | 'stable';
  percentage: number;
}

export interface DashboardSnapshot {
  aiVisibilityScore: number;
  aiVisibilityTrend?: Trend;
  trustEEATScore: number;
  trustEEATTrend?: Trend;
  nonBrandedKeywordCoverage: number;
  keywordTrend?: Trend;
  lastAuditTimestamp: string;
  auditStatus?: 'completed' | 'in-progress' | 'pending';
}

export interface AuditData {
  [key: string]: AuditModule; // A map of audit module IDs to AuditModule objects
}

export interface ArchitectureModule {
  name: string;
  description: string;
}
