import Container from "@/components/ui/Container";
import { Check } from "@/components/ui/Icons";
import { HappyStudentsCard, RevenueCards } from "@/components/ui/InfoCards";
import { CREATOR_FEATURES } from "@/lib/constants";

export default function CreatorTools() {
  return (
    <section id="creators" className="relative overflow-hidden bg-[#fafafa] pb-16 pt-8 sm:pb-24 sm:pt-12">
      
      {/* Background Blurs - Responsive sizing */}
      <div aria-hidden className="absolute -left-[150px] sm:-left-[200px] bottom-[-100px] sm:bottom-[-150px] h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[700px] rounded-full blur-[30px]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,.35) 0%, rgba(203,252,1,0) 70%)" }} />
      <div aria-hidden className="absolute -right-[150px] sm:-right-[200px] bottom-0 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[800px] lg:w-[800px] rounded-full blur-[30px]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,.18) 0%, rgba(0,59,226,0) 70%)" }} />

      <Container className="relative grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
        
        {/* Illustration Section */}
        <div className="relative order-2 mx-auto h-[380px] sm:h-[480px] lg:h-[596px] w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[535px] lg:order-1 lg:mx-0">
          
          {/* Revenue cards */}
          <RevenueCards className="absolute left-0 top-[15px] sm:top-[25px] lg:top-[46px] z-0 w-[130px] sm:w-[170px] lg:w-auto" />

          {/* Woman Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/creator-woman.png"
            alt="Creator with headset holding a tablet"
            className="absolute -left-[10px] sm:-left-[20px] lg:-left-[36px] bottom-0 sm:bottom-[2px] lg:bottom-[5px] z-10 h-[340px] sm:h-[440px] lg:h-[553px] max-w-none object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,.15)] lg:drop-shadow-[0_30px_30px_rgba(0,0,0,.2)]"
          />

          {/* Lime coil (একদম ছোট করা হয়েছে এবং স্ট্রেচ হওয়া রোধ করতে h-auto ব্যবহার করা হয়েছে) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
  src="/images/shapes/coil-a-lime.png"
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute z-[15] w-[80px] h-[90px] sm:w-[90px] sm:h-[80px] lg:w-[120px] lg:h-[120px] top-[80px] sm:top-[160px] lg:top-[148px] left-[45%] sm:left-[48%] lg:left-[55%] object-contain -scale-x-100"
/>

          {/* Happy Students Card */}
          <HappyStudentsCard className="absolute right-0 top-[230px] sm:top-[310px] lg:top-[410px] z-20 w-[130px] sm:w-[160px] lg:w-auto" />
        </div>

        {/* Text & Content Section */}
        <div className="order-1 flex flex-col gap-4 sm:gap-5 lg:gap-6 lg:order-2 text-center lg:text-left items-center lg:items-start">
          
          <h2 className="max-w-[391px] font-heading text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-shuttle-950">
            Create &amp; Manage Courses Easily.
          </h2>
          
          <p className="max-w-[574px] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-6 sm:leading-7 text-shuttle-700">
            <strong className="font-bold text-shuttle-950">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>
          
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            {CREATOR_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[120%]">
                <Check className="text-blue w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

      </Container>
    </section>
  );
}