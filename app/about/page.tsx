import { SectionTitle } from "@/components/SectionTitle";
import { Footer } from "@/components/shared/Footer";

export default function AboutPage() {
  return (
    <main>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <SectionTitle
            pill="About Us"
            title="Pioneering the AI-First Search Era"
            description="Built by engineers and AI researchers transforming how brands compete in the age of generative search."
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionTitle
            pill="Our Purpose"
            title="Mission: AI-Native Brand Authority for the Generative Era"
            description="Search is changing. ChatGPT, Gemini, and Perplexity don't follow traditional SEO rules. We're building the AI-SEO platform for this new reality."
            className="text-center"
          />
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mt-8 space-y-4">
            <p className="text-lg">
              Traditional SEO optimizes for search engines. AI-SEO optimizes for intelligence. Kasparro uses advanced machine learning, natural language processing, and semantic analysis to understand how AI models perceive, rank, and recommend content.
            </p>
            <p className="text-lg">
              We've built what marketing teams need: a platform that bridges the gap between brand strategy and AI visibility. Our neural networks analyze over 200 authority signals, predict ranking shifts 30 days ahead, and deliver recommendations that actually move the needle.
            </p>
            <p className="text-lg font-semibold text-primary">
              Kasparro doesn't just track performance—it transforms it.
            </p>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionTitle
            pill="Our Approach"
            title="Built on Three Principles"
            description="Engineering rigor, data precision, and human insight working in harmony."
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-bold mb-3">AI-First Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every feature is built with machine learning at its core. We use transformers (BERT, GPT), graph neural networks for entity relationships, and predictive models for trend forecasting.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-bold mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                No guessing. Our platform processes millions of data points across SERP snapshots, backlink profiles, content semantics, and user behavior to surface true insights.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-bold mb-3">Actionable Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Complex algorithms mean nothing without clarity. We translate AI insights into concrete, prioritized actions that marketing teams can execute today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for AI-First Search */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionTitle
            pill="Future Vision"
            title="The Intelligent Search Paradigm Shift"
            description="We're witnessing the birth of a new era where AI models are the primary discovery mechanism."
            className="text-center"
          />
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mt-8 space-y-4">
            <p className="text-lg">
              ChatGPT, Claude, Gemini, and Perplexity are not just search tools—they're a fundamental shift in how information is discovered. These systems use advanced neural language models trained on billions of parameters to understand context, intent, and relevance in ways traditional search engines never could.
            </p>
            <p className="text-lg">
              Traditional SEO optimized for keyword matching and link authority. AI-SEO optimizes for semantic understanding, entity relationships, and knowledge graph integration. It's not just about appearing in results—it's about being understood, trusted, and recommended by intelligent systems.
            </p>
            <div className="bg-background p-6 rounded-lg my-6 border border-border">
              <h4 className="font-semibold mb-3 text-foreground">How AI Models Evaluate Content:</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ <span className="font-medium">Semantic Coherence:</span> Do concepts flow logically across the content?</li>
                <li>✓ <span className="font-medium">Entity Authority:</span> Are the named entities (people, companies, topics) authoritative and well-connected?</li>
                <li>✓ <span className="font-medium">Information Density:</span> Does the content provide comprehensive, non-redundant information?</li>
                <li>✓ <span className="font-medium">Topical Depth:</span> Does it demonstrate expert-level understanding?</li>
                <li>✓ <span className="font-medium">Trust Signals:</span> Are claims supported by evidence and attributed to credible sources?</li>
              </ul>
            </div>
            <p className="text-lg">
              Kasparro's vision is to empower every marketing team to compete in this new paradigm. We're building the intelligence layer that helps brands understand how AI sees them, predict what will resonate with intelligent systems, and maintain authority in an era where discovery increasingly flows through generative AI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join the AI-First Revolution</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The future of search is here. Let Kasparro help you understand it, compete in it, and thrive within it.
            </p>
            <a href="/platform" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Explore Kasparro Platform
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}