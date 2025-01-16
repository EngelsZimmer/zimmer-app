import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 space-y-12">
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900 to-purple-600 p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Ethereum&apos;s Leading Ecosystem
          </h1>
          <p className="text-lg text-gray-200">
            Step into the Arbitrum Portal and discover one of the 900+
            applications built on Arbitrum
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://sjc.microlink.io/2TXDm7-DAdxbcDog6PS086r2c2dZpeSl8809stiZ9p0f91RxyVy2qxgWWO66RF11qkJsIBNrfCkhtBCYB_Ga0w.jpeg')] bg-repeat" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Trending Projects</h2>
        <p className="text-gray-400 mb-6">
          Popular things users are doing and talking about on Arbitrum
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Ecosystem Essentials</h2>
        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentials.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
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

const categories = [
  "DeFi",
  "AI & DeFi",
  "Gaming",
  "NFTs",
  "Bridges and On-ramps",
  "Infra & Tools",
];

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
