"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useRef, type CSSProperties } from "react";

type CharProps = {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
};

function Char({ progress, range, children }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const total = chars.length;

  if (reduceMotion) {
    return (
      <p ref={ref} className={className} style={style}>
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, index) => (
        <Char
          key={index}
          progress={scrollYProgress}
          range={[index / total, (index + 1) / total]}
        >
          {char}
        </Char>
      ))}
    </p>
  );
}
