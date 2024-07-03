import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import Particle from "@/Utils/Particles";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="bg-[#000319] flex flex-col min-h-screen overflow-hidden sm:px-10 px-5">
      <Toaster />
      <div className=" container mx-auto w-full">
        <Particle />
        <Navbar />
        {/* <Nav/> */}
        <div className="mt-16">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
