"use client";

import { motion, stagger } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ScrollReveal = dynamic(() => import("@/components/scroll-reveal"), {
  ssr: false,
});

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
  return (
    <section className="" id="about">
      <div className="mx-auto flex h-screen max-w-7xl flex-col py-[100px] px-7">
        <motion.h2
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center text-4xl font-medium text-slate-200 md:text-5xl lg:text-6xl"
        >
          About Me
        </motion.h2>
        <div className="mt-10 flex-1">
          <div className="space-y-10">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              I&apos;m Nguyen Long Phin, 24 years old. Im a Frontend Developer.
              I was born and worked in Da Nang. I have 4 years of experience in
              web development with a strong foundation in frontend.
            </ScrollReveal>
            {/* <div className="border-t border-dashed border-slate-500"></div> */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              className="flex flex-col items-center justify-center gap-5 md:flex-row"
            >
              <motion.p
                variants={childVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2 "
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
                className="flex items-center gap-2"
                href="tel:+84778512349"
              >
                <Phone />
                +84 788 6688 53
              </motion.a>
              <motion.a
                variants={childVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2"
                href="mailto:phinnguyenlong@gmail.com"
              >
                <Mail />
                phinnguyenlong@gmail.com
              </motion.a>
            </motion.div>
            <div className="flex justify-center">
              <Link
                href="mailto:phinnguyenlong@gmail.com&subject=Contact%20from%20Portfolio"
                className="inline-flex justify-center w-full max-w-[600px] gap-2 rounded-3xl bg-violet-500 px-6 py-3 text-base font-medium hover:opacity-70"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
