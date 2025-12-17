import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { SnapScrollRoot } from "@/components/ui/SnapScrollRoot";

export default function Home() {
  return (
    <main className="contents">
      <SnapScrollRoot>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      </SnapScrollRoot>
    </main>
  );
}
