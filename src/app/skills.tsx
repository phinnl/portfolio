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
import { cn } from "@/lib";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skills_1 = [
  {
    name: "Javascript",
    icon: javascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    icon: typescript,
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "React.js",
    icon: react,
    href: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: next,
    href: "https://nextjs.org/",
  },
  {
    name: "Nest.js",
    icon: nest,
    href: "https://nestjs.com/",
  },
  {
    name: "Redux.js",
    icon: redux,
    href: "https://redux.js.org/",
  },
  {
    name: "React Query",
    icon: reactQuery,
    href: "https://react-query.tanstack.com/",
  },
  {
    name: "Rust",
    icon: rust,
    href: "https://www.rust-lang.org/",
  },
];

const skills_2 = [
  {
    name: "Ant Design",
    icon: antDesign,
    href: "https://ant.design/",
  },
  {
    name: "MUI",
    icon: mui,
    href: "https://mui.com/",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    href: "https://tailwindcss.com/",
  },
  {
    name: "Styled Components",
    icon: styledComponents,
    href: "https://styled-components.com/",
  },
  {
    name: "Radix UI",
    icon: radix,
    href: "https://www.radix-ui.com/",
  },

  {
    name: "Prettier",
    icon: prettier,
    href: "https://prettier.io/",
  },
  {
    name: "Husky",
    icon: husky,
    href: "https://typicode.github.io/husky/",
  },
  {
    name: "Git",
    icon: git,
    href: "https://git-scm.com/",
  },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const percentageSeen = () => {
      // Get the relevant measurements and positions
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const elementOffsetTop = element.offsetTop;
      const elementHeight = element.offsetHeight;

      // Calculate percentage of the element that's been seen
      const distance = scrollTop + viewportHeight - elementOffsetTop;
      const percentage = Math.round(
        distance / ((viewportHeight + elementHeight) / 100),
      );

      setPercent(Math.min(100, Math.max(0, percentage * 2)));
    };
    window.addEventListener("scroll", percentageSeen);
    return () => window.removeEventListener("scroll", percentageSeen);
  });
  return (
    <section
      className="flex h-screen flex-col overflow-hidden py-[100px]"
      id="skills"
      ref={ref}
    >
      <h2 className="text-center text-4xl font-medium text-slate-200">
        Skills
      </h2>
      <div className="mt-10 flex flex-1 flex-col justify-center space-y-5">
        <div
          className={cn(
            "flex flex-wrap items-center justify-between gap-4 transition-all duration-1000 ease-linear",
          )}
          style={{
            transform:
              percent > 0 ? `translateX(-${100 - percent}%)` : undefined,
          }}
        >
          {skills_1.map((skill) => (
            <a
              key={skill.name}
              href={skill.href}
              target="_blank"
              rel="noreferrer"
              className="flex size-[140px] flex-col items-center justify-center rounded-xl bg-slate-800 p-4 hover:bg-slate-600"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                className="size-12 rounded-md"
              />
              <p className="mt-2 min-w-0 max-w-full truncate font-medium text-slate-300">
                {skill.name}
              </p>
            </a>
          ))}
        </div>
        <div
          className={cn(
            "animate-slide-to-r flex flex-wrap items-center justify-between gap-4 transition-all duration-1000 ease-linear",
          )}
          style={{
            transform:
              percent > 0 ? `translateX(${100 - percent}%)` : undefined,
          }}
        >
          {skills_2.map((skill) => (
            <a
              key={skill.name}
              href={skill.href}
              target="_blank"
              rel="noreferrer"
              className="flex size-[140px] flex-col items-center justify-center rounded-xl bg-slate-800 p-4 hover:bg-slate-600"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                className="size-12 rounded-md"
              />
              <p className="mt-2 min-w-0 max-w-full truncate font-medium text-slate-300">
                {skill.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
