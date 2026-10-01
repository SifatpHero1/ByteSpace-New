import Container from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { TESTIMONIALS } from "@/lib/constants";

const PHOTOS = ["/images/sarah.png", "/images/james.png", "/images/alex.png"];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24">
      
      {/* Background Blurs - Scaled down for mobile/tablet */}
      <div aria-hidden className="absolute left-[38%] -top-[30px] sm:-top-[60px] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[520px] lg:w-[520px] rounded-full blur-[30px] sm:blur-[40px]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,.5) 0%, rgba(203,252,1,0) 70%)" }} />
      <div aria-hidden className="absolute -left-[150px] sm:-left-[250px] top-[100px] sm:top-[250px] h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] lg:h-[700px] lg:w-[700px] rounded-full blur-[30px] sm:blur-[40px]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,.22) 0%, rgba(0,59,226,0) 70%)" }} />

      <Container className="relative">
        
        {/* Header Section */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start text-center lg:text-left items-center lg:items-start">
          <h2 className="max-w-[577px] font-heading text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] sm:leading-[160%] text-ink">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-3 items-start gap-4 sm:gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className="rounded-[20px] sm:rounded-[24px] bg-white p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,.04)]">
              
              {/* Avatar size adjusted for mobile */}
              <Avatar src={PHOTOS[i]} size={56} className="!border-0 sm:!w-[70px] sm:!h-[70px]" />
              
              <figcaption className="mt-3 sm:mt-4">
                <p className="font-heading text-[18px] sm:text-[20px] font-semibold leading-7 tracking-[-0.01em]">{t.name}</p>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] sm:leading-[160%] text-blue">{t.role}</p>
              </figcaption>
              
              <blockquote className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[150%] sm:leading-[160%] text-ink">
                {t.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}