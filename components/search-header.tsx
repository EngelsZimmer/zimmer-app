import { Search, User } from "lucide-react";
import Link from "next/link";
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
    <div className="px-6 py-3 flex items-center justify-between">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-2 h-5 w-5 text-neutral-400" />
        <Input
          placeholder="Search projects, chains, and more"
          className="pl-10 border-neutral-600"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="ml-2 hover:bg-primary"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <Link href="/login">
            <DropdownMenuItem>로그인</DropdownMenuItem>
          </Link>
          <Link href="/signup">
            <DropdownMenuItem>회원가입</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
