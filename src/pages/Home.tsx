import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Social } from "@/components/sections/Social";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

export default function Home() {
  // Ensure the page starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
