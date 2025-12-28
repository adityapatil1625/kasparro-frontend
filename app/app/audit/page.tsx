import { loadAuditData } from "@/lib/data";
import { AuditData } from "@/types";
import { AuditLayout } from "@/components/audit/AuditLayout"; // Will create this

export default async function AuditPage() {
  const auditData: AuditData = await loadAuditData();

  return (
    <AuditLayout auditData={auditData} />
  );
}