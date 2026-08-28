"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FolderKanban,
  Mail,
  Moon,
  Sun,
  UserRound,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export type SectionId = "about" | "projects" | "contact" | "catalog";

interface BottomNavProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

const navigation = [
  {
    id: "about" as const,
    label: "About",
    icon: UserRound,
  },
  {
    id: "projects" as const,
    label: "Projects",
    icon: FolderKanban,
  },
  {
    id: "contact" as const,
    label: "Contact",
    icon: Mail,
  },
  {
    id: "catalog" as const,
    label: "Catalog",
    icon: BookOpen,
  },
];

export default function BottomNav({
  activeSection,
  onNavigate,
}: BottomNavProps) {
  const { isDark, toggleTheme } = useTheme();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const themeIndex = navigation.length;

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;

    const distance = Math.abs(hoveredIndex - index);

    if (distance === 0) return 1.25;
    if (distance === 1) return 1.1;
    if (distance === 2) return 1.04;

    return 1;
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        bottom-[calc(14px+env(safe-area-inset-bottom))]
        left-1/2
        z-50
        -translate-x-1/2
      "
    >
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="
          flex
          h-[58px]
          items-end
          gap-1
          rounded-[18px]
          border
          border-black/[0.06]
          bg-white
          px-3
          pb-2
          pt-2
          shadow-[0_4px_16px_rgba(0,0,0,0.10)]

          dark:border-white/[0.12]
          dark:bg-white/[0.08]
          dark:shadow-[0_6px_24px_rgba(0,0,0,0.38)]
          dark:backdrop-blur-2xl
          dark:backdrop-saturate-150

          sm:h-[62px]
          sm:gap-1.5
          sm:rounded-[20px]
          sm:px-3.5
        "
      >
        {/* Navigation items */}
        {navigation.map((item, index) => {
          const Icon = item.icon;
          const active = activeSection === item.id;

          return (
            <div
              key={item.id}
              className="
                relative
                flex
                h-full
                items-end
              "
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {/* Tooltip */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 4,
                  scale: 0.92,
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 4,
                  scale: hoveredIndex === index ? 1 : 0.92,
                }}
                transition={{
                  duration: 0.14,
                }}
                className="
                  pointer-events-none
                  absolute
                  bottom-[calc(100%+8px)]
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-md
                  bg-black
                  px-2
                  py-1
                  text-[9px]
                  font-medium
                  text-white
                  shadow-sm

                  dark:bg-white
                  dark:text-black
                "
              >
                {item.label}
              </motion.div>

              {/* Active indicator */}
              {active && (
                <motion.div
                  layoutId="dock-active-dot"
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[3px]
                    w-[3px]
                    -translate-x-1/2
                    rounded-full
                    bg-zinc-900/60
                    dark:bg-white/70
                  "
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}

              {/* Navigation button */}
              <motion.button
                type="button"
                aria-label={item.label}
                onClick={() => onNavigate(item.id)}
                animate={{
                  scale: getScale(index),
                  y: hoveredIndex === index ? -8 : active ? -1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 22,
                  mass: 0.4,
                }}
                className="
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[10px]
                  outline-none
                  [-webkit-tap-highlight-color:transparent]

                  sm:h-10
                  sm:w-10
                  sm:rounded-[11px]
                "
              >
                {/* Active background */}
                {active && (
                  <motion.div
                    layoutId="dock-active-dot"
                    className="
    absolute
    bottom-0
    left-1/2
    h-[3px]
    w-[3px]
    -translate-x-1/2
    rounded-full
  "
                    style={{
                      backgroundColor: isDark
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(24,24,27,0.6)",
                    }}
                  />
                )}

                <Icon
                  className="
    relative
    z-10
    h-[19px]
    w-[19px]
  "
                  style={{
                    color: isDark ? "#f4f4f5" : "#18181b",
                  }}
                  strokeWidth={active ? 2 : 1.6}
                />
              </motion.button>
            </div>
          );
        })}

        {/* Divider */}
        <div
          className="
    mx-1
    mb-1
    h-5
    w-px
    shrink-0
  "
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.16)"
              : "rgba(24,24,27,0.16)",
          }}
        />

        {/* Theme */}
        <div
          className="
            relative
            flex
            h-full
            items-end
          "
          onMouseEnter={() => setHoveredIndex(themeIndex)}
        >
          {/* Theme tooltip */}
          <motion.div
            initial={{
              opacity: 0,
              y: 4,
              scale: 0.92,
            }}
            animate={{
              opacity: hoveredIndex === themeIndex ? 1 : 0,
              y: hoveredIndex === themeIndex ? 0 : 4,
              scale: hoveredIndex === themeIndex ? 1 : 0.92,
            }}
            transition={{
              duration: 0.14,
            }}
            className="
              pointer-events-none
              absolute
              bottom-[calc(100%+8px)]
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              rounded-md
              bg-black
              px-2
              py-1
              text-[9px]
              font-medium
              text-white
              shadow-sm

              dark:bg-white
              dark:text-black
            "
          >
            Theme
          </motion.div>

          {/* Theme button */}
          <motion.button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            animate={{
              scale: getScale(themeIndex),
              y: hoveredIndex === themeIndex ? -8 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 22,
              mass: 0.4,
            }}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-[10px]
              outline-none
              [-webkit-tap-highlight-color:transparent]

              sm:h-10
              sm:w-10
              sm:rounded-[11px]
            "
          >
            {isDark ? (
              <Sun
                className="
                  h-[19px]
                  w-[19px]
                  !text-white
                "
                strokeWidth={1.6}
              />
            ) : (
              <Moon
                className="
                  h-[19px]
                  w-[19px]
                  !text-zinc-900
                "
                strokeWidth={1.6}
              />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
