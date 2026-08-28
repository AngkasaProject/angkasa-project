"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "APPAREL / E-COMMERCE",
    title: "AetherSub",
    domain: "aethersub.store",
    description:
      "A custom jersey platform focused on original designs, quality sportswear, and personalized team identity.",
    url: "https://aethersub.store",
    accent: "bg-zinc-900 dark:bg-zinc-100",
  },
  {
    number: "02",
    category: "WEB / LINK MANAGEMENT",
    title: "TRIMIT",
    domain: "trimit.my.id",
    description:
      "A digital link platform built to make sharing, managing, and presenting links simpler in one place.",
    url: "https://trimit.my.id",
    accent: "bg-zinc-700 dark:bg-zinc-300",
  },
  {
    number: "03",
    category: "DIGITAL / TOP UP",
    title: "AGKS Online",
    domain: "agksonline.my.id",
    description:
      "A digital top-up platform for games and everyday digital products, from game credits and vouchers to pulsa, data packages, electricity tokens, and e-money.",
    url: "https://agksonline.my.id",
    accent: "bg-zinc-500 dark:bg-zinc-400",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="
            mb-9
            sm:mb-11
            lg:mb-12
          "
        >
          <motion.div
            variants={reveal}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-5
              flex
              items-center
              gap-3
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
              Our Projects
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-3xl
              text-[13vw]
              font-semibold
              leading-[0.9]
              tracking-[-0.065em]

              sm:text-7xl
              md:text-8xl
              lg:text-[7rem]
              xl:text-[7.5rem]
            "
          >
            Built with
            <br />
            <span className="text-muted-foreground">purpose.</span>
          </motion.h2>
        </motion.div>

        {/* =========================
            PROJECT CARDS
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-3

            lg:grid-cols-3
            lg:gap-4
          "
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.number}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={reveal}
              transition={{
                delay: index * 0.12,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="
                  group
                  relative
                  flex
                  min-h-[250px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-black/[0.07]
                  bg-white/65
                  p-5
                  shadow-[0_6px_24px_rgba(0,0,0,0.05)]
                  backdrop-blur-md

                  dark:border-white/[0.09]
                  dark:bg-white/[0.045]
                  dark:shadow-[0_8px_28px_rgba(0,0,0,0.18)]

                  sm:min-h-[280px]
                  sm:rounded-[24px]
                  sm:p-6
                "
            >
              {/* Background glow */}
              <div
                className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-black/[0.025]
                    blur-3xl

                    dark:bg-white/[0.04]
                  "
              />

              {/* Top */}
              <div
                className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                  "
              >
                <span
                  className="
                      text-[10px]
                      font-medium
                      tracking-[0.18em]
                      text-muted-foreground
                    "
                >
                  {project.number}
                </span>

                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                  }}
                  className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/[0.08]
                      bg-white/70

                      dark:border-white/[0.10]
                      dark:bg-white/[0.06]
                    "
                >
                  <ArrowUpRight
                    className="
                        h-4
                        w-4
                        text-foreground/70
                      "
                    strokeWidth={1.7}
                  />
                </motion.div>
              </div>

              {/* Main */}
              <div
                className="
                    relative
                    z-10
                  "
              >
                <div
                  className="
                      mb-3
                      flex
                      items-center
                      gap-2
                    "
                >
                  <span
                    className={`
                        h-[3px]
                        w-3
                        rounded-full
                        ${project.accent}
                      `}
                  />

                  <span
                    className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-muted-foreground
                      "
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  className="
                      text-3xl
                      font-semibold
                      tracking-[-0.05em]

                      sm:text-4xl
                    "
                >
                  {project.title}
                </h3>

                <p
                  className="
                      mt-2
                      text-[10px]
                      font-medium
                      text-muted-foreground
                    "
                >
                  {project.domain}
                </p>

                <p
                  className="
                      mt-4
                      max-w-sm
                      text-[12px]
                      leading-[1.7]
                      text-muted-foreground

                      sm:text-[13px]
                    "
                >
                  {project.description}
                </p>
              </div>

              {/* Bottom */}
              <div
                className="
                    relative
                    z-10
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-black/[0.06]
                    pt-4

                    dark:border-white/[0.08]
                  "
              >
                <span
                  className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-muted-foreground
                    "
                >
                  Visit project
                </span>

                <ExternalLink
                  className="
                      h-3.5
                      w-3.5
                      text-muted-foreground
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  strokeWidth={1.7}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* =========================
          PAGE INDICATOR
      ========================== */}

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
        <span>02</span>

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
