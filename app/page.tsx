"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import { SearchHeader } from "@/components/search-header";
import { Bookmark } from "lucide-react";

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />
      <main className="flex-1 overflow-auto">
        <SearchHeader />
        <div className="flex-grow max-w-5xl space-y-12 mx-auto p-4">
          <section className="relative overflow-hidden rounded-xl w-full bg-gradient-to-r from-emerald-700 to-emerald-500 p-8 text-white">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">
                Ethereum&apos;s Leading Ecosystem
              </h1>
              <p className="text-lg text-emerald-50">
                Step into the Arbitrum Portal and discover one of the 900+
                applications built on Arbitrum
              </p>
            </div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('https://sjc.microlink.io/2TXDm7-DAdxbcDog6PS086r2c2dZpeSl8809stiZ9p0f91RxyVy2qxgWWO66RF11qkJsIBNrfCkhtBCYB_Ga0w.jpeg')] bg-repeat" />
            </div>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-bold mb-2 text-neutral-800">
              Trending Projects
            </h2>
            <p className="text-neutral-500 mb-6 pb-2 border-beige-100 border-b-2">
              Popular things users are doing and talking about on Arbitrum
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-bold mb-2 text-neutral-800">
              Ecosystem Essentials
            </h2>
            <p className="text-neutral-500 mb-6 pb-2 border-beige-100 border-b-2">
              Popular things users are doing and talking about on Arbitrum
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {essentials.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  logo,
}: {
  title: string;
  description: string;
  logo: string;
}) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo || "/placeholder.svg"}
              alt={title}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          </div>
          <Button size="icon" variant="ghost">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

const projects = [
  {
    id: 1,
    title: "Camelot",
    description:
      "Camelot DEX is an innovative and highly flexible DEX built to support the Arbitrum ecosystem.",
    logo: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Legion",
    description: "Merit based, crypto fundraising platform.",
    logo: "/placeholder.svg",
  },
  {
    id: 3,
    title: "AiSweatShop",
    description: "AiSweatShop belongs to the AI category.",
    logo: "/placeholder.svg",
  },
];

const essentials = [
  {
    id: 1,
    title: "Dolomite",
    description:
      "Dolomite is a decentralized money market and DEX on Arbitrum. It allows users to lend, borrow, spot trade.",
    logo: "/placeholder.svg",
  },
  {
    id: 2,
    title: "GMX",
    description:
      "GMX: the on-chain Decentralised Perpetual Exchange with deep liquidity and low fees. Trade to earn.",
    logo: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Ostium",
    description:
      "Trade any strategy on any asset: from indices and currencies to metals, energy, and crypto.",
    logo: "/placeholder.svg",
  },
];
