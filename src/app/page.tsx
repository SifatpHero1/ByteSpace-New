import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoBand from "@/components/sections/LogoBand";
import CourseShowcase from "@/components/sections/CourseShowcase";
import Explore from "@/components/sections/Explore";
import GrowthPath from "@/components/sections/GrowthPath";
import CreatorTools from "@/components/sections/CreatorTools";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LogoBand />
        <CourseShowcase />
        <Explore />
        <GrowthPath />
        <CreatorTools />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
