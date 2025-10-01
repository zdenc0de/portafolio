import Link from "next/link";

import { MotionTransition } from "./transition-component";

import { socialNetworks } from "@/data";

export const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link 
          href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Zden
              <span className="text-secondary">
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
                className="transition-all duration-300 hover:text-secondary">
                    {item.logo}
                </Link>
            ))}

          </div>
        </div>
      </header>
    </MotionTransition>
  );
};
