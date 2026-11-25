import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { Intro } from '../components/home/Intro';
import { ActivitiesSection } from '../components/home/ActivitiesSection';
import { PackagesSection } from '../components/home/PackagesSection';
import { CarRental } from '../components/home/CarRental';
import { RoomsSection } from '../components/home/RoomsSection';
import { Gallery } from '../components/home/Gallery';
import { FinalCTA } from '../components/home/FinalCTA';

export function Home() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    'name': 'Hotel Vasudha Heritage Jaisalmer',
    'description': 'Luxury hotel rooms, authentic Sam sand dunes desert camp, camel & jeep safari, and private car rental in Jaisalmer, Rajasthan.',
    'url': 'https://hotelvasudhaheritage.com',
    'telephone': '+91-7734862004',
    'email': 'hotelvasudhaheritage@gmail.com',
    'priceRange': '₹2,500 - ₹25,000',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'A-154, Laxmi Chand Sanwal Colony, District court Road',
      'addressLocality': 'Jaisalmer',
      'addressRegion': 'Rajasthan',
      'postalCode': '345001',
      'addressCountry': 'IN'
    }
  };

  return (
    <div className="bg-[#F7F2E8] text-[#241C17] overflow-hidden">
      <SEO
        title="Hotel Vasudha Heritage Jaisalmer | Luxury Hotel, Desert Camp & Car Rental"
        description="Experience Jaisalmer with Hotel Vasudha Heritage: refined heritage rooms, royal Sam sand dunes desert camp, thrilling jeep & camel safari, and 24/7 private car rental."
        keywords="Hotel Vasudha Heritage, Jaisalmer hotel, desert camp Jaisalmer, Sam sand dunes camp, Jaisalmer tour packages, car rental Jaisalmer, Thar desert safari, camel safari Jaisalmer"
        canonical="https://hotelvasudhaheritage.com/"
        jsonLd={homeJsonLd}
      />
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
