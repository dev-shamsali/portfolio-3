"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { marqueeRow1, marqueeRow2 } from "../data";

const row1Images = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
const row2Images = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!section || !row1 || !row2) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;
      const offset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      row1.style.transform = `translateX(${offset - 200}px)`;
      row2.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div
        ref={row1Ref}
        className="flex gap-3 will-change-transform"
        style={{ willChange: "transform" }}
      >
        {row1Images.map((src, index) => (
          <Image
            key={`row1-${index}`}
            src={src}
            alt=""
            width={420}
            height={270}
            unoptimized
            loading="lazy"
            className="w-[420px] h-[270px] shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>
      <div
        ref={row2Ref}
        className="mt-3 flex gap-3 will-change-transform"
        style={{ willChange: "transform" }}
      >
        {row2Images.map((src, index) => (
          <Image
            key={`row2-${index}`}
            src={src}
            alt=""
            width={420}
            height={270}
            unoptimized
            loading="lazy"
            className="w-[420px] h-[270px] shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}
