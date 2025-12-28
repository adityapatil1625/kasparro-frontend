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

export interface DashboardSnapshot {
  aiVisibilityScore: number;
  trustEEATScore: number;
  nonBrandedKeywordCoverage: number;
  lastAuditTimestamp: string; // Or Date, depending on how it's mocked
}

export interface AuditData {
  [key: string]: AuditModule; // A map of audit module IDs to AuditModule objects
}

export interface ArchitectureModule {
  name: string;
  description: string;
  // Potentially add more properties if the architecture page needs structured data
}
