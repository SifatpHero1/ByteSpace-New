import Container from "@/components/ui/Container";
import { Waves, Sun, Zap, Dices, Orbit } from "lucide-react";

const LOGOS = [Waves, Sun, Zap, Dices, Orbit];

export default function LogoBand() {
  return (
    <section aria-label="Trusted by" className="bg-shuttle-50 py-10 sm:py-12 lg:py-14">
      <Container className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10 sm:gap-y-5 lg:gap-x-14 lg:gap-y-6 text-shuttle-400">
        {LOGOS.map((Icon, i) => (
          <div key={i} className="flex items-center gap-1.5 sm:gap-2">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-[30px] lg:w-[30px]" />
            <span className="font-heading text-[16px] sm:text-[18px] lg:text-[22px] font-semibold tracking-[-0.01em]">
              Logoipsum
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}