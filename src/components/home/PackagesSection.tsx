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
    <section className="relative overflow-hidden bg-[#FAF5EC] pt-14 sm:pt-16 pb-16 md:pb-24">

      {/* Subtle Heritage Pattern */}
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

      <div className="relative w-[92%] max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">

          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#C99A5B] font-bold block mb-3">
            SIGNATURE PACKAGES
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[48px] text-[#241C17] font-normal leading-tight">
            Curated Jaisalmer Journeys
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-10 h-[1px] bg-[#C99A5B]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C99A5B]" />
            <span className="w-10 h-[1px] bg-[#C99A5B]" />
          </div>

          <p className="font-sans text-[13px] sm:text-[14px] text-[#786A5C] font-light mt-5 max-w-lg mx-auto leading-6">
            Royal stays, desert adventures and cultural experiences,
            thoughtfully brought together for your Jaisalmer escape.
          </p>
        </div>

        {/* Package Cards */}
        <div className="flex flex-col gap-7">

          {packages.map((pkg, i) => (
            <div
              key={i}
              className="
                group
                flex flex-col md:flex-row
                bg-white
                overflow-hidden
                border border-[#E4D5BD]
                transition-all duration-500
                hover:border-[#C99A5B]/60
                hover:shadow-[0_15px_45px_rgba(73,51,29,0.08)]
              "
            >

              {/* Image Collage */}
              <div className="w-full md:w-[42%] lg:w-[43%] shrink-0 p-2 bg-[#FAF5EC]">

                <div className="flex gap-1.5 h-56 sm:h-64 md:h-full min-h-[300px]">

                  {/* Main Image */}
                  <div className="flex-[2] relative overflow-hidden">

                    <img
                      src={pkg.images[0]}
                      alt={pkg.title}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* Soft Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                    {/* Number */}
                    <span className="absolute top-4 left-4 font-serif text-5xl text-white/30 font-normal leading-none select-none">
                      {pkg.number}
                    </span>

                    {/* Package Tag */}
                    <span className="
                      absolute bottom-4 left-4
                      bg-white/90
                      text-[#241C17]
                      font-sans text-[8px]
                      font-bold tracking-[0.16em]
                      uppercase
                      px-3 py-2
                    ">
                      {pkg.tag}
                    </span>

                    {/* Popular Badge */}
                    {pkg.badge && (
                      <span className="
                        absolute top-4 right-4
                        bg-[#C99A5B]
                        text-white
                        font-sans text-[8px]
                        font-bold tracking-[0.16em]
                        uppercase
                        px-3 py-2
                      ">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Two Smaller Images */}
                  <div className="flex-[1] flex flex-col gap-1.5">

                    <div className="flex-1 relative overflow-hidden">
                      <img
                        src={pkg.images[1]}
                        alt={`${pkg.title} 2`}
                        className="
                          w-full h-full object-cover
                          transition-transform duration-700
                          group-hover:scale-[1.04]
                        "
                      />
                    </div>

                    <div className="flex-1 relative overflow-hidden">
                      <img
                        src={pkg.images[2]}
                        alt={`${pkg.title} 3`}
                        className="
                          w-full h-full object-cover
                          transition-transform duration-700
                          group-hover:scale-[1.04]
                        "
                      />
                    </div>

                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 sm:p-8 lg:p-9 flex-grow">

                {/* Title + Price */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-5">

                  <div>

                    <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#A98252] font-bold block mb-2">
                      PACKAGE {pkg.number}
                    </span>

                    <h3 className="
                      font-serif
                      text-[27px] sm:text-[30px]
                      text-[#241C17]
                      font-normal
                      leading-tight
                    ">
                      {pkg.title}
                    </h3>

                    <span className="font-sans text-[11px] text-[#A98252] font-semibold uppercase tracking-[0.12em] mt-2 block">
                      {pkg.highlight}
                    </span>

                  </div>

                  <div className="text-left sm:text-right shrink-0">

                    <span className="
                      font-serif
                      text-[30px] sm:text-[34px]
                      text-[#241C17]
                      font-normal
                      block
                      leading-none
                    ">
                      {pkg.price}
                    </span>

                    <span className="font-sans text-[10px] text-[#999] font-light mt-1 block">
                      {pkg.priceNote}
                    </span>

                  </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#E8D9BE] mb-5" />

                {/* Inclusions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-7">

                  {pkg.inclusions.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3"
                    >

                      <span className="
                        w-5 h-5
                        border border-[#C99A5B]/40
                        flex items-center justify-center
                        shrink-0
                        mt-[1px]
                      ">
                        <Check
                          size={11}
                          className="text-[#C99A5B]"
                          strokeWidth={2.5}
                        />
                      </span>

                      <span className="
                        font-sans
                        text-[12px] sm:text-[13px]
                        text-[#5F554D]
                        leading-5
                      ">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

                {/* Bottom CTA */}
                <div className="
                  flex flex-wrap
                  items-center
                  gap-x-6 gap-y-4
                  pt-5
                  border-t border-[#E8D9BE]
                  mt-auto
                ">

                  <a
                    href={pkg.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-[10px]
                      font-sans font-bold
                      tracking-[0.16em]
                      uppercase
                      text-[#241C17]
                      hover:text-[#C99A5B]
                      transition-colors duration-300
                      border-b border-[#C99A5B]
                      pb-1.5
                    "
                  >
                    <MessageCircle size={13} strokeWidth={1.8} />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <span className="hidden sm:block text-[#D9CCBA]">
                    |
                  </span>

                  <a
                    href="#"
                    className="
                      flex items-center gap-2
                      text-[10px]
                      font-sans font-medium
                      tracking-[0.14em]
                      uppercase
                      text-[#8D837A]
                      hover:text-[#C99A5B]
                      transition-colors duration-300
                    "
                  >
                    <span>View Details</span>
                    <ArrowRight size={12} strokeWidth={1.7} />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}