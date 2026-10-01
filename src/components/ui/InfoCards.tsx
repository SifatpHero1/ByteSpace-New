import { Star } from "./Icons";
import { AvatarStack } from "./Avatar";
import { clsx } from "@/lib/clsx";

const card = "rounded-[16px] bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)]";

export function LearningProgressCard({ className }: { className?: string }) {
  return (
    <div className={clsx(card, "w-[230px] p-4", className)}>
      <p className="text-[14px] font-medium leading-6">Learning Progress</p>
      <p className="font-heading text-[48px] font-semibold leading-[120%] tracking-[-0.01em]">55%</p>
      <div className="mt-2 h-2 rounded-full bg-[#f6f6f6]"><div className="h-2 w-[56%] rounded-full bg-lime-glow" /></div>
    </div>
  );
}

export function HappyStudentsCard({ className }: { className?: string }) {
  return (
    <div className={clsx(card, "w-[260px] p-4", className)}>
      <p className="text-[16px] font-medium leading-[120%]">Happy Students</p>
      <p className="flex items-center gap-1 text-[12px] leading-[160%]">
        4.5 <span className="text-shuttle-400">(240)</span> <Star className="h-3 w-3 text-lime-glow" />
      </p>
      <div className="mt-2"><AvatarStack count={7} size={32} label="2K+" /></div>
    </div>
  );
}

export function CategoryBadge({ className }: { className?: string }) {
  return (
    <div className={clsx(card, "w-[210px] p-4", className)}>
      <p className="text-[16px] font-medium leading-[120%]">UI/UX Design</p>
      <p className="mt-1 flex items-center gap-2 text-[12px] leading-[160%] text-shuttle-400">
        200 Courses <span className="text-[10px]">•</span> 1000+ Students
      </p>
    </div>
  );
}

export function RevenueCards({ className }: { className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <div className="w-[190px] rounded-[16px] bg-blue p-4 text-shuttle-50 shadow-lg">
        <p className="text-[14px] font-medium leading-[120%]">Total Revenue</p>
        <p className="text-[10px]">July 1-28</p>
        <p className="mt-2 font-heading text-[24px] font-semibold leading-8">$120.29</p>
        <div className="mt-2 h-2 rounded-full bg-white"><div className="h-2 w-[56%] rounded-full bg-lime-glow" /></div>
      </div>
      <div className="w-[170px] rounded-[16px] bg-blue p-4 text-shuttle-50 shadow-lg">
        <p className="text-[14px] font-medium leading-[120%]">Year to Date</p>
        <p className="text-[10px]">2023</p>
        <p className="mt-2 font-heading text-[24px] font-semibold leading-8">$1,200.38</p>
        <span className="mt-2 inline-block rounded-full bg-lime-glow px-2 text-[10px] font-medium leading-5 text-shuttle-950">+12$</span>
      </div>
    </div>
  );
}
