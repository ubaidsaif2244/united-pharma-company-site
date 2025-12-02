import { Link } from 'react-router-dom'
import './Footer.css'

function AppFooter() {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Information Column */}
          <div className="footer-column">
            <div className="footer-logo">
              <h3>United Pharma</h3>
              <p className="footer-tagline">Excellence in Pharmaceutical Innovation</p>
            </div>
            <p className="footer-description">
              Leading pharmaceutical manufacturer committed to delivering world-class healthcare solutions 
              with uncompromising quality and regulatory compliance since 2003.
            </p>
            <div className="footer-certifications">
              <div className="cert-badge-footer">FDA</div>
              <div className="cert-badge-footer">GMP</div>
              <div className="cert-badge-footer">ISO</div>
              <div className="cert-badge-footer">WHO</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/toll-products">Toll Products</Link></li>
              <li><Link to="/rx-gallery">RX Gallery</Link></li>
              <li><Link to="/nutraceuticals">Nutraceuticals</Link></li>
              <li><Link to="/packaging">Packaging</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#manufacturing">Contract Manufacturing</a></li>
              <li><a href="#formulation">Product Formulation</a></li>
              <li><a href="#regulatory">Regulatory Affairs</a></li>
              <li><a href="#quality">Quality Assurance</a></li>
              <li><a href="#packaging">Custom Packaging</a></li>
              <li><a href="#distribution">Global Distribution</a></li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="footer-column contact-column">
            <h4 className="footer-heading">Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <p>123 Pharmaceutical Drive</p>
                  <p>Medical District, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 123-4568</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <p>info@unitedpharma.com</p>
                  <p>sales@unitedpharma.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p>&copy; 2024 United Pharma. All rights reserved.</p>
            </div>
            <div className="footer-bottom-right">
              <ul className="footer-legal">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                <li><Link to="/compliance">Compliance</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter