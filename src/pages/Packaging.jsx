import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CounterAnimation from '../components/CounterAnimation'
import './Packaging.css'

function Packaging() {
  useScrollAnimation()
  
  const packagingTypes = [
    {
      id: 1,
      name: 'Bottles',
      description: 'Premium glass and plastic bottles for liquid formulations with tamper-evident closures',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Child-resistant caps', 'UV protection', 'Various sizes']
    },
    {
      id: 2,
      name: 'Blisters',
      description: 'High-barrier blister packs ensuring product integrity and extended shelf life',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Moisture protection', 'Unit dose accuracy', 'Tamper evidence']
    },
    {
      id: 3,
      name: 'Sachets',
      description: 'Flexible sachets for powders and granules with excellent barrier properties',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Easy tear design', 'Moisture barrier', 'Portion control']
    },
    {
      id: 4,
      name: 'Jars',
      description: 'Wide-mouth jars perfect for creams, ointments, and solid formulations',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Wide opening', 'Airtight seal', 'Easy application']
    },
    {
      id: 5,
      name: 'Tubes',
      description: 'Collapsible tubes for topical applications with precise dispensing control',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Controlled dispensing', 'Hygienic application', 'Portable design']
    },
    {
      id: 6,
      name: 'Boxes',
      description: 'Pharmaceutical-grade cartons with security features and brand protection',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Security features', 'Brand protection', 'Information display']
    }
  ]

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Durability',
      description: 'Robust packaging materials that withstand transportation and storage conditions while maintaining product integrity.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
        </svg>
      ),
      title: 'Quality Assurance',
      description: 'ISO-certified packaging processes with rigorous quality control at every stage of production.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: 'Safety Standards',
      description: 'Child-resistant designs and tamper-evident features ensuring maximum safety and compliance.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        </svg>
      ),
      title: 'Sustainability',
      description: 'Eco-friendly materials and recyclable packaging solutions supporting environmental responsibility.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: 'Barrier Protection',
      description: 'Advanced barrier technologies protecting against moisture, light, and oxygen contamination.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      title: 'Regulatory Compliance',
      description: 'Full compliance with FDA, EU, and international pharmaceutical packaging regulations.'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Design & Development',
      description: 'Custom packaging design tailored to your product requirements and brand identity',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      step: 2,
      title: 'Material Selection',
      description: 'Choosing optimal materials for product protection and regulatory compliance',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      step: 3,
      title: 'Production & Quality Control',
      description: 'Precision manufacturing with continuous quality monitoring and testing',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <div className="packaging-page">
      {/* Hero Section */}
      <section className="packaging-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Pharmaceutical Packaging Solutions</h1>
            <p className="hero-subtitle">
              Comprehensive packaging solutions designed to protect, preserve, and present 
              your pharmaceutical products with the highest standards of quality and safety.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">
                  <CounterAnimation endValue="6" />
                </span>
                <span className="stat-label">Packaging Types</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  <CounterAnimation endValue="100" suffix="%" />
                </span>
                <span className="stat-label">Quality Assured</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">ISO</span>
                <span className="stat-label">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Types Section */}
      <section className="packaging-types">
        <div className="container">
          <div className="section-header">
            <h2>Our Packaging Solutions</h2>
            <p>Professional packaging options for every pharmaceutical need</p>
          </div>
          <div className="types-grid">
            {packagingTypes.map(type => (
              <div key={type.id} className="type-card">
                <div className="type-image-container">
                  <img src={type.image} alt={type.name} className="type-image" />
                  <div className="type-overlay">
                    <div className="overlay-content">
                      <h3 className="overlay-title">{type.name}</h3>
                      <ul className="overlay-features">
                        {type.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="type-content">
                  <h3 className="type-name">{type.name}</h3>
                  <p className="type-description">{type.description}</p>
                  <button className="type-cta">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Packaging?</h2>
            <p>Excellence in every aspect of pharmaceutical packaging</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Packaging Process</h2>
            <p>From concept to completion - your packaging journey with us</p>
          </div>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={step.step} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-image-container">
                    <img src={step.image} alt={step.title} className="step-image" />
                  </div>
                  <div className="step-info">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="quality-standards">
        <div className="container">
          <div className="standards-content">
            <div className="standards-text">
              <h2>Quality & Compliance Standards</h2>
              <p>
                Our packaging solutions meet and exceed international pharmaceutical 
                standards, ensuring your products are protected and compliant across 
                global markets.
              </p>
              <div className="standards-list">
                <div className="standard-item">
                  <div className="standard-icon">✓</div>
                  <span>FDA 21 CFR Part 211 Compliance</span>
                </div>
                <div className="standard-item">
                  <div className="standard-icon">✓</div>
                  <span>EU GMP Annex 15 Guidelines</span>
                </div>
                <div className="standard-item">
                  <div className="standard-icon">✓</div>
                  <span>ISO 15378 Primary Packaging</span>
                </div>
                <div className="standard-item">
                  <div className="standard-icon">✓</div>
                  <span>Child-Resistant Packaging (CRP)</span>
                </div>
              </div>
            </div>
            <div className="standards-certifications">
              <div className="cert-badge">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                  </svg>
                </div>
                <div className="cert-text">
                  <h4>ISO 15378</h4>
                  <p>Primary Packaging Materials</p>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div className="cert-text">
                  <h4>Child Resistant</h4>
                  <p>Safety Certified</p>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div className="cert-text">
                  <h4>Global Compliance</h4>
                  <p>International Standards</p>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  </svg>
                </div>
                <div className="cert-text">
                  <h4>Eco-Friendly</h4>
                  <p>Sustainable Materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Package Your Products?</h2>
            <p>Contact our packaging experts to discuss your specific requirements and get a customized solution.</p>
            <div className="cta-buttons">
              <Link to="/quotation" className="primary-cta">Get Quote</Link>
              <Link to="/contact-us" className="secondary-cta">Download Catalog</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Packaging