import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    image:
      'https://images.pexels.com/photos/33726139/pexels-photo-33726139.jpeg?auto=compress&cs=tinysrgb&w=1800',
    alt: 'JMB Jaisalmer property',
  },
  {
    image:
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1800&auto=format&fit=crop',
    alt: 'JMB Jaisalmer room',
  },
  {
    image:
      'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1800&auto=format&fit=crop',
    alt: 'Jaisalmer desert',
  },
  {
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1800&auto=format&fit=crop',
    alt: 'Jaisalmer journey',
  },
  {
    image:
      'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1800&auto=format&fit=crop',
    alt: 'Jaisalmer Fort',
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const total = galleryItems.length;

  const getIndex = (index: number) => {
    return (index + total) % total;
  };

  const previousImage = () => {
    setActiveIndex((current) => getIndex(current - 1));
  };

  const nextImage = () => {
    setActiveIndex((current) => getIndex(current + 1));
  };

  const goToImage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FDFBF7] py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          SUBTLE BACKGROUND PATTERN
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <svg
          className="h-full w-full"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="jmbGalleryPattern"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="75"
                cy="75"
                r="28"
                fill="none"
                stroke="#C99A5B"
                strokeWidth="1"
              />

              <circle
                cx="75"
                cy="75"
                r="9"
                fill="none"
                stroke="#C99A5B"
                strokeWidth="1"
              />

              <path
                d="M75 47 C58 30 39 30 28 39 C39 50 55 55 75 47Z"
                fill="none"
                stroke="#C99A5B"
                strokeWidth="1"
              />

              <path
                d="M103 75 C120 58 120 39 111 28 C100 39 95 55 103 75Z"
                fill="none"
                stroke="#C99A5B"
                strokeWidth="1"
              />

              <path
                d="M75 103 C92 120 111 120 122 111 C111 100 95 95 75 103Z"
                fill="none"
                stroke="#C99A5B"
                strokeWidth="1"
              />

              <path
                d="M47 75 C30 92 30 111 39 122 C50 111 55 95 47 75Z"
                fill="none"
                stroke="#C99A5B"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#jmbGalleryPattern)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1380px]">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="mb-9 text-center sm:mb-11">

          <span className="mb-2.5 block font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C99A5B] sm:text-[10px]">
            JMB JAISALMER
          </span>

          <h2 className="font-serif text-[36px] font-normal leading-none text-[#241C17] sm:text-[43px] md:text-[48px]">
            Gallery
          </h2>

        </div>

        {/* =====================================================
            GALLERY CAROUSEL
            ===================================================== */}

        <div
          ref={sliderRef}
          className="relative mx-auto flex h-[300px] items-center justify-center sm:h-[390px] md:h-[480px] lg:h-[510px]"
        >

          {/* =================================================
              LEFT PREVIEW
              ================================================= */}

          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="
              absolute
              left-0
              z-20
              hidden
              h-[72%]
              w-[13%]
              overflow-hidden
              rounded-[8px]
              bg-[#E8D3AE]
              shadow-sm
              transition-all
              duration-500
              md:block
              lg:w-[14%]
            "
          >
            <img
              src={galleryItems[getIndex(activeIndex - 1)].image}
              alt=""
              aria-hidden="true"
              className="
                h-full
                w-full
                object-cover
                opacity-55
                transition-all
                duration-500
                hover:scale-105
                hover:opacity-75
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-11
                w-11
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/80
                text-[#241C17]
                shadow-sm
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white
              "
            >
              <ArrowLeft
                size={18}
                strokeWidth={1.4}
              />
            </span>
          </button>

          {/* =================================================
              MOBILE LEFT ARROW
              ================================================= */}

          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="
              absolute
              left-2
              top-1/2
              z-30
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/60
              bg-white/80
              text-[#241C17]
              shadow-md
              backdrop-blur-sm
              md:hidden
            "
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.4}
            />
          </button>

          {/* =================================================
              MAIN IMAGE
              ================================================= */}

          <div
            key={activeIndex}
            className="
              relative
              z-10
              h-full
              w-full
              overflow-hidden
              rounded-[10px]
              bg-[#E8D3AE]
              shadow-[0_18px_55px_rgba(36,29,23,0.13)]
              md:w-[70%]
              lg:w-[68%]
            "
          >
            <img
              src={galleryItems[activeIndex].image}
              alt={galleryItems[activeIndex].alt}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-[900ms]
                ease-out
              "
            />
          </div>

          {/* =================================================
              RIGHT PREVIEW
              ================================================= */}

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="
              absolute
              right-0
              z-20
              hidden
              h-[72%]
              w-[13%]
              overflow-hidden
              rounded-[8px]
              bg-[#E8D3AE]
              shadow-sm
              transition-all
              duration-500
              md:block
              lg:w-[14%]
            "
          >
            <img
              src={galleryItems[getIndex(activeIndex + 1)].image}
              alt=""
              aria-hidden="true"
              className="
                h-full
                w-full
                object-cover
                opacity-55
                transition-all
                duration-500
                hover:scale-105
                hover:opacity-75
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-11
                w-11
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/80
                items-center
                justify-center
                text-[#241C17]
                shadow-sm
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white
              "
            >
              <ArrowRight
                size={18}
                strokeWidth={1.4}
              />
            </span>
          </button>

          {/* =================================================
              MOBILE RIGHT ARROW
              ================================================= */}

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="
              absolute
              right-2
              top-1/2
              z-30
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/60
              bg-white/80
              text-[#241C17]
              shadow-md
              backdrop-blur-sm
              md:hidden
            "
          >
            <ArrowRight
              size={15}
              strokeWidth={1.4}
            />
          </button>

        </div>

        {/* =====================================================
            MOBILE DOTS
            ===================================================== */}

        <div className="mt-5 flex items-center justify-center gap-1.5 md:hidden">

          {galleryItems.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToImage(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`
                h-[3px]
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? 'w-6 bg-[#C99A5B]'
                    : 'w-2.5 bg-[#241C17]/20'
                }
              `}
            />
          ))}

        </div>

        {/* =====================================================
            VIEW FULL ALBUM
            ===================================================== */}

        <div className="mt-7 flex justify-center sm:mt-9">

          <a
            href="#gallery"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-[#C99A5B]
              px-7
              py-2.5
              font-sans
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#A87532]
              transition-all
              duration-300
              hover:bg-[#C99A5B]
              hover:text-white
              sm:px-8
              sm:py-3
              sm:text-[10px]
            "
          >
            VIEW FULL ALBUM
          </a>

        </div>

      </div>
    </section>
  );
}