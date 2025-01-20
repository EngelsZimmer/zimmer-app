import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  logo,
}: {
  title: string;
  description: string;
  logo: string;
}) {
  return (
    <Card className="border-neutral-600 hover:border-neutral-300 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo || "/placeholder.svg"}
              alt={title}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-base">{title}</h3>
              <p className="text-xs mt-1">{description}</p>
            </div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-neutral-400 hover:text-neutral-600"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
