"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import CourseCard from "@/components/ui/CourseCard";
import { CHIP_ROWS, COURSES } from "@/lib/constants";
import { clsx } from "@/lib/clsx";

export default function CourseShowcase() {
  const [active, setActive] = useState("Featured");
  
  return (
    <section id="courses" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Section */}
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-3 sm:gap-4 text-center">
          <h2 className="max-w-[588px] font-heading text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-vulcan">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] sm:leading-[160%] text-shuttle-400">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Chips Section */}
        <div className="mx-auto mt-8 sm:mt-10 lg:mt-12 flex max-w-[860px] flex-col items-center gap-2 sm:gap-3">
          {CHIP_ROWS.map((row, r) => (
            <div key={r} className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {row.map((c) => (
                <button 
                  key={c} 
                  onClick={() => setActive(c)} 
                  aria-pressed={active === c}
                  className={clsx(
                    "rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[14px] font-medium leading-[120%] transition", 
                    active === c ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
                  )}
                >
                  {c}
                </button>
              ))}
              {r === CHIP_ROWS.length - 1 && (
                <span className="px-2 py-1.5 sm:py-2 text-[13px] sm:text-[14px] font-medium text-blue">
                  + More
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Courses Grid Section */}
        <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {COURSES.map((c) => <CourseCard key={c.title} course={c} />)}
        </div>
      </Container>
    </section>
  );
}