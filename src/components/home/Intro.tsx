import hotelImg from '../../assets/hotel-img.webp';
import {
  ArrowRight,
  BedDouble,
  Compass,
  Car,
  Flower2,
} from 'lucide-react';

const services = [
  {
    icon: BedDouble,
    title: 'Luxury Stay',
  },
  {
    icon: Compass,
    title: 'Desert Tours',
  },
  {
    icon: Car,
    title: 'Car Rental',
  },
];

export function Intro() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        pt-14
        sm:pt-16
        md:pt-20
        lg:pt-24
        pb-14
        sm:pb-16
        md:pb-20
        lg:pb-24
      "
    >
      {/* Top subtle decoration */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-40
          sm:w-52
          h-px
          bg-[#C99A5B]/25
        "
      />

      <div
        className="
          absolute
          top-[-90px]
          left-1/2
          -translate-x-1/2
          w-[220px]
          h-[220px]
          rounded-full
          border
          border-[#C99A5B]/[0.06]
          pointer-events-none
        "
      />

      <div
        className="
          relative
          w-[90%]
          sm:w-[88%]
          md:w-[86%]
          lg:w-[88%]
          xl:w-[84%]
          max-w-[1240px]
          mx-auto
        "
      >
        {/* Main responsive grid: 1 column on mobile, 2 columns on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column on Desktop / Top on Mobile */}
          <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left">
            {/* Flower ornament */}
            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-3
                mb-3
              "
            >
              <span className="w-9 sm:w-12 h-px bg-[#C99A5B]/40" />
              <Flower2
                size={18}
                strokeWidth={1.2}
                className="text-[#C99A5B]"
              />
              <span className="w-9 sm:w-12 h-px bg-[#C99A5B]/40" />
            </div>

            {/* Small title */}
            <span
              className="
                block
                font-sans
                text-[9px]
                sm:text-[10px]
                md:text-[11px]
                tracking-[0.28em]
                uppercase
                font-semibold
                text-[#C99A5B]
                mb-3
              "
            >
              HOTEL VASUDHA HERITAGE
            </span>

            {/* Main heading */}
            <h2
              className="
                font-serif
                font-normal
                text-[#241C17]
                text-[30px]
                sm:text-[36px]
                md:text-[40px]
                lg:text-[44px]
                xl:text-[48px]
                leading-[1.15]
                tracking-[0.01em]
                mb-4
              "
            >
              A Refined Stay in the Golden City
            </h2>

            {/* Paragraph */}
            <p
              className="
                font-sans
                text-[#70665E]
                text-[12.5px]
                sm:text-[13.5px]
                md:text-[14px]
                leading-[1.8]
                font-light
                max-w-[560px]
                mx-auto
                lg:mx-0
              "
            >
              Discover a comfortable Jaisalmer stay shaped by warm
              hospitality, timeless surroundings and easy access to the
              Golden City's desert and heritage experiences.
            </p>

            {/* Mobile Hotel Image (shown on mobile, hidden on lg+) */}
            <div className="lg:hidden relative flex justify-center mt-8 sm:mt-10 mb-8 sm:mb-10">
              <div className="relative w-full max-w-[340px] sm:max-w-[430px] md:max-w-[480px]">
                <div className="relative aspect-[1.08] overflow-hidden shadow-[0_18px_45px_rgba(36,28,23,0.14)] rounded-lg">
                  <img
                    src={hotelImg}
                    alt="Hotel Vasudha Heritage"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                  <div className="absolute inset-3 sm:inset-4 border border-white/90 pointer-events-none" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-20 h-[2px] bg-[#C99A5B]" />
              </div>
            </div>

            {/* Services */}
            <div
              className="
                flex
                justify-center
                lg:justify-start
                items-start
                gap-5
                sm:gap-8
                md:gap-12
                mt-8
                lg:mt-9
              "
            >
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      flex-col
                      items-center
                      lg:items-start
                      text-center
                      lg:text-left
                      group
                      min-w-0
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-full
                        border
                        border-[#C99A5B]/40
                        bg-[#FDF9F3]
                        flex
                        items-center
                        justify-center
                        text-[#C99A5B]
                        transition-all
                        duration-300
                        group-hover:bg-[#C99A5B]
                        group-hover:text-white
                        group-hover:border-[#C99A5B]
                      "
                    >
                      <Icon size={17} strokeWidth={1.4} />
                    </div>

                    <span
                      className="
                        mt-2
                        font-sans
                        text-[8.5px]
                        sm:text-[9.5px]
                        md:text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        sm:tracking-[0.12em]
                        text-[#241C17]
                        whitespace-nowrap
                        transition-colors
                        duration-300
                        group-hover:text-[#C99A5B]
                      "
                    >
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div
              className="
                flex
                justify-center
                lg:justify-start
                mt-8
                sm:mt-9
                md:mt-10
              "
            >
              <a
                href="#stay"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[9.5px]
                  sm:text-[10px]
                  md:text-[10.5px]
                  font-sans
                  font-semibold
                  tracking-[0.22em]
                  uppercase
                  text-[#241C17]
                  hover:text-[#C99A5B]
                  transition-colors
                  duration-300
                  border-b
                  border-[#C99A5B]
                  pb-1.5
                "
              >
                <span>EXPLORE ROOMS &amp; SUITES</span>
                <ArrowRight size={13} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Right Column on Desktop (hidden on mobile, visible on lg+) */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 justify-center lg:justify-end">
            <div
              className="
                relative
                w-full
                max-w-[480px]
                xl:max-w-[540px]
              "
            >
              <div
                className="
                  relative
                  aspect-[1.05]
                  overflow-hidden
                  shadow-[0_20px_55px_rgba(36,28,23,0.16)]
                  rounded-xl
                "
              >
                <img
                  src={hotelImg}
                  alt="Hotel Vasudha Heritage"
                  className="
                    w-full
                    h-full
                    object-cover
                    block
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                  "
                  loading="lazy"
                />

                {/* Clean inset border */}
                <div
                  className="
                    absolute
                    inset-3
                    sm:inset-4
                    border
                    border-white/90
                    rounded-lg
                    pointer-events-none
                  "
                />
              </div>

              {/* Sandstone accent underneath */}
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -bottom-2.5
                  w-24
                  h-[2px]
                  bg-[#C99A5B]
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
