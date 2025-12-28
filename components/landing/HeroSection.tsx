import Link from "next/link";
import { SectionTitle } from "../SectionTitle"; // Assuming SectionTitle is a reusable component

export function HeroSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 xl:py-48 dark:bg-gradient-to-r dark:from-secondary dark:to-background bg-white flex items-center justify-center">
      <div className="container px-4 md:px-6 text-center z-10">
        <div className="space-y-6 dark:text-white">
          <SectionTitle
            pill="AI-Native SEO"
            title="Kasparro: AI-native SEO & Brand Intelligence"
            description="Built for the AI-first search era, Kasparro empowers brands with unparalleled insights and optimization."
            className="dark:text-white"
          />
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              href="/app/audit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Run AI-SEO Audit →
            </Link>
          </div>
        </div>
      </div>
      {/* Optional: Add some subtle background animation with framer-motion here later */}
    </section>
  );
}
