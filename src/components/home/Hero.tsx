import { useEffect, useState } from 'react';
import heroDesktopImg from '../../assets/places/hero-section-laptop-bigscreen-img.webp';
import heroMobileImg from '../../assets/places/hero-section-mobile-img.webp';

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  // Subtle radius curve while scrolling down
  const radius = 8 + scrollProgress * 34;
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
        bg-[#FAF5EC]
        z-10
      "
    >
      {/* =========================================================
          HERO BACKGROUND IMAGE (Single Iconic Rang Mahal Style)
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
        {/* Desktop Image */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroDesktopImg}")`,
            backgroundPosition: 'center 45%',
          }}
        />

        {/* Mobile Image */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroMobileImg}")`,
            backgroundPosition: 'center center',
          }}
        />

        {/* Cinematic Luminous Overlay preserving bright daylight while giving text contrast */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-gradient-to-b
            from-black/30
            via-transparent
            to-black/35
          "
        />
      </div>

      {/* =========================================================
          CENTER CONTENT AREA (Exact Rang Mahal Minimalist Style)
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
          pt-12
          sm:pt-16
          md:pt-20
          pb-20
          sm:pb-24
        "
      >
        <div
          className="
            w-full
            max-w-[1000px]
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
              tracking-[0.28em]
              sm:tracking-[0.32em]
              uppercase
              font-semibold
              text-white/95
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]
              mb-1.5
              sm:mb-2
            "
          >
            STAY AT
          </span>

          {/* Main Title */}
          <h1
            className="
              font-serif
              font-normal
              uppercase
              text-white
              leading-[1.12]
              tracking-[0.03em]
              drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]

              text-[24px]
              sm:text-[32px]
              md:text-[40px]
              lg:text-[46px]
              xl:text-[50px]

              w-full
              max-w-[760px]
              mx-auto
            "
          >
            HOTEL VASUDHA HERITAGE
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-2
              sm:mt-2.5
              md:mt-3

              font-sans
              font-light
              text-white/90

              text-[11.5px]
              sm:text-[13px]
              md:text-[14px]

              tracking-[0.02em]
              leading-normal

              drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]

              max-w-[460px]
              mx-auto
            "
          >
            A fresh way of living the Royal Life.
          </p>
        </div>
      </div>

      {/* =========================================================
          EXPLORE CUE (Minimal bottom scroll indicator)
          ========================================================= */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="
          absolute
          z-30
          bottom-4
          sm:bottom-5
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
            sm:text-[9px]
            tracking-[0.28em]
            uppercase
            font-light
            drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]
          "
        >
          EXPLORE
        </span>

        <div
          className="
            w-[1px]
            h-4
            sm:h-5
            bg-gradient-to-b
            from-white/90
            to-transparent
          "
        />
      </a>

      {/* Subtle bottom edge line */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-40
          pointer-events-none
          border-b
          border-[#C99A5B]/20
        "
        style={{
          borderBottomLeftRadius: `${radius}px`,
          borderBottomRightRadius: `${radius}px`,
        }}
      />
    </section>
  );
}
