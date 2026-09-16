import { useState, useEffect } from 'react';

export function Hero() {
  const whatsappBooking = "https://wa.me/919667222879?text=Hello,%20I%20would%20like%20to%20plan%20my%20stay%20at%20JMB%20Jaisalmer.";

  // MMT Hotel Image
  const pexelsHeroImage = 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202412201437176756-74e4e2c4-ce4d-4e28-82c3-3aae7832dbbf.jpg';

  // Measure exact visible screen height on ANY mobile/desktop device
  const [exactScreenHeight, setExactScreenHeight] = useState<string>('100vh');

  useEffect(() => {
    const calculateHeight = () => {
      // On mobile devices, subtract 65px (mobile browser bottom bar / navigation height)
      // so the bottom of the hero section is 100% visible on screen without ANY scrolling.
      if (window.innerWidth < 768) {
        setExactScreenHeight(`${window.innerHeight - 65}px`);
      } else {
        setExactScreenHeight(`${window.innerHeight}px`);
      }
    };
    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    window.addEventListener('orientationchange', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
      window.removeEventListener('orientationchange', calculateHeight);
    };
  }, []);

  return (
    <section 
      style={{ 
        height: exactScreenHeight, 
        minHeight: exactScreenHeight,
        maxHeight: exactScreenHeight
      }}
      className="relative w-full h-[calc(100svh-65px)] lg:h-screen flex flex-col justify-between items-center overflow-hidden bg-[#241C17] pt-16 sm:pt-20 pb-3 px-4 rounded-b-[14px] sm:rounded-b-[18px] md:rounded-b-[24px] shadow-2xl z-10"
    >
      
      {/* Background Image: Rajasthan Architecture from Pexels */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-out scale-105 pointer-events-none"
        style={{ 
          backgroundImage: `url("${pexelsHeroImage}")`,
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Light Sunlit Overlay: Crisp & Vibrant (No Blackout) */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/50 pointer-events-none" />

      {/* Top Spacer to balance fixed header */}
      <div className="w-full h-2 sm:h-6 shrink-0" />

      {/* Centered Hero Content with Perfect 2-Line Alignment & Compact Sizing */}
      <div className="relative z-20 max-w-3xl w-full mx-auto text-center flex flex-col items-center justify-center my-auto px-2">
        
        {/* Eyebrow in Gold Tracking */}
        <span className="font-sans text-[10px] sm:text-[11.5px] tracking-[0.28em] uppercase font-semibold text-[#F7F2E8] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] mb-2">
          LUXURY HOTEL & DESERT RESORT
        </span>

        {/* Main Royal Title: Strictly 2 Lines with refined responsive sizing */}
        <h1 className="font-serif text-[20px] sm:text-2xl md:text-3xl lg:text-[40px] text-white font-normal tracking-[0.05em] uppercase drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] leading-[1.22] mb-2.5 max-w-2xl">
          <span className="block">Experience The World's Best</span>
          <span className="block">Luxury Desert Retreat</span>
        </h1>

        {/* Supporting Subtitle */}
        <p className="font-sans text-[12px] sm:text-[13.5px] text-white/90 font-light leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-xs sm:max-w-md mx-auto mb-4 sm:mb-5">
          A timeless palatial sanctuary in Jaisalmer rooted in Rajasthan's living heritage.
        </p>

        {/* Center Golden Button */}
        <div>
          <a 
            href={whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#C99A5B] hover:bg-[#b5884b] text-white px-7 py-2.5 sm:px-8 sm:py-3 text-[10.5px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] uppercase rounded-[2px] shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            BOOK YOUR STAY
          </a>
        </div>

      </div>

      {/* Subtle Bottom Scroll Cue (Visible right above bottom rounded border) */}
      <a 
        href="#about"
        className="relative z-20 flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors group cursor-pointer shrink-0 pb-1"
        aria-label="Scroll to About"
      >
        <span className="font-sans text-[8.5px] tracking-[0.28em] uppercase font-light">
          EXPLORE
        </span>
        <div className="w-[1px] h-3.5 bg-gradient-to-b from-white/80 to-transparent group-hover:h-5 transition-all duration-300" />
      </a>

    </section>
  );
}
