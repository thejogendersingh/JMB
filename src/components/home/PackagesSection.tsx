import { useState } from 'react';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';
import packageEssentialImg from '../../assets/package-essential.webp';
import packagePremiumImg from '../../assets/places/package-premium.webp';
import packageLuxuryImg from '../../assets/places/package-luxury.webp';

const categories = ['ALL', 'BASIC', 'PREMIUM', 'LUXURY'];

const packages = [
  {
    category: 'BASIC',
    number: '01',
    tag: 'BASIC · BUDGET-FRIENDLY TOUR',
    title: 'Vasudha Essential Jaisalmer Package',
    price: '₹3,999/-',
    priceNote: 'Per Person · Essential Inclusions',
    highlight: 'Ideal for Solo, Couples & Budget Travellers',
    inclusions: [
      'Hotel / Desert Camp Stay',
      'Basic City Sightseeing',
      'Daily Breakfast & Dinner',
      'Pickup & Drop (Railway Station / Hotel)',
      'Selected Desert Activities & Sunset',
      'Assistance for Jaisalmer Tours & Desert Safari',
    ],
    images: [packageEssentialImg],
    wa: 'https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20am%20interested%20in%20the%20Vasudha%20Essential%20Jaisalmer%20Package%20(Basic%20-%20%E2%82%B93%2C999).',
  },
  {
    category: 'PREMIUM',
    number: '02',
    tag: 'PREMIUM · MID-RANGE EXPERIENCE',
    title: 'Vasudha Premium Jaisalmer Experience',
    price: '₹7,499/-',
    priceNote: 'Per Person · Hotel + Desert + Car',
    highlight: 'Most Popular · Best Balance of Comfort & Adventure',
    inclusions: [
      'Hotel Stay + Sam Desert Camp Stay',
      'Full Jaisalmer City Tour & Kuldhara Village',
      'Camel Safari & Thrilling Jeep Safari',
      'Rajasthani Folk Dance & Cultural Program',
      'Breakfast & Rajasthani Dinner Included',
      'Private Dedicated Car Included with Pickup & Drop',
    ],
    images: [packagePremiumImg],
    wa: 'https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20am%20interested%20in%20the%20Vasudha%20Premium%20Jaisalmer%20Experience%20(%E2%82%B97%2C499).',
    badge: 'POPULAR',
  },
  {
    category: 'LUXURY',
    number: '03',
    tag: 'LUXURY · ROYAL VIP EXPERIENCE',
    title: 'Vasudha Royal Jaisalmer Experience',
    price: '₹12,999/-',
    priceNote: 'Per Person · Complete VIP All-Inclusive',
    highlight: 'Ultimate Jaisalmer, Desert & IndoPak Border Circuit',
    inclusions: [
      'Premium Hotel Stay & Luxury Desert Camp',
      'Complete City Sightseeing (Fort, Patwon Haveli, Gadisar)',
      'Tanot Mata Temple & Longewala War Border Tour',
      'Kuldhara Haunted Village & Desert Photo Stops',
      'Camel Safari, Jeep Safari, Sunset & Kalbelia Dance',
      'Private AC Car Throughout + Airport / Station Transfers',
    ],
    images: [packageLuxuryImg],
    wa: 'https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20am%20interested%20in%20the%20Vasudha%20Royal%20Jaisalmer%20Experience%20(Luxury%20-%20%E2%82%B912%2C999).',
    badge: 'ROYAL VIP',
  },
];

export function PackagesSection() {
  const [selectedCat, setSelectedCat] = useState('ALL');

  const filteredPackages =
    selectedCat === 'ALL'
      ? packages
      : packages.filter((p) => p.category === selectedCat);

  return (
    <section
      id="tours"
      className="
        relative
        overflow-hidden
        bg-[#FAF5EC]
        pt-14
        sm:pt-16
        md:pt-20
        lg:pt-24
        pb-14
        sm:pb-16
        md:pb-20
      "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="260" stroke="#C99A5B" />
          <circle cx="400" cy="400" r="205" stroke="#C99A5B" />
          <path
            d="M400 140C430 210 490 270 560 300C490 330 430 390 400 460C370 390 310 330 240 300C310 270 370 210 400 140Z"
            stroke="#C99A5B"
          />
        </svg>
      </div>

      <div
        className="
          relative
          w-[90%]
          sm:w-[88%]
          md:w-[86%]
          max-w-7xl
          mx-auto
        "
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-10 h-px bg-[#C99A5B]/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C99A5B]" />
            <span className="w-8 sm:w-10 h-px bg-[#C99A5B]/50" />
          </div>

          <span
            className="
              block
              font-sans
              text-[9px]
              sm:text-[10px]
              md:text-[11px]
              tracking-[0.28em]
              sm:tracking-[0.32em]
              uppercase
              text-[#C99A5B]
              font-bold
              mb-2
            "
          >
            HOTEL VASUDHA HERITAGE · PACKAGES
          </span>

          <h2
            className="
              font-serif
              text-[#241C17]
              font-normal
              text-[30px]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[48px]
              leading-[1.15]
            "
          >
            Curated Jaisalmer Tour Packages
          </h2>

          <p className="mt-2.5 font-sans text-[13px] text-[#766B62] max-w-xl mx-auto font-light">
            Choose your preferred package category according to your budget and travel preferences.
          </p>

          {/* Category Pills: BASIC | PREMIUM | LUXURY */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`
                  px-4
                  py-1.5
                  sm:px-5
                  sm:py-2
                  rounded-full
                  font-sans
                  text-[10px]
                  sm:text-[11px]
                  font-semibold
                  tracking-widest
                  transition-all
                  duration-300
                  ${
                    selectedCat === cat
                      ? 'bg-[#241C17] text-white shadow-sm'
                      : 'bg-white/80 text-[#666] border border-[#E4D5BD] hover:border-[#C99A5B] hover:text-[#241C17]'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {filteredPackages.map((pkg, i) => (
            <article
              key={i}
              className="
                group
                flex
                flex-col
                lg:flex-row
                bg-white
                overflow-hidden
                border
                border-[#E4D5BD]
                rounded-[10px]
                lg:h-[310px]
                transition-all
                duration-500
                hover:border-[#C99A5B]/80
                hover:shadow-[0_16px_40px_rgba(36,28,23,0.08)]
              "
            >
              {/* Media Left - Fixed Horizontal Thumbnail matching all 3 boxes */}
              <div
                className="
                  relative
                  w-full
                  lg:w-[350px]
                  xl:w-[380px]
                  h-[220px]
                  sm:h-[240px]
                  lg:h-full
                  shrink-0
                  overflow-hidden
                "
              >
                <img
                  src={pkg.images[0]}
                  alt={pkg.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-serif text-[12px] font-medium text-white/90 bg-black/40 backdrop-blur-[2px] px-2.5 py-1 rounded">
                    {pkg.number}
                  </span>
                  <span className="font-sans text-[9px] font-bold tracking-widest text-[#E2BA7E] bg-[#241C17]/80 backdrop-blur-[2px] px-2.5 py-1 rounded uppercase">
                    {pkg.category}
                  </span>
                </div>

                {pkg.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#C99A5B] text-white font-sans text-[8.5px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Right */}
              <div
                className="
                  flex
                  flex-col
                  justify-between
                  p-5
                  sm:p-6
                  lg:py-5
                  lg:px-7
                  grow
                  overflow-hidden
                "
              >
                <div>
                  <span className="block font-sans text-[9px] sm:text-[9.5px] font-bold uppercase tracking-[0.22em] text-[#C99A5B] mb-1">
                    {pkg.tag}
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                    <h3 className="font-serif text-[24px] sm:text-[28px] text-[#241C17] font-normal leading-tight">
                      {pkg.title}
                    </h3>
                    <div className="shrink-0">
                      <span className="font-sans text-[20px] sm:text-[22px] font-bold text-[#C99A5B]">
                        {pkg.price}
                      </span>
                      <span className="block font-sans text-[10px] text-gray-500 font-light">
                        {pkg.priceNote}
                      </span>
                    </div>
                  </div>

                  <p className="font-serif text-[13px] italic text-[#8A6A4A] mb-4">
                    {pkg.highlight}
                  </p>

                  {/* Inclusions */}
                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <span className="block font-sans text-[8.5px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2.5">
                      PACKAGE INCLUDES
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pkg.inclusions.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px] text-[#555] font-sans">
                          <Check size={13} className="text-[#C99A5B] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={pkg.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-[#241C17]
                      hover:bg-[#C99A5B]
                      text-white
                      px-5
                      py-2.5
                      rounded-lg
                      font-sans
                      text-[10px]
                      font-bold
                      tracking-widest
                      uppercase
                      transition-all
                      duration-300
                    "
                  >
                    <MessageCircle size={14} />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href="/tour"
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      font-sans
                      text-[10px]
                      font-semibold
                      tracking-widest
                      uppercase
                      text-[#8A6A4A]
                      hover:text-[#241C17]
                      transition-colors
                    "
                  >
                    <span>View Itinerary</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Tour Link */}
        <div className="mt-10 text-center px-4">
          <a
            href="/tour"
            className="
              inline-flex
              items-center
              justify-center
              gap-1.5 sm:gap-2
              font-sans
              text-[9px] min-[390px]:text-[10px] sm:text-[11px]
              font-bold
              tracking-[0.08em] min-[390px]:tracking-[0.12em] sm:tracking-[0.25em]
              uppercase
              whitespace-nowrap
              text-[#241C17]
              hover:text-[#C99A5B]
              transition-colors
              border-b
              border-[#C99A5B]
              pb-1
            "
          >
            <span className="whitespace-nowrap">VIEW 1-NIGHT SAM DESERT &amp; 3-DAY COMPLETE PACKAGES</span>
            <ArrowRight size={13} className="shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
