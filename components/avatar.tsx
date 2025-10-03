import Image from "next/image";
import { MotionTransition } from "./transition-component";

export const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="hidden md:block md:absolute md:bottom-0 md:right-0"
    >
      <Image
        src="/avatar-1.png"
        width={400}
        height={400}
        alt="Avatar"
        priority
        className="w-[320px] md:w-[400px] h-auto pointer-events-none select-none"
        sizes="(min-width: 768px) 400px, 0px"
      />
    </MotionTransition>
  );
};

    