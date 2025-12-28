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
            description="Our journey, beliefs, and vision for the future of digital intelligence."
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionTitle
            pill="Our Purpose"
            title="Mission: Empowering Brands with AI-Native Intelligence"
            description="We believe in a future where brands don't just react to search, but proactively shape it."
            className="text-center"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-600 mt-8">
            <p className="text-lg mb-4">
              Our mission at Kasparro is to equip businesses with the cutting-edge AI tools needed to thrive in an
              increasingly intelligent and dynamic search landscape. We transform complex data into clear,
              actionable strategies, enabling unparalleled online visibility and brand authority.
            </p>
            <p className="text-lg">
              We are committed to continuous innovation, ensuring our clients always stay one step ahead in the
              ever-evolving digital ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionTitle
            pill="Our Approach"
            title="Product Philosophy: Clarity, Actionability, Adaptability"
            description="Building intelligent tools that are powerful, yet intuitive for every user."
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-2">Clarity</h3>
              <p className="text-gray-500">
                Complex AI outputs are distilled into easily understandable insights and scores.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-2">Actionability</h3>
              <p className="text-gray-500">
                Every insight comes with clear, concise recommendations for immediate implementation.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-2">Adaptability</h3>
              <p className="text-gray-500">
                Our platform evolves with search engine algorithms and market trends, ensuring continuous relevance.
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
            title="Our Vision for the AI-First Search Landscape"
            description="Imagining a symbiotic relationship between AI and human creativity in digital marketing."
            className="text-center"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-600 mt-8">
            <p className="text-lg mb-4">
              We envision a future where search engines understand context, intent, and nuance at a human-like level,
              and where brands can communicate their value effectively to intelligent algorithms and discerning users alike.
            </p>
            <p className="text-lg">
              Kasparro is building the bridge to this future, transforming SEO from a technical chore into a strategic,
              AI-augmented advantage.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}