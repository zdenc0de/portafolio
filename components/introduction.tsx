"use client";

import NextLink from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const Introduction = () => {
  return (
    <section className="w-full bg-dark-bg/60 pb-28 md:pb-0">
      <div className="z-20 grid h-full items-center p-6 py-20 md:grid-cols-2 md:py-0">
        <Image
          src="/home-4.png" // asegúrate que exista en /public
          priority
          width={800}
          height={800}
          alt="Profile picture"
          className="h-auto w-full"
        />

        <div className="flex max-w-md flex-col justify-center">
          <h1 className="mb-5 text-center text-2xl leading-tight md:mb-10 md:text-left md:text-4xl">
            Probando{" "}
            <TypeAnimation
              sequence={[
                "Hola, soy Zdenko",
                1000,
                "ayuda",
                1000,
                "xd",
                1000,
                "alo",
                100,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Estudiante de Ingeniería en Computación y apasionado por la
            tecnología, el desarrollo web y la inteligencia artificial. Siempre
            en busca de nuevos desafíos y oportunidades para aprender y crecer
            profesionalmente.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <NextLink
              href="/projects"
              className="w-fit cursor-pointer rounded-xl border-2 px-3 py-2 text-md transition-all hover:shadow-xl hover:shadow-white/50"
            >
              <span className="inline-flex items-center gap-2">
                Ver proyectos
              </span>
            </NextLink>

            <NextLink
              href="/contacto"
              className="w-fit cursor-pointer rounded-xl border-2 border-secondary px-3 py-2 text-md text-secondary transition-all hover:shadow-xl hover:shadow-secondary"
            >
              <span className="inline-flex items-center gap-2">
                Contacta conmigo
              </span>
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
};
