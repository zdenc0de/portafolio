"use client";

import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { socialNetworks } from "@/data";

// Datos de ejemplo para la navegación. Mantenlos en tu archivo data/index.ts
const navigationLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  // Definimos los estilos de sombra de texto para reutilizarlos y mantener el código limpio
  const textShadowStyle = {
    stroke: '2px 2px 0px #F5741C, -2px -2px 0px #F5741C, 2px -2px 0px #F5741C, -2px 2px 0px #F5741C',
    dropShadow: '4px 4px 0px #000',
  };

  return (
    <MotionTransition
      position="bottom"
      // Quitamos el padding horizontal de aquí para manejarlo adentro
      className="absolute top-5 z-40 inline-block w-full"
    >
      <header className="pointer-events-auto">
        {/* Contenedor con glassmorphism y padding responsivo */}
        <div className="container mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/5 bg-gray-800/20 p-3 px-4 backdrop-blur-sm md:p-4">
          <Link href="/">
            <h1
              className="my-3 text-4xl font-bold transition-all duration-300 hover:scale-110 hover:rotate-[-2deg] md:text-5xl"
              style={{ fontFamily: 'var(--font-luckiest-guy)' }}
            >
              <span
                className="text-white"
                style={{ textShadow: `${textShadowStyle.stroke}, ${textShadowStyle.dropShadow}` }}
              >
                Zden
              </span>
              <span
                className="text-black"
                style={{ textShadow: textShadowStyle.stroke }}
              >
                code
              </span>
            </h1>
          </Link>

          {/* Navegación para pantallas grandes */}
          <nav className="hidden items-center gap-6 text-lg md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium transition-all duration-300 hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Redes sociales con espaciado responsivo */}
          <div className="flex items-center justify-center gap-4 md:gap-7">
            {socialNetworks.map((item) => (
              <Link
                key={item.id}
                href={item.src}
                target="_blank"
                className="text-2xl transition-all duration-300 hover:text-secondary"
              >
                {item.logo}
              </Link>
            ))}
          </div>

          {/* Aquí podrías agregar un botón de menú hamburguesa para móviles */}
          {/* <div className="md:hidden"> ... </div> */}
        </div>
      </header>
    </MotionTransition>
  );
};