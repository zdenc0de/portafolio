"use client";

import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { socialNetworks } from "@/data";

export const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="pointer-events-none absolute top-5 z-40 inline-block w-full md:top-10 px-20"
    >
      <header className="pointer-events-auto">
        <div className="mx-auto flex max-w-6xl justify-between px-4 md:flex">
          <Link href="/">
            <h1 className="my-3 text-center text-4xl font-bold md:text-left">
              Zden<span className="text-secondary">code</span>
            </h1>
          </Link>

          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map((item) => (
              <Link
                key={item.id}
                href={item.src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {item.logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};
