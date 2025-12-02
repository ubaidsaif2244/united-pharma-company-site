import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CounterAnimation from '../components/CounterAnimation'
import './TollProducts.css'

function TollProducts() {
  useScrollAnimation()
  
  return (
    <div className="toll-manufacturing">
      {/* Hero Section */}
      <section className="toll-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Toll Manufacturing Services</h1>
            <p className="hero-subtitle">
              Partner with us for world-class pharmaceutical manufacturing solutions. 
              From concept to market, we deliver excellence in every batch with 
              state-of-the-art facilities and uncompromising quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Toll Manufacturing Intro */}
      <section className="toll-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Excellence in Contract Manufacturing</h2>
              <p>
                United Pharma offers comprehensive toll manufacturing services with over <CounterAnimation endValue="20" /> years 
                of expertise in pharmaceutical production. Our GMP-certified facilities, advanced 
                technology, and experienced team ensure your products meet the highest quality 
                standards while maintaining cost-effectiveness and regulatory compliance across 
                global markets.
              </p>
            </div>
            <div className="intro-image">
              <img src="https://i.postimg.cc/hj8nRct5/a07a0ab50ac2b77ab80140c48b7822df.jpg" alt="Manufacturing facility" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories">
        <div className="container">
          <div className="section-header">
            <h2>Our Manufacturing Capabilities</h2>
            <p>Comprehensive pharmaceutical dosage forms manufactured to perfection</p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3>Tablets</h3>
              <p>Compressed tablets in various shapes, sizes, and formulations including immediate and sustained release.</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Capsules</h3>
              <p>Hard and soft gelatin capsules with precise filling technology for optimal bioavailability and stability.</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12V7a7 7 0 1 1 14 0v5"/>
                  <rect x="4" y="12" width="16" height="8" rx="2"/>
                </svg>
              </div>
              <h3>Syrups</h3>
              <p>Liquid formulations with advanced flavoring systems ensuring palatability and therapeutic efficacy.</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                </svg>
              </div>
              <h3>Sachets</h3>
              <p>Powder and granule sachets with moisture-proof packaging for enhanced shelf life and convenience.</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3>Ointments</h3>
              <p>Topical formulations including creams, gels, and ointments with controlled drug release properties.</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                  <path d="M12 7s4 2 4 9-4 9-4 9-4-2-4-9 4-9 4-9z"/>
                </svg>
              </div>
              <h3>Injectables</h3>
              <p>Sterile injectable solutions and suspensions manufactured in controlled aseptic environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Toll Manufacturing Products</h2>
            <p>Premium pharmaceutical products manufactured with precision and quality assurance</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Antibiotic tablets manufacturing" />
                <div className="product-overlay">
                  <div className="overlay-badge">GMP Certified</div>
                </div>
              </div>
              <div className="product-content">
                <div className="product-header">
                  <h3>Premium Antibiotic Tablets</h3>
                  <div className="product-category">Solid Dosage</div>
                </div>
                <p>High-potency antibiotic formulations with enhanced bioavailability, manufactured under strict GMP conditions for optimal therapeutic efficacy.</p>
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Batch Size:</span>
                    <span className="spec-value">50K - 2M units</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Lead Time:</span>
                    <span className="spec-value">4-6 weeks</span>
                  </div>
                </div>
                <Link to="/quotation" className="product-cta">Request Quote</Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Vitamin capsules manufacturing" />
                <div className="product-overlay">
                  <div className="overlay-badge">FDA Approved</div>
                </div>
              </div>
              <div className="product-content">
                <div className="product-header">
                  <h3>Advanced Vitamin Capsules</h3>
                  <div className="product-category">Encapsulation</div>
                </div>
                <p>Premium vitamin and mineral supplements with controlled-release technology, ensuring optimal absorption and bioavailability.</p>
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Batch Size:</span>
                    <span className="spec-value">100K - 5M units</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Lead Time:</span>
                    <span className="spec-value">3-5 weeks</span>
                  </div>
                </div>
                <Link to="/quotation" className="product-cta">Request Quote</Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pediatric syrup manufacturing" />
                <div className="product-overlay">
                  <div className="overlay-badge">Child Safe</div>
                </div>
              </div>
              <div className="product-content">
                <div className="product-header">
                  <h3>Pediatric Liquid Formulations</h3>
                  <div className="product-category">Liquid Dosage</div>
                </div>
                <p>Child-friendly liquid formulations with pleasant taste profiles and accurate dosing systems for pediatric healthcare applications.</p>
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Batch Size:</span>
                    <span className="spec-value">10K - 500K bottles</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Lead Time:</span>
                    <span className="spec-value">5-7 weeks</span>
                  </div>
                </div>
                <Link to="/quotation" className="product-cta">Request Quote</Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Injectable solutions manufacturing" />
                <div className="product-overlay">
                  <div className="overlay-badge">Sterile</div>
                </div>
              </div>
              <div className="product-content">
                <div className="product-header">
                  <h3>Sterile Injectable Solutions</h3>
                  <div className="product-category">Injectables</div>
                </div>
                <p>Sterile injectable formulations manufactured under aseptic conditions in ISO Class 5 cleanrooms for critical care applications.</p>
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Batch Size:</span>
                    <span className="spec-value">5K - 100K vials</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Lead Time:</span>
                    <span className="spec-value">6-8 weeks</span>
                  </div>
                </div>
                <Link to="/quotation" className="product-cta">Request Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="manufacturing-capabilities">
        <div className="container">
          <div className="section-header">
            <h2>Manufacturing Excellence</h2>
            <p>State-of-the-art facilities and capabilities</p>
          </div>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3>Batch Capacity</h3>
              <p>Flexible batch sizes from <CounterAnimation endValue="10000" /> to <CounterAnimation endValue="5" /> million units per batch with scalable production lines.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <h3>Facility Strength</h3>
              <p>50,000 sq ft GMP-certified facility with 24/7 operations and climate-controlled environments.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M3 12c0 5.5 4.5 10 10 10s10-4.5 10-10"/>
                </svg>
              </div>
              <h3>Quality Control</h3>
              <p>Advanced QC/QA laboratories with HPLC, GC-MS, and microbiological testing capabilities.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3>Advanced Equipment</h3>
              <p>Latest pharmaceutical machinery including tablet presses, capsule fillers, and packaging lines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose United Pharma</h2>
            <p>Your trusted partner for pharmaceutical excellence</p>
          </div>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>GMP Certified</h3>
              <p>WHO-GMP certified facilities ensuring international quality standards and regulatory compliance.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>On-Time Delivery</h3>
              <p>Proven track record of 98% on-time delivery with efficient supply chain management.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M3 12c0 5.5 4.5 10 10 10s10-4.5 10-10"/>
                </svg>
              </div>
              <h3>Quality Focus</h3>
              <p>Rigorous quality control at every stage with zero-defect manufacturing processes.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Cost Effective</h3>
              <p>Competitive pricing with transparent cost structure and no hidden charges.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <path d="M20 8v6"/>
                  <path d="M23 11h-6"/>
                </svg>
              </div>
              <h3>Expert Team</h3>
              <p>Experienced pharmaceutical professionals with <CounterAnimation endValue="20" suffix="+" /> years of industry expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner with Us?</h2>
            <p>Contact our team to discuss your toll manufacturing requirements and get a customized solution.</p>
            <div className="cta-buttons">
              <Link to="/quotation" className="primary-cta">Get Quote</Link>
              <Link to="/contact-us" className="secondary-cta">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TollProducts