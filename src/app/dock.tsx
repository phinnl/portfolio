"use client";

import Dock from "@/components/dock";
import { useLenis } from "lenis/react";
import { Code, HomeIcon, SquareChartGantt, SquareUser } from "lucide-react";

export default function DockSection() {
  const lenis = useLenis();
  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      lenis?.scrollTo(element);
    }
  };
  const items = [
    {
      icon: <HomeIcon />,
      label: "Home",
      onClick: () => scrollIntoView("home"),
    },
    {
      icon: <SquareUser />,
      label: "About me",
      onClick: () => scrollIntoView("about"),
    },
    {
      icon: <Code />,
      label: "Skills",
      onClick: () => scrollIntoView("skills"),
    },
    {
      icon: <SquareChartGantt />,
      label: "Experience",
      onClick: () => scrollIntoView("experience"),
    },
  ];
  return (
    <div className="fixed inset-x-0 bottom-5 z-50 flex justify-center">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className="bg-neutral-800/50 backdrop-blur-md px-7"
      />
    </div>
  );
}
