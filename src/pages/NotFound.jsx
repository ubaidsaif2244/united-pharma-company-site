import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
          
          <div className="not-found-actions">
            <Link to="/" className="home-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              Back to Home
            </Link>
            
            <Link to="/contact" className="contact-btn">
              Contact Support
            </Link>
          </div>
          
          <div className="helpful-links">
            <h3>Popular Pages:</h3>
            <ul>
              <li><Link to="/rx-gallery">RX Gallery</Link></li>
              <li><Link to="/toll-products">Toll Products</Link></li>
              <li><Link to="/nutraceuticals">Nutraceuticals</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="not-found-illustration">
          <svg viewBox="0 0 400 300" className="error-svg">
            <defs>
              <linearGradient id="pillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4299e1"/>
                <stop offset="100%" stopColor="#3182ce"/>
              </linearGradient>
            </defs>
            
            {/* Pills scattered around */}
            <ellipse cx="100" cy="80" rx="25" ry="12" fill="url(#pillGradient)" opacity="0.8"/>
            <ellipse cx="300" cy="120" rx="20" ry="10" fill="#48bb78" opacity="0.7"/>
            <ellipse cx="150" cy="200" rx="22" ry="11" fill="#ed8936" opacity="0.6"/>
            <ellipse cx="320" cy="220" rx="18" ry="9" fill="#9f7aea" opacity="0.7"/>
            
            {/* Medicine bottle */}
            <rect x="180" y="100" width="40" height="80" rx="8" fill="#f7fafc" stroke="#e2e8f0" strokeWidth="2"/>
            <rect x="185" y="90" width="30" height="15" rx="3" fill="#4a5568"/>
            <circle cx="190" cy="130" r="3" fill="#4299e1"/>
            <circle cx="210" cy="130" r="3" fill="#4299e1"/>
            <circle cx="200" cy="150" r="3" fill="#4299e1"/>
            
            {/* Floating elements */}
            <circle cx="80" cy="150" r="4" fill="#4299e1" opacity="0.5"/>
            <circle cx="350" cy="80" r="3" fill="#48bb78" opacity="0.6"/>
            <circle cx="60" cy="220" r="5" fill="#ed8936" opacity="0.4"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default NotFound