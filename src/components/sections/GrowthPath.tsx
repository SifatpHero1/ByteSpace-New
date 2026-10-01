import Container from "@/components/ui/Container";
import { Squiggle } from "@/components/ui/Shapes";
import { LearningProgressCard } from "@/components/ui/InfoCards";
import { STATS, COURSES } from "@/lib/constants";
import { AvatarStack } from "@/components/ui/Avatar";

export default function GrowthPath() {
  const c = COURSES[0];
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24">
      
      {/* Background Blurs - Scaled down for mobile/tablet to improve performance and layout */}
      <div aria-hidden className="absolute -left-[100px] -top-[150px] h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:-left-[200px] lg:-top-[300px] lg:h-[900px] lg:w-[900px] rounded-full blur-[30px]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,.45) 0%, rgba(203,252,1,.1) 55%, rgba(203,252,1,0) 100%)" }} />
      <div aria-hidden className="absolute -left-[200px] top-[100px] h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:-left-[400px] lg:top-[250px] lg:h-[900px] lg:w-[900px] rounded-full blur-[30px]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,.2) 0%, rgba(0,59,226,.05) 55%, rgba(0,59,226,0) 100%)" }} />
      <div aria-hidden className="absolute -right-[150px] top-[50px] h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:-right-[300px] lg:top-[100px] lg:h-[900px] lg:w-[900px] rounded-full blur-[30px]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,.12) 0%, rgba(0,59,226,0) 70%)" }} />

      <Container className="relative grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
        
        {/* Left Column: Text & Stats */}
        <div className="flex flex-col gap-6 sm:gap-8 text-center lg:text-left items-center lg:items-start">
          <h2 className="max-w-[577px] font-heading text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-shuttle-950">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="max-w-[477px] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] sm:leading-[160%] text-shuttle-700">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          <dl className="flex gap-6 sm:gap-8 lg:gap-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-heading text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[36px] sm:leading-[40px] lg:leading-[44px] tracking-[-0.01em] text-blue">{s.value}</dt>
                <dd className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[150%] sm:leading-[160%] text-shuttle-700">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Column: Illustration */}
        <div className="relative mx-auto h-[350px] sm:h-[420px] lg:h-[480px] w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[560px]">
          
          {/* Course Card */}
          <article className="absolute left-0 top-0 w-[170px] sm:w-[230px] lg:w-[290px] rounded-[14px] sm:rounded-[16px] lg:rounded-[20px] border border-shuttle-100 bg-white p-2 sm:p-2.5 lg:p-3 shadow-[0_10px_30px_rgba(0,0,0,.06)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt="" className="h-[90px] sm:h-[120px] lg:h-[160px] w-full rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] object-cover" />
            <h3 className="mt-2 sm:mt-3 font-heading text-[12px] sm:text-[14px] lg:text-[16px] font-semibold leading-tight">{c.title}</h3>
            <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-ink mt-0.5">by <span className="text-blue">{c.author}</span></p>
            <div className="mt-1.5 sm:mt-2"><AvatarStack count={3} size={20} /></div>
            <p className="mt-1.5 sm:mt-2 font-heading text-[12px] sm:text-[14px] lg:text-[16px] font-semibold text-blue">{c.price}<span className="font-body text-[9px] sm:text-[10px] lg:text-[11px] font-normal text-ink">/lifetime</span></p>
          </article>

          {/* Hero Man Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-man.png" alt="Student learning online" className="absolute bottom-0 right-0 h-[260px] sm:h-[340px] lg:h-[440px] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,.15)] lg:drop-shadow-[0_30px_30px_rgba(0,0,0,.2)]" />
          
          {/* Learning Progress Card */}
          <LearningProgressCard className="absolute right-0 top-[160px] sm:top-[200px] lg:top-[230px] w-[120px] sm:w-[160px] lg:w-[200px]" />
          
          {/* Squiggle */}
          <Squiggle tone="lime" variant="a" className="absolute -right-2 top-[90px] sm:top-[110px] lg:top-[130px] w-[60px] sm:w-[80px] lg:w-[100px]" />
        </div>
      </Container>
    </section>
  );
}