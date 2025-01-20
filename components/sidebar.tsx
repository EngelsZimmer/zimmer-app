import Link from "next/link";
import {
  Home,
  Compass,
  Users,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavItem from "@/components/ui/nav-item";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const [isSubscriptionsExpanded, setIsSubscriptionsExpanded] = useState(false);
  return (
    <div
      className={cn(
        "relative border-r border-gray-800 transition-all duration-300",
        isCollapsed ? "w-[60px]" : "w-56",
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-2.5 top-10 z-10 h-6 w-6 rounded-full border border-muted-foreground-200 bg-gray-800 hover:bg-neutral-100"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform",
            isCollapsed && "rotate-180",
          )}
        />
      </Button>

      <div className="p-4">
        <Link href="/" className="flex items-center gap-2">
          {!isCollapsed && <h1 className="font-bold text-xl">ZIMMER</h1>}
        </Link>
      </div>

      <nav className="space-y-1 px-3 py-6">
        <NavItem href="/" icon={Home} collapsed={isCollapsed}>
          홈
        </NavItem>
        <NavItem href="/explore" icon={Compass} collapsed={isCollapsed}>
          탐색
        </NavItem>

        {!isCollapsed && (
          <div className="pt-2">
            <div className="border-t border-neutral-600 pb-2"></div>
          </div>
        )}
        {!isCollapsed && (
          <>
            <div className="px-3 pt-2">참여</div>
            <NavItem
              href="/subscriptions/1"
              icon={Users}
              collapsed={isCollapsed}
            >
              참여 목록
            </NavItem>
            <NavItem
              href="/subscriptions/1"
              icon={Users}
              collapsed={isCollapsed}
            >
              참여 목록
            </NavItem>
            <NavItem
              href="/subscriptions/1"
              icon={Users}
              collapsed={isCollapsed}
            >
              참여 목록
            </NavItem>
            <NavItem
              href="/subscriptions/1"
              icon={Users}
              collapsed={isCollapsed}
            >
              참여 목록
            </NavItem>
            <NavItem
              href="/subscriptions/1"
              icon={Users}
              collapsed={isCollapsed}
            >
              참여 목록
            </NavItem>
            {isSubscriptionsExpanded && (
              <>
                <NavItem
                  href="/subscriptions/1"
                  icon={Users}
                  collapsed={isCollapsed}
                >
                  참여 목록
                </NavItem>
                <NavItem
                  href="/subscriptions/1"
                  icon={Users}
                  collapsed={isCollapsed}
                >
                  참여 목록
                </NavItem>
                <NavItem
                  href="/subscriptions/1"
                  icon={Users}
                  collapsed={isCollapsed}
                >
                  참여 목록
                </NavItem>
              </>
            )}
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-sm hover:bg-primary"
              onClick={() =>
                setIsSubscriptionsExpanded(!isSubscriptionsExpanded)
              }
            >
              {isSubscriptionsExpanded ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  간략히 보기
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />더 보기
                </>
              )}
            </Button>
          </>
        )}
        {!isCollapsed && (
          <div className="pt-2">
            <div className="border-t border-neutral-600 pb-2"></div>
          </div>
        )}

        <NavItem href="/settings" icon={Settings} collapsed={isCollapsed}>
          설정
        </NavItem>
        <NavItem href="/help" icon={HelpCircle} collapsed={isCollapsed}>
          고객센터
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
