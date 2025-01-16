import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SearchHeader() {
  return (
    <div className="border-b border-gray-800 p-4 flex items-center justify-between">
      <div className="relative max-w-md w-full">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search projects, chains, and more"
          className="pl-10 bg-transparent border-gray-800"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-2">
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Sign In</DropdownMenuItem>
          <DropdownMenuItem>Create Account</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
