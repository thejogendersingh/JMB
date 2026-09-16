import { MessageCircle, Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    number: '01',
    tag: '2 NIGHTS · DESERT + CITY CHARM',
    title: 'Bronze Escape',
    price: '₹80,000',
    priceNote: '+ Taxes · Per Couple',
    highlight: 'Ideal for Romantic Getaways',
    inclusions: [
      'Dune Safari Experience',
      '2 Nights at JMB Hotel',
      'Daily Breakfast Included',
      'Kids below 5 yrs — Complimentary',
    ],
    images: [
      'https://images.pexels.com/photos/33726139/pexels-photo-33726139.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/4005834/pexels-photo-4005834.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=600&auto=format&fit=crop',
    ],
    wa: 'https://wa.me/919667222879?text=Hello%2C%20I%20am%20interested%20in%20the%20Bronze%20Escape%20Package.',
  },
  {
    number: '02',
    tag: '3 NIGHTS · ROYAL + DESERT RETREAT',
    title: 'Gold Escape + Camp Stay',
    price: '₹1,40,000',
    priceNote: '+ Taxes · Per Couple',
    highlight: 'Most Popular · Best Value',
    inclusions: [
      '2 Nights at JMB Luxury Hotel',
      '1 Night at Luxury Desert Camp',
      'Full Desert Safari & Dune Dinner',
      'Kids below 5 yrs — Complimentary',
    ],
    images: [
      'https://images.pexels.com/photos/9497622/pexels-photo-9497622.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/13142482/pexels-photo-13142482.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop',
    ],
    wa: 'https://wa.me/919667222879?text=Hello%2C%20I%20am%20interested%20in%20the%20Gold%20Escape%20%2B%20Camp%20Stay%20Package.',
    badge: 'POPULAR',
  },
];

export function PackagesSection() {
  return (
    <section
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
      {/* =========================================================
          SUBTLE HERITAGE PATTERN
          ========================================================= */}
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

          <path
            d="M140 400C210 370 270 310 300 240C330 310 390 370 460 400C390 430 330 490 300 560C270 490 210 430 140 400Z"
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
        {/* =======================================================
            SECTION HEADER
            ======================================================= */}
        <div
          className="
            text-center
            mb-9
            sm:mb-11
            md:mb-13
          "
        >
          {/* Small divider */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-10 h-px bg-[#C99A5B]/50" />

            <span className="w-1.5 h-1.5 rounded-full bg-[#C99A5B]" />

            <span className="w-8 sm:w-10 h-px bg-[#C99A5B]/50" />
          </div>

          {/* Label */}
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
              mb-2.5
            "
          >
            SIGNATURE PACKAGES
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
              lg:text-[48px]
              leading-[1.15]
            "
          >
            Curated Jaisalmer Journeys
          </h2>

          {/* No paragraph here */}
        </div>

        {/* =======================================================
            PACKAGE CARDS
            ======================================================= */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {packages.map((pkg, i) => (
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

                rounded-[7px]

                transition-all
                duration-500

                hover:border-[#C99A5B]/60
                hover:shadow-[0_15px_45px_rgba(73,51,29,0.08)]
              "
            >
              {/* =================================================
                  IMAGE AREA
                  ================================================= */}
              <div
                className="
                  w-full
                  lg:w-[43%]
                  shrink-0

                  p-2
                  sm:p-2.5

                  bg-[#FAF5EC]
                "
              >
                <div
                  className="
                    flex
                    gap-1.5

                    h-[220px]
                    sm:h-[250px]
                    md:h-[280px]
                    lg:h-full
                    lg:min-h-[360px]

                    overflow-hidden
                    rounded-[5px]
                  "
                >
                  {/* Main Image */}
                  <div
                    className="
                      relative
                      flex-[2]
                      overflow-hidden

                      rounded-[4px]

                      border
                      border-white
                    "
                  >
                    <img
                      src={pkg.images[0]}
                      alt={pkg.title}
                      className="
                        w-full
                        h-full
                        object-cover

                        transition-transform
                        duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* Image overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/40
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Package number */}
                    <span
                      className="
                        absolute
                        top-3
                        left-3
                        sm:top-4
                        sm:left-4

                        font-serif
                        text-4xl
                        sm:text-5xl

                        text-white/35
                        font-normal
                        leading-none
                        select-none
                      "
                    >
                      {pkg.number}
                    </span>

                    {/* Package tag */}
                    <span
                      className="
                        absolute
                        bottom-3
                        left-3
                        sm:bottom-4
                        sm:left-4

                        bg-white/90

                        text-[#241C17]

                        font-sans
                        text-[7px]
                        sm:text-[8px]

                        font-bold
                        tracking-[0.14em]

                        uppercase

                        px-2.5
                        py-1.5
                        sm:px-3
                        sm:py-2

                        rounded-[2px]
                      "
                    >
                      {pkg.tag}
                    </span>

                    {/* Popular */}
                    {pkg.badge && (
                      <span
                        className="
                          absolute
                          top-3
                          right-3
                          sm:top-4
                          sm:right-4

                          bg-[#C99A5B]

                          text-white

                          font-sans
                          text-[7px]
                          sm:text-[8px]

                          font-bold
                          tracking-[0.14em]

                          uppercase

                          px-2.5
                          py-1.5
                          sm:px-3
                          sm:py-2

                          rounded-[2px]
                        "
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Two Small Images */}
                  <div
                    className="
                      flex-[1]
                      flex
                      flex-col
                      gap-1.5
                      min-w-0
                    "
                  >
                    <div
                      className="
                        flex-1
                        relative
                        overflow-hidden

                        rounded-[4px]

                        border
                        border-white
                      "
                    >
                      <img
                        src={pkg.images[1]}
                        alt={`${pkg.title} 2`}
                        className="
                          w-full
                          h-full
                          object-cover

                          transition-transform
                          duration-700

                          group-hover:scale-[1.04]
                        "
                      />
                    </div>

                    <div
                      className="
                        flex-1
                        relative
                        overflow-hidden

                        rounded-[4px]

                        border
                        border-white
                      "
                    >
                      <img
                        src={pkg.images[2]}
                        alt={`${pkg.title} 3`}
                        className="
                          w-full
                          h-full
                          object-cover

                          transition-transform
                          duration-700

                          group-hover:scale-[1.04]
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  CONTENT AREA
                  ================================================= */}
              <div
                className="
                  flex
                  flex-col
                  flex-grow

                  p-5
                  sm:p-7
                  md:p-8
                  lg:p-9
                "
              >
                {/* =================================================
                    TITLE + PRICE
                    ================================================= */}
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    sm:justify-between

                    gap-4
                    sm:gap-5

                    mb-5
                  "
                >
                  <div className="min-w-0">
                    <span
                      className="
                        font-sans
                        text-[8px]
                        sm:text-[9px]

                        tracking-[0.23em]
                        uppercase

                        text-[#A98252]
                        font-bold

                        block
                        mb-1.5
                      "
                    >
                      PACKAGE {pkg.number}
                    </span>

                    <h3
                      className="
                        font-serif
                        text-[25px]
                        sm:text-[29px]
                        md:text-[31px]

                        text-[#241C17]

                        font-normal
                        leading-[1.15]
                      "
                    >
                      {pkg.title}
                    </h3>

                    <span
                      className="
                        font-sans
                        text-[9px]
                        sm:text-[10px]

                        text-[#A98252]

                        font-semibold
                        uppercase
                        tracking-[0.10em]

                        mt-2
                        block
                      "
                    >
                      {pkg.highlight}
                    </span>
                  </div>

                  {/* Price */}
                  <div
                    className="
                      text-left
                      sm:text-right
                      shrink-0
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-[28px]
                        sm:text-[32px]

                        text-[#241C17]

                        font-normal
                        leading-none
                        block
                      "
                    >
                      {pkg.price}
                    </span>

                    <span
                      className="
                        font-sans
                        text-[9px]
                        sm:text-[10px]

                        text-[#999]

                        font-light

                        mt-1
                        block
                      "
                    >
                      {pkg.priceNote}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="
                    w-full
                    h-px
                    bg-[#E8D9BE]
                    mb-5
                  "
                />

                {/* =================================================
                    INCLUSIONS
                    ================================================= */}
                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2

                    gap-x-6
                    gap-y-3

                    mb-6
                    sm:mb-7
                  "
                >
                  {pkg.inclusions.map((item, j) => (
                    <div
                      key={j}
                      className="
                        flex
                        items-start
                        gap-2.5
                      "
                    >
                      <span
                        className="
                          w-5
                          h-5

                          border
                          border-[#C99A5B]/40

                          flex
                          items-center
                          justify-center

                          shrink-0
                          mt-[1px]

                          rounded-[2px]
                        "
                      >
                        <Check
                          size={11}
                          className="text-[#C99A5B]"
                          strokeWidth={2.5}
                        />
                      </span>

                      <span
                        className="
                          font-sans
                          text-[11.5px]
                          sm:text-[12.5px]

                          text-[#5F554D]

                          leading-[1.55]
                        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    CTA
                    ================================================= */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center

                    gap-x-5
                    gap-y-3

                    pt-4
                    sm:pt-5

                    border-t
                    border-[#E8D9BE]

                    mt-auto
                  "
                >
                  <a
                    href={pkg.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2

                      text-[9px]
                      sm:text-[10px]

                      font-sans
                      font-bold

                      tracking-[0.14em]
                      uppercase

                      text-[#241C17]

                      hover:text-[#C99A5B]

                      transition-colors
                      duration-300

                      border-b
                      border-[#C99A5B]

                      pb-1.5
                    "
                  >
                    <MessageCircle
                      size={13}
                      strokeWidth={1.8}
                    />

                    <span>Enquire on WhatsApp</span>
                  </a>

                  <span
                    className="
                      hidden
                      sm:block
                      text-[#D9CCBA]
                    "
                  >
                    |
                  </span>

                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      gap-2

                      text-[9px]
                      sm:text-[10px]

                      font-sans
                      font-medium

                      tracking-[0.13em]
                      uppercase

                      text-[#8D837A]

                      hover:text-[#C99A5B]

                      transition-colors
                      duration-300
                    "
                  >
                    <span>View Details</span>

                    <ArrowRight
                      size={12}
                      strokeWidth={1.7}
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}