import { useState } from 'react';
import { MessageCircle, Users, Wind, MapPin } from 'lucide-react';
import carImg from '../../assets/car-rentel.png';

const vehicles = [
  { id:  1, name: 'Comfort Sedan',    model: 'Swift Dzire / Toyota Etios',   seating: '4 Pax', climate: 'AC',              ideal: 'City rides & airport transfers',         image: carImg },
  { id:  2, name: 'Premium Sedan',    model: 'Honda City / Ciaz',            seating: '4 Pax', climate: 'AC',              ideal: 'Business travel & pickups',              image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1000&auto=format&fit=crop' },
  { id:  3, name: 'Hatchback',        model: 'Maruti WagonR / Alto',         seating: '4 Pax', climate: 'AC',              ideal: 'Budget city sightseeing',                image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000&auto=format&fit=crop' },
  { id:  4, name: 'Innova Crysta',    model: 'Toyota Innova Crysta',         seating: '6–7 Pax', climate: 'Dual Zone AC', ideal: 'Family trips & Sam Dunes',               image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop' },
  { id:  5, name: 'Ertiga / Marazzo', model: 'Maruti Ertiga / Marazzo',      seating: '6–7 Pax', climate: 'AC',           ideal: 'Small group desert excursions',          image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop' },
  { id:  6, name: 'Fortuner SUV',     model: 'Toyota Fortuner',              seating: '6–7 Pax', climate: 'Dual Zone AC', ideal: 'Luxury safari & Longewala trips',         image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000&auto=format&fit=crop' },
  { id:  7, name: 'Mahindra Thar',    model: 'Mahindra Thar 4×4',           seating: '4 Pax', climate: 'Open / AC',       ideal: 'Dune bashing & off-road',                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop' },
  { id:  8, name: 'Tempo 9-Seater',   model: 'Executive Tempo Traveller',    seating: '9 Pax', climate: 'Central AC',      ideal: 'Small group Rajasthan tours',            image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop' },
  { id:  9, name: 'Tempo 12-Seater',  model: 'Executive Tempo Traveller',    seating: '12 Pax', climate: 'Central AC',    ideal: 'Wedding guests & group travel',          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop' },
  { id: 10, name: 'Tempo 16-Seater',  model: 'Luxury Tempo Traveller',       seating: '16 Pax', climate: 'Central AC',    ideal: 'Large group & pilgrimage circuits',      image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=1000&auto=format&fit=crop' },
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
            CHAUFFEUR & FLEET
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#241C17] font-normal">
            Your Journey, Your Way
          </h2>
          <p className="font-sans text-[13px] text-[#999] font-light mt-2 max-w-sm mx-auto">
            Private chauffeur & vehicle rental across Rajasthan — city to desert.
          </p>
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
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 shadow-sm">
            <img
              key={active}
              src={cur.image}
              alt={cur.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <div>
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
                  <MapPin size={12} className="text-[#C99A5B]" />
                  <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400">Best For</span>
                </div>
                <span className="font-sans text-[11px] text-gray-500 font-light leading-snug">{cur.ideal}</span>
              </div>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              {['Verified Driver', 'Fixed Fare', 'Clean Vehicle', 'On-Time'].map((f) => (
                <span key={f} className="font-sans text-[10.5px] text-gray-500 border border-gray-200 px-3 py-1.5 rounded-full">
                  {f}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/919667222879?text=Hello%2C%20I%20want%20to%20book%20${encodeURIComponent(cur.name)}%20in%20Jaisalmer.`}
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
