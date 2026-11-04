import { CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const roomCategories = [
  {
    id: 'golden-heritage',
    name: 'Golden Heritage Room',
    price: '₹3,500/-',
    period: 'per night',
    description:
      'Comfortable stay with essential amenities and a traditional Jaisalmer-inspired atmosphere.',
    features: [
      'Authentic Jaisalmer Yellow Sandstone Ambiance',
      'Comfortable Heritage Queen/Twin Bed',
      'Air Conditioner',
      'Complimentary Wi-Fi (Subject to availability)',
      '24/7 Hot & Cold Running Water',
      'Daily Housekeeping & Linen Care',
    ],
  },
  {
    id: 'royal-deluxe',
    name: 'Royal Deluxe Room',
    price: '₹5,500/-',
    period: 'per night',
    description:
      'Spacious and comfortable room with upgraded amenities for a relaxing stay.',
    features: [
      'Spacious Living & Bedroom Space',
      'King-Size Royal Mattress with Luxury Linens',
      'Dual-Climate AC & Fan',
      'High-Speed Wi-Fi',
      'Electric Tea & Coffee Maker',
      'Safety Locker & Work Table',
    ],
    badge: 'POPULAR',
  },
  {
    id: 'maharaja-suite',
    name: 'Maharaja Suite',
    price: '₹7,500/-',
    period: 'per night',
    description:
      'Premium suite experience with extra space and enhanced comfort.',
    features: [
      'Opulent Maharaja Decor & Private Seating',
      'Grand Royal King Bedding',
      'Heritage Bath with Premium Toiletries',
      'Complimentary Tea, Coffee & Bottled Water',
      'Priority Assistance for Desert & Car Bookings',
      'Express Check-In & Check-Out',
    ],
  },
  {
    id: 'grand-royal-suite',
    name: 'Jaisalmer Grand Royal Suite',
    price: '₹10,500/-',
    period: 'per night',
    description:
      'Our top-category stay designed for guests looking for a luxurious and memorable Jaisalmer experience.',
    features: [
      'Top-Floor Royal Suite with Scenic City/Fort View',
      'Extensive Lounge & Separate Sleeping Quarters',
      'Signature Rajasthani Craftsmanship & Carvings',
      'Full Meal / Breakfast Plan Options',
      'Dedicated Travel Concierge & Station Transfer Assistance',
      'VIP Amenities & Welcome Refreshments',
    ],
    badge: 'TOP LUXURY',
  },
];

const stayInclusions = [
  'Comfortable Room Stay',
  'Housekeeping',
  'Basic Room Amenities',
  'Wi-Fi (subject to availability)',
  'Breakfast / Meal Plan as selected',
  'Assistance for Jaisalmer Tours & Car Rental',
];

export function HotelPage() {
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
              HOTEL VASUDHA HERITAGE · STAY
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C17] font-normal leading-tight">
            Choose Your Preferred Stay Experience
          </h1>
          <p className="mt-3 font-sans text-[13.5px] text-[#666] leading-relaxed">
            Stay royal in the heart of Jaisalmer. Comfortable rooms, traditional Rajasthani atmosphere, and comprehensive tour assistance.
          </p>
        </div>

        {/* Price Overview Table */}
        <div className="mb-14 bg-white rounded-2xl border border-[#E8DFC8] p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif text-2xl text-[#241C17] mb-4">
            Room Category &amp; Starting Price
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-[13px]">
              <thead>
                <tr className="border-b border-[#E8DFC8] text-[#8A6A4A] text-[11px] uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Room Category</th>
                  <th className="pb-3 font-semibold">Starting Price</th>
                  <th className="pb-3 font-semibold">Atmosphere</th>
                  <th className="pb-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {roomCategories.map((room) => (
                  <tr key={room.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 font-serif text-[17px] text-[#241C17] font-normal">
                      {room.name}
                    </td>
                    <td className="py-4 font-bold text-[#C99A5B] text-[15px]">
                      {room.price}
                    </td>
                    <td className="py-4 text-[#666] text-[12px] max-w-xs">
                      {room.description}
                    </td>
                    <td className="py-4 text-right">
                      <a
                        href={`https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(
                          room.name
                        )}%20(${encodeURIComponent(room.price)}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#241C17] hover:bg-[#C99A5B] text-white px-3.5 py-1.5 rounded-md text-[10px] font-sans font-semibold tracking-wider uppercase transition-colors"
                      >
                        <MessageCircle size={12} />
                        <span>Book</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Room Cards with COMING SOON Image Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {roomCategories.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-[#E8DFC8] overflow-hidden shadow-sm flex flex-col justify-between"
            >
              {/* Image Box with COMING SOON */}
              <div className="relative h-60 bg-[#241C17] flex items-center justify-center p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B130E] via-[#2A1D15] to-[#36271D]" />
                <div className="absolute inset-3 border border-[#C99A5B]/20 rounded-xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="font-serif text-2xl sm:text-3xl text-[#E2BA7E] font-normal tracking-[0.25em] uppercase">
                    COMING SOON
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <p className="font-serif text-[14px] italic text-[#8A6A4A] mb-4">
                    {room.description}
                  </p>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <span className="block font-sans text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-3">
                      KEY AMENITIES
                    </span>
                    <ul className="space-y-2">
                      {room.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600 font-sans">
                          <CheckCircle2 size={13} className="text-[#C99A5B] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(
                    room.name
                  )}%20(${encodeURIComponent(room.price)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#241C17] hover:bg-[#C99A5B] text-white py-3 rounded-xl font-sans text-[11px] font-bold tracking-widest uppercase transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>Reserve On WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hotel Inclusions Banner */}
        <div className="bg-[#241C17] text-white rounded-2xl p-8 sm:p-10 border border-[#C99A5B]/30 shadow-lg">
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-[#C99A5B] block mb-2">
              ALL STAYS INCLUDE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-4">
              Hotel Stay Features &amp; Inclusions
            </h3>
            <p className="text-white/70 font-sans text-[13px] leading-relaxed mb-6 font-light">
              Every room booking at Hotel Vasudha Heritage is backed by hospitable staff, transparent pricing, and dedicated tour assistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stayInclusions.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[12.5px] font-sans text-white/90">
                  <CheckCircle2 size={15} className="text-[#C99A5B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
