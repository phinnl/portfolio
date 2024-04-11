"use client";

import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavLinkProps = LinkProps & React.HTMLAttributes<HTMLAnchorElement>;

export function NavLink({ className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [path, id] = props.href?.toString().split("#");

  const observer = useMemo(() => {
    if (typeof IntersectionObserver === "undefined") {
      return null;
    }
    return new IntersectionObserver(
      ([entry]) => setActive(path === pathname && entry.isIntersecting),
      {
        threshold: 0.5,
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.href, pathname]);

  useEffect(() => {
    const element = document?.getElementById(id);
    if (element && observer) {
      observer.observe(element);
      return () => observer.unobserve(element);
    }
    return () => null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observer, props.href, pathname]);
  return <Link {...props} className={cn(className, active && "active")} />;
}
