import { SectionTitle } from "../SectionTitle";
import { loadAuditData } from "@/lib/data";
import { AuditModule } from "@/types";

const moduleDescriptions: Record<string, string> = {
  "ai-visibility": "Neural network analysis of your brand's presence in AI search results (ChatGPT, Gemini, Perplexity, Claude)",
  "authority-signals": "E-E-A-T evaluation through backlink semantics, entity authority, and topical expertise graphs",
  "brand-trust": "Trust scoring via sentiment analysis, brand mention patterns, and user perception signals",
  "content-quality": "NLP-based content assessment including semantic relevance, readability, and intent alignment",
  "entity-coverage": "Knowledge graph optimization for better entity recognition and contextual relationships",
  "semantic-structure": "Schema markup validation and semantic HTML structure for search engine understanding",
  "technical-health": "Core Web Vitals, crawlability, indexability, and technical SEO foundation analysis"
};

export async function CoreModulesSection() {
  const auditData = await loadAuditData();
  const modules = Object.values(auditData);

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <SectionTitle
          pill="Platform Overview"
          title="The 7 Core AI-SEO Modules"
          description="Powered by machine learning and NLP, each module provides deep technical insights into your brand's search performance and AI-first optimization potential."
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {modules.map((module: AuditModule) => (
            <div key={module.id} className="bg-card p-6 rounded-lg shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold mb-2 capitalize">{module.id.replace(/-/g, ' ')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {moduleDescriptions[module.id] || module.insights?.[0] || "AI-driven analysis module"}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-gray-500">Score</span>
                  <span className="text-2xl font-bold text-primary">{module.score}</span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${module.score}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
