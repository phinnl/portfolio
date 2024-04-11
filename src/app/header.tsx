"use client";

import { NavLink } from "@/components";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(
    globalThis.window ? window.scrollY >= 120 : false,
  );
  useEffect(() => {
    const header = headerRef.current;
    if (!header || !window) return;
    // Get the offset position of the navbar
    const sticky = header.offsetTop;
    const handler = function () {
      setIsScrolled(window.pageYOffset > sticky);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [headerRef]);
  return (
    <header
      className={cn("fixed inset-x-0 z-50", {
        "top-0 mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 transition-all duration-100 ease-linear":
          !isScrolled,
        "animate-fade-in top-6": isScrolled,
      })}
      ref={headerRef}
    >
      {isScrolled && (
        <nav className="mx-auto flex w-max items-center rounded-3xl bg-slate-800 p-2 gap-1">
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-600 [&.active]:text-white [&.active]:bg-slate-600"
            href="/#home"
          >
            Home
          </NavLink>
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-600 [&.active]:text-white [&.active]:bg-slate-600"
            href="/#about"
          >
            About
          </NavLink>
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-600 [&.active]:text-white [&.active]:bg-slate-600"
            href="/#skills"
          >
            Skills
          </NavLink>
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-600 [&.active]:text-white [&.active]:bg-slate-600"
            href="/#projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-600 [&.active]:text-white [&.active]:bg-slate-600"
            href="/#contact"
          >
            Contact
          </NavLink>
        </nav>
      )}
      {!isScrolled && (
        <>
          <Image src="/favicon.png" alt="logo" width={40} height={40} />
          <nav className="flex items-center">
            <Link
              className="px-4 py-2 text-sm font-medium text-white"
              href="/#home"
            >
              Home
            </Link>
            <Link
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100"
              href="/#about"
            >
              About
            </Link>
            <Link
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100"
              href="/#skills"
            >
              Skills
            </Link>
            <Link
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100"
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100"
              href="/#contact"
            >
              Contact
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
