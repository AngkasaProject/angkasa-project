"use client";

import { motion } from "framer-motion";

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        flex
        h-full
        min-w-full
        snap-center
        items-center
        px-6
        sm:px-10
        lg:px-20
        xl:px-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          pb-10
          sm:pb-14
          lg:pb-16
        "
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.12,
              },
            },
          }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={lineVariants}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-7
              flex
              items-center
              gap-3
              sm:mb-8
            "
          >
            <span
              className="
                h-[1px]
                w-7
                bg-foreground
                sm:w-9
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-muted-foreground
                sm:text-[10px]
              "
            >
              Angkasa Project
            </span>
          </motion.div>

          {/* Hero */}
          <h1
            className="
              font-semibold
              leading-[0.91]
              tracking-[-0.065em]

              text-[15vw]

              sm:text-[7rem]
              md:text-[7.8rem]

              lg:text-[8rem]
              xl:text-[8.6rem]
            "
          >
            <motion.span
              variants={lineVariants}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              We create
            </motion.span>

            <motion.span
              variants={lineVariants}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                block
                text-muted-foreground
              "
            >
              things that
            </motion.span>

            <motion.span
              variants={lineVariants}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                block
                text-muted-foreground
              "
            >
              matter.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
              filter: "blur(7px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.65,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              max-w-lg
              text-[13px]
              leading-[1.75]
              text-muted-foreground

              sm:mt-8
              sm:text-sm
              sm:leading-[1.8]

              lg:mt-9
              lg:text-base
            "
          >
            Angkasa Project is a creative digital space where ideas, projects,
            experiments, and selected works come together.
          </motion.p>

          {/* Explore */}
          <motion.div
            initial={{
              opacity: 0,
              y: 14,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              flex
              items-center

              sm:mt-9
            "
          >
            <motion.div
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-black/[0.08]
                bg-white/[0.52]
                px-4
                py-2.5
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                backdrop-blur-md

                dark:border-white/[0.10]
                dark:bg-white/[0.06]
                dark:shadow-[0_4px_18px_rgba(0,0,0,0.18)]

                sm:px-4.5
                sm:py-2.5
              "
            >
              <motion.span
                animate={{
                  width: [22, 34, 22],
                  opacity: [0.45, 1, 0.45],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-[1px]
                  shrink-0
                  bg-foreground
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-foreground/65
                  transition-colors
                  group-hover:text-foreground

                  sm:text-[10px]
                "
              >
                Explore the universe
              </span>

              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  text-xs
                  text-foreground/50
                  sm:text-sm
                "
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Page indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-[92px]
          right-6
          flex
          items-center
          gap-2
          text-[9px]
          uppercase
          tracking-[0.18em]
          text-muted-foreground/40

          sm:right-10
          lg:right-20
        "
      >
        <span>01</span>

        <span className="h-px w-5 bg-foreground/20" />

        <span>04</span>
      </motion.div>
    </section>
  );
}
