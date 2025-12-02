import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CounterAnimation from '../components/CounterAnimation'
import './AboutUs.css'

function AboutUs() {
  useScrollAnimation()
  
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero fade-in">
        <div className="container">
          <div className="hero-content slide-up">
            <h1 className="hero-title">About United Pharma</h1>
            <p className="hero-subtitle">Excellence in Pharmaceutical Innovation Since 2003</p>
            <div className="hero-stats animate-stagger">
              <div className="stat-item stats-item">
                <span className="stat-number">
                  <CounterAnimation endValue="20" suffix="+" />
                </span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item stats-item">
                <span className="stat-number">
                  <CounterAnimation endValue="500" suffix="+" />
                </span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat-item stats-item">
                <span className="stat-number">
                  <CounterAnimation endValue="50" suffix="+" />
                </span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="company-intro slide-up">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text slide-left about-content">
              <h2>Leading the Future of Healthcare</h2>
              <p>
                United Pharma stands as a beacon of excellence in the pharmaceutical industry, 
                dedicated to improving global health through innovative medicines and unwavering 
                commitment to quality. Founded in 2003, we have grown from a small manufacturing 
                facility to a globally recognized pharmaceutical company serving over <CounterAnimation endValue="50" suffix="+" /> countries.
              </p>
              <p>
                Our state-of-the-art facilities, cutting-edge research capabilities, and team of 
                world-class scientists work tirelessly to develop life-changing medications that 
                address the most pressing health challenges of our time.
              </p>
            </div>
            <div className="intro-image">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pharmaceutical facility" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mission-card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver innovative, safe, and effective pharmaceutical solutions that improve 
                patient outcomes worldwide while maintaining the highest standards of quality, 
                safety, and regulatory compliance in everything we do.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the world's most trusted pharmaceutical partner, pioneering breakthrough 
                therapies and setting new standards for healthcare excellence while making 
                quality medicines accessible to patients globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M3 12c0 5.5 4.5 10 10 10s10-4.5 10-10"/>
                </svg>
              </div>
              <h4>Quality</h4>
              <p>Uncompromising commitment to excellence in every product and process</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Safety</h4>
              <p>Patient safety and well-being are at the heart of everything we do</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <path d="M20 8v6"/>
                  <path d="M23 11h-6"/>
                </svg>
              </div>
              <h4>Integrity</h4>
              <p>Honest, transparent, and ethical practices in all our relationships</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>Continuous advancement through research and cutting-edge technology</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h4>Compliance</h4>
              <p>Strict adherence to regulatory standards and international guidelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="quality-assurance">
        <div className="container">
          <div className="qa-content">
            <div className="qa-text">
              <h2>Quality Assurance & Certifications</h2>
              <p>
                Our commitment to quality is demonstrated through rigorous testing, 
                comprehensive quality control systems, and adherence to international 
                standards and regulations.
              </p>
              <div className="certifications-list">
                <div className="cert-item">
                  <div className="cert-badge">GMP</div>
                  <div className="cert-details">
                    <h4>Good Manufacturing Practice</h4>
                    <p>WHO-GMP certified facilities ensuring highest manufacturing standards</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-badge">ISO</div>
                  <div className="cert-details">
                    <h4>ISO 9001:2015</h4>
                    <p>International quality management system certification</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-badge">FDA</div>
                  <div className="cert-details">
                    <h4>FDA Approved</h4>
                    <p>US Food and Drug Administration compliance and approval</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-badge">DRAP</div>
                  <div className="cert-details">
                    <h4>DRAP Compliance</h4>
                    <p>Drug Regulatory Authority of Pakistan certified operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="qa-image">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Quality control laboratory" />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & R&D */}
      <section className="manufacturing-rd">
        <div className="container">
          <div className="section-header">
            <h2>Manufacturing Excellence & Research</h2>
            <p>State-of-the-art facilities driving pharmaceutical innovation</p>
          </div>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-image">
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Manufacturing facility" />
              </div>
              <div className="facility-content">
                <h3>Advanced Manufacturing</h3>
                <p>
                  Our <CounterAnimation endValue="50000" suffix=" sq ft" /> manufacturing facility features automated production lines 
                  and clean room environments meeting international pharmaceutical standards.
                </p>
              </div>
            </div>
            <div className="facility-card">
              <div className="facility-image">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Research laboratory" />
              </div>
              <div className="facility-content">
                <h3>Research & Development</h3>
                <p>
                  Cutting-edge R&D laboratories equipped with latest analytical instruments 
                  and staffed by experienced scientists driving pharmaceutical innovation.
                </p>
              </div>
            </div>
            <div className="facility-card">
              <div className="facility-image">
                <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Quality control lab" />
              </div>
              <div className="facility-content">
                <h3>Quality Control Labs</h3>
                <p>
                  Comprehensive testing laboratories ensuring every product meets stringent 
                  quality standards through rigorous analytical and microbiological testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey of Excellence</h2>
            <p>Key milestones in our pharmaceutical journey</p>
          </div>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-year">2003</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>United Pharma established with a vision to provide quality healthcare solutions</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-content">
                <h3>GMP Certification</h3>
                <p>Achieved WHO-GMP certification, marking our commitment to international standards</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h3>International Expansion</h3>
                <p>Expanded operations to <CounterAnimation endValue="15" /> countries across Asia and Africa</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3>R&D Center Launch</h3>
                <p>Opened state-of-the-art research and development facility</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>FDA Approval</h3>
                <p>Received FDA approval for key pharmaceutical products</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Global Reach</h3>
                <p>Serving <CounterAnimation endValue="50" suffix="+" /> countries with <CounterAnimation endValue="500" suffix="+" /> pharmaceutical products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="leadership-message">
        <div className="container">
          <div className="message-content">
            <div className="message-text">
              <div className="quote-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <blockquote>
                "At United Pharma, we believe that every life matters. Our commitment goes beyond 
                manufacturing medicines – we're dedicated to improving global health outcomes through 
                innovation, quality, and unwavering dedication to patient safety. Together, we're 
                building a healthier future for all."
              </blockquote>
              <div className="message-author">
                <div className="author-info">
                  <h4>Dr. Sarah Johnson</h4>
                  <p>Chief Executive Officer & Founder</p>
                </div>
              </div>
            </div>
            <div className="message-image">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="CEO Portrait" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs