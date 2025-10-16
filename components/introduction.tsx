"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Introduction = () => {
  // Intentaremos mostrar /profile.jpg; si no existe, caemos a un bloque visual elegante
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Contenedor */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:min-h-[72vh] md:grid-cols-2 md:py-24"
        >
        {/* ===== Columna de texto ===== */}
        <div className="max-w-xl">
          {/* Chip de contexto */}
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text'-white/80' backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
            Looking for intership opportunities
          </span>

          {/* Título + animación */}
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Hi!<span className="text-secondary"></span>, I'm Zdenko
            <TypeAnimation
              sequence={[
                " Web design & development",
                1000,
                " AI enthusiast",
                1000,
                " Always a learner",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="mt-3 block text-2xl font-semibold text-white/90 md:text-3xl"
            />
          </h1>

          <p className="mt-5 text-pretty text-white/80 justify-center text-align-center">
            I'm a Computer Engineering student who builds at the intersection of
            AI and full-stack development. I learn fast and
            ship consistently—turning ideas into working products through
            curiosity and disciplined work. Whether it's mastering a new
            framework, prototyping research ideas, or building production-ready
            apps, I bring a builder's mindset and thrive on real challenges.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/portfolio"
              className="rounded-xl bg-secondary px-4 py-2 font-medium text-black transition hover:bg-secondary/90"
              aria-label="portfolio projects"
            >
              Projects
            </Link>

            <Link
              href="/contacto"
              className="rounded-xl border border-secondary px-4 py-2 font-medium text-secondary transition hover:bg-secondary/10"
              aria-label="Ir a la página de contacto"
            >
              Contact
            </Link>

            <Link
              href="/cv.pdf"
              className="rounded-xl border border-white/15 px-4 py-2 font-medium text-white/90 transition hover:bg-white/5"
              aria-label="Descargar CV en PDF"
            >
              Download CV
            </Link>
          </div>

          {/* Badges rápidos */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
              Toluca, MX
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
              JS/TS, CSS, Python
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
              React, Next.js, Node.js
            </span>
          </div>
        </div>

        {/* ===== Columna visual ===== */}
        <div className="order-first md:order-none">
          <div className="relative mx-auto aspect-square w-72 max-w-[22rem] md:w-[28rem]">
            {/* Foco de luz animado */}
            <div className="absolute -inset-8 -z-10 animate-pulse rounded-full bg-secondary/20 blur-3xl" />

            {/* Foto si existe; de lo contrario, fallback elegante */}
            {hasPhoto ? (
              <Image
                src="/profile.jpg" // pon tu foto en /public/profile.jpg
                alt="Foto de perfil de Zdenko"
                fill
                priority
                onError={() => setHasPhoto(false)}
                className="rounded-[2rem] object-cover ring-1 ring-white/10"
              />
            ) : (
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(245,116,28,0.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <span className="text-6xl font-black tracking-tight text-white/90">
                    ZA
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fondo decorativo suave (puedes definir --background-image-gradient-cover en globals.css) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:var(--background-image-gradient-cover)]" />
    </section>
  );
};
