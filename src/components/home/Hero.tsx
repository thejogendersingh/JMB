import { useEffect, useState } from 'react';
import desertCampImg from '../../assets/desert-camp.png';
import carFleetImg from '../../assets/places/car-fleet.png';
import desertDunesImg from '../../assets/places/desert-park.jpg';

const heroSlides = [
  {
    image: desertCampImg,
    tag: 'SAM DESERT RESORT & CAMP',
  },
  {
    image: carFleetImg,
    tag: 'DESERT SAFARI & LUXURY FLEET',
  },
  {
    image: desertDunesImg,
    tag: 'GOLDEN THAR DESERT DUNES',
  },
];

export function Hero() {
  const whatsappBooking =
    'https://wa.me/917734862004?text=Hello,%20I%20would%20like%20to%20plan%20my%20stay%20at%20Hotel%20Vasudha%20Heritage%20Jaisalmer.';

  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      const progress = Math.min(Math.max(scrollY / 420, 0), 1);

      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', updateScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  // Normal radius at top → larger radius while scrolling
  const radius = 8 + scrollProgress * 34;

  // Small upward movement during scroll
  const translateY = scrollProgress * -18;

  return (
    <section
      className="
        relative
        w-full
        h-[100svh]
        min-h-[100svh]
        md:h-screen
        md:min-h-screen
        overflow-hidden
        bg-white
        z-10
      "
    >
      {/* =========================================================
          HERO IMAGE SLIDER (3 Images)
          ========================================================= */}
      <div
        className="
          absolute
          inset-0
          overflow-hidden
          will-change-transform
        "
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
          borderBottomLeftRadius: `${radius}px`,
          borderBottomRightRadius: `${radius}px`,
        }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute
              inset-0
              bg-cover
              bg-center
              pointer-events-none
              transition-all
              duration-1000
              ease-in-out
              ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105 pointer-events-none'
              }
            `}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundPosition: 'center center',
            }}
          />
        ))}

        {/* Very light overall overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/[0.15]
            pointer-events-none
          "
        />

        {/* Subtle top/bottom contrast */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-gradient-to-b
            from-black/[0.25]
            via-transparent
            to-black/[0.20]
          "
        />

        {/* Very soft local contrast behind text */}
        <div
          className="
            absolute
            left-1/2
            top-[48%]
            -translate-x-1/2
            -translate-y-1/2
            w-[88%]
            sm:w-[70%]
            md:w-[600px]
            lg:w-[700px]
            h-[220px]
            sm:h-[250px]
            md:h-[280px]
            bg-black/[0.08]
            blur-3xl
            pointer-events-none
          "
        />
      </div>

      {/* =========================================================
          SLIDE INDICATOR PILLS (3 Images Selector)
          ========================================================= */}
      <div className="absolute z-30 bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {heroSlides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}: ${slide.tag}`}
            className={`transition-all duration-400 rounded-full h-1.5 ${
              i === currentSlide
                ? 'w-7 sm:w-8 bg-[#C99A5B] shadow-[0_0_10px_rgba(201,154,91,0.9)]'
                : 'w-2 bg-white/45 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* =========================================================
          CENTER CONTENT AREA
          ========================================================= */}
      <div
        className="
          relative
          z-20
          w-full
          h-full
          flex
          items-center
          justify-center
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          pt-16
          sm:pt-20
          md:pt-24
          pb-12
          sm:pb-14
          md:pb-16
        "
      >
        {/* =======================================================
            CONTENT GROUP
            ======================================================= */}
        <div
          className="
            w-full
            max-w-[1100px]
            mx-auto
            text-center
            flex
            flex-col
            items-center
            justify-center
          "
        >
          {/* Eyebrow */}
          <span
            className="
              font-sans
              text-[9px]
              sm:text-[10px]
              md:text-[11px]
              tracking-[0.22em]
              sm:tracking-[0.25em]
              md:tracking-[0.28em]
              uppercase
              font-semibold
              text-white
              drop-shadow-[0_2px_7px_rgba(0,0,0,0.65)]
              mb-3
              sm:mb-3.5
              md:mb-4
              transition-all
              duration-500
            "
          >
            {heroSlides[currentSlide].tag}
          </span>

          {/* =====================================================
              MAIN HEADING
              ===================================================== */}
          <h1
            className="
              font-serif
              font-normal
              uppercase
              text-white
              leading-[1.12]
              tracking-[0.01em]
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.72)]

              text-[26px]
              sm:text-[30px]
              md:text-[35px]
              lg:text-[43px]
              xl:text-[48px]

              w-full

              max-w-[340px]
              sm:max-w-[520px]
              md:max-w-[680px]
              lg:max-w-[820px]
              xl:max-w-[900px]

              mx-auto
            "
          >
            <span className="block">
              Experience The World's Best
            </span>

            <span className="block mt-1 sm:mt-1.5 md:mt-2">
              Luxury Desert Retreat
            </span>
          </h1>

          {/* =====================================================
              JMB INTRODUCTION
              ===================================================== */}
          <p
            className="
              mt-4
              sm:mt-4.5
              md:mt-5

              font-sans
              font-light
              text-white

              text-[11.5px]
              sm:text-[12.5px]
              md:text-[13.5px]
              lg:text-[14px]

              leading-[1.65]
              sm:leading-[1.7]

              drop-shadow-[0_2px_7px_rgba(0,0,0,0.68)]

              max-w-[300px]
              sm:max-w-[450px]
              md:max-w-[560px]
              lg:max-w-[600px]

              mx-auto
            "
          >
            Hotel Vasudha Heritage brings together refined stays, desert experiences
            and effortless travel across the Golden City.
          </p>

          {/* =====================================================
              BOOK YOUR STAY
              ===================================================== */}
          <div
            className="
              mt-5
              sm:mt-6
              md:mt-7
            "
          >
            <a
              href={whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center

                bg-[#C99A5B]
                hover:bg-[#B88A4E]

                text-white

                px-6
                py-2.5
                sm:px-7
                sm:py-3
                md:px-8
                md:py-3.5

                text-[9.5px]
                sm:text-[10px]
                md:text-[10.5px]

                font-sans
                font-semibold
                tracking-[0.18em]
                uppercase

                rounded-[2px]

                shadow-lg
                hover:shadow-xl

                transition-all
                duration-300

                active:scale-[0.98]
              "
            >
              BOOK YOUR STAY
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          EXPLORE CUE
          ========================================================= */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="
          absolute
          z-30
          bottom-3
          sm:bottom-4
          md:bottom-5
          left-1/2
          -translate-x-1/2

          flex
          flex-col
          items-center
          gap-1.5

          text-white/85
          hover:text-white

          transition-colors
          duration-300

          cursor-pointer
        "
      >
        <span
          className="
            font-sans
            text-[8px]
            sm:text-[8.5px]
            md:text-[9px]
            tracking-[0.26em]
            uppercase
            font-light
            drop-shadow-[0_1px_5px_rgba(0,0,0,0.65)]
          "
        >
          EXPLORE
        </span>

        <div
          className="
            w-[1px]
            h-4
            sm:h-4.5
            md:h-5
            bg-gradient-to-b
            from-white/85
            to-transparent
            transition-all
            duration-300
          "
        />
      </a>

      {/* =========================================================
          BOTTOM BORDER
          ========================================================= */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-40
          pointer-events-none
          border-b
          border-white/10
        "
        style={{
          borderBottomLeftRadius: `${radius}px`,
          borderBottomRightRadius: `${radius}px`,
        }}
      />
    </section>
  );
}