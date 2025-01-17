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
    <div>
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
          <Input
            placeholder="Search projects, chains, and more"
            className="pl-10 bg-white border-neutral-200 focus:border-emerald-600 focus:ring-emerald-600"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 text-neutral-600 hover:bg-neutral-100"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <Link href="/login">
              <DropdownMenuItem>로그인</DropdownMenuItem>
            </Link>
            <Link href="/signup">
              <DropdownMenuItem>회원가입</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
