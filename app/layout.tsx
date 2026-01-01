import "./globals.css"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Kasparro: AI-native SEO & Brand Intelligence",
  description: "AI-native SEO & Brand Intelligence platform for the AI-first search era.",
  keywords: "AI SEO, brand intelligence, search engine optimization, AI-first search, EEAT",
  authors: [{ name: "Kasparro" }],
  openGraph: {
    title: "Kasparro: AI-native SEO & Brand Intelligence",
    description: "Built for the AI-first search era",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <Navbar />
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
