import Link from "next/link";
import {
  Home,
  Bell,
  FolderGit2,
  Orbit,
  BracketsIcon as Bridge,
  Code2,
  Users,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  return (
    <div
      className={cn(
        "relative border-r bg-black border-gray-800 transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-64",
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-6 z-10 rounded-full border border-gray-800 bg-black"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform",
            isCollapsed && "rotate-180",
          )}
        />
      </Button>

      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://excalidraw.com/og-image-3.png"
            alt="Arbitrum Logo"
            width={32}
            height={32}
          />
          {!isCollapsed && <span className="font-bold text-xl">ZIMMER</span>}
        </Link>
      </div>

      <nav className="space-y-1 px-2">
        <NavItem href="/" icon={Home} collapsed={isCollapsed}>
          Home
        </NavItem>
        <NavItem href="/notice" icon={Bell} collapsed={isCollapsed}>
          Notices
        </NavItem>
        <NavItem href="/projects" icon={FolderGit2} collapsed={isCollapsed}>
          Projects
        </NavItem>
        <NavItem href="/bridge" icon={Bridge} collapsed={isCollapsed}>
          Bridge
        </NavItem>
        <NavItem href="/developers" icon={Code2} collapsed={isCollapsed}>
          Developers
        </NavItem>
        <NavItem href="/community" icon={Users} collapsed={isCollapsed}>
          Community
        </NavItem>
        <NavItem href="/help" icon={HelpCircle} collapsed={isCollapsed}>
          Get Help
        </NavItem>
      </nav>

      {!isCollapsed && (
        <div className="absolute bottom-8 px-6 text-sm text-gray-400">
          <div>Built with love by Offchain Labs,</div>
          <div>builders of Arbitrum technology.</div>
        </div>
      )}
    </div>
  );
}

function NavItem({
  href,
  icon: Icon,
  children,
  collapsed,
}: {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  collapsed: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors",
        collapsed && "justify-center",
      )}
      title={collapsed ? String(children) : undefined}
    >
      <Icon className="h-5 w-5" />
      {!collapsed && children}
    </Link>
  );
}
