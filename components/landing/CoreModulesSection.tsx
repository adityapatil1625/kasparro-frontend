import { SectionTitle } from "../SectionTitle";
import { loadAuditData } from "@/lib/data";
import { AuditModule } from "@/types";

export async function CoreModulesSection() {
  const auditData = await loadAuditData();
  const modules = Object.values(auditData); // Get all audit modules as an array

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <SectionTitle
          pill="Platform Overview"
          title="The 7 Core AI-SEO Modules"
          description="Kasparro's platform is built around powerful, AI-driven modules that provide deep insights into every aspect of your brand's online presence."
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {modules.map((module: AuditModule) => (
            <div key={module.id} className="bg-card p-6 rounded-lg shadow-sm flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold mb-2 capitalize">{module.id.replace(/-/g, ' ')}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {/* Display a brief insight or general description for each module */}
                  {module.insights && module.insights.length > 0 ? module.insights[0] : "No specific insight available."}
                </p>
              </div>
              <div className="mt-4 text-right">
                <span className="text-2xl font-bold text-primary">{module.score}</span>
                <span className="text-sm text-gray-500">/100 Score</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
