import hotelImg from '../../assets/hotel.png';
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
      {/* =========================================================
          SUBTLE TOP DECORATION
          ========================================================= */}
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
          lg:w-[82%]
          max-w-[1100px]
          mx-auto
        "
      >
        {/* =======================================================
            SECTION TITLE
            ======================================================= */}
        <div
          className="
            text-center
            max-w-[760px]
            mx-auto
          "
        >
          {/* Flower ornament */}
          <div
            className="
              flex
              items-center
              justify-center
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
            STAY AT JMB
          </span>

          {/* Main heading */}
          <h2
            className="
              font-serif
              font-normal
              text-[#241C17]
              text-[30px]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[46px]
              leading-[1.15]
              tracking-[0.01em]
              mb-4
            "
          >
            A Refined Stay in the Golden City
          </h2>

          {/* =====================================================
              ONLY ONE PARAGRAPH
              ===================================================== */}
          <p
            className="
              font-sans
              text-[#70665E]
              text-[12.5px]
              sm:text-[13.5px]
              md:text-[14px]
              leading-[1.8]
              font-light
              max-w-[610px]
              mx-auto
            "
          >
            Discover a comfortable Jaisalmer stay shaped by warm
            hospitality, timeless surroundings and easy access to the
            Golden City's desert and heritage experiences.
          </p>
        </div>

        {/* =======================================================
            CENTER HOTEL IMAGE
            ======================================================= */}
        <div
          className="
            relative
            flex
            justify-center
            mt-9
            sm:mt-10
            md:mt-12
            lg:mt-14
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[340px]
              sm:max-w-[430px]
              md:max-w-[500px]
              lg:max-w-[560px]
            "
          >
            {/* Image */}
            <div
              className="
                relative
                aspect-[1.08]
                overflow-hidden
                shadow-[0_18px_45px_rgba(36,28,23,0.14)]
              "
            >
              <img
                src={hotelImg}
                alt="JMB Jaisalmer Hotel"
                className="
                  w-full
                  h-full
                  object-cover
                  block
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
                  pointer-events-none
                "
              />
            </div>

            {/* Small sandstone accent underneath */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                -bottom-2
                w-20
                h-[2px]
                bg-[#C99A5B]
              "
            />
          </div>
        </div>

        {/* =======================================================
            SERVICES
            ======================================================= */}
        <div
          className="
            flex
            justify-center
            items-start
            gap-5
            sm:gap-10
            md:gap-16
            mt-10
            sm:mt-11
            md:mt-12
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
                  text-center
                  group
                  min-w-0
                "
              >
                {/* Icon */}
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
                  <Icon
                    size={17}
                    strokeWidth={1.4}
                  />
                </div>

                {/* Label */}
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

        {/* =======================================================
            CTA
            ======================================================= */}
        <div
          className="
            flex
            justify-center
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

            <ArrowRight
              size={13}
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}