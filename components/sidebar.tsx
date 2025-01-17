import Link from "next/link";
import {
  Home,
  FolderGit2,
  Bell,
  Users,
  HelpCircle,
  ChevronLeft,
  LucideIcon,
} from "lucide-react";
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
        "relative border-r bg-white border-neutral-200 transition-all duration-300",
        isCollapsed ? "w-[60px]" : "w-48",
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-2.5 top-10 z-10 h-6 w-6 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform text-neutral-600",
            isCollapsed && "rotate-180",
          )}
        />
      </Button>

      <div className="p-4">
        <Link href="/" className="flex items-center gap-2">
          {!isCollapsed && (
            <span className="font-bold text-xl text-neutral-800">ZIMMER</span>
          )}
        </Link>
      </div>

      <nav className="space-y-1 px-2">
        <NavItem href="/" icon={Home} collapsed={isCollapsed}>
          Home
        </NavItem>
        <NavItem href="/notice" icon={Bell} collapsed={isCollapsed}>
          Notice
        </NavItem>
        <NavItem href="/projects" icon={FolderGit2} collapsed={isCollapsed}>
          Projects
        </NavItem>
        <NavItem href="/community" icon={Users} collapsed={isCollapsed}>
          Community
        </NavItem>
        <NavItem href="/help" icon={HelpCircle} collapsed={isCollapsed}>
          Get Help
        </NavItem>
      </nav>

      {!isCollapsed && (
        <div className="absolute bottom-8 px-6 text-sm text-neutral-500">
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
        "flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors",
        collapsed && "justify-center",
      )}
      title={collapsed ? String(children) : undefined}
    >
      <Icon className="h-5 w-5" />
      {!collapsed && children}
    </Link>
  );
}
