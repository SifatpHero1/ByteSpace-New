import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Squiggle, Ring, Cone, Cylinder, Pyramid } from "@/components/ui/Shapes";

export default function CreatorCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-blue py-16 sm:py-24 md:py-36">
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      
      {/* Decorative Shapes - Hidden on mobile to keep it clean, scaled for larger screens */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <Squiggle tone="lime" variant="b" className="absolute -left-8 -top-6 w-[120px] lg:w-[170px]" />
        <Squiggle tone="white" variant="a" className="absolute left-[14%] top-[20px] w-[60px] lg:w-[80px]" />
        <Pyramid tone="lime" className="absolute right-[20%] top-[10px] w-[90px] lg:w-[120px]" />
        <Cylinder tone="white" className="absolute -right-6 top-[40px] w-[120px] lg:w-[170px]" />
        <Cone tone="white" className="absolute -left-6 bottom-[70px] w-[80px] lg:w-[110px]" />
        <Ring tone="lime" className="absolute left-[3%] -bottom-16 w-[140px] lg:w-[190px]" />
        <Squiggle tone="lime" variant="a" className="absolute -right-2 bottom-[-20px] w-[90px] lg:w-[120px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 md:gap-6 text-center">
        <h2 className="max-w-[710px] font-heading text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-shuttle-50">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        
        <p className="max-w-[964px] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] sm:leading-[160%] text-shuttle-50">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        
        <Button 
          href="/signup" 
          variant="lime" 
          className="mt-2 sm:mt-4 !px-5 !py-2 !text-[14px] sm:!px-6 sm:!py-2.5 sm:!text-[16px]"
        >
          Join as Creator
        </Button>
      </Container>
    </section>
  );
}