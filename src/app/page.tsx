import { FollowerProvider, MouseFollower } from "@/components";
import { Lenis } from "lenis/react";
import { About } from "./about";
import { Experience } from "./experience";
import { Home } from "./home";
import { Skills } from "./skills";
import Background from "@/components/background";

export default function HomePage() {
  return (
    <>
      <MouseFollower />
      <FollowerProvider>
        <main className="relative z-0 overflow-x-hidden">
          <Lenis
            options={{
              lerp: 0.05,
            }}
            root
          >
            <div className="fixed inset-0 z-[-1]">
              <Background
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
            <Home />
            <About />
            <Skills />
            <Experience />
          </Lenis>
        </main>
      </FollowerProvider>
    </>
  );
}
