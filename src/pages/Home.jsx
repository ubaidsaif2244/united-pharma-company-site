import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useFormSubmission } from '../hooks/useFormSubmission'
import CounterAnimation from '../components/CounterAnimation'
import './Home.css'

function Home() {
  useScrollAnimation()
  
  // Form state for Quick Inquiry
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const { isSubmitting, submitStatus, message, submitForm, resetStatus } = useFormSubmission()
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields')
      return
    }
    
    const result = await submitForm('quick-inquiry', formData)
    
    if (result.success) {
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        resetStatus()
      }, 5000)
    }
  }

  return (
    <div className="home">
      {/* 1. Hero Section - Main Introduction & Value Proposition */}
      <section className="hero fade-in">
        <div className="hero-container">
          <div className="hero-content slide-left">
            <h1 className="hero-title">
              Leading the Future of <span className="highlight">Pharmaceutical Excellence</span>
            </h1>
            <p className="hero-description">
              United Pharma is committed to delivering innovative healthcare solutions that improve lives worldwide. 
              With cutting-edge research and state-of-the-art manufacturing, we're setting new standards in pharmaceutical care.
            </p>
            <div className="hero-buttons">
              <Link to="/toll-products" className="btn-primary">Explore Products</Link>
              <Link to="/quotation" className="btn-secondary">Get Quote</Link>
            </div>
          </div>
          <div className="hero-image slide-right">
            <div className="hero-image-container">
              <img 
                src="/images/hero-lab.svg" 
                alt="Modern pharmaceutical research laboratory with advanced equipment and scientists" 
                className="hero-main-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome Section - Company Introduction & Core Values */}
      <section className="welcome slide-up">
        <div className="welcome-container">
          <div className="welcome-image slide-left">
            <img 
              src="/images/manufacturing-facility.svg" 
              alt="Modern pharmaceutical manufacturing facility" 
              className="welcome-img"
            />
          </div>
          <div className="welcome-content slide-right">
            <h2 className="welcome-title">Welcome to United Pharma</h2>
            <p className="welcome-description">
              For over two decades, United Pharma has been at the forefront of pharmaceutical innovation. 
              Our commitment to quality, safety, and efficacy drives everything we do.
            </p>
            <div className="welcome-features animate-stagger">
              <div className="feature fade-in">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3182ce" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Quality Assurance</h3>
                  <p>Rigorous testing and quality control at every stage of production</p>
                </div>
              </div>
              <div className="feature fade-in">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3182ce" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Innovation</h3>
                  <p>Cutting-edge research and development for breakthrough treatments</p>
                </div>
              </div>
              <div className="feature fade-in">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3182ce" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Global Reach</h3>
                  <p>Serving healthcare providers and patients worldwide</p>
                </div>
              </div>
            </div>
            <Link to="/about-us" className="btn-primary">Discover Our Story</Link>
          </div>
        </div>
      </section>

      {/* 3. Stats Section - Company Achievements & Credibility */}
      <section className="stats scale-in">
        <div className="stats-container animate-stagger">
          <div className="stat stats-item">
            <h3 className="stat-number">
              <CounterAnimation endValue="20" suffix="+" />
            </h3>
            <p className="stat-label">Years of Excellence</p>
          </div>
          <div className="stat stats-item">
            <h3 className="stat-number">
              <CounterAnimation endValue="500" suffix="+" />
            </h3>
            <p className="stat-label">Products Manufactured</p>
          </div>
          <div className="stat stats-item">
            <h3 className="stat-number">
              <CounterAnimation endValue="50" suffix="+" />
            </h3>
            <p className="stat-label">Countries Served</p>
          </div>
          <div className="stat stats-item">
            <h3 className="stat-number">
              <CounterAnimation endValue="1M" suffix="+" />
            </h3>
            <p className="stat-label">Lives Improved</p>
          </div>
        </div>
      </section>

      {/* 4. Product Categories - Service Overview */}
      <section className="categories-preview slide-up">
        <div className="categories-container">
          <div className="categories-header fade-in">
            <h2 className="categories-title">Our Product Categories</h2>
            <p className="categories-description">
              Explore our comprehensive range of pharmaceutical solutions designed to meet diverse healthcare needs
            </p>
          </div>
          <div className="categories-grid animate-stagger">
            <div className="category-card service-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/>
                </svg>
              </div>
              <h3 className="category-title">RX Products</h3>
              <p className="category-description">Prescription medications with proven efficacy and safety profiles</p>
            </div>
            
            <div className="category-card service-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="23"/>
                  <line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              </div>
              <h3 className="category-title">Nutraceuticals</h3>
              <p className="category-description">Nutritional supplements and wellness products for optimal health</p>
            </div>
            
            <div className="category-card service-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="category-title">Toll Products</h3>
              <p className="category-description">Custom manufacturing solutions for pharmaceutical companies</p>
            </div>
            
            <div className="category-card service-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="category-title">Packaging</h3>
              <p className="category-description">Innovative packaging solutions ensuring product integrity and safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Products - Product Showcase */}
      <section className="featured-products fade-in">
        <div className="featured-container">
          <div className="featured-header slide-up">
            <h2 className="featured-title">Toll Products</h2>
            <p className="featured-description">
              Discover our premium toll manufacturing solutions designed with precision and quality
            </p>
          </div>
          <div className="products-grid animate-stagger">
            <div className="product-card feature-card">
              <div className="product-image">
                <img 
                  src="/images/pharmaceutical-tablets.svg" 
                  alt="Pharmaceutical Tablets" 
                  className="product-img"
                />
                <div className="product-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-name">Premium Tablets</h3>
                <p className="product-description">
                  High-quality tablet formulations with precise dosing and excellent bioavailability for various therapeutic applications.
                </p>
                <div className="product-features">
                  <span className="feature-tag">FDA Approved</span>
                  <span className="feature-tag">GMP Certified</span>
                </div>
              </div>
            </div>

            <div className="product-card feature-card">
              <div className="product-image">
                <img 
                  src="/images/products/capsule-generic.svg" 
                  alt="Pharmaceutical Capsules" 
                  className="product-img"
                />
                <div className="product-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-name">Advanced Capsules</h3>
                <p className="product-description">
                  Innovative capsule technology ensuring optimal drug delivery and enhanced patient compliance with superior stability.
                </p>
                <div className="product-features">
                  <span className="feature-tag">Extended Release</span>
                  <span className="feature-tag">Enteric Coated</span>
                </div>
              </div>
            </div>

            <div className="product-card feature-card">
              <div className="product-image">
                <img 
                  src="/images/products/injection-generic.svg" 
                  alt="Injectable Solutions" 
                  className="product-img"
                />
                <div className="product-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-name">Injectable Solutions</h3>
                <p className="product-description">
                  Sterile injectable formulations manufactured under strict aseptic conditions for critical care applications.
                </p>
                <div className="product-features">
                  <span className="feature-tag">Sterile</span>
                  <span className="feature-tag">ISO Certified</span>
                </div>
              </div>
            </div>

            <div className="product-card feature-card">
              <div className="product-image">
                <img 
                  src="/images/products/syrup-generic.svg" 
                  alt="Liquid Formulations" 
                  className="product-img"
                />
                <div className="product-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-name">Liquid Formulations</h3>
                <p className="product-description">
                  Specialized liquid medications with enhanced palatability and precise dosing for pediatric and geriatric patients.
                </p>
                <div className="product-features">
                  <span className="feature-tag">Sugar Free</span>
                  <span className="feature-tag">Preservative Free</span>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-cta scale-in">
            <Link to="/toll-products" className="btn-primary">View All Toll Products</Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us - Competitive Advantages */}
      <section className="why-choose-us slide-up">
        <div className="why-choose-container">
          <div className="why-choose-header fade-in">
            <h2 className="why-choose-title">Why Choose Us</h2>
            <p className="why-choose-description">
              Discover what sets United Pharma apart in the pharmaceutical industry
            </p>
          </div>
          <div className="highlights-grid animate-stagger">
            <div className="highlight-card feature-card">
              <div className="highlight-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="9"/>
                </svg>
              </div>
              <h3 className="highlight-title">GMP Certified</h3>
              <p className="highlight-description">
                Our manufacturing processes comply with Good Manufacturing Practice standards, ensuring the highest quality and safety in every product we produce.
              </p>
            </div>

            <div className="highlight-card feature-card">
              <div className="highlight-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                  <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                </svg>
              </div>
              <h3 className="highlight-title">High Quality</h3>
              <p className="highlight-description">
                We maintain rigorous quality control measures throughout our production process, delivering pharmaceutical products that meet international standards.
              </p>
            </div>

            <div className="highlight-card feature-card">
              <div className="highlight-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="highlight-title">Modern Facility</h3>
              <p className="highlight-description">
                Our state-of-the-art manufacturing facility is equipped with cutting-edge technology and automated systems for precision and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Trust - Social Proof & Testimonials */}
      <section className="testimonials fade-in">
        <div className="testimonials-container">
          <div className="testimonials-header slide-up">
            <h2 className="testimonials-title">Client Trust</h2>
            <p className="testimonials-description">
              Hear what our valued partners say about their experience with United Pharma
            </p>
          </div>
          <div className="testimonials-grid animate-stagger">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="#3498db" opacity="0.2"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  "United Pharma has been our trusted manufacturing partner for over 5 years. Their commitment to quality and timely delivery is exceptional."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="author-info">
                  <h4 className="author-name">Dr. Sarah Johnson</h4>
                  <p className="author-position">Chief Procurement Officer, MediCorp</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="#27ae60" opacity="0.2"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  "The quality standards at United Pharma are outstanding. Their GMP-certified facility gives us complete confidence in every batch."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="author-info">
                  <h4 className="author-name">Michael Chen</h4>
                  <p className="author-position">Quality Director, PharmaTech Solutions</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="#e74c3c" opacity="0.2"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  "Working with United Pharma has streamlined our supply chain. Their modern facility and efficient processes are truly impressive."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="author-info">
                  <h4 className="author-name">Emma Rodriguez</h4>
                  <p className="author-position">Supply Chain Manager, HealthFirst Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Quick Inquiry - Lead Generation & Contact */}
      <section className="quick-inquiry slide-up">
        <div className="inquiry-container">
          <div className="inquiry-content">
            <div className="inquiry-header slide-left">
              <h2 className="inquiry-title">Quick Inquiry</h2>
              <p className="inquiry-description">
                Have questions about our pharmaceutical services? Get in touch with our experts and we'll respond within 24 hours.
              </p>
              <div className="inquiry-features animate-stagger">
                <div className="inquiry-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                  <span>24/7 Customer Support</span>
                </div>
                <div className="inquiry-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                  <span>Expert Consultation</span>
                </div>
                <div className="inquiry-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                  <span>Quick Response Time</span>
                </div>
              </div>
            </div>
            <div className="inquiry-form-container slide-right">
              <form className="inquiry-form contact-form" onSubmit={handleSubmit}>
                {/* Status Messages */}
                {submitStatus && (
                  <div className={`form-message ${submitStatus === 'success' ? 'success' : 'error'}`}>
                    {message}
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input" 
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    placeholder="Tell us about your requirements..."
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="form-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                  {!isSubmitting && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22,2 15,22 11,13 2,9"></polygon>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home