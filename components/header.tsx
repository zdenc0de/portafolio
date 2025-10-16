"use client";

import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { socialNetworks } from "@/data";

export const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute top-5 z-40 inline-block w-full px-4 md:top-10 md:px-20"
    >
      <header className="pointer-events-auto">
        <div className="container mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/">
            
            <h1 
              className="my-3 text-6xl font-bold md:text-5xl transition-all duration-300 hover:scale-110 hover:rotate-[-2deg]"
              // Apply the custom font via the CSS variable we created
              style={{ fontFamily: 'var(--font-luckiest-guy)' }}
            >
              <span
                className="text-white"
                // This is the trick: we use multiple text shadows to create a stroke and a drop shadow
                style={{
                  textShadow: 
                    '2px 2px 0px #F5741C, -2px -2px 0px #F5741C, 2px -2px 0px #F5741C, -2px 2px 0px #F5741C, 4px 4px 0px #000'
                }}
              >
                Zden
              </span>
              <span 
                className="text-black"
                style={{
                  textShadow: 
                    '2px 2px 0px #F5741C, -2px -2px 0px #F5741C, 2px -2px 0px #F5741C, -2px 2px 0px #F5741C, 0 0 0px #000'
                }}
              >
                code
              </span>
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