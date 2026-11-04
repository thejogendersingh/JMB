import { Phone, Mail, MapPin, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  '🚗 Car Rental & Chauffeur Services',
  '🏨 Jaisalmer Hotel Stay & Suites',
  '🏜️ Sam Desert Camp Stay',
  '🐪 Camel & Jeep Safari on Sand Dunes',
  '📍 Jaisalmer City Sightseeing (Fort & Havelis)',
  '🇮🇳 Tanot Mata – Longewala Border Tour',
  '🚉 Railway Station Pickup & Drop',
  '✈️ Airport Pickup & Drop',
  '🧳 Customized Jaisalmer Tour Packages',
];

export function ContactPage() {
  const whatsappNumber = '+91 77348 62004';
  const whatsappUrl =
    'https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20would%20like%20to%20plan%20my%20Jaisalmer%20trip%20(Stay%20%2B%20Tours%20%2B%20Car%20Rental).';

  const mapQuery =
    'A-154, Laxmi Chand Sanwal Colony, District court Road, Jaisalmer, Rajasthan – 345001';
  const mapEmbedUrl =
    'https://www.google.com/maps?q=' + encodeURIComponent(mapQuery) + '&output=embed';

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2] min-h-screen text-[#241C17]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] font-sans font-bold tracking-widest uppercase text-[#8A6A4A] hover:text-[#241C17] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#FAF5EC] border border-[#C99A5B]/30 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#C99A5B]" />
            <span className="font-sans text-[10px] font-semibold tracking-[0.25em] text-[#8A6A4A] uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C17] font-normal leading-tight">
            Contact Hotel Vasudha Heritage
          </h1>
          <p className="mt-3 font-sans text-[13.5px] text-[#666] leading-relaxed">
            Complete Jaisalmer Travel Solution – Tour Packages, Hotel &amp; Desert Stay, Car Rental &amp; Taxi Service. We are here to plan your perfect Rajasthan journey.
          </p>
        </div>

        {/* 2-Column Info & Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">

          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-2xl border border-[#E8DFC8] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#C99A5B]/30 flex items-center justify-center text-[#C99A5B] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block font-sans text-[9px] font-bold tracking-widest uppercase text-[#8A6A4A] mb-1">
                    DIRECT CALL &amp; WHATSAPP
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xl font-bold text-[#241C17] hover:text-[#C99A5B] transition-colors"
                  >
                    {whatsappNumber}
                  </a>
                  <p className="font-sans text-[11px] text-gray-500 mt-1">
                    Available 24/7 for instant trip planning &amp; booking support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8DFC8] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#C99A5B]/30 flex items-center justify-center text-[#C99A5B] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-sans text-[9px] font-bold tracking-widest uppercase text-[#8A6A4A] mb-1">
                    EMAIL ASSISTANCE
                  </span>
                  <a
                    href="mailto:hotelvasudhaheritage@gmail.com"
                    className="font-sans text-[14px] font-semibold text-[#241C17] hover:text-[#C99A5B] transition-colors"
                  >
                    hotelvasudhaheritage@gmail.com
                  </a>
                  <p className="font-sans text-[11px] text-gray-500 mt-1">
                    Send us your group inquiry, corporate tour or custom travel request.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8DFC8] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#C99A5B]/30 flex items-center justify-center text-[#C99A5B] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-sans text-[9px] font-bold tracking-widest uppercase text-[#8A6A4A] mb-1">
                    HERITAGE LOCATION
                  </span>
                  <p className="font-sans text-[13px] text-[#241C17] font-medium leading-relaxed">
                    A-154, Laxmi Chand Sanwal Colony, District court Road, Jaisalmer, Rajasthan – 345001
                  </p>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C99A5B] hover:bg-[#B88A4E] text-white py-3.5 rounded-xl font-sans text-[11px] font-bold tracking-widest uppercase transition-colors shadow-md"
            >
              <MessageCircle size={15} />
              <span>Connect on WhatsApp Instantly</span>
            </a>
          </div>

          {/* Right: Key Services & Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E8DFC8] p-6 sm:p-8 shadow-sm">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-[#C99A5B] block mb-2">
                WHAT WE OFFER
              </span>
              <h3 className="font-serif text-2xl text-[#241C17] font-normal mb-4">
                Complete Jaisalmer Travel Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {services.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] text-[12px] font-sans font-medium text-[#241C17]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E8DFC8] aspect-[16/9]">
                <iframe
                  title="Hotel Vasudha Heritage Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
