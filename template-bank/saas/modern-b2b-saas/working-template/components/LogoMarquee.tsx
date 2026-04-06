import React from 'react';

const mockLogos = ["Acme", "Vercel", "Stripe", "Prisma", "Linear", "Figma", "Webflow"];

export default function LogoMarquee() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-black">
      <div className="container mx-auto px-4 text-center mb-10">
        <p className="text-sm font-medium tracking-widest text-white/30 uppercase">
          Trusted by the World's most innovative teams
        </p>
      </div>

      {/* Marquee Effect Layer */}
      <div className="flex gap-12 lg:gap-24 opacity-30 grayscale saturate-0 hover:grayscale-0 hover:saturate-100 hover:opacity-70 transition-all duration-700 animate-scroll-inline pointer-events-none">
        {[1,2,3].map((set) => (
          <div key={set} className="flex gap-12 lg:gap-24 items-center shrink-0">
            {mockLogos.map((logo) => (
              <span key={logo} className="text-2xl lg:text-3xl font-bold tracking-tighter text-white/80">
                {logo}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
