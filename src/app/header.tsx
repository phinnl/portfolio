"use client";

import { NavLink } from "@/components";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header || !window) return;
    setIsScrolled(window.scrollY >= 120);
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
        "top-6 animate-fade-in": isScrolled,
      })}
      ref={headerRef}
    >
      {isScrolled && (
        <nav className="mx-auto flex w-max items-center gap-1 rounded-3xl bg-slate-800 p-2">
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-600 hover:text-slate-100 [&.active]:bg-slate-600 [&.active]:text-white"
            href="/#home"
          >
            Home
          </NavLink>
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-600 hover:text-slate-100 [&.active]:bg-slate-600 [&.active]:text-white"
            href="/#about"
          >
            About
          </NavLink>
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-600 hover:text-slate-100 [&.active]:bg-slate-600 [&.active]:text-white"
            href="/#skills"
          >
            Skills
          </NavLink>
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-600 hover:text-slate-100 [&.active]:bg-slate-600 [&.active]:text-white"
            href="/#experience"
          >
            Experience
          </NavLink>
          <NavLink
            className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-600 hover:text-slate-100 [&.active]:bg-slate-600 [&.active]:text-white"
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
              href="/#experience"
            >
              Experience
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
