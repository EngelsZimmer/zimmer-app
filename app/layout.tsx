"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { SearchHeader } from "@/components/search-header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex h-screen bg-black">
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
          />
          <main className="flex-1 overflow-auto">
            <SearchHeader />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
