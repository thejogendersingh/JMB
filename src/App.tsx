import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingBooking } from './components/layout/FloatingBooking';
import { Home } from './pages/Home';
import { ComingSoon } from './pages/ComingSoon';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/hotel"
              element={
                <ComingSoon
                  title="Luxury Hotel"
                  subtitle="Our premium hotel rooms and royal suites page is being crafted for you."
                />
              }
            />

            <Route
              path="/tour"
              element={
                <ComingSoon
                  title="Jaisalmer Tour"
                  subtitle="Discover the Golden City. Our exclusive desert safaris and guided city tours are coming soon."
                />
              }
            />

            <Route
              path="/car-rental"
              element={
                <ComingSoon
                  title="Car Rental"
                  subtitle="Premium taxi and car rental services across Rajasthan. Coming very soon."
                />
              }
            />

            <Route
              path="/contact"
              element={
                <ComingSoon
                  title="Contact Us"
                  subtitle="Get in touch with us directly via WhatsApp."
                />
              }
            />
          </Routes>
        </main>

        <Footer />

        {/* Floating Services */}
        <FloatingBooking />
      </div>
    </Router>
  );
}

export default App;