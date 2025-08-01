"use client";

import aboutImg from "@/assets/about.jpg";
import { motion, stagger, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { UpdateFollower } from "react-mouse-follower";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.5),
    },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.8]);

  return (
    <section className="" id="about">
      <div className="mx-auto flex h-screen max-w-7xl flex-col py-[100px]">
        <motion.h2
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center text-4xl font-medium text-slate-200 md:text-5xl lg:text-6xl"
        >
          About Me
        </motion.h2>
        <div className="mt-10 grid flex-1 grid-cols-2 items-center gap-5">
          <motion.div
            ref={ref}
            style={{
              scale,
              opacity,
              overflow: "hidden",
              borderRadius: "12px",
              transition: "box-shadow 0.3s ease",
            }}
            className="flex items-center justify-center"
          >
            <UpdateFollower
              mouseOptions={{
                scale: 7,
              }}
              className="flex h-full w-full items-center justify-center"
            >
              <Image
                src={aboutImg}
                alt="about image"
                className="w-3/4 rounded-md object-cover"
                priority={true}
              />
            </UpdateFollower>
          </motion.div>
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-sm md:text-base lg:text-lg"
            >
              I&apos;m Nguyen Long Phin, 24 years old. Im a Frontend Developer.
              I was born and worked in Da Nang. I have 4 years of experience in
              web development with a strong foundation in frontend.
            </motion.p>
            <div className="border-t border-dashed border-slate-500"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              className="space-y-2"
            >
              <motion.p
                variants={childVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="flex gap-2 "
              >
                <MapPin />
                Đà Nẵng, Việt Nam
              </motion.p>
              <motion.a
                variants={childVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="flex gap-2"
                href="tel:+84778512349"
              >
                <Phone />
                +84 778 512 349
              </motion.a>
              <motion.a
                variants={childVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="flex gap-2"
                href="mailto:phinnguyenlong@gmail.com"
              >
                <Mail />
                phinnguyenlong@gmail.com
              </motion.a>
            </motion.div>
            <Link
              href="mailto:phinnguyenlong@gmail.com&subject=Contact%20from%20Portfolio"
              className="inline-flex gap-2 rounded-3xl bg-violet-500 px-6 py-3 text-base font-medium hover:opacity-70"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
