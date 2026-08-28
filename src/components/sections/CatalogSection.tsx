"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function CatalogSection() {
  return (
    <section
      id="catalog"
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
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.45,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reveal}
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
                w-8
                bg-foreground
                sm:w-10
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
              Angkasa Picks
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={reveal}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-4xl
              text-[14vw]
              font-semibold
              leading-[0.9]
              tracking-[-0.065em]

              sm:text-7xl
              md:text-8xl
              lg:text-[7.8rem]
              xl:text-[8.5rem]
            "
          >
            Things worth
            <br />
            <span className="text-muted-foreground">discovering.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={reveal}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              max-w-xl
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
            A curated collection of products we discover, use, and think are
            worth sharing.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={reveal}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              sm:mt-10
            "
          >
            <Link href="/catalog">
              <motion.div
                whileHover={{
                  x: 3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-[1px]
                    w-7
                    bg-foreground
                    transition-all
                    duration-300
                    group-hover:w-10
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-foreground/70
                    transition-colors
                    group-hover:text-foreground

                    sm:text-[10px]
                  "
                >
                  Explore the picks
                </span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    text-muted-foreground
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  strokeWidth={1.7}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Small note */}
          <motion.div
            variants={reveal}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              flex
              items-center
              gap-3
              sm:mt-12
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-muted-foreground/50
              "
            >
              Curated by Angkasa Project
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Page indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.8,
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
        <span>04</span>

        <span
          className="
            h-px
            w-5
            bg-foreground/20
          "
        />

        <span>04</span>
      </motion.div>
    </section>
  );
}
