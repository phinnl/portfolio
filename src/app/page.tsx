import { About } from "./about";
import { Contact } from "./contact";
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
      <Contact />
    </main>
  );
}
