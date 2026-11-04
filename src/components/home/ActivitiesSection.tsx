import {
  Footprints,
  Tent,
  UtensilsCrossed,
  Waves,
  Trees,
  ShieldAlert,
  Building2,
  Sparkles,
  Home,
  Mountain,
  Flame,
  Compass,
  Castle,
  Camera,
} from 'lucide-react';

import camelRideImg from '../../assets/places/camel-ride.webp';
import campStayImg from '../../assets/places/camp-stay.webp';
import dinnerDunesImg from '../../assets/places/dinner-dunes.webp';
import jeepSafariImg from '../../assets/places/jeep-safari.webp';
import gadisarLakeImg from '../../assets/places/gadisar-lake.webp';
import desertParkImg from '../../assets/places/desert-park.webp';
import warMuseumImg from '../../assets/places/war-museum.webp';
import havelisImg from '../../assets/places/havelis.webp';
import jainTempleImg from '../../assets/places/jain-temple.webp';
import villageTourImg from '../../assets/places/village-tour.webp';
import badaBaghImg from '../../assets/places/bada-bagh.webp';
import tanotMataImg from '../../assets/places/tanot-mata.webp';
import kuldharaImg from '../../assets/places/kuldhara.webp';
import jaisalmerFortImg from '../../assets/places/jaisalmer-fort.webp';
import sunsetPhotoImg from '../../assets/places/sunset-photo.webp';

const activities = [
  {
    title: 'JAISALMER FORT',
    icon: Castle,
    image: jaisalmerFortImg,
  },
  {
    title: 'CAMEL RIDE',
    icon: Footprints,
    image: camelRideImg,
  },
  {
    title: 'JEEP SAFARI',
    icon: Compass,
    image: jeepSafariImg,
  },
  {
    title: 'CAMP STAY',
    icon: Tent,
    image: campStayImg,
  },
  {
    title: 'DINNER ON DUNES',
    icon: UtensilsCrossed,
    image: dinnerDunesImg,
  },
  {
    title: 'HAVELIS OF JAISALMER',
    icon: Building2,
    image: havelisImg,
  },
  {
    title: 'GADISAR LAKE',
    icon: Waves,
    image: gadisarLakeImg,
  },
  {
    title: 'KULDHARA VILLAGE',
    icon: Compass,
    image: kuldharaImg,
  },
  {
    title: 'BADA BAGH',
    icon: Mountain,
    image: badaBaghImg,
  },
  {
    title: 'JAIN TEMPLES',
    icon: Sparkles,
    image: jainTempleImg,
  },
  {
    title: 'TANOT MATA TEMPLE',
    icon: Flame,
    image: tanotMataImg,
  },
  {
    title: 'DESERT NATIONAL PARK',
    icon: Trees,
    image: desertParkImg,
  },
  {
    title: 'WAR MUSEUM',
    icon: ShieldAlert,
    image: warMuseumImg,
  },
  {
    title: 'VILLAGE TOURS',
    icon: Home,
    image: villageTourImg,
  },
  {
    title: 'SUNSET PHOTOGRAPHY',
    icon: Camera,
    image: sunsetPhotoImg,
  },
];

export function ActivitiesSection() {
  return (
    <section
      id="experiences"
      className="
        relative
        overflow-hidden
        bg-[#F7F2E8]
        pt-14
        sm:pt-18
        md:pt-20
        lg:pt-24
        pb-8
        sm:pb-10
        lg:pb-12
      "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.028]">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="270" stroke="#C99A5B" />
          <circle cx="400" cy="400" r="215" stroke="#C99A5B" />
          <circle cx="400" cy="400" r="155" stroke="#C99A5B" />

          <path
            d="M400 130C430 205 495 270 570 300C495 330 430 395 400 470C370 395 305 330 230 300C305 270 370 205 400 130Z"
            stroke="#C99A5B"
          />

          <path
            d="M130 400C205 370 270 305 300 230C330 305 395 370 470 400C395 430 330 495 300 570C270 495 205 430 130 400Z"
            stroke="#C99A5B"
          />
        </svg>
      </div>

      {/* Header */}
      <div
        className="
          relative
          w-[90%]
          sm:w-[88%]
          md:w-[86%]
          max-w-7xl
          mx-auto
          text-center
          mb-9
          sm:mb-12
          md:mb-14
        "
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-7 sm:w-10 h-px bg-[#C99A5B]/45" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A5B]" />
          <span className="w-7 sm:w-10 h-px bg-[#C99A5B]/45" />
        </div>

        <span
          className="
            font-sans
            text-[9px]
            sm:text-[10px]
            md:text-[11px]
            tracking-[0.28em]
            sm:tracking-[0.32em]
            uppercase
            font-bold
            text-[#C99A5B]
            mb-2.5
            block
          "
        >
          HOTEL VASUDHA HERITAGE
        </span>

        <h2
          className="
            font-serif
            text-[#241C17]
            font-normal
            text-[30px]
            sm:text-[38px]
            md:text-[44px]
            lg:text-[50px]
            leading-[1.15]
          "
        >
          Explore Jaisalmer
        </h2>

        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-7 sm:w-10 h-px bg-[#C99A5B]/45" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A5B]" />
          <span className="w-7 sm:w-10 h-px bg-[#C99A5B]/45" />
        </div>
      </div>

      {/* Activities Grid */}
      <div
        className="
          relative
          w-full
          px-4
          sm:px-5
          md:px-6
          lg:px-0

          grid
          grid-cols-1
          sm:grid-cols-3
          lg:grid-cols-5

          gap-3
          sm:gap-2
          lg:gap-[2px]
        "
      >
        {activities.map((item, idx) => {
          const IconComp = item.icon;

          const waUrl = `https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
            item.title
          )}%20tour.`;

          return (
            <a
              key={idx}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                h-[220px]
                sm:h-[240px]
                md:h-[260px]
                lg:h-[280px]
                overflow-hidden
                bg-[#241C17]
                block
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-110
                  brightness-90
                  group-hover:brightness-100
                "
                loading="lazy"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#140E0A]/90
                  via-[#140E0A]/30
                  to-transparent
                  transition-opacity
                  duration-500
                  group-hover:from-[#140E0A]/95
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  p-5
                  flex
                  flex-col
                  justify-end
                  items-center
                  text-center
                "
              >
                <div
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/10
                    backdrop-blur-sm
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-[#E2BA7E]
                    mb-2.5
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[#C99A5B]
                    group-hover:text-white
                  "
                >
                  <IconComp size={16} strokeWidth={1.5} />
                </div>

                <h3
                  className="
                    font-sans
                    text-[11px]
                    sm:text-[11.5px]
                    font-bold
                    tracking-[0.2em]
                    uppercase
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#E2BA7E]
                  "
                >
                  {item.title}
                </h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
