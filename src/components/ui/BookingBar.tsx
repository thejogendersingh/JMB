import { useState } from 'react';
import { Calendar, Users, ChevronDown, CalendarDays } from 'lucide-react';

export function BookingBar() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  return (
    <div className="bg-[#f9f8f6] pl-8 pr-4 py-4 max-w-[1100px] mx-auto shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] relative z-20 flex flex-col lg:flex-row items-center justify-between border-t border-brand-sandstone/10">
      
      {/* Check In */}
      <div className="flex-1 w-full px-4 border-b lg:border-b-0 lg:border-r border-brand-sandstone/30 py-2">
        <label className="block text-[9px] tracking-widest uppercase text-[#b89565] mb-2 font-sans font-semibold">Check In</label>
        <div className="flex items-center gap-3 text-brand-charcoal">
          <CalendarDays size={16} strokeWidth={1.5} className="text-brand-charcoal/60" />
          <input 
            type="text" 
            placeholder="mm/dd/yyyy"
            className="bg-transparent border-none outline-none w-full text-base font-serif placeholder:text-brand-charcoal/80"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <Calendar size={16} strokeWidth={1.5} className="text-brand-charcoal/80 ml-auto" />
        </div>
      </div>

      {/* Check Out */}
      <div className="flex-1 w-full px-4 lg:px-6 border-b lg:border-b-0 lg:border-r border-brand-sandstone/30 py-2">
        <label className="block text-[9px] tracking-widest uppercase text-[#b89565] mb-2 font-sans font-semibold">Check Out</label>
        <div className="flex items-center gap-3 text-brand-charcoal">
          <CalendarDays size={16} strokeWidth={1.5} className="text-brand-charcoal/60" />
          <input 
            type="text" 
            placeholder="mm/dd/yyyy"
            className="bg-transparent border-none outline-none w-full text-base font-serif placeholder:text-brand-charcoal/80"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
          <Calendar size={16} strokeWidth={1.5} className="text-brand-charcoal/80 ml-auto" />
        </div>
      </div>

      {/* Guests */}
      <div className="px-4 lg:px-6 border-b lg:border-b-0 lg:border-r border-brand-sandstone/30 py-2 cursor-pointer w-full lg:w-auto min-w-[130px]">
        <label className="block text-[9px] tracking-widest uppercase text-[#b89565] mb-2 font-sans font-semibold">Guests</label>
        <div className="flex items-center gap-3 text-brand-charcoal">
          <Users size={16} strokeWidth={1.5} className="text-brand-charcoal/60" />
          <div className="flex items-baseline gap-1">
            <span className="text-base font-serif leading-none font-medium">2</span>
            <span className="text-sm font-serif text-brand-charcoal/90">Guests</span>
          </div>
          <ChevronDown size={14} className="ml-auto text-brand-charcoal/50" />
        </div>
      </div>

      {/* Rooms */}
      <div className="px-4 lg:px-6 py-2 cursor-pointer w-full lg:w-auto min-w-[130px]">
        <label className="block text-[9px] tracking-widest uppercase text-[#b89565] mb-2 font-sans font-semibold">Rooms</label>
        <div className="flex items-center gap-3 text-brand-charcoal">
          <div className="flex items-baseline gap-1 ml-1">
            <span className="text-base font-serif leading-none font-medium">1</span>
            <span className="text-sm font-serif text-brand-charcoal/90">Room</span>
          </div>
          <ChevronDown size={14} className="ml-auto text-brand-charcoal/50" />
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full lg:w-auto pl-2 mt-4 lg:mt-0">
        <button className="bg-[#2d2d2d] hover:bg-[#1a1a1a] transition-colors text-white text-[10px] font-sans tracking-[0.15em] uppercase px-8 py-4 whitespace-nowrap w-full rounded-sm">
          Check Availability
        </button>
      </div>

    </div>
  );
}
