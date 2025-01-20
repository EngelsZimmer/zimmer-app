import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          <span className="sr-only">알림</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuItem>
          <div className="flex flex-col">
            <span className="font-medium">New update available</span>
            <span className="text-sm text-neutral-500">
              Arbitrum One v2.0 is now live
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-col">
            <span className="font-medium">Transaction confirmed</span>
            <span className="text-sm text-neutral-500">
              Your last transaction was successful
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="text-sm text-emerald-600">모든 알림 보기</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
