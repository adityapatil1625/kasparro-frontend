import { SectionTitle } from "@/components/SectionTitle";
import { Footer } from "@/components/shared/Footer";
import { loadArchitectureModules } from "@/lib/data";
import { ArchitectureModule } from "@/types";
import { Card } from "@/components/Card";

export default async function ArchitecturePage() {
  const architectureModules: ArchitectureModule[] = await loadArchitectureModules();

  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          pill="System Architecture"
          title="Understanding Kasparro's AI Engine"
          description="A high-level overview of the core components that power our AI-native platform."
          className="text-center mb-12"
        />

        <div className="space-y-12">
          {architectureModules.map((module, index) => (
            <div key={module.name} className="flex flex-col items-center">
              <Card title={module.name} content={<p className="text-gray-500">{module.description}</p>} />
              {index < architectureModules.length - 1 && (
                <ArrowDownIcon className="h-10 w-10 text-gray-400 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 5v14" />
      <path d="M19 12l-7 7-7-7" />
    </svg>
  );
}