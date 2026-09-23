import Image from "next/image";
import Navbar from "./Navbar";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      <Navbar />

      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap font-black uppercase tracking-tight leading-none text-[12.9vw] sm:text-[13.8vw] md:text-[14.8vw] lg:text-[16.2vw]">
            Hi, i&apos;m shams
          </h1>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px] font-light uppercase tracking-wide leading-snug text-[#D7E2EA]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a full-stack developer building fast, secure, scalable
            web apps
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <Image
            src="/hero.png"
            alt="Shams Ali, full-stack developer and DevOps engineer"
            width={1355}
            height={1161}
            priority
            className="h-auto w-full"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
