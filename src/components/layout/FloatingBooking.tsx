import { useState, useEffect } from 'react';
import {
  MessageSquareText,
  Car,
  Hotel,
  Map,
  X,
  ArrowUpRight,
  ChevronUp,
} from 'lucide-react';

export function FloatingBooking() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const waNumber = '919667222879';

  const options = [
    {
      label: 'Hotel Booking',
      sub: 'Rooms & Suites',
      icon: Hotel,
      msg: 'Hello JMB Jaisalmer, I am interested in booking a hotel room.',
    },
    {
      label: 'Car Rental',
      sub: 'Travel in Rajasthan',
      icon: Car,
      msg: 'Hello JMB Jaisalmer, I would like to inquire about Car Rental services.',
    },
    {
      label: 'Jaisalmer Tours',
      sub: 'Packages & Experiences',
      icon: Map,
      msg: 'Hello JMB Jaisalmer, I want to know more about your Jaisalmer Tours and Packages.',
    },
  ];

  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    'Hello JMB Jaisalmer, I would like to plan my Jaisalmer trip.'
  )}`;

  /* =========================================================
     SHOW FLOATING BOOKING AFTER HERO IS 50% SCROLLED
     ========================================================= */
  useEffect(() => {
    const checkHeroPosition = () => {
      // Hero is the first section on the page
      const hero = document.querySelector('main section');

      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const heroHeight = rect.height;

      // Floating appears when half of Hero has moved above viewport
      const halfHeroPassed = rect.bottom <= heroHeight / 2;

      setIsVisible(halfHeroPassed);

      // Close panel automatically when floating disappears
      if (!halfHeroPassed) {
        setIsOpen(false);
      }
    };

    checkHeroPosition();

    window.addEventListener('scroll', checkHeroPosition, {
      passive: true,
    });

    window.addEventListener('resize', checkHeroPosition);

    return () => {
      window.removeEventListener('scroll', checkHeroPosition);
      window.removeEventListener('resize', checkHeroPosition);
    };
  }, []);

  return (
    <div
      className={`
        fixed
        right-0
        top-1/2
        -translate-y-1/2
        z-[60]

        transition-all
        duration-500
        ease-out

        ${
          isVisible
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-5 pointer-events-none'
        }
      `}
    >
      {/* =====================================================
          OPEN PANEL
          ===================================================== */}
      <div
        className={`
          absolute
          right-[36px]
          sm:right-[42px]
          top-1/2
          -translate-y-1/2

          w-[275px]
          sm:w-[315px]

          max-w-[calc(100vw-50px)]

          bg-white

          border
          border-[#E3D4BC]

          rounded-l-[8px]

          shadow-[-10px_14px_38px_rgba(36,28,23,0.16)]

          overflow-hidden

          transition-all
          duration-300
          ease-out

          ${
            isOpen
              ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
              : 'opacity-0 translate-x-3 scale-[0.98] pointer-events-none'
          }
        `}
      >
        {/* ===================================================
            PANEL HEADER
            =================================================== */}
        <div className="relative bg-[#F0D8AE] px-5 py-5 sm:px-6 sm:py-6">
          <div
            className="
              absolute
              right-[-30px]
              top-[-35px]
              w-[110px]
              h-[110px]
              rounded-full
              border
              border-[#A97B43]/15
              pointer-events-none
            "
          />

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className="
                    block
                    font-sans
                    text-[8px]
                    sm:text-[9px]
                    tracking-[0.28em]
                    uppercase
                    text-[#765633]
                    font-bold
                    mb-2
                  "
                >
                  JMB JAISALMER
                </span>

                <h3
                  className="
                    font-serif
                    text-[25px]
                    sm:text-[30px]
                    text-[#241C17]
                    font-normal
                    leading-none
                  "
                >
                  Plan Your Trip
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close trip planner"
                className="
                  shrink-0
                  w-7
                  h-7
                  flex
                  items-center
                  justify-center
                  text-[#241C17]
                  hover:text-[#A97B43]
                  transition-colors
                "
              >
                <X
                  size={19}
                  strokeWidth={1.7}
                />
              </button>
            </div>

            <div
              className="
                w-8
                h-[2px]
                bg-[#A97B43]
                mt-4
                mb-3
              "
            />

            <p
              className="
                font-sans
                text-[11px]
                sm:text-[12px]
                text-[#665343]
                leading-5
              "
            >
              Let's make your Jaisalmer journey special.
            </p>
          </div>
        </div>

        {/* ===================================================
            SERVICES
            =================================================== */}
        <div className="px-4 sm:px-5 bg-white">
          {options.map((opt, index) => {
            const Icon = opt.icon;

            return (
              <a
                key={index}
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                  opt.msg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  py-4
                  border-b
                  border-[#E8DCCB]
                  transition-colors
                  duration-200
                  hover:bg-[#FCF9F4]
                "
              >
                <div
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    shrink-0
                    rounded-full
                    bg-[#F8EDDA]
                    flex
                    items-center
                    justify-center
                    text-[#725536]
                    transition-all
                    duration-300
                    group-hover:bg-[#C99A5B]
                    group-hover:text-white
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span
                    className="
                      block
                      font-sans
                      text-[11px]
                      sm:text-[13px]
                      font-bold
                      text-[#241C17]
                      leading-tight
                    "
                  >
                    {opt.label}
                  </span>

                  <span
                    className="
                      block
                      font-sans
                      text-[9px]
                      sm:text-[10px]
                      text-[#817365]
                      mt-1
                    "
                  >
                    {opt.sub}
                  </span>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    shrink-0
                    text-[#A78B68]
                    group-hover:text-[#C99A5B]
                    transition-colors
                  "
                />
              </a>
            );
          })}

          {/* =================================================
              WHATSAPP
              ================================================= */}
          <div className="py-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2.5
                w-full
                bg-[#C99A5B]
                hover:bg-[#A97B43]
                text-white
                py-3
                rounded-[5px]
                font-sans
                text-[9px]
                sm:text-[10px]
                tracking-[0.15em]
                uppercase
                font-bold
                transition-colors
                duration-300
              "
            >
              <MessageSquareText
                size={17}
                strokeWidth={1.6}
              />

              <span>Chat on WhatsApp</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
              />
            </a>

            <div
              className="
                flex
                items-center
                justify-center
                gap-2.5
                mt-4
              "
            >
              <span className="w-6 h-px bg-[#D9C7AD]" />

              <span
                className="
                  font-sans
                  text-[7px]
                  tracking-[0.18em]
                  uppercase
                  text-[#817365]
                "
              >
                We're here to help
              </span>

              <span className="w-6 h-px bg-[#D9C7AD]" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOATING TAB
          GOLD = WIDER
          DARK = NARROWER
          ===================================================== */}
      <div
        className="
          flex
          flex-col
          items-end
          w-[42px]
          sm:w-[48px]
        "
      >
        {/* Gold Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen
              ? 'Close trip planner'
              : 'Open trip planner'
          }
          aria-expanded={isOpen}
          className="
            w-[42px]
            sm:w-[48px]

            h-[42px]
            sm:h-[48px]

            shrink-0

            bg-[#C99A5B]
            text-white

            rounded-tl-[8px]
            rounded-bl-[8px]

            flex
            items-center
            justify-center

            border
            border-white/80

            shadow-[-5px_6px_18px_rgba(36,28,23,0.20)]

            transition-colors
            duration-300

            hover:bg-[#A97B43]
          "
        >
          {isOpen ? (
            <X
              size={19}
              strokeWidth={1.6}
            />
          ) : (
            <MessageSquareText
              size={20}
              strokeWidth={1.5}
            />
          )}
        </button>

        {/* Dark Vertical Tab */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Plan your trip"
          className="
            w-[36px]
            sm:w-[42px]

            h-[115px]
            sm:h-[145px]

            shrink-0

            bg-[#241C17]
            text-white

            rounded-bl-[8px]

            flex
            flex-col
            items-center
            justify-center
            gap-3

            shadow-[-5px_8px_20px_rgba(36,28,23,0.20)]

            transition-colors
            duration-300

            hover:bg-[#33251C]
          "
        >
          <span
            className="
              font-sans
              text-[8px]
              sm:text-[9px]
              tracking-[0.17em]
              uppercase
              font-bold
              whitespace-nowrap
              leading-none

              [writing-mode:vertical-rl]
              rotate-180
            "
          >
            PLAN YOUR TRIP
          </span>

          <ChevronUp
            size={13}
            strokeWidth={1.6}
            className={`
              transition-transform
              duration-300
              ${isOpen ? 'rotate-180' : ''}
            `}
          />
        </button>
      </div>
    </div>
  );
}