import { BarChart3, Star } from "lucide-react";
import { AvatarStack } from "./Avatar";

export type Course = { title: string; image: string; author: string; level: string; price: string; lessons: string; duration: string; comments: string; rating: string };

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-[20px] border border-shuttle-200 bg-white p-3">
      <div className="relative h-[180px] overflow-hidden rounded-[14px] bg-shuttle-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={course.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-x-2 bottom-2 flex justify-between gap-1 text-[11px] font-medium text-shuttle-700">
          {[course.lessons, course.duration, course.comments].map((t) => (
            <span key={t} className="rounded-full bg-white/70 px-2 py-0.5 backdrop-blur-sm">{t}</span>
          ))}
        </div>
      </div>
      <div className="px-1 pb-1 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate font-heading text-[18px] font-semibold leading-[120%] tracking-[-0.01em] text-black">{course.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-[16px] text-ink">{course.rating}<Star size={14} className="fill-shuttle-200 text-shuttle-200" /></span>
        </div>
        <p className="text-[12px] leading-[160%] text-ink">by <span className="text-blue">{course.author}</span></p>
        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1 rounded-full bg-shuttle-50 px-3 py-1 text-[12px] font-medium text-shuttle-700"><BarChart3 size={12} />{course.level}</span>
          <AvatarStack count={4} size={24} label="26+" />
        </div>
        <p className="mt-3 font-heading text-[18px] font-semibold text-blue">{course.price}<span className="font-body text-[12px] font-normal text-ink">/lifetime</span></p>
      </div>
    </article>
  );
}
