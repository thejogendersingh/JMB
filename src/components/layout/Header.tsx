import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../../assets/logo-hvh.webp';
import logoWhite from '../../assets/logo-hvh-white.webp';

const navLinks = [
  { name: 'STAY', href: '/hotel', hash: '#stay' },
  { name: 'TOURS', href: '/tour', hash: '#tours' },
  { name: 'CAR RENTAL', href: '/car-rental', hash: '#car-rental' },
  { name: 'EXPERIENCES', href: '/#experiences', hash: '#experiences' },
  { name: 'GALLERY', href: '/#gallery', hash: '#gallery' },
  { name: 'CONTACT', href: '/contact', hash: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const showSolidHeader = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const whatsappLink =
    'https://wa.me/917734862004?text=Hello,%20I%20would%20like%20to%20reserve%20a%20stay%20at%20Hotel%20Vasudha%20Heritage%20Jaisalmer.';

  const mobileDrawer = (
    <>
      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}
      <div
        className={`fixed inset-0 z-[9990] lg:hidden bg-black/50 backdrop-blur-[2px] transition-opacity duration-400 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* =====================================================
          MOBILE DRAWER
          Rendered directly into BODY using portal
      ====================================================== */}
      <aside
        aria-hidden={!mobileMenuOpen}
        className={`
          fixed
          top-0
          right-0
          bottom-0
          left-auto
          z-[10000]
          lg:hidden
          h-[100dvh]
          w-[78vw]
          max-w-[390px]
          min-w-[275px]
          overflow-hidden
          bg-[#FBFAF7]
          text-[#33251C]
          border-l
          border-[#C99A5B]/25
          shadow-[-20px_0_55px_rgba(36,28,23,0.20)]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            mobileMenuOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >

        {/* ===================================================
            SUBTLE HERITAGE FLORAL DETAILS
        ==================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Fine floral motif — right side */}
          <svg
            viewBox="0 0 160 160"
            className="
              absolute
              right-[-20px]
              top-[180px]
              w-[118px]
              h-[118px]
              text-[#C99A5B]
              opacity-[0.045]
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          >
            <circle cx="80" cy="80" r="46" />
            <circle cx="80" cy="80" r="23" />

            <path d="M80 34 C91 52 107 58 126 53" />
            <path d="M127 80 C109 91 103 107 108 126" />
            <path d="M80 127 C69 109 53 103 34 108" />
            <path d="M33 80 C51 69 57 53 52 34" />

            <path d="M80 45 C84 61 94 71 109 74" />
            <path d="M114 80 C98 84 88 94 85 109" />
            <path d="M80 114 C76 98 66 88 51 85" />
            <path d="M46 80 C62 76 72 66 75 51" />

            <circle cx="80" cy="80" r="6" />
          </svg>

          {/* Tiny floral detail — lower left */}
          <svg
            viewBox="0 0 120 120"
            className="
              absolute
              left-[-32px]
              bottom-[55px]
              w-[88px]
              h-[88px]
              text-[#A95F3D]
              opacity-[0.025]
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          >
            <circle cx="60" cy="60" r="34" />
            <circle cx="60" cy="60" r="16" />

            <path d="M60 26 C68 40 80 44 95 41" />
            <path d="M96 60 C82 68 77 80 80 95" />
            <path d="M60 96 C52 82 40 77 25 80" />
            <path d="M24 60 C38 52 43 40 40 25" />
          </svg>

          {/* Fine vertical ornamental lines */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-[#C99A5B]/[0.035]" />
          <div className="absolute right-5 top-6 bottom-6 w-px bg-[#C99A5B]/[0.025]" />
        </div>

        {/* ===================================================
            DRAWER CONTENT
        ==================================================== */}
        <div className="relative h-full overflow-y-auto px-6 sm:px-8 py-6">

          {/* =================================================
              HEADER
          ================================================== */}
          <div className="flex items-start justify-between pb-5 border-b border-[#33251C]/10">

            <div>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src={logo}
                  alt="Hotel Vasudha Heritage"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </Link>
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                shrink-0
                border
                border-[#33251C]/15
                rounded-full
                text-[#33251C]
                hover:text-[#C99A5B]
                hover:border-[#C99A5B]
                transition-all
                duration-300
              "
            >
              <X size={17} strokeWidth={1.4} />
            </button>
          </div>

          {/* =================================================
              NAVIGATION
              Compact upper area
          ================================================== */}
          <div className="pt-6 sm:pt-7">

            {/* SECTION LABEL */}
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#C99A5B]" />

              <span className="font-sans text-[7px] tracking-[0.3em] uppercase text-[#C99A5B]">
                HOTEL VASUDHA HERITAGE
              </span>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    group
                    relative
                    flex
                    items-center
                    min-h-[40px]
                    border-b
                    border-[#33251C]/[0.065]
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[18px]
                      sm:text-[19px]
                      leading-none
                      tracking-[0.035em]
                      font-normal
                      text-[#33251C]
                      group-hover:text-[#A95F3D]
                      group-hover:translate-x-1
                      transition-all
                      duration-300
                    "
                  >
                    {link.name}
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className="
                      ml-auto
                      opacity-0
                      -translate-x-1
                      text-[#C99A5B]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                      duration-300
                    "
                  />

                  <span
                    className="
                      absolute
                      left-0
                      bottom-[-1px]
                      h-px
                      w-0
                      bg-[#C99A5B]
                      group-hover:w-8
                      transition-all
                      duration-300
                    "
                  />
                </a>
              ))}

            </nav>
          </div>

          {/* =================================================
              RESERVATION
              NOT PUSHED TO THE VERY BOTTOM
          ================================================== */}
          <div className="mt-9 sm:mt-10 pt-5 border-t border-[#33251C]/10">

            <div className="flex items-end justify-between mb-3">

              <div>
                <span className="block font-sans text-[7px] tracking-[0.27em] uppercase text-[#C99A5B] mb-2">
                  RESERVATIONS & ENQUIRY
                </span>

                <a
                  href="tel:+917734862004"
                  className="
                    font-sans
                    text-[12px]
                    sm:text-[13px]
                    tracking-[0.02em]
                    text-[#33251C]
                    hover:text-[#A95F3D]
                    transition-colors
                  "
                >
                  +91 77348 62004
                </a>
              </div>

              <span className="font-serif text-[10px] italic text-[#8A6A4A]">
                HVH
              </span>
            </div>

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2
                w-full
                bg-[#33251C]
                text-[#FBFAF7]
                hover:bg-[#C99A5B]
                py-3
                text-[8px]
                font-sans
                font-medium
                tracking-[0.22em]
                uppercase
                rounded-[2px]
                transition-all
                duration-300
              "
            >
              BOOK YOUR STAY
              <ArrowUpRight size={13} strokeWidth={1.2} />
            </a>

            {/* BOTTOM ORNAMENT */}
            <div className="flex items-center justify-center gap-2 mt-4 pb-1">
              <span className="w-7 h-px bg-[#C99A5B]/25" />
              <span className="w-1 h-1 rounded-full bg-[#C99A5B]/55" />
              <span className="w-7 h-px bg-[#C99A5B]/25" />
            </div>

          </div>
        </div>
      </aside>
    </>
  );

  return (
    <>
      {/* =========================================================
          MAIN HEADER
      ========================================================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showSolidHeader
            ? 'bg-white/95 backdrop-blur-md py-3 sm:py-4 shadow-[0_4px_20px_rgba(36,28,23,0.06)] border-b border-[#33251C]/10 text-[#241C17]'
            : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent pt-5 pb-4 sm:pt-8 sm:pb-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={showSolidHeader ? logo : logoWhite}
              alt="Hotel Vasudha Heritage"
              className={`w-auto object-contain transition-all duration-300 ${
                !showSolidHeader
                  ? 'h-11 sm:h-12 md:h-14 lg:h-[54px]'
                  : 'h-10 sm:h-11 md:h-12 lg:h-[48px]'
              }`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative group font-sans text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 ${
                  showSolidHeader
                    ? 'text-[#33251C] hover:text-[#C99A5B]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}

                <span
                  className={`absolute -bottom-1.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${
                    showSolidHeader ? 'bg-[#C99A5B]' : 'bg-white'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block"
            >
              <button className="bg-[#C99A5B] hover:bg-[#A95F3D] text-white text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase px-5 sm:px-6 py-2.5 rounded-[2px] transition-all duration-300">
                BOOK YOUR STAY
              </button>
            </a>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden flex items-center gap-2 py-1.5 transition-colors ${
                showSolidHeader
                  ? 'text-[#33251C] hover:text-[#C99A5B]'
                  : 'text-white hover:text-[#C99A5B]'
              }`}
            >
              <Menu size={27} strokeWidth={1.5} />

              <span className="text-[14px] sm:text-[15px] font-sans tracking-[0.08em]">
                MENU
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Portal ensures drawer is attached directly to viewport/body */}
      {typeof document !== 'undefined'
        ? createPortal(mobileDrawer, document.body)
        : null}
    </>
  );
}