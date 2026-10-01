import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Search } from "lucide-react";
import { Squiggle, Ring, Pyramid, Cylinder } from "@/components/ui/Shapes";
import {
  CategoryBadge,
  LearningProgressCard,
  HappyStudentsCard,
} from "@/components/ui/InfoCards";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-blue">
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      <Navbar />

      {/* 3D shapes: size and x-position scale with viewport width (design = 1440px) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <Squiggle
          tone="lime"
          variant="b"
          className="absolute left-0 top-[285px] w-[min(14.9vw,215px)]"
        />
        <Squiggle
          tone="white"
          variant="a"
          className="absolute left-[15.1%] top-[507px] w-[min(7.85vw,113px)]"
        />
        <Ring
          tone="white"
          className="absolute left-[4.9%] top-[741px] w-[min(16.6vw,239px)]"
        />
        <Cylinder
          tone="lime"
          className="absolute -right-[1.95vw] top-[257px] w-[min(17vw,245px)]"
        />
        <Pyramid
          tone="white"
          className="absolute right-[12.6%] top-[486px] w-[min(8.8vw,127px)]"
        />
        <Squiggle
          tone="white"
          variant="a"
          className="absolute right-[3.6%] top-[711px] w-[min(13.3vw,191px)]"
        />
      </div>

      {/* Heading + search */}
      <Container className="relative z-10 flex flex-col items-center pt-8 text-center lg:pt-[52px]">
        <h1 className="max-w-[935px] font-heading text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-white sm:text-[48px] md:text-[60px] lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mt-6 max-w-[860px] text-[16px] leading-[160%] text-shuttle-100 md:mt-8 md:text-[18px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>

        <form
          role="search"
          className="mt-8 flex w-full max-w-[580px] items-start justify-center gap-3 sm:gap-4 lg:mt-[60px]"
        >
          <div className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-4 sm:px-5">
            <Search size={20} className="shrink-0 text-shuttle-400" />
            <label htmlFor="q" className="sr-only">
              Search courses
            </label>
            <input
              id="q"
              placeholder="Course, topic, creator"
              className="min-w-0 flex-1 bg-transparent text-[16px] placeholder:text-shuttle-400 focus:outline-none"
            />
          </div>
          <Button
            variant="lime"
            type="submit"
            className="h-[46px] w-[88px] shrink-0 !px-0 !py-0 text-[16px] sm:w-[104px]"
          >
            Search
          </Button>
        </form>
      </Container>

      {/* Hero visual: circle + man + floating cards */}
      <div className="relative mx-auto mt-12 h-[420px] w-full max-w-[1440px] lg:mt-[71px] lg:h-[438px]">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-lime-glow lg:h-[min(80vw,1150px)] lg:w-[min(80vw,1150px)]"
        />

        {/* man: head sits ~36px above the circle top, feet at section bottom */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-man.png"
          alt="Smiling student with headset and laptop"
          className="absolute bottom-0 left-1/2 h-[92%] max-w-none -translate-x-1/2 object-contain lg:bottom-auto lg:top-[-36px] lg:h-[475px]"
        />

        <CategoryBadge className="absolute hidden lg:left-1/2 lg:top-[55px] lg:-ml-[314px] lg:block" />
        <LearningProgressCard className="absolute hidden lg:left-1/2 lg:top-[66px] lg:ml-[123px] lg:block" />
        <HappyStudentsCard className="absolute bottom-[24px] left-4 sm:bottom-[40px] lg:bottom-auto lg:left-1/2 lg:top-[252px] lg:-ml-[389px]" />
      </div>
    </section>
  );
}