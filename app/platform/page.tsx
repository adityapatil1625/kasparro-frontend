import { SectionTitle } from "@/components/SectionTitle";
import { Footer } from "@/components/shared/Footer";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection"; // Reusing this for pipeline flow

export default function PlatformPage() {
  return (
    <main>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <SectionTitle
            pill="Kasparro Platform"
            title="A Deep Dive into Our AI-Powered Engine"
            description="Understand the technology that drives unparalleled SEO and brand intelligence."
          />
        </div>
      </section>

      {/* Audit Pipeline Flow - Reusing HowItWorksSection */}
      <HowItWorksSection />

      {/* What Data Kasparro Consumes */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionTitle
            pill="Data Ingestion"
            title="The Breadth of Data We Analyze"
            description="Kasparro processes a diverse range of data points to build a complete picture of your digital ecosystem."
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Web Crawl Data</h3>
              <p className="text-gray-500">Comprehensive analysis of website structure, content, and technical health.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Search Engine Results Pages (SERP)</h3>
              <p className="text-gray-500">Real-time competitive landscape and keyword performance data.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Audience Demographics & Intent</h3>
              <p className="text-gray-500">Understanding user behavior and search motivations.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Social Media & Brand Mentions</h3>
              <p className="text-gray-500">Sentiment analysis and brand reputation monitoring.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Industry Trends & News</h3>
              <p className="text-gray-500">Keeping abreast of market shifts and emerging topics.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Content Performance Metrics</h3>
              <p className="text-gray-500">Analyzing engagement, conversions, and impact of existing content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Outputs Brands Receive */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionTitle
            pill="Actionable Outputs"
            title="Tangible Results for Your Brand"
            description="From high-level scores to granular recommendations, Kasparro delivers what you need to succeed."
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">AI Visibility Scores</h3>
              <p className="text-gray-500">Quantifiable metrics on your brand's overall search presence.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Trust & EEAT Analysis</h3>
              <p className="text-gray-500">In-depth evaluation of your expertise, authoritativeness, and trustworthiness.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Content Strategy Recommendations</h3>
              <p className="text-gray-500">AI-driven suggestions for content creation, optimization, and gap analysis.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Technical SEO Issue Detection</h3>
              <p className="text-gray-500">Proactive identification and guidance for resolving website technical issues.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Competitive Landscape Analysis</h3>
              <p className="text-gray-500">Insights into competitor strategies and market opportunities.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Brand Reputation Monitoring</h3>
              <p className="text-gray-500">Tracking brand mentions and public sentiment to protect your image.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Kasparro Differs from Traditional SEO Tools */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionTitle
            pill="Our Edge"
            title="Beyond Traditional SEO Tools"
            description="Kasparro's AI-native approach provides a distinct advantage over outdated methodologies."
            className="text-center"
          />
          <div className="grid gap-8 lg:grid-cols-2 mt-12">
            <div className="flex flex-col items-start space-y-4">
              <h3 className="text-xl font-bold">Proactive & Predictive</h3>
              <p className="text-gray-500">
                Unlike reactive traditional tools, Kasparro's AI anticipates market shifts and algorithm updates,
                guiding you to stay ahead.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <h3 className="text-xl font-bold">Holistic & Integrated</h3>
              <p className="text-gray-500">
                We combine SEO with brand intelligence, offering a unified view that traditional tools,
                focused solely on keywords and rankings, cannot provide.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <h3 className="text-xl font-bold">Continuous Learning & Adaptation</h3>
              <p className="text-gray-500">
                Our AI models continuously learn and evolve, ensuring your strategies remain cutting-edge
                in a constantly changing digital landscape.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <h3 className="text-xl font-bold">Actionable Insights, Not Just Data</h3>
              <p className="text-gray-500">
                Kasparro translates complex data into clear, actionable recommendations,
                eliminating the need for extensive manual data interpretation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}