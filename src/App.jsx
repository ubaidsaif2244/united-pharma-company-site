import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import CartSidebar from './components/CartSidebar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import TollProducts from './pages/TollProducts'
import RXGallery from './pages/RXGallery'
import NutraceuticalsProducts from './pages/NutraceuticalsProducts'
import Packaging from './pages/Packaging'
import ContactUs from './pages/ContactUs'
import QuotationPage from './pages/QuotationPage'
import Checkout from './pages/Checkout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import Compliance from './pages/Compliance'
import NotFound from './pages/NotFound'
import './App.css'

import ErrorBoundary from './components/ErrorBoundary'
import AppFooter from './components/AppFooter'

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/toll-products" element={<TollProducts />} />
                <Route path="/rx-gallery" element={<RXGallery />} />
                <Route path="/nutraceuticals" element={<NutraceuticalsProducts />} />
                <Route path="/packaging" element={<Packaging />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/quotation" element={<QuotationPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <AppFooter />
            <ScrollToTopButton />
            <CartSidebar />
          </div>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  )
}

export default App