"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const reveal = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
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
              Get in touch
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
            Let’s make
            <br />
            <span className="text-muted-foreground">something happen.</span>
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
            Have a project, collaboration, or idea in mind? Let’s talk and see
            where it could go.
          </motion.p>

          {/* Contact actions */}
          <motion.div
            variants={reveal}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3

              sm:mt-10
              sm:flex-row
              sm:items-center
            "
          >
            {/* Email */}
            <motion.a
              href="mailto:hello@angkasa-project.com"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                flex
                min-h-[48px]
                items-center
                justify-between
                gap-5
                rounded-full
                border
                border-black/[0.08]
                bg-white/80
                px-4
                shadow-[0_5px_18px_rgba(0,0,0,0.07)]
                backdrop-blur-md

                dark:border-white/[0.12]
                dark:bg-zinc-900/80
                dark:shadow-[0_5px_20px_rgba(0,0,0,0.25)]

                sm:min-h-[46px]
                sm:w-auto
              "
            >
              <span className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-zinc-100

                    dark:bg-white/[0.08]
                  "
                >
                  <Mail
                    className="
                      h-4
                      w-4
                      text-zinc-700

                      dark:text-zinc-300
                    "
                    strokeWidth={1.7}
                  />
                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-zinc-700

                    dark:text-zinc-300

                    sm:text-[11px]
                  "
                >
                  hello@angkasa-project.com
                </span>
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
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                flex
                min-h-[48px]
                items-center
                gap-3
                rounded-full
                border
                border-black/[0.08]
                bg-transparent
                px-4

                dark:border-white/[0.12]

                sm:min-h-[46px]
              "
            >
              <MessageCircle
                className="
                  h-4
                  w-4
                  text-zinc-600

                  dark:text-zinc-400
                "
                strokeWidth={1.7}
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-zinc-600

                  dark:text-zinc-400

                  sm:text-[11px]
                "
              >
                WhatsApp
              </span>

              <ArrowUpRight
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
            </motion.a>
          </motion.div>

          {/* Bottom social row */}
          <motion.div
            variants={reveal}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3

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
              Find us
            </span>

            <a
              href="#"
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-muted-foreground
                transition-colors
                hover:text-foreground
              "
            >
              Instagram
            </a>

            <a
              href="#"
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-muted-foreground
                transition-colors
                hover:text-foreground
              "
            >
              TikTok
            </a>

            <a
              href="#"
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-muted-foreground
                transition-colors
                hover:text-foreground
              "
            >
              LinkedIn
            </a>
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
        <span>03</span>

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
