import "./globals.css"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider"; // Import the ThemeProvider

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Kasparro: AI-native SEO & Brand Intelligence",
  description: "AI-native SEO & Brand Intelligence platform for the AI-first search era.",
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
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
