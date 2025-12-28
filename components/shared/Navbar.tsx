"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle"; // Import the ThemeToggle component

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/platform" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/app/dashboard" },
    { name: "Audit", href: "/app/audit" },
    { name: "Architecture", href: "/app/architecture" },
  ];

  return (
    <nav className="bg-background border-b px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kasparro</span>
        </Link>
        <div className="flex items-center lg:order-2 space-x-2"> {/* Added space-x-2 for spacing */}
          <ThemeToggle /> {/* Render the ThemeToggle here */}
          <Button asChild>
            <Link href="/app/audit">Run AI-SEO Audit</Link>
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
                    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",
                    pathname === item.href ? "text-primary-600 dark:text-primary-500" : ""
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
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
