import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const navLinks = [
  { name: 'STAY', href: '#stay' },
  { name: 'EXPERIENCES', href: '#experiences' },
  { name: 'TOURS', href: '#tours' },
  { name: 'CAR RENTAL', href: '#car-rental' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'CONTACT', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/919667222879?text=Hello,%20I%20would%20like%20to%20reserve%20a%20stay%20at%20JMB%20Jaisalmer.";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md py-3 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.07)] border-b border-gray-100 text-[#241C17]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent pt-5 pb-4 sm:pt-8 sm:pb-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Left: Approved JMB Logo */}
          <a href="#" className="flex items-center transition-opacity hover:opacity-90">
            <img 
              src={logo} 
              alt="JMB Jaisalmer" 
              className={`w-auto transition-all duration-300 ${
                !isScrolled 
                  ? 'h-12 sm:h-13 md:h-14 lg:h-[58px] brightness-0 invert' 
                  : 'h-11 sm:h-12 md:h-12 lg:h-[48px]'
              }`}
            />
          </a>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 relative group ${
                  isScrolled ? 'text-[#33251C] hover:text-[#C99A5B]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-[#C99A5B]' : 'bg-white'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Right: Primary Luxury CTA */}
          <div className="flex items-center gap-5">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:inline-block"
            >
              <button className={`text-[11px] font-sans font-medium tracking-[0.2em] uppercase px-6 py-2.5 transition-all duration-300 rounded-[2px] shadow-sm ${
                isScrolled
                  ? 'bg-[#C99A5B] text-white hover:bg-[#b5884b]'
                  : 'bg-[#C99A5B] text-white hover:bg-[#b5884b]'
              }`}>
                BOOK YOUR STAY
              </button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden flex items-center gap-2.5 transition-colors py-1.5 px-2 ${
                isScrolled ? 'text-[#33251C] hover:text-[#C99A5B]' : 'text-white hover:text-[#C99A5B]'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <>
                  <X size={28} strokeWidth={1.8} />
                  <span className="text-[16px] sm:text-[17px] font-sans font-medium tracking-wide">Close</span>
                </>
              ) : (
                <>
                  <Menu size={28} strokeWidth={1.8} />
                  <span className="text-[16px] sm:text-[17px] font-sans font-medium tracking-wide">Menu</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Clean Minimalist Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[82vw] max-w-sm bg-[#F7F2E8] z-50 transition-transform duration-500 ease-out shadow-2xl flex flex-col justify-between p-8 border-l border-[#C99A5B]/20 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top */}
          <div className="flex justify-between items-center mb-12 border-b border-[#33251C]/10 pb-5">
            <img src={logo} alt="JMB Jaisalmer" className="h-8 w-auto" />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#33251C] hover:text-[#C99A5B] transition-colors p-1"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-serif text-2xl text-[#33251C] hover:text-[#C99A5B] transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom */}
        <div className="pt-8 border-t border-[#33251C]/10">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C99A5B] block mb-2 font-medium">
            RESERVATIONS & ENQUIRY
          </span>
          <a href="tel:+919667222879" className="font-sans text-sm text-[#33251C] block mb-4">
            +91 96672 22879
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#33251C] text-[#F7F2E8] hover:bg-[#C99A5B] py-3 text-[11px] font-sans font-medium tracking-[0.2em] uppercase rounded-[2px] transition-colors"
          >
            BOOK YOUR STAY
          </a>
        </div>
      </div>
    </>
  );
}
