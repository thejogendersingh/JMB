import hotelImg from '../../assets/hotel.png';
import { Star, ArrowRight, BedDouble, Compass, Car } from 'lucide-react';

const services = [
  { icon: BedDouble, title: 'Luxury Stay' },
  { icon: Compass, title: 'Desert Tours' },
  { icon: Car, title: 'Car Rental' },
];

export function Intro() {
  return (
    <section id="about" className="pt-12 lg:pt-16 pb-10 lg:pb-16 bg-white relative overflow-hidden">
      <div className="w-[90%] mx-auto">

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <span className="font-sans text-[12px] tracking-[0.28em] uppercase font-semibold text-[#C99A5B] block mb-3">
              FROM ₹2,499 PER NIGHT
            </span>

            {/* Heading — bigger */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[50px] text-[#241C17] font-normal leading-[1.15] mb-5">
              Relax in Our Luxury<br />
              Hotel Resort
            </h2>

            {/* Body — shorter, bigger font */}
            <p className="text-[#666] font-sans text-[15px] sm:text-[16px] leading-[1.8] font-light mb-7 max-w-md">
              A royal sanctuary carved from golden Jaisalmer sandstone — blending timeless Rajasthani heritage with contemporary comfort and proud local hospitality.
            </p>

            {/* ── 3 Services in ONE horizontal row ── */}
            <div className="flex items-start gap-6 mb-8">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2 group text-center">
                    <div className="w-10 h-10 rounded-full border border-[#C99A5B]/50 bg-[#FDF8F1] flex items-center justify-center text-[#C99A5B] group-hover:bg-[#C99A5B] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                    <span className="font-sans text-[11.5px] font-semibold uppercase tracking-wider text-[#241C17] group-hover:text-[#C99A5B] transition-colors duration-300 whitespace-nowrap">
                      {svc.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Trust Bar */}
            <div className="border-t border-gray-200 pt-5 mb-5 flex flex-wrap items-center gap-4 text-[12px] font-sans text-[#555]">
              <span className="font-medium text-[#241C17]">Recommended on:</span>

              {/* Booking.com — favicon + branded text */}
              <span className="flex items-center gap-1.5">
                <img
                  src="https://www.google.com/s2/favicons?domain=booking.com&sz=32"
                  alt=""
                  className="w-4 h-4 rounded-sm object-contain"
                />
                <span className="font-bold text-[#003580] text-[13px]">Booking.com</span>
              </span>

              <span className="text-gray-300">•</span>

              {/* Tripadvisor logo with text */}
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                alt="Tripadvisor"
                className="h-5 w-auto object-contain"
              />

              <span className="text-gray-300">•</span>
              <span className="text-[#C99A5B] font-medium uppercase tracking-wider text-[10.5px]">Luxury Hotel</span>
            </div>

            {/* CTA */}
            <a
              href="#stay"
              className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#241C17] hover:text-[#C99A5B] transition-colors border-b-2 border-[#C99A5B] pb-1 self-start"
            >
              <span>EXPLORE ROOMS &amp; SUITES</span>
              <ArrowRight size={13} />
            </a>

          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end pt-8 sm:pt-10">
            <div className="relative w-full max-w-[370px] sm:max-w-[420px] aspect-square shadow-[0_16px_45px_rgba(0,0,0,0.14)]">

              <img
                src={hotelImg}
                alt="JMB Luxury Hotel Resort"
                className="w-full h-full object-cover rounded-[1px]"
                loading="lazy"
              />

              {/* Inset Border */}
              <div className="absolute inset-3 sm:inset-4 border-2 border-white pointer-events-none z-10" />

              {/* Gold Floating Box */}
              <div className="absolute -top-6 sm:-top-8 inset-x-6 sm:inset-x-8 z-20 bg-[#DEAA6B]/95 backdrop-blur-md text-white p-5 sm:p-6 text-center border border-white/80 shadow-2xl flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-white stroke-white" />
                  ))}
                </div>
                <h3 className="font-sans text-[11px] sm:text-[12px] tracking-[0.25em] uppercase font-bold text-white mb-2">
                  LUXURY HOTEL
                </h3>
                <p className="font-serif text-[12px] sm:text-[13px] italic text-white/95 leading-relaxed font-light">
                  A wonderful serenity has taken possession<br className="hidden sm:inline" />
                  of our royal sanctuary where heritage<br className="hidden sm:inline" />
                  meets timeless hospitality.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
