import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavItem({
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
        "flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-lg transition-colors text-sm",
        collapsed && "justify-center",
      )}
      title={collapsed ? String(children) : undefined}
    >
      <Icon className="h-5 w-5" />
      {!collapsed && children}
    </Link>
  );
}
