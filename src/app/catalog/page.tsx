"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

type Category = "All" | "Fashion" | "Tech" | "Lifestyle" | "Home";

interface Product {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  seller: string;
  price: string;
  image: string;
  url: string;
  featured?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Oversized Tee",
    category: "Fashion",
    seller: "Angkasa Pick",
    price: "Rp89.000",
    image: "/catalog/placeholder-1.jpg",
    url: "#",
    featured: true,
  },
  {
    id: 2,
    name: "Minimal Desk Setup",
    category: "Home",
    seller: "Angkasa Pick",
    price: "Rp129.000",
    image: "/catalog/placeholder-2.jpg",
    url: "#",
  },
  {
    id: 3,
    name: "Everyday Sling Bag",
    category: "Fashion",
    seller: "Angkasa Pick",
    price: "Rp149.000",
    image: "/catalog/placeholder-3.jpg",
    url: "#",
  },
  {
    id: 4,
    name: "Compact Wireless Keyboard",
    category: "Tech",
    seller: "Angkasa Pick",
    price: "Rp199.000",
    image: "/catalog/placeholder-4.jpg",
    url: "#",
  },
];

const categories: Category[] = ["All", "Fashion", "Tech", "Lifestyle", "Home"];

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === "All" || product.category === activeCategory;

    const searchMatch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.seller.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <main
      className="
        min-h-dvh
        bg-background
        text-foreground
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-6

          sm:px-8
          sm:py-8

          lg:px-12
          lg:py-10
        "
      >
        {/* Header */}
        <motion.header
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            items-center
            justify-between
          "
        >
          <Link
            href="/"
            className="
              group
              flex
              items-center
              gap-2
              text-muted-foreground
              transition-colors
              hover:text-foreground
            "
          >
            <ArrowLeft
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
              strokeWidth={1.7}
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
              "
            >
              Back
            </span>
          </Link>

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-muted-foreground
            "
          >
            Angkasa Picks
          </span>
        </motion.header>

        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
              },
            },
          }}
          className="
            pb-8
            pt-16

            sm:pb-10
            sm:pt-20

            lg:pb-12
            lg:pt-24
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
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              Curated selection
            </span>
          </motion.div>

          <motion.h1
            variants={reveal}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-4xl
              text-[15vw]
              font-semibold
              leading-[0.9]
              tracking-[-0.07em]

              sm:text-7xl
              md:text-8xl
              lg:text-[8rem]
              xl:text-[9rem]
            "
          >
            Angkasa
            <br />
            <span className="text-muted-foreground">Picks.</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              max-w-xl
              text-[12px]
              leading-[1.8]
              text-muted-foreground

              sm:mt-7
              sm:text-sm

              lg:text-base
            "
          >
            Products we discover and think are worth sharing. Curated from
            sellers and stores we find interesting.
          </motion.p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.6,
          }}
          className="
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              relative
              w-full

              sm:max-w-xs
            "
          >
            <Search
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-muted-foreground/60
              "
              strokeWidth={1.7}
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search picks..."
              className="
                h-10
                w-full
                rounded-full
                border
                border-black/[0.08]
                bg-white/70
                pl-10
                pr-4
                text-[11px]
                outline-none
                placeholder:text-muted-foreground/50
                focus:border-foreground/20

                dark:border-white/[0.10]
                dark:bg-white/[0.05]
              "
            />
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              pb-1
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <SlidersHorizontal
              className="
                mr-1
                h-3.5
                w-3.5
                shrink-0
                text-muted-foreground
              "
              strokeWidth={1.7}
            />

            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    shrink-0
                    rounded-full
                    border
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    transition-all

                    ${
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "border-black/[0.08] bg-transparent text-muted-foreground hover:text-foreground dark:border-white/[0.10]"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="
            my-6
            h-px
            bg-foreground/[0.08]

            sm:my-8
          "
        />

        {/* Product count */}
        <div
          className="
            mb-4
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-muted-foreground/60
            "
          >
            {filteredProducts.length} picks
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-muted-foreground/40
            "
          >
            Updated regularly
          </span>
        </div>

        {/* Products */}
        <motion.div
          layout
          className="
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3
            sm:gap-4

            lg:grid-cols-4
          "
        >
          {filteredProducts.map((product, index) => (
            <motion.a
              layout
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                delay: index * 0.06,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="
                  group
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-black/[0.07]
                  bg-white/65
                  shadow-[0_5px_20px_rgba(0,0,0,0.04)]
                  backdrop-blur-md

                  dark:border-white/[0.09]
                  dark:bg-white/[0.045]
                  dark:shadow-[0_6px_24px_rgba(0,0,0,0.16)]
                "
            >
              {/* Image */}
              <div
                className="
                    relative
                    aspect-square
                    overflow-hidden
                    bg-zinc-100

                    dark:bg-zinc-900
                  "
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 1024px) 33vw,
                      25vw
                    "
                  className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]
                    "
                />

                {product.featured && (
                  <span
                    className="
                        absolute
                        left-2
                        top-2
                        rounded-full
                        bg-foreground
                        px-2
                        py-1
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-background
                      "
                  >
                    Angkasa Pick
                  </span>
                )}

                <span
                  className="
                      absolute
                      bottom-2
                      right-2
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-white/80
                      opacity-0
                      shadow-sm
                      backdrop-blur-md
                      transition-opacity
                      group-hover:opacity-100

                      dark:bg-black/60
                    "
                >
                  <ArrowUpRight
                    className="
                        h-3.5
                        w-3.5
                      "
                    strokeWidth={1.7}
                  />
                </span>
              </div>

              {/* Info */}
              <div className="p-3">
                <p
                  className="
                      mb-1
                      text-[8px]
                      uppercase
                      tracking-[0.12em]
                      text-muted-foreground/60
                    "
                >
                  {product.category}
                </p>

                <h2
                  className="
                      line-clamp-2
                      min-h-[30px]
                      text-[11px]
                      font-medium
                      leading-[1.35]
                      tracking-[-0.01em]

                      sm:text-[12px]
                    "
                >
                  {product.name}
                </h2>

                <p
                  className="
                      mt-2
                      text-[11px]
                      font-semibold

                      sm:text-xs
                    "
                >
                  {product.price}
                </p>

                <p
                  className="
                      mt-1
                      truncate
                      text-[8px]
                      text-muted-foreground
                    "
                >
                  {product.seller}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div
            className="
              flex
              min-h-[240px]
              items-center
              justify-center
              text-center
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-medium
                "
              >
                Nothing found.
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-muted-foreground
                "
              >
                Try another keyword or category.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer
          className="
            mt-12
            border-t
            border-foreground/[0.08]
            py-6

            sm:mt-16
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-muted-foreground/50
              "
            >
              Angkasa Project
            </span>

            <Link
              href="/"
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-muted-foreground/50
                transition-colors
                hover:text-foreground
              "
            >
              Back to space
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
