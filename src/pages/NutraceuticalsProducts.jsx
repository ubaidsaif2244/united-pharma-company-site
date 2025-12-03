import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './NutraceuticalsProducts.css'

function NutraceuticalsProducts() {
  useScrollAnimation()
  
  const categories = [
    {
      id: 1,
      name: 'Vitamins',
      description: 'Essential vitamins for optimal health and vitality',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
        </svg>
      ),
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)'
    },
    {
      id: 2,
      name: 'Supplements',
      description: 'Premium nutritional supplements for enhanced wellness',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      ),
      color: '#4ecdc4',
      gradient: 'linear-gradient(135deg, #4ecdc4, #6ee7df)'
    },
    {
      id: 3,
      name: 'Herbal',
      description: 'Natural herbal extracts for holistic health support',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        </svg>
      ),
      color: '#45b7d1',
      gradient: 'linear-gradient(135deg, #45b7d1, #67c5e0)'
    },
    {
      id: 4,
      name: 'Energy & Immunity',
      description: 'Boost your energy levels and strengthen immunity',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      color: '#f9ca24',
      gradient: 'linear-gradient(135deg, #f9ca24, #fdd835)'
    },
    {
      id: 5,
      name: 'Skin & Hair Care',
      description: 'Beauty supplements for radiant skin and healthy hair',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
        </svg>
      ),
      color: '#a55eea',
      gradient: 'linear-gradient(135deg, #a55eea, #c44569)'
    }
  ]

  const products = [
    {
      id: 1,
      name: 'Vitamin D3 5000 IU',
      benefit: 'Supports bone health and immune function',
      image: 'https://i.imgur.com/3H4onRd.jpeg',
      fallbackImage: '/images/nutraceuticals/vitamin-d3-generic.svg',
      category: 'Vitamins',
      badges: ['Non-GMO', 'Third-Party Tested']
    },
    {
      id: 2,
      name: 'Omega-3 Fish Oil',
      benefit: 'Promotes heart and brain health naturally',
      image: '/images/nutraceuticals/real/omega3-real.jpg',
      fallbackImage: '/images/nutraceuticals/supplement-generic.svg',
      category: 'Supplements',
      badges: ['Organic', 'Sustainably Sourced']
    },
    {
      id: 3,
      name: 'Turmeric Curcumin',
      benefit: 'Natural anti-inflammatory and antioxidant support',
      image: '/images/nutraceuticals/real/turmeric-real.jpg',
      fallbackImage: '/images/nutraceuticals/supplement-generic.svg',
      category: 'Herbal',
      badges: ['Organic', 'Non-GMO']
    },
    {
      id: 4,
      name: 'Immune Defense Complex',
      benefit: 'Strengthens immune system with natural ingredients',
      image: '/images/nutraceuticals/real/immune-complex-real.jpg',
      fallbackImage: '/images/nutraceuticals/supplement-generic.svg',
      category: 'Energy & Immunity',
      badges: ['Clinically Tested', 'Non-GMO']
    },
    {
      id: 5,
      name: 'Collagen Beauty Blend',
      benefit: 'Enhances skin elasticity and hair strength',
      image: '/images/nutraceuticals/real/collagen-real.jpg',
      fallbackImage: '/images/nutraceuticals/supplement-generic.svg',
      category: 'Skin & Hair Care',
      badges: ['Organic', 'Gluten-Free']
    },
    {
      id: 6,
      name: 'B-Complex Energy',
      benefit: 'Boosts energy and supports nervous system',
      image: '/images/nutraceuticals/real/b-complex-real.jpg',
      fallbackImage: '/images/nutraceuticals/supplement-generic.svg',
      category: 'Vitamins',
      badges: ['Vegan', 'Non-GMO']
    },
    {
      id: 7,
      name: 'Probiotics Advanced',
      benefit: 'Supports digestive health and gut microbiome',
      image: '/images/nutraceuticals/real/probiotics-real.jpg',
      fallbackImage: '/images/nutraceuticals/supplement-generic.svg',
      category: 'Supplements',
      badges: ['Refrigerated', 'Clinically Proven']
    },
    {
      id: 8,
      name: 'Ashwagandha Root',
      benefit: 'Reduces stress and promotes mental clarity',
      image: '/images/nutraceuticals/real/ashwagandha-real.jpg',
      fallbackImage: '/images/nutraceuticals/supplement-generic.svg',
      category: 'Herbal',
      badges: ['Organic', 'Adaptogenic']
    },
    {
      id: 9,
      name: 'Energy Boost Formula',
      benefit: 'Natural energy without caffeine crash',
      image: '/images/nutraceuticals/real/energy-boost-real.jpg',
      fallbackImage: '/images/nutraceuticals/supplement-generic.svg',
      category: 'Energy & Immunity',
      badges: ['Caffeine-Free', 'Natural']
    }
  ]

  const benefits = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      title: 'Enhanced Energy',
      description: 'Natural energy boost for active lifestyles'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Immune Support',
      description: 'Strengthen your body\'s natural defenses'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      ),
      title: 'Mental Wellness',
      description: 'Support cognitive function and mental clarity'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/>
        </svg>
      ),
      title: 'Heart Health',
      description: 'Promote cardiovascular wellness naturally'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        </svg>
      ),
      title: 'Natural Wellness',
      description: 'Holistic health with plant-based nutrition'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
        </svg>
      ),
      title: 'Beauty & Vitality',
      description: 'Radiant skin and healthy hair from within'
    }
  ]

  return (
    <div className="nutraceuticals-page">
      {/* Hero Section */}
      <section className="nutra-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Nutraceuticals Products</h1>
            <p className="hero-subtitle">
              Discover our premium range of science-backed nutraceuticals designed to 
              enhance your wellness journey with natural, effective, and safe ingredients.
            </p>
            <div className="hero-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  </svg>
                </div>
                <span>Natural Ingredients</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <span>Science-Backed</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                </div>
                <span>Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Product Categories</h2>
            <p>Explore our diverse range of nutraceutical solutions</p>
          </div>
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category.id} className="category-card" style={{'--category-color': category.color}}>
                <div className="category-background" style={{background: category.gradient}}></div>
                <div className="category-content">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                  <button className="category-btn">Explore Products</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Premium nutraceuticals for optimal health and wellness</p>
          </div>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                      e.target.src = product.fallbackImage;
                    }}
                  />
                  <div className="product-badges">
                    {product.badges.map((badge, index) => (
                      <span key={index} className="product-badge">{badge}</span>
                    ))}
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-benefit">{product.benefit}</p>
                  <div className="product-category-tag">{product.category}</div>
                  <button className="product-cta">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Nutraceuticals?</h2>
            <p>Comprehensive wellness support for a healthier, more vibrant you</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <div className="cert-content">
            <div className="cert-text">
              <h2>Quality You Can Trust</h2>
              <p>
                Our nutraceuticals are manufactured in FDA-registered facilities with 
                rigorous quality control standards. Every product is third-party tested 
                for purity, potency, and safety.
              </p>
            </div>
            <div className="cert-badges">
              <div className="cert-badge">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                  </svg>
                </div>
                <div className="cert-info">
                  <h4>GMP Certified</h4>
                  <p>Good Manufacturing Practice</p>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <div className="cert-info">
                  <h4>Third-Party Tested</h4>
                  <p>Independent Quality Verification</p>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  </svg>
                </div>
                <div className="cert-info">
                  <h4>Natural Ingredients</h4>
                  <p>Pure & Sustainably Sourced</p>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                </div>
                <div className="cert-info">
                  <h4>FDA Registered</h4>
                  <p>Compliant Manufacturing</p>
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
            <h2>Start Your Wellness Journey Today</h2>
            <p>Join thousands of satisfied customers who trust our premium nutraceuticals for their health and wellness needs.</p>
            <div className="cta-buttons">
              <Link to="/nutraceuticals-products" className="primary-cta">Shop All Products</Link>
              <Link to="/quotation" className="secondary-cta">Get Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NutraceuticalsProducts