import { useState } from 'react';
import { MessageCircle, Users, Wind, MapPin, Gauge } from 'lucide-react';
import tharImg from '../../assets/cars/thar-roxx.webp';
import scorpioImg from '../../assets/cars/scorpio-s11.webp';
import xuvImg from '../../assets/cars/xuv700.webp';
import swiftImg from '../../assets/cars/swift.webp';
import brezzaImg from '../../assets/cars/brezza.webp';
import ertigaImg from '../../assets/cars/ertiga.webp';

const vehicles = [
  {
    id: 1,
    name: 'Mahindra Thar Roxx',
    model: 'Mahindra Thar Roxx 4×4',
    price: '₹7,500/-',
    kmLimit: '300 KM / 24 Hours',
    seating: '4–5 Pax',
    climate: 'Climate Control AC',
    ideal: 'Sam Sand Dunes, Off-Road & Desert Safari',
    image: tharImg,
  },
  {
    id: 2,
    name: 'Scorpio S11 – White',
    model: 'Mahindra Scorpio S11 (White)',
    price: '₹5,500/-',
    kmLimit: '300 KM / 24 Hours',
    seating: '7 Pax',
    climate: 'Dual Zone AC',
    ideal: 'Tanot – Longewala Border & Highway Cruising',
    image: scorpioImg,
  },
  {
    id: 3,
    name: 'XUV 700',
    model: 'Mahindra XUV 700 Premium',
    price: '₹8,500/-',
    kmLimit: '300 KM / 24 Hours',
    seating: '6–7 Pax',
    climate: 'Dual Zone AC',
    ideal: 'Luxury Royal Travel & Complete Rajasthan Circuit',
    image: xuvImg,
  },
  {
    id: 4,
    name: 'Swift',
    model: 'Maruti Suzuki Swift',
    price: '₹4,000/-',
    kmLimit: '300 KM / 24 Hours',
    seating: '4 Pax',
    climate: 'Power AC',
    ideal: 'Jaisalmer Local Sightseeing & City Transfers',
    image: swiftImg,
  },
  {
    id: 5,
    name: 'Brezza',
    model: 'Maruti Suzuki Brezza',
    price: '₹4,000/-',
    kmLimit: '300 KM / 24 Hours',
    seating: '5 Pax',
    climate: 'Automatic AC',
    ideal: 'Kuldhara Village & Budget Desert Exploration',
    image: brezzaImg,
  },
  {
    id: 6,
    name: 'Ertiga',
    model: 'Maruti Suzuki Ertiga (7 Seater)',
    price: '₹6,500/-',
    kmLimit: '300 KM / 24 Hours',
    seating: '7 Pax',
    climate: 'Roof AC Vents',
    ideal: 'Family Group Tours, Station & Airport Transfers',
    image: ertigaImg,
  },
];

export function CarRental() {
  const [active, setActive] = useState(0);
  const cur = vehicles[active];

  return (
    <section id="car-rental" className="py-14 md:py-20 bg-white border-t border-gray-100">
      <div className="w-[90%] mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C99A5B] font-bold block mb-2">
            HOTEL VASUDHA HERITAGE · CAR RENTAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#241C17] font-normal">
            Cars Available on Rent
          </h2>
          <p className="font-sans text-[13px] text-[#777] font-light mt-2 max-w-xl mx-auto">
            Explore Jaisalmer, Sam Sand Dunes, Tanot Mata, Longewala Border &amp; nearby destinations with our well-maintained private fleet.
          </p>
          <div className="inline-flex items-center gap-2 mt-3 bg-[#FAF5EC] border border-[#C99A5B]/30 px-3.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#C99A5B]" />
            <span className="font-sans text-[11px] font-semibold tracking-wider text-[#8A6A4A] uppercase">
              24 Hours Rental · Up to 300 KM Included
            </span>
          </div>
        </div>

        {/* Vehicle Tabs — horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {vehicles.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActive(i)}
              className={`shrink-0 px-4 py-2 rounded-full border text-[11px] font-sans font-medium transition-all duration-200 whitespace-nowrap ${
                i === active
                  ? 'bg-[#241C17] text-white border-[#241C17]'
                  : 'bg-white text-[#555] border-gray-200 hover:border-[#C99A5B]'
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>

        {/* 2-col: image left, info right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 shadow-sm border border-gray-100">
            <img
              key={active}
              src={cur.image}
              alt={cur.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="absolute top-4 left-4 bg-[#241C17]/85 backdrop-blur-[2px] text-white px-3 py-1 rounded-md text-[11px] font-semibold tracking-wider">
              {cur.price} / 24 Hr
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-sans text-[18px] sm:text-[20px] font-bold text-[#C99A5B]">
                  {cur.price}
                </span>
                <span className="text-[12px] text-gray-500 font-sans">
                  / 24 Hours ({cur.kmLimit})
                </span>
              </div>
              <h3 className="font-serif text-[30px] sm:text-[36px] text-[#241C17] font-normal leading-tight">
                {cur.name}
              </h3>
              <span className="font-sans text-[12px] text-[#C99A5B] font-semibold uppercase tracking-wider">
                {cur.model}
              </span>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-4">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Users size={12} className="text-[#C99A5B]" />
                  <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400">Seats</span>
                </div>
                <span className="font-sans text-[13px] text-[#241C17] font-semibold">{cur.seating}</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Wind size={12} className="text-[#C99A5B]" />
                  <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400">Climate</span>
                </div>
                <span className="font-sans text-[13px] text-[#241C17] font-semibold">{cur.climate}</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Gauge size={12} className="text-[#C99A5B]" />
                  <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400">KM Limit</span>
                </div>
                <span className="font-sans text-[12px] text-[#241C17] font-semibold">300 KM</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <MapPin size={12} className="text-[#C99A5B]" />
                <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400">Ideal For</span>
              </div>
              <span className="font-sans text-[12px] text-gray-600 font-light leading-snug">{cur.ideal}</span>
            </div>

            {/* Rental Highlights */}
            <div className="flex flex-wrap gap-2">
              {[
                '24 Hours Rental',
                '300 KM Included',
                'Tanot–Longewala',
                'Sam Desert Trips',
                'Kuldhara Village',
                'Pickup & Drop Available',
              ].map((f) => (
                <span key={f} className="font-sans text-[10.5px] text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">
                  {f}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20want%20to%20book%20${encodeURIComponent(
                cur.name
              )}%20(${encodeURIComponent(cur.price)})%20for%20my%20Jaisalmer%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#241C17] hover:bg-[#C99A5B] text-white px-7 py-3.5 rounded-xl text-[11px] font-sans font-bold tracking-widest uppercase transition-all duration-300 self-start"
            >
              <MessageCircle size={14} />
              <span>Book on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
