"use client";

import { PropsWithChildren } from "react";
import {
  MouseFollower as ReactMouseFollower,
  UpdateFollower,
} from "react-mouse-follower";

export function FollowerProvider({ children }: PropsWithChildren) {
  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: 2,
        followSpeed: 1.5,
        scale: 4,
        mixBlendMode: "difference",
      }}
    >
      {children}
    </UpdateFollower>
  );
}

export function MouseFollower() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return !isMobile && <ReactMouseFollower />;
}
