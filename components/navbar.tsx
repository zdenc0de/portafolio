"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";

export const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="pointer-events-none fixed bottom-10 z-40 flex h-max w-full flex-col items-center justify-center"
    >
      <nav className="pointer-events-auto">
        <div className="flex items-center justify-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer rounded-full px-3 py-2 transition duration-150 hover:bg-secondary ${
                router === item.link && "bg-secondary"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

