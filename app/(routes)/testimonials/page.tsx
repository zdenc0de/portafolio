"use client";

import Image from "next/image";
import { CircleImage } from "@/components/circle-image";
import { TransitionPage } from "@/components/transition-page";
import { dataTestimonials } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialsPage() {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-screen">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Algunos comentarios de nuestros clientes
          <span className="block text-secondary">
            de nuestros trabajos realizados
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[380px] md:h-[380px] w-[270px] md:w-[550px]"
            >
              {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                <SwiperSlide
                  key={id}
                  className="flex flex-col items-center justify-center text-center mt-4"
                >
                  <Image
                    src={imageUrl}
                    alt={name}
                    width={100}
                    height={100}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h4 className="text-xl font-semibold mb-2">{name}</h4>
                  <p className="text-sm text-center text-gray-400 px-4">{description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
