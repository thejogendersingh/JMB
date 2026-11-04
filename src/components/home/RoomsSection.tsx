import { useState } from 'react';
import {
  BedDouble,
  Wind,
  Lock,
  Wifi,
  Droplets,
  Coffee,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const categories = [
  'Golden Heritage Room',
  'Royal Deluxe Room',
  'Maharaja Suite',
  'Jaisalmer Grand Royal Suite',
];

const roomData: Record<string, any> = {
  'Golden Heritage Room': {
    title: 'Golden Heritage Room',
    price: '₹3,500/-',
    subtitle: 'Traditional Jaisalmer-inspired atmosphere with essential comfort.',
    description1:
      'Comfortable stay with essential amenities and a traditional Jaisalmer-inspired atmosphere. Perfect for solo travellers, couples and budget-conscious guests seeking authentic Rajasthani warmth.',
    amenities: [
      { icon: BedDouble, label: 'Comfortable Heritage Bed' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Wifi, label: 'Wi-Fi (Subject to availability)' },
      { icon: Droplets, label: 'Hot & Cold Water' },
      { icon: Lock, label: 'Safe & Housekeeping' },
      { icon: Coffee, label: 'Breakfast / Meal Plan' },
    ],
  },

  'Royal Deluxe Room': {
    title: 'Royal Deluxe Room',
    price: '₹5,500/-',
    subtitle: 'Spacious accommodation with upgraded amenities for a relaxing stay.',
    description1:
      'Spacious and comfortable room with upgraded amenities for a relaxing stay. Designed with authentic stone work, rich textiles and thoughtful conveniences for a truly restful holiday in the Golden City.',
    amenities: [
      { icon: BedDouble, label: 'King Size Deluxe Bed' },
      { icon: Wind, label: 'Climate Control AC' },
      { icon: Wifi, label: 'High-Speed Wi-Fi' },
      { icon: Droplets, label: '24-Hour Hot & Cold Water' },
      { icon: Coffee, label: 'Tea & Coffee Maker' },
      { icon: Lock, label: 'Daily Housekeeping & Safe' },
    ],
  },

  'Maharaja Suite': {
    title: 'Maharaja Suite',
    price: '₹7,500/-',
    subtitle: 'Premium suite experience with extra space and enhanced comfort.',
    description1:
      'Premium suite experience with extra space and enhanced comfort. Crafted for families and travellers seeking a touch of royal grandeur, spacious sitting area, and personalized concierge assistance.',
    amenities: [
      { icon: BedDouble, label: 'Royal Maharaja King Bed' },
      { icon: Wind, label: 'Split Air Conditioner' },
      { icon: Wifi, label: 'Complimentary Wi-Fi' },
      { icon: Droplets, label: 'Luxury Bath & Shower' },
      { icon: Coffee, label: 'Tea / Coffee & Minibar' },
      { icon: Lock, label: 'Luggage Assistance & Safe' },
    ],
  },

  'Jaisalmer Grand Royal Suite': {
    title: 'Jaisalmer Grand Royal Suite',
    price: '₹10,500/-',
    subtitle: 'Our top-category stay designed for a luxurious and memorable experience.',
    description1:
      'Our top-category stay designed for guests looking for a luxurious and memorable Jaisalmer experience. Features opulent Rajasthani decor, private lounge space, and dedicated assistance for desert excursions.',
    amenities: [
      { icon: BedDouble, label: 'Grand Royal Emperor Bed' },
      { icon: Wind, label: 'Dual-Zone Air Conditioning' },
      { icon: Wifi, label: 'High-Speed Premium Wi-Fi' },
      { icon: Droplets, label: 'Heritage Bathtub & Rain Shower' },
      { icon: Coffee, label: 'Complimentary Breakfast Included' },
      { icon: Lock, label: 'Private Concierge & Tours' },
    ],
  },
};

const stayInclusions = [
  'Comfortable Room Stay',
  'Housekeeping',
  'Basic Room Amenities',
  'Wi-Fi (subject to availability)',
  'Breakfast / Meal Plan as selected',
  'Assistance for Jaisalmer Tours & Car Rental',
];

export function RoomsSection() {
  const [activeTab, setActiveTab] = useState('Golden Heritage Room');
  const currentRoom = roomData[activeTab];

  return (
    <section
      id="stay"
      className="relative overflow-hidden bg-[#F7F2E8] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg
          className="h-full w-full"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="vasudha-floral-pattern"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M75 20 C62 42 40 48 24 48 C42 59 50 75 50 94 C64 83 75 69 75 52 C75 69 86 83 100 94 C100 75 108 59 126 48 C110 48 88 42 75 20Z"
                fill="none"
                stroke="#8A6A3E"
                strokeWidth="1"
              />
              <circle cx="75" cy="105" r="14" fill="none" stroke="#8A6A3E" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vasudha-floral-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1380px]">

        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <span className="mb-3 block font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C99A5B]">
            HOTEL VASUDHA HERITAGE · HOTEL STAY
          </span>
          <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[#241C17] sm:text-[44px] md:text-[50px]">
            Choose Your Preferred Stay Experience
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-[13px] font-light leading-[1.75] text-[#666]">
            Comfortable room stays, royal ambiance, and authentic Rajasthani hospitality in the heart of Jaisalmer.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-10 border-y border-[#C99A5B]/20 sm:mb-12">
          <div className="scrollbar-hide flex w-full overflow-x-auto md:justify-center">
            <div className="flex min-w-max items-center">
              {categories.map((category) => {
                const isActive = activeTab === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveTab(category)}
                    className={`
                      relative
                      whitespace-nowrap
                      px-4
                      py-3.5
                      font-sans
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      transition-colors
                      duration-300
                      sm:px-5
                      sm:text-[10px]
                      ${
                        isActive
                          ? 'text-[#241C17] font-semibold'
                          : 'text-[#777] hover:text-[#241C17]'
                      }
                    `}
                  >
                    {category}
                    <span
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        bg-[#C99A5B]
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? 'w-[calc(100%-32px)] opacity-100'
                            : 'w-0 opacity-0'
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Room Image Box with "Coming Soon" */}
        <div className="relative">
          <div
            key={activeTab}
            className="
              group
              relative
              h-[360px]
              w-full
              overflow-hidden
              rounded-2xl
              bg-[#241C17]
              shadow-[0_20px_60px_rgba(36,29,23,0.13)]
              sm:h-[430px]
              md:h-[490px]
              lg:h-[520px]
              flex
              items-center
              justify-center
            "
          >
            {/* Ambient luxury texture backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1712] via-[#2D211A] to-[#3B2C22] opacity-95" />
            
            {/* Fine decorative architectural arch outline */}
            <div className="absolute inset-4 sm:inset-8 border border-[#C99A5B]/25 rounded-xl pointer-events-none flex items-center justify-center">
              <div className="w-[85%] h-[85%] border border-[#C99A5B]/15 rounded-lg" />
            </div>

            {/* COMING SOON - Clean text only */}
            <div className="relative z-10 text-center px-6">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E2BA7E] font-normal tracking-[0.28em] uppercase drop-shadow-md">
                COMING SOON
              </span>
            </div>
          </div>

          {/* Overlapping Room Information Box */}
          <div
            className="
              relative
              mx-4
              -mt-12
              bg-white
              rounded-xl
              px-6
              py-7
              shadow-[0_18px_50px_rgba(36,29,23,0.11)]
              sm:mx-7
              sm:-mt-14
              sm:px-9
              sm:py-8
              md:mx-10
              md:-mt-16
              md:px-10
              md:py-9
              lg:mx-auto
              lg:-mt-16
              lg:max-w-[1180px]
              lg:px-12
            "
          >
            <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.15fr_0.85fr] md:gap-10">

              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C99A5B]">
                    ROOM CATEGORY
                  </span>
                  <span className="text-[14px] font-bold text-[#241C17] font-sans">
                    {currentRoom.price}
                  </span>
                </div>

                <h3 className="font-serif text-[28px] font-normal leading-[1.12] text-[#241C17] sm:text-[32px]">
                  {currentRoom.title}
                </h3>

                <p className="mt-2 font-serif text-[13px] italic leading-relaxed text-[#766B62]">
                  {currentRoom.subtitle}
                </p>

                <p className="mt-4 max-w-[650px] font-sans text-[13px] font-light leading-[1.75] text-[#666]">
                  {currentRoom.description1}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(
                      currentRoom.title
                    )}%20(${encodeURIComponent(currentRoom.price)}).`}
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
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      transition-colors
                      duration-300
                    "
                  >
                    BOOK THIS ROOM
                    <ArrowUpRight size={13} strokeWidth={1.5} />
                  </a>

                  <a
                    href="/hotel"
                    className="
                      font-sans
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#777]
                      hover:text-[#241C17]
                      transition-colors
                    "
                  >
                    VIEW ALL ROOM DETAILS &rarr;
                  </a>
                </div>
              </div>

              {/* Right Amenities & Hotel Inclusions */}
              <div className="md:border-l md:border-[#241C17]/10 md:pl-9">
                <span className="mb-4 block font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C99A5B]">
                  ROOM AMENITIES
                </span>

                <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 mb-6">
                  {currentRoom.amenities.map((amenity: any, index: number) => {
                    const Icon = amenity.icon;
                    return (
                      <div
                        key={`${amenity.label}-${index}`}
                        className="flex items-start gap-2.5"
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.25}
                          className="mt-[1px] shrink-0 text-[#C99A5B]"
                        />
                        <span className="font-sans text-[10.5px] leading-[1.45] text-[#555]">
                          {amenity.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Hotel Stay Inclusions */}
                <div className="border-t border-gray-100 pt-4">
                  <span className="block font-sans text-[8.5px] font-bold uppercase tracking-[0.2em] text-[#8A6A4A] mb-2.5">
                    HOTEL STAY INCLUDES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stayInclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] text-gray-600 font-sans">
                        <CheckCircle2 size={12} className="text-[#C99A5B] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="/hotel"
            className="
              group
              inline-flex
              items-center
              gap-3
              font-sans
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#241C17]
              transition-colors
              duration-300
              hover:text-[#C99A5B]
            "
          >
            EXPLORE ALL 4 CATEGORIES &amp; PRICING
            <span className="h-px w-8 bg-[#C99A5B] transition-all duration-300 group-hover:w-12" />
          </a>
        </div>

      </div>
    </section>
  );
}
