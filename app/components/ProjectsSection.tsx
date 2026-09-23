"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";
import { projects, type Project } from "../data";

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, targetScale]
  );

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 [--card-top:6rem] md:[--card-top:8rem]"
      style={{ top: `calc(var(--card-top) + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="h-[85vh] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm uppercase tracking-wide text-[#D7E2EA] opacity-60">
                {project.category}
              </span>
              <span className="text-lg sm:text-2xl md:text-3xl font-medium uppercase text-[#D7E2EA]">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        <div className="grid grid-cols-[2fr_3fr] gap-3 flex-1 min-h-0">
          <div className="flex flex-col gap-3">
            <div
              className="relative w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <Image
                src={project.images[0]}
                alt={`${project.name} preview one`}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <div
              className="relative w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <Image
                src={project.images[1]}
                alt={`${project.name} preview two`}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
            <Image
              src={project.images[2]}
              alt={`${project.name} preview three`}
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-20"
    >
      <h2
        className="hero-heading mb-12 sm:mb-16 md:mb-20 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>

      <div className="mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
