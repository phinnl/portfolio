import { About } from "./about";
import { Experience } from "./experience";
import { Home } from "./home";
import { Skills } from "./skills";

export default function HomePage() {
  return (
    <main className="relative z-0 mx-auto max-w-7xl">
      <Home />
      <About />
      <Skills />
      <Experience />
      {/* <section className="h-screen" id="contact"></section> */}
    </main>
  );
}
