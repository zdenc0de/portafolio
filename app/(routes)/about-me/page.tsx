import { ContainerPage } from "@/components/container";
import { TransitionPage } from "@/components/transition-page";
import { Avatar } from "@/components/avatar";
import { CounterServices } from "@/components/counter-services";
import { TimeLine } from "@/components/time-line";

export default function PageAboutMe() {
  return (
    <>
        <TransitionPage />
        <ContainerPage>
            <Avatar />
            <h1 className="text-2xl leading-thight text-center md:text-left md:text-5xl md:mt-10">
                Toda mi {''}
                <span className="font-bold text-secondary">trayectoria académica</span>
            </h1>
            <CounterServices />

            <TimeLine />
        </ContainerPage>
    </>
  )
}
    