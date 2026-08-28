"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 61.3) % 100}%`,
  size: i % 7 === 0 ? 2 : i % 3 === 0 ? 1.5 : 1,
  duration: 2.5 + (i % 5),
  delay: (i % 8) * 0.4,
}));

export default function SpaceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Nebula 01 */}
      <motion.div
        className="absolute -left-[15%] -top-[20%] h-[70%] w-[65%] rounded-full blur-[120px] dark:bg-indigo-500/[0.12] bg-indigo-400/[0.06]"
        animate={{
          x: ["0%", "8%", "-3%", "0%"],
          y: ["0%", "6%", "2%", "0%"],
          scale: [1, 1.08, 1.03, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Nebula 02 */}
      <motion.div
        className="absolute -right-[15%] top-[5%] h-[65%] w-[60%] rounded-full blur-[130px] dark:bg-purple-500/[0.11] bg-purple-400/[0.05]"
        animate={{
          x: ["0%", "-7%", "3%", "0%"],
          y: ["0%", "5%", "-2%", "0%"],
          scale: [1, 1.1, 1.04, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Nebula 03 */}
      <motion.div
        className="absolute -bottom-[30%] left-[25%] h-[65%] w-[55%] rounded-full blur-[140px] dark:bg-cyan-500/[0.08] bg-cyan-400/[0.035]"
        animate={{
          x: ["0%", "-5%", "5%", "0%"],
          y: ["0%", "-6%", "2%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-foreground"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.2, 0.15],
              scale: [1, 1.35, 1, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Fine atmospheric layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_125%)] opacity-40" />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
}
