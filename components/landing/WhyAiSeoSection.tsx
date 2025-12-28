import { SectionTitle } from "../SectionTitle";

export function WhyAiSeoSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle
          pill="AI-SEO vs Traditional SEO"
          title="Why AI-SEO is fundamentally different"
          description="Traditional SEO relies on manual analysis and static rules. AI-SEO, powered by Kasparro, leverages advanced machine learning to adapt, predict, and optimize in real-time."
          className="text-center"
        />
        <div className="grid gap-8 lg:grid-cols-2 mt-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Predictive Optimization</h3>
            <p className="text-gray-500">
              AI-SEO doesn't just react to current trends; it predicts future search patterns and algorithm changes,
              allowing for proactive optimization strategies.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Real-time Adaptation</h3>
            <p className="text-gray-500">
              With continuous learning, Kasparro's AI-SEO constantly refines its understanding of search engine
              behavior and user intent, providing dynamic recommendations.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Holistic Brand Intelligence</h3>
            <p className="text-gray-500">
              Beyond keywords, AI-SEO understands brand sentiment, entity relationships, and overall digital presence
              to build comprehensive authority.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Automated Insights & Actions</h3>
            <p className="text-gray-500">
              Kasparro automates the process of extracting complex insights and even suggests actionable steps,
              reducing manual workload significantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
