import {
  BedDouble,
  Compass,
  Car,
  ArrowUpRight,
} from 'lucide-react';

import desertCampImg from '../../assets/desert-camp.webp';

const services = [
  {
    icon: BedDouble,
    title: 'Stay',
    description: 'Heritage rooms & suites',
    href: '/hotel',
  },
  {
    icon: Compass,
    title: 'Tours',
    description: 'Desert & Jaisalmer experiences',
    href: '/tour',
  },
  {
    icon: Car,
    title: 'Car Rental',
    description: 'Comfortable travel across Rajasthan',
    href: '/car-rental',
  },
];

export function FinalCTA() {
  const whatsappLink =
    'https://wa.me/917734862004?text=Hello,%20I%20would%20like%20to%20plan%20my%20complete%20Jaisalmer%20trip%20(Stay%20+%20Tours%20+%20Car%20Rental).';

  return (
    <section
      id="plan-your-trip"
      className="
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#241C17]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-[1.02]
        "
        style={{
          backgroundImage: `url("${desertCampImg}")`,
        }}
      />

      {/* Warm sandstone overlay */}
      <div className="absolute inset-0 bg-[#241C17]/65" />

      {/* Soft center light */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C99A5B]/10
          blur-[100px]
        "
      />

      {/* Edge vignette */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#241C17]/75
          via-transparent
          to-[#241C17]/75
        "
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-[92%]
          max-w-[1120px]
          text-center
        "
      >

        {/* Eyebrow */}

        <span
          className="
            mb-2.5
            block
            font-sans
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.32em]
            text-[#E8D3AE]
            sm:text-[10px]
          "
        >
          PLAN YOUR JAISALMER JOURNEY
        </span>

        {/* Heading */}

        <h2
          className="
            mx-auto
            max-w-[700px]
            font-serif
            text-[31px]
            font-normal
            leading-[1.12]
            text-white
            sm:text-[38px]
            md:text-[44px]
          "
        >
          Stay. Explore. Travel.
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-[570px]
            font-sans
            text-[12px]
            font-light
            leading-[1.7]
            text-white/75
            sm:text-[13px]
          "
        >
          Everything you need for a seamless Jaisalmer experience,
          thoughtfully brought together by Hotel Vasudha Heritage.
        </p>

        {/* =====================================================
            THREE SERVICES
            ===================================================== */}

        <div
          className="
            mx-auto
            mt-7
            grid
            max-w-[850px]
            grid-cols-1
            border-y
            border-white/20
            sm:mt-8
            sm:grid-cols-3
          "
        >

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <a
                key={service.title}
                href={service.href}
                className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-300
                  hover:bg-white/[0.07]
                  sm:px-5
                  sm:py-5
                  ${
                    index !== 0
                      ? 'border-t border-white/15 sm:border-l sm:border-t-0'
                      : ''
                  }
                `}
              >

                <div className="flex items-center gap-3.5">

                  {/* Minimal icon */}

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[#C99A5B]/60
                      text-[#E8D3AE]
                      transition-all
                      duration-300
                      group-hover:border-[#E8D3AE]
                      group-hover:bg-[#C99A5B]
                      group-hover:text-[#241C17]
                    "
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.3}
                    />
                  </div>

                  <div>

                    <h3
                      className="
                        font-serif
                        text-[18px]
                        font-normal
                        leading-none
                        text-white
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        font-sans
                        text-[9px]
                        font-light
                        leading-tight
                        tracking-wide
                        text-white/60
                      "
                    >
                      {service.description}
                    </p>

                  </div>

                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.2}
                  className="
                    shrink-0
                    text-white/50
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#E8D3AE]
                  "
                />

              </a>
            );
          })}

        </div>

        {/* =====================================================
            MAIN CTA
            ===================================================== */}

        <div className="mt-7 flex justify-center sm:mt-8">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              bg-[#C99A5B]
              px-7
              py-3
              font-sans
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#241C17]
              shadow-[0_8px_25px_rgba(0,0,0,0.18)]
              transition-all
              duration-300
              hover:bg-[#E0B477]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
              sm:px-8
              sm:py-3.5
              sm:text-[10px]
            "
          >
            PLAN YOUR JAISALMER TRIP
          </a>

        </div>

      </div>
    </section>
  );
}