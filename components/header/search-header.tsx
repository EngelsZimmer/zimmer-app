import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Notification from "@/components/header/notification";
import UserMenu from "@/components/header/user-menu";

export function SearchHeader() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-2 h-5 w-5 text-neutral-400" />
        <Input
          placeholder="Search projects, chains, and more"
          className="pl-10 border-neutral-600"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Notification />
        <UserMenu />
      </div>
    </div>
  );
}
