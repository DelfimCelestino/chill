"use client"

import { cn } from "@/lib/utils";
import { Flame, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";



const SideBar = () => {
     const currentRoute = usePathname()

     const iconStyle = "w-6 h-6 "
     const links = [
          {
               href: "/home",
               icon: <HomeIcon className={iconStyle} />
          },
          {
               href: "/hot",
               icon: <Flame className={iconStyle} />
          },
     ]

     return (
          <aside className="hidden lg:flex w-16 flex-col items-center py-8  gap-4 fixed top-0 left-0 h-full z-30 bg-black dark:bg-secondary text-zinc-50">
               {links.map((link) => (
                    <Link className={cn("p-2 rounded", link.href === currentRoute && "border-b")} href={link.href} key={link.href}>
                         {link.icon}
                    </Link>
               ))}
          </aside>
     );
};

export default SideBar;