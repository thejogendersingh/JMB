import {
  Footprints,
  Tent,
  UtensilsCrossed,
  Waves,
  Trees,
  ShieldAlert,
  Building2,
  ShoppingBag,
  Sparkles,
  Home,
  Mountain,
  Flame,
  Compass,
  Castle,
  Camera,
} from 'lucide-react';

const activities = [
  {
    title: 'CAMEL RIDE',
    icon: Footprints,
    image:
      'https://images.pexels.com/photos/4005834/pexels-photo-4005834.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'CAMP STAY',
    icon: Tent,
    image:
      'https://images.pexels.com/photos/9497622/pexels-photo-9497622.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'DINNER ON DUNES',
    icon: UtensilsCrossed,
    image:
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'GADISAR LAKE',
    icon: Waves,
    image:
      'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'DESERT NATIONAL PARK',
    icon: Trees,
    image:
      'https://images.pexels.com/photos/9497622/pexels-photo-9497622.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'WAR MUSEUM',
    icon: ShieldAlert,
    image:
      'https://images.pexels.com/photos/13142482/pexels-photo-13142482.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'HAVELIS OF JAISALMER',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1582613524278-dfb2344799dd?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'SHOPPING',
    icon: ShoppingBag,
    image:
      'https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'JAIN TEMPLES',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'VILLAGE TOURS',
    icon: Home,
    image:
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'AKAL WOOD FOSSIL PARK',
    icon: Mountain,
    image:
      'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'TANOT MATA TEMPLE',
    icon: Flame,
    image:
      'https://images.pexels.com/photos/19160087/pexels-photo-19160087.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'KULDHARA VILLAGE',
    icon: Compass,
    image:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'JAISALMER FORT',
    icon: Castle,
    image:
      'https://images.pexels.com/photos/33726139/pexels-photo-33726139.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'PHOTOGRAPHY',
    icon: Camera,
    image:
      'https://images.pexels.com/photos/36470457/pexels-photo-36470457.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function ActivitiesSection() {
  return (
    <section
      id="tours"
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
      {/* =========================================================
          SUBTLE HERITAGE PATTERN
          ========================================================= */}
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

      {/* =========================================================
          HEADER
          ========================================================= */}
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
        {/* Small editorial divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-7 sm:w-10 h-px bg-[#C99A5B]/45" />

          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A5B]" />

          <span className="w-7 sm:w-10 h-px bg-[#C99A5B]/45" />
        </div>

        {/* Brand label */}
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
            font-bold
            text-[#C99A5B]
            mb-2.5
          "
        >
          JMB JAISALMER
        </span>

        {/* Heading */}
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

        {/* Small divider below heading */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-7 sm:w-10 h-px bg-[#C99A5B]/45" />

          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A5B]" />

          <span className="w-7 sm:w-10 h-px bg-[#C99A5B]/45" />
        </div>
      </div>

      {/* =========================================================
          ACTIVITIES GRID
          ========================================================= */}
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

          const waUrl = `https://wa.me/919667222879?text=Hello%20JMB%20Jaisalmer,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
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
                w-full
                overflow-hidden

                bg-[#241C17]

                aspect-[1.35]
                sm:aspect-[1.15]
                lg:aspect-[1.05]

                rounded-[6px]

                border
                border-white/75

                flex
                flex-col
                items-center
                justify-between

                p-4
                sm:p-4
                lg:p-5

                shadow-[0_4px_14px_rgba(36,28,23,0.08)]

                transition-all
                duration-500

                hover:shadow-[0_10px_28px_rgba(36,28,23,0.16)]
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-110
                "
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/82
                  via-black/25
                  to-black/5

                  group-hover:from-black/70

                  transition-all
                  duration-500
                "
              />

              {/* =================================================
                  CENTER ICON
                  ================================================= */}
              <div
                className="
                  relative
                  z-10
                  flex-1
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    sm:w-15
                    sm:h-15
                    lg:w-16
                    lg:h-16

                    rounded-full

                    bg-black/30
                    backdrop-blur-[2px]

                    border
                    border-white/45

                    flex
                    items-center
                    justify-center

                    text-white

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:bg-[#C99A5B]
                    group-hover:border-[#C99A5B]
                  "
                >
                  <IconComp
                    size={27}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* =================================================
                  BOTTOM CONTENT
                  ================================================= */}
              <div
                className="
                  relative
                  z-10
                  w-full
                  text-left
                "
              >
                <div
                  className="
                    w-7
                    h-[2px]
                    bg-[#C99A5B]
                    mb-2.5

                    transition-all
                    duration-300

                    group-hover:w-11
                  "
                />

                <span
                  className="
                    font-sans
                    text-[10.5px]
                    sm:text-[11px]
                    lg:text-[12px]

                    font-bold
                    tracking-[0.10em]
                    sm:tracking-[0.12em]

                    text-white
                    uppercase

                    drop-shadow-md

                    block
                    leading-[1.25]
                  "
                >
                  {item.title}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}