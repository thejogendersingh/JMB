import logo from '../../assets/logo-hvh.webp';

export function Footer() {
  const whatsappNumber = '+91 77348 62004';

  const whatsappUrl =
    'https://wa.me/917734862004?text=Hello,%20I%20want%20to%20enquire%20about%20Hotel%20Vasudha%20Heritage%20Jaisalmer.';

  const mapQuery =
    'A-154, Laxmi Chand Sanwal Colony, District court Road, Jaisalmer, Rajasthan – 345001';

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(mapQuery);

  const mapEmbedUrl =
    'https://www.google.com/maps?q=' +
    encodeURIComponent(mapQuery) +
    '&output=embed';

  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-[#241C17]/10
        bg-[#F7F2E8]
        text-[#241C17]
      "
    >
      <div className="mx-auto w-[92%] max-w-[1380px]">

        {/* =====================================================
            MAIN FOOTER CONTENT
            ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-14
            sm:py-16
            md:grid-cols-12
            md:gap-10
            lg:gap-16
            lg:py-20
          "
        >

          {/* =================================================
              BRAND
              ================================================= */}

          <div className="md:col-span-5">

            <div className="mb-5">
              <img
                src={logo}
                alt="Hotel Vasudha Heritage"
                className="
                  h-10
                  w-auto
                  object-contain
                  sm:h-12
                "
              />
            </div>

            <p
              className="
                max-w-[430px]
                font-sans
                text-[13px]
                font-light
                leading-[1.8]
                text-[#241C17]/65
                sm:text-[13.5px]
              "
            >
              A refined Jaisalmer stay and travel experience rooted in
              Rajasthan's heritage. Comfortable stays, desert experiences,
              and dedicated travel across the Thar.
            </p>

            <span
              className="
                mt-5
                block
                font-sans
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#C99A5B]
              "
            >
              STAY • TOURS • CAR RENTAL
            </span>

          </div>

          {/* =================================================
              EXPLORE
              ================================================= */}

          <div className="md:col-span-3">

            <h4
              className="
                mb-5
                font-sans
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#C99A5B]
              "
            >
              EXPLORE
            </h4>

            <nav>
              <ul
                className="
                  space-y-2.5
                  font-serif
                  text-[16px]
                  text-[#241C17]/80
                "
              >
                <li>
                  <a
                    href="#stay"
                    className="transition-colors duration-300 hover:text-[#C99A5B]"
                  >
                    Stay & Rooms
                  </a>
                </li>

                <li>
                  <a
                    href="#experiences"
                    className="transition-colors duration-300 hover:text-[#C99A5B]"
                  >
                    Vasudha Experiences
                  </a>
                </li>

                <li>
                  <a
                    href="#tours"
                    className="transition-colors duration-300 hover:text-[#C99A5B]"
                  >
                    Jaisalmer Tours
                  </a>
                </li>

                <li>
                  <a
                    href="#car-rental"
                    className="transition-colors duration-300 hover:text-[#C99A5B]"
                  >
                    Car Rental
                  </a>
                </li>

                <li>
                  <a
                    href="#gallery"
                    className="transition-colors duration-300 hover:text-[#C99A5B]"
                  >
                    Gallery
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="transition-colors duration-300 hover:text-[#C99A5B]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

          </div>

          {/* =================================================
              CONTACT
              ================================================= */}

          <div className="md:col-span-4">

            <h4
              className="
                mb-5
                font-sans
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#C99A5B]
              "
            >
              CONTACT
            </h4>

            <div className="space-y-4">

              {/* Phone */}

              <div>

                <span
                  className="
                    mb-1
                    block
                    font-sans
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#241C17]/45
                  "
                >
                  DIRECT LINE & WHATSAPP
                </span>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-sans
                    text-[14px]
                    font-medium
                    text-[#241C17]
                    transition-colors
                    duration-300
                    hover:text-[#C99A5B]
                  "
                >
                  {whatsappNumber}
                </a>

              </div>

              {/* Email */}

              <div>

                <span
                  className="
                    mb-1
                    block
                    font-sans
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#241C17]/45
                  "
                >
                  EMAIL ENQUIRY
                </span>

                <a
                  href="mailto:hotelvasudhaheritage@gmail.com"
                  className="
                    font-sans
                    text-[13px]
                    text-[#241C17]/75
                    transition-colors
                    duration-300
                    hover:text-[#C99A5B]
                  "
                >
                  hotelvasudhaheritage@gmail.com
                </a>

              </div>

              {/* Location */}

              <div>

                <span
                  className="
                    mb-1
                    block
                    font-sans
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#241C17]/45
                  "
                >
                  LOCATION
                </span>

                <p
                  className="
                    max-w-[360px]
                    font-sans
                    text-[13px]
                    font-light
                    leading-[1.65]
                    text-[#241C17]/70
                  "
                >
                  A-154, Laxmi Chand Sanwal Colony, District court Road,
                  Jaisalmer, Rajasthan – 345001
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            MAP SECTION
            ===================================================== */}

        <div className="border-t border-[#241C17]/10 pt-8 sm:pt-10">

          {/* Map heading */}

          <div
            className="
              mb-5
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <span
                className="
                  mb-2
                  block
                  font-sans
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#C99A5B]
                "
              >
                FIND US
              </span>

              <h3
                className="
                  font-serif
                  text-[28px]
                  font-normal
                  leading-none
                  text-[#241C17]
                  sm:text-[32px]
                "
              >
                Find Hotel Vasudha Heritage in Jaisalmer
              </h3>

            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2
                border-b
                border-[#C99A5B]
                pb-1.5
                font-sans
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#241C17]
                transition-colors
                duration-300
                hover:text-[#C99A5B]
              "
            >
              GET DIRECTIONS

              <span
                className="
                  text-[13px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              >
                ↗
              </span>
            </a>

          </div>

          {/* =================================================
              GOOGLE MAP
              ================================================= */}

          <div
            className="
              relative
              h-[280px]
              w-full
              overflow-hidden
              rounded-[8px]
              border
              border-[#241C17]/10
              bg-[#E8D3AE]
              shadow-[0_12px_35px_rgba(36,29,23,0.08)]
              sm:h-[330px]
              md:h-[370px]
            "
          >

            <iframe
              title="Hotel Vasudha Heritage Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'sepia(12%) saturate(78%) contrast(94%)',
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Small map label */}

            <div
              className="
                pointer-events-none
                absolute
                left-4
                top-4
                bg-[#F7F2E8]/95
                px-4
                py-2.5
                shadow-[0_5px_18px_rgba(36,29,23,0.12)]
                backdrop-blur-sm
                sm:left-5
                sm:top-5
              "
            >

              <span
                className="
                  block
                  font-sans
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#C99A5B]
                "
              >
                HOTEL VASUDHA HERITAGE
              </span>

              <span
                className="
                  mt-0.5
                  block
                  font-serif
                  text-[13px]
                  text-[#241C17]
                "
              >
                Rajasthan, India
              </span>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM FOOTER
            ===================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-[#241C17]/10
            py-6
            text-center
            sm:flex-row
            sm:text-left
          "
        >

          <p
            className="
              font-sans
              text-[10px]
              tracking-wide
              text-[#241C17]/45
            "
          >
            © Hotel Vasudha Heritage. All Rights Reserved.
          </p>

          <p
            className="
              font-sans
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#C99A5B]
            "
          >
            JAISALMER • RAJASTHAN
          </p>

        </div>

      </div>
    </footer>
  );
}