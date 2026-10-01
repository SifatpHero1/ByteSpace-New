import Container from "@/components/ui/Container";
import { PenTool, Smartphone, Laptop, Building2, Megaphone, Camera } from "lucide-react";

const CATS = [
  { label: "Design", Icon: PenTool }, { label: "Development", Icon: Smartphone },
  { label: "IT & Software", Icon: Laptop }, { label: "Business", Icon: Building2 },
  { label: "Marketing", Icon: Megaphone }, { label: "Photography", Icon: Camera },
];

export default function Explore() {
  return (
    <section className="bg-white pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
      <Container className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        
        {/* Header Section */}
        <div className="flex max-w-[917px] flex-col items-center gap-3 sm:gap-4 text-center">
          <h2 className="font-heading text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-vulcan">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-[760px] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] sm:leading-[160%] text-shuttle-400">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid */}
        <ul className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {CATS.map(({ label, Icon }) => (
            <li 
              key={label} 
              className="flex h-[110px] sm:h-[125px] lg:h-[137px] flex-col items-center justify-center gap-2.5 sm:gap-3 lg:gap-4 rounded-[16px] sm:rounded-[20px] border border-shuttle-200 bg-white transition hover:shadow-md hover:border-shuttle-300"
            >
              <span className="grid h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] lg:h-[50px] lg:w-[50px] place-items-center rounded-full bg-lime-glow text-shuttle-950">
                {/* Icon size adjusted for different screens */}
                <Icon size={20} className="sm:hidden" />
                <Icon size={24} className="hidden sm:block" />
              </span>
              <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[120%] text-center px-2">
                {label}
              </span>
            </li>
          ))}
        </ul>
        
      </Container>
    </section>
  );
}