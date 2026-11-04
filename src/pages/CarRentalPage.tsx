import { MessageCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import tharImg from '../assets/cars/thar-roxx.webp';
import scorpioImg from '../assets/cars/scorpio-s11.webp';
import xuvImg from '../assets/cars/xuv700.webp';
import swiftImg from '../assets/cars/swift.webp';
import brezzaImg from '../assets/cars/brezza.webp';
import ertigaImg from '../assets/cars/ertiga.webp';

const cars = [
  {
    id: 1,
    name: 'Mahindra Thar Roxx',
    model: 'Mahindra Thar Roxx 4×4',
    price: '₹7,500/-',
    kmLimit: '300 KM',
    duration: '24 Hours',
    seating: '4–5 Seater',
    climate: 'Climate Control AC',
    bestFor: 'Sam Sand Dunes, Desert Trail & Adventure Trips',
    image: tharImg,
    badge: 'POPULAR OFF-ROAD',
  },
  {
    id: 2,
    name: 'Scorpio S11 – White',
    model: 'Mahindra Scorpio S11 (White)',
    price: '₹5,500/-',
    kmLimit: '300 KM',
    duration: '24 Hours',
    seating: '7 Seater',
    climate: 'Dual AC',
    bestFor: 'Tanot Mata, Longewala Border & Highway Driving',
    image: scorpioImg,
    badge: 'CUSTOMER FAVORITE',
  },
  {
    id: 3,
    name: 'XUV 700',
    model: 'Mahindra XUV 700 Flagship',
    price: '₹8,500/-',
    kmLimit: '300 KM',
    duration: '24 Hours',
    seating: '6–7 Seater',
    climate: 'Dual Zone Climate AC',
    bestFor: 'VIP Royal Travel & Complete Rajasthan Circuit',
    image: xuvImg,
    badge: 'LUXURY SUV',
  },
  {
    id: 4,
    name: 'Swift',
    model: 'Maruti Suzuki Swift',
    price: '₹4,000/-',
    kmLimit: '300 KM',
    duration: '24 Hours',
    seating: '4 Seater',
    climate: 'Power AC',
    bestFor: 'Jaisalmer City Sightseeing, Havelis & Local Markets',
    image: swiftImg,
    badge: 'BUDGET FRIENDLY',
  },
  {
    id: 5,
    name: 'Brezza',
    model: 'Maruti Suzuki Brezza',
    price: '₹4,000/-',
    kmLimit: '300 KM',
    duration: '24 Hours',
    seating: '5 Seater',
    climate: 'Automatic AC',
    bestFor: 'Kuldhara Village, Bada Bagh & City Tours',
    image: brezzaImg,
    badge: 'COMPACT SUV',
  },
  {
    id: 6,
    name: 'Ertiga',
    model: 'Maruti Suzuki Ertiga',
    price: '₹6,500/-',
    kmLimit: '300 KM',
    duration: '24 Hours',
    seating: '7 Seater',
    climate: 'Roof AC Vents',
    bestFor: 'Family Group Travel, Airport & Station Pickups',
    image: ertigaImg,
    badge: 'FAMILY 7-SEATER',
  },
];

const highlights = [
  '24 Hours Car Rental Included',
  'Up to 300 KM Included in Daily Rental',
  'Multiple Car Options (Thar, Scorpio, XUV, Sedan, Hatchback)',
  'Jaisalmer Local & Nearby Sightseeing Trips',
  'Tanot Mata & Longewala Border Trips',
  'Sam Sand Dunes Desert Excursions',
  'Kuldhara Haunted Village Excursions',
  'Railway Station & Airport Pickup / Drop Available',
];

export function CarRentalPage() {
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
              HOTEL VASUDHA HERITAGE · CAR RENTAL
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C17] font-normal leading-tight">
            Cars Available on Rent – 24 Hours / 300 KM
          </h1>
          <p className="mt-3 font-sans text-[13.5px] text-[#666] leading-relaxed">
            Hotel Vasudha Heritage Tour, Stay &amp; Car Rental offers a range of comfortable cars on rent for your Jaisalmer trip. Choose your preferred car and explore Jaisalmer, Sam Desert, Tanot, Longewala and nearby destinations.
          </p>
        </div>

        {/* Quick Rate Table */}
        <div className="bg-white rounded-2xl border border-[#E8DFC8] p-6 sm:p-8 mb-14 shadow-sm">
          <h2 className="font-serif text-2xl text-[#241C17] mb-4">
            Fleet Pricing Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-[13px]">
              <thead>
                <tr className="border-b border-[#E8DFC8] text-[#8A6A4A] text-[11px] uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Car Name</th>
                  <th className="pb-3 font-semibold">24 Hours Rental</th>
                  <th className="pb-3 font-semibold">KM Limit</th>
                  <th className="pb-3 font-semibold">Capacity</th>
                  <th className="pb-3 font-semibold text-right">Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cars.map((car) => (
                  <tr key={car.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 font-serif text-[17px] text-[#241C17]">
                      {car.name}
                    </td>
                    <td className="py-3.5 font-bold text-[#C99A5B] text-[15px]">
                      {car.price}
                    </td>
                    <td className="py-3.5 text-gray-600 font-medium">
                      {car.kmLimit}
                    </td>
                    <td className="py-3.5 text-gray-500">
                      {car.seating}
                    </td>
                    <td className="py-3.5 text-right">
                      <a
                        href={`https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20want%20to%20rent%20the%20${encodeURIComponent(
                          car.name
                        )}%20(${encodeURIComponent(car.price)}%20-%20300%20KM).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#241C17] hover:bg-[#C99A5B] text-white px-3 py-1.5 rounded-md text-[10px] font-sans font-semibold tracking-wider uppercase transition-colors"
                      >
                        <MessageCircle size={12} />
                        <span>Reserve</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6 Car Cards with Proper Angle Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl border border-[#E8DFC8] overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#C99A5B] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#241C17]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-bold">
                  {car.price}
                </div>
                {car.badge && (
                  <div className="absolute top-3 right-3 bg-[#C99A5B] text-white font-sans text-[8.5px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                    {car.badge}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#241C17] font-normal mb-1">
                    {car.name}
                  </h3>
                  <span className="font-sans text-[11px] text-[#C99A5B] font-semibold tracking-wider uppercase block mb-3">
                    {car.model}
                  </span>

                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-gray-100 text-[11px] font-sans text-gray-600 mb-4">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-gray-400">Seats</span>
                      <span className="font-semibold text-[#241C17]">{car.seating}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-gray-400">Limit</span>
                      <span className="font-semibold text-[#241C17]">{car.kmLimit}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-gray-400">Duration</span>
                      <span className="font-semibold text-[#241C17]">{car.duration}</span>
                    </div>
                  </div>

                  <p className="text-[12px] text-gray-500 font-sans mb-5 leading-snug">
                    <strong className="text-gray-700">Best for:</strong> {car.bestFor}
                  </p>
                </div>

                <a
                  href={`https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20want%20to%20rent%20the%20${encodeURIComponent(
                    car.name
                  )}%20(${encodeURIComponent(car.price)}%20-%20300%20KM).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#241C17] hover:bg-[#C99A5B] text-white py-2.5 rounded-xl font-sans text-[10.5px] font-bold tracking-widest uppercase transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rental Highlights Section */}
        <div className="bg-[#241C17] text-white rounded-2xl p-8 sm:p-10 border border-[#C99A5B]/30 shadow-lg">
          <div className="max-w-3xl">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-[#C99A5B] block mb-2">
              WHY CHOOSE OUR FLEET
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-4">
              Rental Highlights &amp; Booking Benefits
            </h3>
            <p className="text-white/70 font-sans text-[13px] leading-relaxed mb-6 font-light">
              Well-maintained vehicles, experienced desert and highway chauffeurs, fixed transparent rates, and 24/7 on-call customer support across Jaisalmer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[12.5px] font-sans text-white/90">
                  <CheckCircle2 size={15} className="text-[#C99A5B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
              <span className="font-sans text-[12px] text-[#C99A5B] font-semibold">
                Choose Your Car • Explore Jaisalmer • Travel Your Way
              </span>
              <a
                href="https://wa.me/917734862004?text=Hello%20Hotel%20Vasudha%20Heritage%2C%20I%20want%20to%20enquire%20about%20car%20rental."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C99A5B] hover:bg-[#B88A4E] text-white px-5 py-2 rounded-lg font-sans text-[10px] font-bold tracking-widest uppercase transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
