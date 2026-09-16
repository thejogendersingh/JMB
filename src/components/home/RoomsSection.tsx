import { useState } from 'react';
import {
  BedDouble,
  Wind,
  Lock,
  Briefcase,
  Wifi,
  Droplets,
  Coffee,
  Bath,
  ArrowUpRight,
} from 'lucide-react';

const categories = [
  'Royal Suite',
  'Mini Suite',
  'Heritage Rooms',
  'Super Deluxe Rooms',
  'Deluxe Rooms',
  'Economy Standard Rooms',
];

const roomData: Record<string, any> = {
  'Royal Suite': {
    title: 'Royal Suite',
    subtitle: 'A refined stay designed for space, comfort and privacy.',
    description1:
      'A spacious accommodation designed for guests looking for a more elevated and comfortable stay in Jaisalmer.',
    amenities: [
      { icon: BedDouble, label: 'King Bed' },
      { icon: Wind, label: 'Air Conditioner' },
      { icon: Lock, label: 'Safe Locker' },
      { icon: Briefcase, label: 'Work Desk' },
      { icon: Wifi, label: 'Complimentary Wi-Fi' },
      { icon: Droplets, label: 'Hot & Cold Water' },
    ],
    images: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
  },

  'Mini Suite': {
    title: 'Mini Suite',
    subtitle: 'Comfortable accommodation with a little more room to unwind.',
    description1:
      'A thoughtfully arranged suite offering a relaxed setting with contemporary comfort for your Jaisalmer stay.',
    amenities: [
      { icon: BedDouble, label: 'King Bed' },
      { icon: Wind, label: 'Air Conditioner' },
      { icon: Lock, label: 'Safe Locker' },
      { icon: Wifi, label: 'Complimentary Wi-Fi' },
      { icon: Droplets, label: 'Hot & Cold Water' },
      { icon: Coffee, label: 'Tea & Coffee Maker' },
    ],
    images: [
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
  },

  'Heritage Rooms': {
    title: 'Heritage Rooms',
    subtitle: 'Timeless character with contemporary comfort.',
    description1:
      'Perfect for travellers seeking a refined Jaisalmer stay, combining traditional character with the comforts of modern hospitality.',
    amenities: [
      { icon: BedDouble, label: 'Twin or King Bed' },
      { icon: Wind, label: 'Air Conditioner / Oil Heater' },
      { icon: Lock, label: 'Safe Locker' },
      { icon: Bath, label: 'Bathrobe' },
      { icon: Wifi, label: 'Complimentary Wi-Fi' },
      { icon: Coffee, label: 'Tea & Coffee Maker' },
    ],
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6487941/pexels-photo-6487941.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
  },

  'Super Deluxe Rooms': {
    title: 'Super Deluxe Rooms',
    subtitle: 'Comfortable accommodation in Jaisalmer.',
    description1:
      'Discover a comfortable stay designed around the warmth and character of Jaisalmer, with the essential comforts needed for a relaxed visit.',
    amenities: [
      { icon: BedDouble, label: 'Twin or King Bed Size' },
      { icon: Wind, label: 'Air Conditioner' },
      { icon: Lock, label: 'Safe Locker' },
      { icon: Briefcase, label: 'Work Desk with Stationery' },
      { icon: Wifi, label: 'Complimentary Wi-Fi' },
      { icon: Droplets, label: '24 HR Hot & Cold Water' },
    ],
    images: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
  },

  'Deluxe Rooms': {
    title: 'Deluxe Rooms',
    subtitle: 'A comfortable stay with modern essentials.',
    description1:
      'Relax in a thoughtfully arranged room offering a comfortable setting and the essential amenities for a pleasant Jaisalmer stay.',
    amenities: [
      { icon: BedDouble, label: 'Twin or King Bed Size' },
      { icon: Wind, label: 'Air Conditioner' },
      { icon: Lock, label: 'Safe Locker' },
      { icon: Wifi, label: 'Complimentary Wi-Fi' },
      { icon: Droplets, label: 'Hot & Cold Water' },
      { icon: Coffee, label: 'Tea & Coffee Maker' },
    ],
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6487941/pexels-photo-6487941.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
  },

  'Economy Standard Rooms': {
    title: 'Economy Standard Rooms',
    subtitle: 'Comfort and elegance at an affordable price.',
    description1:
      'The Economy Standard Room offers a blend of elegance and comfort, designed to provide a relaxing stay. The room features a soft, welcoming atmosphere with practical modern amenities.',
    amenities: [
      { icon: BedDouble, label: 'Twin or King Bed Size' },
      { icon: Wind, label: 'Air Conditioner' },
      { icon: Lock, label: 'Safe Locker' },
      { icon: Briefcase, label: 'Work Desk with Stationery' },
      { icon: Wifi, label: 'Complimentary Wi-Fi' },
      { icon: Droplets, label: '24 HR Hot & Cold Water' },
    ],
    images: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
  },
};

export function RoomsSection() {
  const [activeTab, setActiveTab] = useState('Heritage Rooms');

  const currentRoom = roomData[activeTab];

  return (
    <section
      id="stay"
      className="relative overflow-hidden bg-[#F7F2E8] py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          SUBTLE FLORAL BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <svg
          className="h-full w-full"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="jmb-floral-pattern"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M75 20
                   C62 42 40 48 24 48
                   C42 59 50 75 50 94
                   C64 83 75 69 75 52
                   C75 69 86 83 100 94
                   C100 75 108 59 126 48
                   C110 48 88 42 75 20Z"
                fill="none"
                stroke="#8A6A3E"
                strokeWidth="1"
              />

              <circle
                cx="75"
                cy="105"
                r="14"
                fill="none"
                stroke="#8A6A3E"
                strokeWidth="0.8"
              />

              <path
                d="M75 119 C62 130 51 133 39 132"
                fill="none"
                stroke="#8A6A3E"
                strokeWidth="0.8"
              />

              <path
                d="M75 119 C88 130 99 133 111 132"
                fill="none"
                stroke="#8A6A3E"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#jmb-floral-pattern)"
          />
        </svg>
      </div>

      {/* Soft background light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1380px]">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">

          <span className="mb-3 block font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C99A5B]">
            STAY AT JMB
          </span>

          <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[#241C17] sm:text-[44px] md:text-[50px]">
            Rooms &amp; Suites
          </h2>

          <p className="mx-auto mt-3 max-w-xl font-sans text-[13px] font-light leading-[1.75] text-[#666]">
            Thoughtfully designed spaces for a comfortable stay in Jaisalmer.
          </p>

        </div>

        {/* =====================================================
            ROOM CATEGORY NAVIGATION
            ===================================================== */}

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
                          ? 'text-[#241C17]'
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

        {/* =====================================================
            ROOM IMAGE
            ===================================================== */}

        <div className="relative">

          <div
            key={activeTab}
            className="
              group
              relative
              h-[390px]
              w-full
              overflow-hidden
              bg-[#DDD]
              shadow-[0_20px_60px_rgba(36,29,23,0.13)]
              sm:h-[465px]
              md:h-[535px]
              lg:h-[560px]
            "
          >

            <img
              src={currentRoom.images[0]}
              alt={`${currentRoom.title} at JMB Jaisalmer`}
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover:scale-[1.025]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

            {/* Image Label */}
            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">

              <span className="
                border
                border-white/50
                bg-black/10
                px-3
                py-2
                font-sans
                text-[8px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-white
                backdrop-blur-[2px]
              ">
                JMB JAISALMER
              </span>

            </div>

          </div>

          {/* =================================================
              OVERLAPPING ROOM INFORMATION
              ================================================= */}

          <div
            className="
              relative
              mx-4
              -mt-12
              bg-white
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

              {/* =================================================
                  LEFT CONTENT
                  ================================================= */}

              <div>

                <span className="mb-2.5 block font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C99A5B]">
                  ACCOMMODATION
                </span>

                <h3 className="font-serif text-[28px] font-normal leading-[1.12] text-[#241C17] sm:text-[32px]">
                  {currentRoom.title}
                </h3>

                <p className="mt-2 font-serif text-[13px] italic leading-relaxed text-[#766B62]">
                  {currentRoom.subtitle}
                </p>

                <p className="mt-4 max-w-[650px] font-sans text-[13px] font-light leading-[1.75] text-[#666]">
                  {currentRoom.description1}
                </p>

                <a
                  href="/hotel"
                  className="
                    group
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    border-b
                    border-[#C99A5B]
                    pb-1.5
                    font-sans
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#241C17]
                    transition-colors
                    duration-300
                    hover:text-[#C99A5B]
                  "
                >
                  DISCOVER ROOM

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>

              </div>

              {/* =================================================
                  RIGHT AMENITIES
                  ================================================= */}

              <div className="md:border-l md:border-[#241C17]/10 md:pl-9">

                <span className="mb-4 block font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C99A5B]">
                  ROOM AMENITIES
                </span>

                <div className="grid grid-cols-2 gap-x-5 gap-y-4">

                  {currentRoom.amenities.map(
                    (amenity: any, index: number) => {
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

                          <span className="font-sans text-[10px] leading-[1.45] text-[#555]">
                            {amenity.label}
                          </span>

                        </div>
                      );
                    }
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            ALL ACCOMMODATION CTA
            ===================================================== */}

        <div className="mt-8 flex justify-center sm:mt-9">

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
            VIEW ALL ACCOMMODATION

            <span className="h-px w-8 bg-[#C99A5B] transition-all duration-300 group-hover:w-12" />
          </a>

        </div>

      </div>
    </section>
  );
}