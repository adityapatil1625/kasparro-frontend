import { SectionTitle } from "../SectionTitle";

export function WhyAiSeoSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle
          pill="AI-SEO vs Traditional SEO"
          title="Why AI-SEO is fundamentally different"
          description="Traditional SEO relies on manual analysis and static rules. AI-SEO, powered by Kasparro, leverages neural networks, NLP, and semantic understanding to adapt, predict, and optimize for the AI-first search era."
          className="text-center"
        />
        <div className="grid gap-8 lg:grid-cols-2 mt-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Predictive ML Models</h3>
            <p className="text-gray-500">
              Deep learning models analyze SERP shifts, algorithmic patterns, and user behavior to predict search intent evolution. Kasparro's models achieve 92%+ accuracy in forecasting ranking changes 30 days ahead.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Real-time Semantic Understanding</h3>
            <p className="text-gray-500">
              Using transformer-based NLP (BERT, GPT embeddings), Kasparro understands content at the semantic level—beyond keywords. It captures nuance, entity relationships, and topical authority graphs in real-time.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">EEAT & Entity Signals</h3>
            <p className="text-gray-500">
              AI analyzes 200+ authority signals including entity mentions, backlink semantics, author expertise signals, and brand trust indicators. This builds true E-E-A-T authority, not just link count.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">AI Search Optimization</h3>
            <p className="text-gray-500">
              Optimized specifically for AI models (ChatGPT, Gemini, Perplexity, Claude). Kasparro ensures your brand appears in AI-generated search results through semantic strength and contextual relevance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
