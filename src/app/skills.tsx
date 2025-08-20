"use client";

import antDesign from "@/assets/ant-design.svg";
import git from "@/assets/git.svg";
import husky from "@/assets/husky.svg";
import javascript from "@/assets/javascript.svg";
import mui from "@/assets/mui.svg";
import nest from "@/assets/nest.svg";
import next from "@/assets/next.svg";
import prettier from "@/assets/prettier.svg";
import radix from "@/assets/radix.svg";
import reactQuery from "@/assets/react-query.svg";
import react from "@/assets/react.svg";
import redux from "@/assets/redux.svg";
import rust from "@/assets/rust.svg";
import styledComponents from "@/assets/styled-components.svg";
import tailwind from "@/assets/tailwind-css.svg";
import typescript from "@/assets/typescript.svg";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const skills = [
  {
    alt: "Javascript",
    src: javascript.src,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    alt: "Typescript",
    src: typescript.src,
    href: "https://www.typescriptlang.org/",
  },
  {
    alt: "React.js",
    src: react.src,
    href: "https://react.dev/",
  },
  {
    alt: "Next.js",
    src: next.src,
    href: "https://nextjs.org/",
  },
  {
    alt: "Nest.js",
    src: nest.src,
    href: "https://nestjs.com/",
  },
  {
    alt: "Redux.js",
    src: redux.src,
    href: "https://redux.js.org/",
  },
  {
    alt: "React Query",
    src: reactQuery.src,
    href: "https://react-query.tanstack.com/",
  },
  {
    alt: "Rust",
    src: rust.src,
    href: "https://www.rust-lang.org/",
  },
  {
    alt: "Ant Design",
    src: antDesign.src,
    href: "https://ant.design/",
  },
  {
    alt: "MUI",
    src: mui.src,
    href: "https://mui.com/",
  },
  {
    alt: "Tailwind CSS",
    src: tailwind.src,
    href: "https://tailwindcss.com/",
  },
  {
    alt: "Styled Components",
    src: styledComponents.src,
    href: "https://styled-components.com/",
  },
  {
    alt: "Radix UI",
    src: radix.src,
    href: "https://www.radix-ui.com/",
  },

  {
    alt: "Prettier",
    src: prettier.src,
    href: "https://prettier.io/",
  },
  {
    alt: "Husky",
    src: husky.src,
    href: "https://typicode.github.io/husky/",
  },
  {
    alt: "Git",
    src: git.src,
    href: "https://git-scm.com/",
  },
];

export function Skills() {
  return (
    <section className="" id="skills">
      <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center overflow-hidden py-10 md:py-[100px]">
        <motion.h2
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center text-4xl font-medium text-slate-200 md:text-5xl lg:text-6xl"
        >
          Skills
        </motion.h2>
        <div className="mt-10 flex flex-col justify-center space-y-10 md:flex-1">
          <Marquee gradient={false} speed={120} pauseOnHover direction="left">
            <div className="flex items-center justify-center gap-16">
              {skills.slice(0, skills.length / 2).map((skill) => (
                <motion.a
                  key={skill.alt}
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  style={{ borderRadius: "12px" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.img
                    src={skill.src}
                    alt={skill.alt}
                    className="block h-16 w-auto object-cover"
                    whileHover={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  ></motion.img>
                </motion.a>
              ))}
            </div>
          </Marquee>
          <Marquee gradient={false} speed={120} pauseOnHover direction="right">
            <div className="flex items-center justify-center gap-16">
              {skills.slice(skills.length / 2).map((skill) => (
                <motion.a
                  key={skill.alt}
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  style={{ borderRadius: "12px" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.img
                    src={skill.src}
                    alt={skill.alt}
                    className="block h-16 w-auto object-cover"
                    whileHover={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  ></motion.img>
                </motion.a>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
