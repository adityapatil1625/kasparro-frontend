import { SectionTitle } from "../SectionTitle";

export function HowItWorksSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle
          pill="Our Process"
          title="How Kasparro Works"
          description="Experience a seamless journey from data ingestion to actionable AI-driven insights."
          className="text-center"
        />
        <div className="relative flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8 mt-12">
          {/* Step 1: Data Ingestion */}
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm max-w-sm">
            <h3 className="text-xl font-bold mb-2">1. Data Ingestion</h3>
            <p className="text-gray-500">
              Kasparro securely collects vast amounts of relevant data from various digital touchpoints.
            </p>
          </div>

          {/* Arrow / Connector */}
          <ArrowIcon className="h-10 w-10 text-gray-400 rotate-90 lg:rotate-0" />

          {/* Step 2: AI Processing */}
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm max-w-sm">
            <h3 className="text-xl font-bold mb-2">2. AI Processing</h3>
            <p className="text-gray-500">
              Our proprietary AI models analyze the data, identifying patterns, opportunities, and risks.
            </p>
          </div>

          {/* Arrow / Connector */}
          <ArrowIcon className="h-10 w-10 text-gray-400 rotate-90 lg:rotate-0" />

          {/* Step 3: Insight Generation */}
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm max-w-sm">
            <h3 className="text-xl font-bold mb-2">3. Insight Generation</h3>
            <p className="text-gray-500">
              Actionable insights, scores, and recommendations are generated in real-time for your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17l9.2-9.2M17 17V8M17 8H8" />
    </svg>
  );
}
