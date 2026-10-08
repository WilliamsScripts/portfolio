import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Backdrop from "@/components/ui/Backdrop";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <Backdrop />
      <Header />
      <main id="main-content">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
