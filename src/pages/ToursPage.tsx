import { useState } from 'react';
import {
  Calendar,
  Check,
  MessageCircle,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import packageEssentialImg from '../assets/essentail-packge.jpg';
import packagePremiumImg from '../assets/places/package-premium.jpg';
import packageLuxuryImg from '../assets/places/package-luxury.jpg';

const categories = [
  {
    tier: 'BASIC',
    name: 'Vasudha Essential Jaisalmer Package',
    idealFor: 'Budget travellers and short weekend explorers',
    price: '₹3,999/-',
    period: 'per person',
    image: packageEssentialImg,
    inclusions: [
      'Hotel / Desert Camp Stay',
      'Basic Jaisalmer Sightseeing',
      'Breakfast & Rajasthani Dinner',
      'Railway Station / Hotel Pickup & Drop',
      'Selected Desert Activities & Sunset',
    ],
  },
  {
    tier: 'PREMIUM',
    name: 'Vasudha Premium Jaisalmer Experience',
    idealFor: 'Mid-range travellers seeking comfort, safaris & private car',
    price: '₹7,499/-',
    period: 'per person',
    badge: 'MOST POPULAR',
    image: packagePremiumImg,
    inclusions: [
      'Hotel Stay + Desert Camp Stay',
      'Full Jaisalmer City Tour (Fort & Havelis)',
      'Kuldhara Haunted Heritage Village Visit',
      'Camel Safari & Thrilling Jeep Safari on Dunes',
      'Rajasthani Folk Dance & Cultural Program',
      'Breakfast & Traditional Rajasthani Dinner',
      'Private Dedicated AC Car Included',
      'Railway Station / Airport Pickup & Drop',
    ],
  },
  {
    tier: 'LUXURY',
    name: 'Vasudha Royal Jaisalmer Experience',
    idealFor: 'Full VIP experience with Indo-Pak Border & Luxury Camps',
    price: '₹12,999/-',
    period: 'per person',
    badge: 'ROYAL VIP',
    image: packageLuxuryImg,
    inclusions: [
      'Premium Heritage Hotel Stay + Luxury Desert Camp',
      'Complete City Sightseeing (Fort, Patwon, Nathmal, Gadisar)',
      'Tanot Mata Temple & Longewala War Border Tour',
      'Kuldhara Village & Scenic Desert Photography Stops',
      'Camel Safari, Jeep Safari & Sunset Dune Experience',
      'Cultural & Kalbelia Folk Dance Show with Bonfire',
      'Gourmet Rajasthani Dinners & Daily Breakfasts',
      'Dedicated Private AC Car for Whole Tour',
      'Railway Station / Airport VIP Pickup & Drop',
    ],
  },
];

export function ToursPage() {
  const [activeTab, setActiveTab] = useState<'packages' | 'desert' | 'complete'>('packages');

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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#FAF5EC] border border-[#C99A5B]/30 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#C99A5B]" />
            <span className="font-sans text-[10px] font-semibold tracking-[0.25em] text-[#8A6A4A] uppercase">
              HOTEL VASUDHA HERITAGE · TOURS &amp; PACKAGES
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C17] font-normal leading-tight">
            Curated Jaisalmer Tour Packages
          </h1>
          <p className="mt-3 font-sans text-[13.5px] text-[#666] leading-relaxed">
            Choose from our 3 transparent package tiers or experience our signature 1-Night Sam Desert and 2N/3D Complete Jaisalmer Circuits.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2.5 rounded-full font-sans text-[11px] font-semibold tracking-wider uppercase transition-all ${
                activeTab === 'packages'
                  ? 'bg-[#241C17] text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-[#E8DFC8] hover:border-[#C99A5B]'
              }`}
            >
              3 Budget Tiers (Basic · Premium · Luxury)
            </button>
            <button
              onClick={() => setActiveTab('desert')}
              className={`px-5 py-2.5 rounded-full font-sans text-[11px] font-semibold tracking-wider uppercase transition-all ${
                activeTab === 'desert'
                  ? 'bg-[#241C17] text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-[#E8DFC8] hover:border-[#C99A5B]'
              }`}
            >
              1 Night Desert Package
            </button>
            <button
              onClick={() => setActiveTab('complete')}
              className={`px-5 py-2.5 rounded-full font-sans text-[11px] font-semibold tracking-wider uppercase transition-all ${
                activeTab === 'complete'
                  ? 'bg-[#241C17] text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-[#E8DFC8] hover:border-[#C99A5B]'
              }`}
            >
              2N / 3D Complete Package
            </button>
          </div>
        </div>

        {/* TAB 1: 3 TIERS (BASIC, PREMIUM, LUXURY) */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border overflow-hidden p-7 sm:p-8 flex flex-col justify-between shadow-sm relative ${
                  cat.tier === 'PREMIUM'
                    ? 'border-[#C99A5B] ring-1 ring-[#C99A5B]/30'
                    : 'border-[#E8DFC8]'
                }`}
              >
                {cat.badge && (
                  <div className="absolute top-3 right-4 z-10">
                    <span className="bg-[#C99A5B] text-white font-sans text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full shadow-sm">
                      {cat.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Horizontal Thumbnail */}
                  <div className="h-44 -mx-7 -mt-7 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#8A6A4A] block mb-1">
                    {cat.tier} CATEGORY
                  </span>
                  <h3 className="font-serif text-2xl text-[#241C17] font-normal leading-tight mb-2">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-[12px] text-gray-500 font-light mb-4">
                    {cat.idealFor}
                  </p>

                  <div className="border-t border-b border-gray-100 py-3 mb-5">
                    <span className="font-sans text-2xl font-bold text-[#C99A5B]">
                      {cat.price}
                    </span>
                    <span className="text-[11px] text-gray-400 font-sans ml-1.5">
                      {cat.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {cat.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600 font-sans">
                        <Check size={14} className="text-[#C99A5B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    cat.name
                  )}%20(${encodeURIComponent(cat.price)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-sans text-[11px] font-bold tracking-widest uppercase transition-all ${
                    cat.tier === 'PREMIUM'
                      ? 'bg-[#C99A5B] hover:bg-[#B88A4E] text-white shadow-md'
                      : 'bg-[#241C17] hover:bg-[#C99A5B] text-white'
                  }`}
                >
                  <MessageCircle size={14} />
                  <span>Enquire On WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: 1 NIGHT DESERT TOUR PACKAGE */}
        {activeTab === 'desert' && (
          <div className="bg-white rounded-2xl border border-[#E8DFC8] p-7 sm:p-10 shadow-sm mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-6 mb-8 gap-4">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-[#C99A5B] block mb-1">
                  SIGNATURE DESERT RETREAT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#241C17]">
                  1 Night Desert Tour Package
                </h2>
                <p className="font-serif text-[15px] italic text-[#8A6A4A] mt-1">
                  Complete Sam Desert Experience | Camel Safari + Jeep Safari + Cultural Program
                </p>
              </div>

              <a
                href="https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20want%20to%20book%20the%201%20Night%20Desert%20Tour%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#241C17] hover:bg-[#C99A5B] text-white px-6 py-3 rounded-xl font-sans text-[11px] font-bold tracking-widest uppercase transition-colors shrink-0"
              >
                <MessageCircle size={14} />
                <span>Book Desert Tour</span>
              </a>
            </div>

            {/* Day by Day */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E8DFC8]">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-[#C99A5B]" />
                  <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#241C17]">
                    Day 1 – Jaisalmer to Sam Desert
                  </span>
                </div>
                <p className="text-[12.5px] text-gray-600 font-sans mb-4 leading-relaxed">
                  <strong>Pickup:</strong> Jaisalmer Railway Station / Airport / Hotel. Proceed towards Sam Sand Dunes by comfortable private car.
                </p>
                <span className="block font-sans text-[10px] font-bold tracking-wider uppercase text-[#8A6A4A] mb-2">
                  Desert Activities Included:
                </span>
                <ul className="space-y-1.5 text-[12px] text-gray-600 font-sans">
                  <li>• Camel Safari across golden dunes</li>
                  <li>• Thrilling Jeep Safari (dune bashing)</li>
                  <li>• Sunset photography at Sand Dunes</li>
                  <li>• Traditional Rajasthani Cultural Program &amp; Kalbelia Dance</li>
                  <li>• Live Folk Music &amp; Evening Bonfire</li>
                  <li>• Authentic Rajasthani Buffet Dinner</li>
                  <li>• Comfortable overnight stay in luxury desert camp</li>
                </ul>
              </div>

              <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E8DFC8]">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-[#C99A5B]" />
                  <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#241C17]">
                    Day 2 – Desert Morning &amp; Jaisalmer Drop
                  </span>
                </div>
                <p className="text-[12.5px] text-gray-600 font-sans mb-4 leading-relaxed">
                  Wake up to the breathtaking desert sunrise and enjoy a fresh morning breakfast at the desert camp.
                </p>
                <p className="text-[12.5px] text-gray-600 font-sans mb-4 leading-relaxed">
                  After breakfast, check out from the camp and proceed comfortably back to Jaisalmer city in our car.
                </p>
                <p className="text-[12.5px] text-gray-600 font-sans leading-relaxed">
                  <strong>Drop:</strong> Jaisalmer Railway Station / Airport / Hotel. Tour ends with wonderful desert memories!
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="border-t border-gray-100 pt-6">
              <span className="block font-sans text-[10px] font-bold tracking-widest uppercase text-[#8A6A4A] mb-3">
                PACKAGE INCLUDES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-[12px] text-gray-600 font-sans">
                {[
                  'Jaisalmer Pickup & Drop',
                  'Transportation by Car',
                  '1 Night Desert Camp Stay',
                  'Breakfast & Rajasthani Dinner',
                  'Camel Safari on Sand Dunes',
                  'Jeep Safari (Dune Bashing)',
                  'Sunset at Sand Dunes',
                  'Rajasthani Cultural Program',
                  'Kalbelia / Folk Dance',
                  'Live Folk Music & Bonfire',
                  'Desert Photography Stops',
                  'Camp Facilities & Care',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={13} className="text-[#C99A5B] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 2 NIGHTS / 3 DAYS COMPLETE JAISALMER TOUR */}
        {activeTab === 'complete' && (
          <div className="bg-white rounded-2xl border border-[#E8DFC8] p-7 sm:p-10 shadow-sm mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-6 mb-8 gap-4">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-[#C99A5B] block mb-1">
                  FULL CIRCUIT HOLIDAY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#241C17]">
                  2 Nights / 3 Days Complete Tour Package
                </h2>
                <p className="font-serif text-[15px] italic text-[#8A6A4A] mt-1">
                  Hotel + Desert Camp + City Tour + Tanot Mata &amp; Longewala Border
                </p>
              </div>

              <a
                href="https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20want%20to%20book%20the%202%20Nights%20/%203%20Days%20Complete%20Jaisalmer%20Tour%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#241C17] hover:bg-[#C99A5B] text-white px-6 py-3 rounded-xl font-sans text-[11px] font-bold tracking-widest uppercase transition-colors shrink-0"
              >
                <MessageCircle size={14} />
                <span>Book 3-Day Package</span>
              </a>
            </div>

            {/* 3 Days Breakdown */}
            <div className="space-y-6 mb-10">
              <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E8DFC8]">
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#C99A5B] block mb-1">
                  DAY 1 · ARRIVAL &amp; FULL CITY SIGHTSEEING
                </span>
                <p className="text-[12.5px] text-gray-600 font-sans mb-3 leading-relaxed">
                  Pickup from Railway Station / Airport. Meet our representative and proceed for full-day Jaisalmer city sightseeing:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[12px] font-sans text-[#241C17]">
                  <span>• Jaisalmer Fort (Sonar Qila)</span>
                  <span>• Patwon Ki Haveli</span>
                  <span>• Salim Singh Ki Haveli</span>
                  <span>• Nathmal Ki Haveli</span>
                  <span>• Gadisar Lake</span>
                  <span>• Bada Bagh</span>
                  <span>• Local Heritage Markets</span>
                  <span>• Hotel Night Stay &amp; Dinner</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E8DFC8]">
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#C99A5B] block mb-1">
                  DAY 2 · TANOT – LONGEWALA BORDER – KULDHARA – DESERT CAMP
                </span>
                <p className="text-[12.5px] text-gray-600 font-sans mb-3 leading-relaxed">
                  After breakfast, proceed by comfortable car for the historic border circuit:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] font-sans text-[#241C17]">
                  <span>• Tanot Mata Temple (Miraculous border shrine)</span>
                  <span>• Longewala War Memorial &amp; Border Post</span>
                  <span>• Kuldhara Haunted Abandoned Village</span>
                  <span>• Sam Sand Dunes Camel &amp; Jeep Safari</span>
                  <span>• Sunset, Rajasthani Kalbelia Dance &amp; Bonfire</span>
                  <span>• Traditional Buffet Dinner &amp; Camp Stay</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E8DFC8]">
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#C99A5B] block mb-1">
                  DAY 3 · DESERT MORNING &amp; DEPARTURE
                </span>
                <p className="text-[12.5px] text-gray-600 font-sans leading-relaxed">
                  Enjoy the beautiful desert sunrise followed by breakfast at the camp. Check out and proceed for drop at Jaisalmer Railway Station or Airport with wonderful memories!
                </p>
              </div>
            </div>

            {/* Inclusions */}
            <div className="border-t border-gray-100 pt-6">
              <span className="block font-sans text-[10px] font-bold tracking-widest uppercase text-[#8A6A4A] mb-3">
                COMPLETE PACKAGE INCLUDES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-[12px] text-gray-600 font-sans">
                {[
                  'Railway Station / Airport Pickup & Drop',
                  'Transportation for Complete 3-Day Tour',
                  'Jaisalmer Full City Sightseeing',
                  '1 Night Hotel Stay in Jaisalmer',
                  '1 Night Desert Camp Stay in Sam Dunes',
                  'Breakfast & Dinner on Both Days',
                  'Tanot Mata Temple Excursion',
                  'Longewala Border Tour',
                  'Kuldhara Village Visit',
                  'Camel Safari on Sand Dunes',
                  'Jeep Safari (Dune Bashing)',
                  'Sunset Desert Experience',
                  'Rajasthani Folk Dance & Cultural Show',
                  'Bonfire, Music & Camp Activities',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={13} className="text-[#C99A5B] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
