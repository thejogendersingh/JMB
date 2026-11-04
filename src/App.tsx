import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingBooking } from './components/layout/FloatingBooking';
import { Home } from './pages/Home';
import { HotelPage } from './pages/HotelPage';
import { ToursPage } from './pages/ToursPage';
import { CarRentalPage } from './pages/CarRentalPage';
import { ContactPage } from './pages/ContactPage';
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
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/tour" element={<ToursPage />} />
            <Route path="/car-rental" element={<CarRentalPage />} />
            <Route path="/contact" element={<ContactPage />} />
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
