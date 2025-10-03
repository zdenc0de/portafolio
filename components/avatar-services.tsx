import Image from "next/image"
import { MotionTransition } from "./transition-component"

export const AvatarServices = () => {
  return (
    <MotionTransition position="right" className="bottom-0 left-0 md:inline-block md:absolute hidden">
        <Image
        src="/services.png"
        width={300}
        height={300}
        className="w-[350px] h-full"
        alt="Avatar Services"
        />
    </MotionTransition>
  )
}
