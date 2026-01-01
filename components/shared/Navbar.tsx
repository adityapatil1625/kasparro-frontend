"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", label: "Home page" },
    { name: "Platform", href: "/platform", label: "Platform overview" },
    { name: "About", href: "/about", label: "About Kasparro" },
    { name: "Dashboard", href: "/app/dashboard", label: "Brand dashboard" },
    { name: "Audit", href: "/app/audit", label: "Run audit" },
    { name: "Architecture", href: "/app/architecture", label: "System architecture" },
  ];

  return (
    <nav className="bg-background border-b px-4 lg:px-6 py-2.5" role="navigation" aria-label="Main navigation">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/" className="flex items-center" aria-label="Kasparro home">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kasparro</span>
        </Link>
        <div className="flex items-center lg:order-2 space-x-2">
          <ThemeToggle />
          <Button asChild>
            <Link href="/app/audit" aria-label="Run AI-SEO Audit">
              Run AI-SEO Audit
            </Link>
          </Button>
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-colors",
                    pathname === item.href ? "text-primary-600 dark:text-primary-500 font-semibold" : ""
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                  title={item.label}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
