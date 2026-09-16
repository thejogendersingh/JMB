import { Hero } from '../components/home/Hero';
import { Intro } from '../components/home/Intro';
import { ActivitiesSection } from '../components/home/ActivitiesSection';
import { PackagesSection } from '../components/home/PackagesSection';

import { CarRental } from '../components/home/CarRental';
import { RoomsSection } from '../components/home/RoomsSection';
import { Gallery } from '../components/home/Gallery';

import { FinalCTA } from '../components/home/FinalCTA';

export function Home() {
  return (
    <div className="bg-[#F7F2E8] text-[#241C17] overflow-hidden">
      {/* 1. Cinematic Desert Hero */}
      <Hero />

      {/* 2. Editorial Brand Introduction */}
      <Intro />

      {/* 3. Jaisalmer Tour – Our Activities Grid */}
      <ActivitiesSection />

      {/* 4. Signature Holiday Packages */}
      <PackagesSection />

      {/* 5. Car Rental & Chauffeur Fleet */}
      <CarRental />

      {/*6. Rooms Section */}
      <RoomsSection />

      {/* 8. Asymmetric Visual Gallery */}
      <Gallery />


      {/* 10. Final Cinematic Booking CTA */}
      <FinalCTA />
    </div>
  );
}
