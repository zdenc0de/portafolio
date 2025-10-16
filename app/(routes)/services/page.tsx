
import { AvatarServices } from "@/components/avatar-services";
import { CircleImage } from "@/components/circle-image";
import { SliderServices } from "@/components/slider-services";
import { TransitionPage } from "@/components/transition-page";
import { CoverParticles } from '../../../components/cover-particles';

export default function ServicesPage() {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <CoverParticles />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
        <div className="max-w-lg mt-20">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis {" "}
            <span className="font-bold text-secondary">
              Servicios
            </span>
          </h1>
            <p className="mb-3 text-xl text-gray-300">lorum ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. 
            </p>
            <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
        </div>
        {/* Slider */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  )
}
