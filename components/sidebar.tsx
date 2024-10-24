"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  PiIcon,
  Radical,
  X,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiSquare } from "lucide-react";
import { FreeCounter } from "@/components/free-counter";

const monsterrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation (DISABLED)",
    icon: VideoIcon,
    href: "/dashboard",
    color: "text-orange-700",
  },
  {
    label: "Music Generation (DISABLED)",
    icon: Music,
    href: "/dashboard",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Code Fixer",
    icon: X,
    href: "/error",
    color: "text-red-700",
  },
  {
    label: "Math Helper",
    icon: Radical,
    href: "/math",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-6">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", monsterrat.className)}>
            Fye-AI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div >
        <div className="mt-1.5">
           <FreeCounter
        isPro={isPro}
      apiLimitCount={apiLimitCount}
      />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
