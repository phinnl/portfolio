"use client";

import { TypingAnimation } from "@/components";
import {
  Facebook,
  FileScan,
  Github,
  Linkedin,
  UserRoundPlus,
} from "lucide-react";
import { motion, stagger } from "framer-motion";
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

export function Home() {
  return (
    <section className="px-7" id="home">
      <div className="absolute right-[15%] top-20 h-[400px] w-[300px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-40 blur-[50px] md:blur-[90px]"></div>
      <div className="mx-auto h-dvh max-w-7xl">
        <div className="flex md:grid h-full grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-center">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-max bg-clip-text text-xl font-medium"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #8b5cf6 40%, #0ea5e9 70%, #d946ef 100%)",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hello there!
            </motion.p>
            <UpdateFollower
              mouseOptions={{
                scale: 7,
                backgroundColor: "#db2777",
                mixBlendMode: "difference",
              }}
            >
              <h3 className="text-4xl font-medium text-slate-200 md:text-5xl lg:text-6xl">
                <motion.p
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 120 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="inline"
                >
                  I&apos;m&nbsp;
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -120 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="inline"
                >
                  Nguyen Long Phin
                </motion.p>
              </h3>
            </UpdateFollower>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <TypingAnimation
                sequence={[
                  "I am a Frontend Developer",
                  1000,
                  "I am a Backend Developer",
                  1000,
                  "I am a Full-stack Developer",
                  1000,
                ]}
                wrapper="h2"
                className="w-max bg-clip-text text-2xl font-semibold md:text-3xl lg:text-4xl"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, #8b5cf6 40%, #0ea5e9 70%, #d946ef 100%)",
                  WebkitTextFillColor: "transparent",
                }}
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-balance text-sm md:text-base text-slate-200"
            >
              With years of experience in web development, I specialize in
              building and developing stunning and modern user interfaces using
              the latest front-end technologies like React, Next.js, and
              Tailwind CSS. I am passionate about delivering high-quality web
              experiences that are responsive, accessible, and meet the needs of
              users.
            </motion.p>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="/phinnl_cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full md:w-auto gap-2 rounded-3xl bg-gray-900 px-6 py-3 text-base font-medium hover:opacity-70"
              >
                <FileScan />
                See my CV
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://www.linkedin.com/in/phinnl/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full md:w-auto gap-2 rounded-3xl bg-white px-6 py-3 text-base font-medium text-fuchsia-500 hover:opacity-70"
              >
                <UserRoundPlus />
                Hire Me
              </motion.a>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="flex items-center gap-2"
            >
              <motion.a
                variants={childVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                href="https://www.facebook.com/PhinDepZai/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#4a4856] p-2.5 text-slate-200 hover:opacity-70"
              >
                <Facebook />
              </motion.a>
              <motion.a
                variants={childVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                href="https://www.linkedin.com/in/phinnl/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#4a4856] p-2.5 text-slate-200 hover:opacity-70"
              >
                <Linkedin />
              </motion.a>
              <motion.a
                variants={childVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                href="https://github.com/phinnl"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#4a4856] p-2.5 text-slate-200 hover:opacity-70"
              >
                <Github />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
