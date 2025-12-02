import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Toll Products', path: '/toll-products' },
    { name: 'RX Gallery', path: '/rx-gallery' },
    { name: 'Nutraceuticals Products', path: '/nutraceuticals' },
    { name: 'Packaging', path: '/packaging' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header 
      className={`header ${isScrolled ? 'header--scrolled' : ''} ${isDarkMode ? 'header--dark' : 'header--light'}`}
      role="banner"
    >
      <div className="header__container">
        {/* Brand Name - Left on mobile, Left on desktop */}
        <div className="header__brand">
          <Link to="/" className="header__brand-link" aria-label="United Pharma - Home">
            <span className="header__brand-text">United Pharma</span>
          </Link>
        </div>

        {/* Mobile Menu Button - Right on mobile */}
        <button 
          className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          type="button"
        >
          <span className="header__menu-line"></span>
          <span className="header__menu-line"></span>
          <span className="header__menu-line"></span>
        </button>

        {/* Desktop Navigation - Center */}
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="header__nav-item">
                <Link 
                  to={link.path} 
                  className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Icons - Desktop only */}
        <div className="header__icons-right">
          <button 
            className="header__icon-btn"
            aria-label="Search"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          
          <button 
            className="header__icon-btn"
            aria-label="User account"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          
          <button 
            className="header__icon-btn"
            aria-label="Shopping bag"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
        </div>


      </div>

      {/* Mobile Menu */}
      <div 
        className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Mobile Icons */}
        <div className="header__mobile-icons">
          <button 
            className="header__mobile-icon-btn"
            aria-label="Search"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <span>Search</span>
          </button>
          
          <button 
            className="header__mobile-icon-btn"
            aria-label="User account"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Account</span>
          </button>
          
          <button 
            className="header__mobile-icon-btn"
            aria-label="Shopping bag"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span>Cart</span>
          </button>
        </div>

        <ul className="header__mobile-list">
          {navLinks.map((link) => (
            <li key={link.path} className="header__mobile-item">
              <Link 
                to={link.path} 
                className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="header__overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;