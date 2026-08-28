"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SPLASH_KEY = "angkasa-splash-seen";

const steps = [
  {
    start: 0,
    end: 32,
    title: "Hi.",
    eyebrow: "",
  },
  {
    start: 32,
    end: 78,
    title: "Angkasa Project.",
    eyebrow: "Welcome to",
  },
  {
    start: 78,
    end: 100,
    title: "Let’s explore.",
    eyebrow: "",
  },
];

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SPLASH_KEY) === "true";

    /*
     * Kalau sudah pernah splash,
     * langsung buka aplikasi.
     */
    if (seen) {
      requestAnimationFrame(() => {
        setVisible(false);

        window.dispatchEvent(new Event("angkasa:splash-complete"));
      });

      return;
    }

    const startTime = performance.now();
    const duration = 4200;

    let frame = 0;

    let finishTimer: ReturnType<typeof setTimeout> | undefined;

    let closeTimer: ReturnType<typeof setTimeout> | undefined;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const rawProgress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - rawProgress, 2.2);

      const value = Math.min(Math.round(easedProgress * 100), 100);

      setProgress(value);

      if (value < 100) {
        frame = requestAnimationFrame(updateProgress);

        return;
      }

      finishTimer = setTimeout(() => {
        sessionStorage.setItem(SPLASH_KEY, "true");

        setClosing(true);

        /*
         * Tunggu splash fade-out selesai.
         */
        closeTimer = setTimeout(() => {
          setVisible(false);

          /*
           * Baru sekarang aplikasi
           * melakukan fade-in.
           */
          window.dispatchEvent(new Event("angkasa:splash-complete"));
        }, 800);
      }, 250);
    };

    frame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frame);

      if (finishTimer) {
        clearTimeout(finishTimer);
      }

      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, []);

  if (!visible) {
    return null;
  }

  const currentStep =
    steps.find((step) => progress >= step.start && progress <= step.end) ??
    steps[steps.length - 1];

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        min-h-dvh
        items-center
        justify-center
        overflow-hidden
        bg-background
      "
      animate={
        closing
          ? {
              opacity: 0,
              scale: 1.025,
              filter: "blur(10px)",
            }
          : {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Solid background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-background
        "
      />

      {/* Cosmic gradient */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-[30%]
          opacity-70
          dark:opacity-50
        "
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(120,120,255,0.18), transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,120,180,0.14), transparent 35%), radial-gradient(circle at 50% 50%, rgba(100,200,255,0.10), transparent 40%)",
        }}
        animate={{
          x: ["-5%", "5%", "-3%", "-5%"],
          y: ["-3%", "4%", "2%", "-3%"],
          scale: [1, 1.08, 1.04, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
          px-6
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.title}
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -28,
              scale: 0.98,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              min-h-[170px]
              w-full
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            {currentStep.eyebrow && (
              <p
                className="
                  mb-4
                  text-base
                  font-medium
                  tracking-[-0.025em]
                  text-muted-foreground
                  sm:mb-5
                  sm:text-xl
                "
              >
                {currentStep.eyebrow}
              </p>
            )}

            <h1
              className={`
                font-semibold
                leading-[0.9]
                tracking-[-0.07em]
                ${
                  currentStep.title === "Hi."
                    ? "text-[24vw] sm:text-[15vw] lg:text-[11vw]"
                    : "text-[12vw] sm:text-[9vw] lg:text-[7vw]"
                }
              `}
            >
              {currentStep.title}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Progress */}
        <div
          className="
            mt-10
            w-full
            max-w-[190px]
            sm:mt-12
            sm:max-w-[230px]
          "
        >
          <div
            className="
              relative
              h-[11px]
              overflow-hidden
              rounded-full
              border
              border-white/25
              bg-black/20
              p-[2px]
              shadow-[inset_0_1px_3px_rgba(0,0,0,0.25),0_4px_18px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
              dark:border-white/15
              dark:bg-white/10
            "
          >
            <motion.div
              className="
                h-full
                rounded-full
                bg-white
                shadow-[0_0_12px_rgba(255,255,255,0.7)]
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
