import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './RXGallery.css'

function RXGallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { addToCart } = useCart()

  const products = [
    // TABLETS
    { 
      id: 1, 
      name: 'Amoxicillin 500mg', 
      category: 'Tablet', 
      image: 'https://i.imgur.com/fR8QW2O.jpeg', 
      description: 'Broad-spectrum antibiotic for bacterial infections', 
      strength: '500mg', 
      price: 24.99, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'Antibiotic'
    },
    { 
      id: 2, 
      name: 'Ibuprofen 400mg', 
      category: 'Tablet', 
      image: 'https://i.imgur.com/AIlzHcV.jpeg', 
      description: 'Non-steroidal anti-inflammatory drug', 
      strength: '400mg', 
      price: 16.75, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'NSAID'
    },
    { 
      id: 3, 
      name: 'Paracetamol 500mg', 
      category: 'Tablet', 
      image: 'https://i.imgur.com/9bHkLy6.jpeg', 
      description: 'Analgesic and antipyretic for pain and fever relief', 
      strength: '500mg', 
      price: 8.99, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'Analgesic'
    },
    { 
      id: 4, 
      name: 'Aspirin 75mg', 
      category: 'Tablet', 
      image: 'https://i.imgur.com/a4Xmnfr.jpeg', 
      description: 'Low-dose aspirin for cardiovascular protection', 
      strength: '75mg', 
      price: 12.50, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'Antiplatelet'
    },
    { 
      id: 5, 
      name: 'Metformin 500mg', 
      category: 'Tablet', 
      image: 'https://i.imgur.com/iEZuyrR.jpeg', 
      description: 'First-line treatment for type 2 diabetes', 
      strength: '500mg', 
      price: 18.99, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'Antidiabetic'
    },
    { 
      id: 6, 
      name: 'Atorvastatin 20mg', 
      category: 'Tablet', 
      image: 'https://i.imgur.com/IcXEpbJ.jpeg', 
      description: 'Cholesterol-lowering medication', 
      strength: '20mg', 
      price: 32.99, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'Statin'
    },
    { 
      id: 7, 
      name: 'Amlodipine 5mg', 
      category: 'Tablet', 
      image: 'https://i.imgur.com/IZpANVj.jpeg', 
      description: 'Calcium channel blocker for hypertension', 
      strength: '5mg', 
      price: 22.50, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'Antihypertensive'
    },
    { 
      id: 8, 
      name: 'Omeprazole 20mg', 
      category: 'Tablet', 
      image: 'https://i.imgur.com/ao7wQ4R.jpeg', 
      description: 'Proton pump inhibitor for acid reflux', 
      strength: '20mg', 
      price: 28.75, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'PPI'
    },

    // CAPSULES
    { 
      id: 9, 
      name: 'Vitamin D3 60000 IU', 
      category: 'Capsule', 
      image: 'https://i.imgur.com/uVErugF.jpeg', 
      description: 'Essential vitamin for bone health and immunity', 
      strength: '60000 IU', 
      price: 18.50, 
      packSize: '4x15 Capsules',
      therapeuticClass: 'Vitamin Supplement'
    },
    { 
      id: 10, 
      name: 'Omega-3 Fish Oil', 
      category: 'Capsule', 
      image: 'https://i.imgur.com/FIXpNCD.jpeg', 
      description: 'Essential fatty acids for cardiovascular health', 
      strength: '1000mg', 
      price: 22.99, 
      packSize: '3x10 Capsules',
      therapeuticClass: 'Nutritional Supplement'
    },
    { 
      id: 11, 
      name: 'Multivitamin Complex', 
      category: 'Capsule', 
      image: 'https://i.imgur.com/thgYYEs.jpeg', 
      description: 'Complete daily vitamin and mineral supplement', 
      strength: 'Multi', 
      price: 35.99, 
      packSize: '3x10 Capsules',
      therapeuticClass: 'Multivitamin'
    },
    { 
      id: 12, 
      name: 'Calcium + Vitamin D', 
      category: 'Capsule', 
      image: 'https://i.imgur.com/4gUxayB.jpeg', 
      description: 'Bone health support with calcium and vitamin D', 
      strength: '500mg+200IU', 
      price: 26.50, 
      packSize: '3x10 Capsules',
      therapeuticClass: 'Bone Health'
    },
    { 
      id: 13, 
      name: 'Iron + Folic Acid', 
      category: 'Capsule', 
      image: 'https://i.imgur.com/EbZiICx.jpeg', 
      description: 'Iron supplement with folic acid for anemia', 
      strength: '100mg+5mg', 
      price: 19.99, 
      packSize: '3x10 Capsules',
      therapeuticClass: 'Hematonic'
    },
    { 
      id: 14, 
      name: 'Probiotics Complex', 
      category: 'Capsule', 
      image: 'https://i.imgur.com/MaNPBeg.jpeg', 
      description: 'Multi-strain probiotics for digestive health', 
      strength: '10 Billion CFU', 
      price: 42.99, 
      packSize: '3x10 Capsules',
      therapeuticClass: 'Probiotic'
    },

    // SYRUPS
    { 
      id: 15, 
      name: 'Paracetamol Syrup', 
      category: 'Syrup', 
      image: 'https://i.imgur.com/QhnXf7h.jpeg', 
      description: 'Pediatric analgesic and antipyretic syrup', 
      strength: '120mg/5ml', 
      price: 12.50, 
      packSize: '60ml Bottle',
      therapeuticClass: 'Analgesic'
    },
    { 
      id: 16, 
      name: 'Cough Syrup', 
      category: 'Syrup', 
      image: 'https://i.imgur.com/lScJS3C.jpeg', 
      description: 'Effective cough suppressant and expectorant', 
      strength: '15mg/5ml', 
      price: 14.25, 
      packSize: '100ml Bottle',
      therapeuticClass: 'Antitussive'
    },
    { 
      id: 17, 
      name: 'Iron Syrup', 
      category: 'Syrup', 
      image: 'https://i.imgur.com/ebUvMEw.jpeg', 
      description: 'Iron supplement syrup for children and adults', 
      strength: '50mg/5ml', 
      price: 16.99, 
      packSize: '200ml Bottle',
      therapeuticClass: 'Hematonic'
    },
    { 
      id: 18, 
      name: 'Multivitamin Syrup', 
      category: 'Syrup', 
      image: 'https://i.imgur.com/HpgKn0j.jpeg', 
      description: 'Complete vitamin and mineral syrup for children', 
      strength: 'Multi/5ml', 
      price: 18.75, 
      packSize: '200ml Bottle',
      therapeuticClass: 'Multivitamin'
    },
    { 
      id: 19, 
      name: 'Antacid Syrup', 
      category: 'Syrup', 
      image: 'https://i.imgur.com/26uB7VB.jpeg', 
      description: 'Fast-acting antacid for heartburn and acidity', 
      strength: '200mg/5ml', 
      price: 11.50, 
      packSize: '170ml Bottle',
      therapeuticClass: 'Antacid'
    },
    { 
      id: 20, 
      name: 'Digestive Enzyme Syrup', 
      category: 'Syrup', 
      image: 'https://i.imgur.com/9MBH0Qj.jpeg', 
      description: 'Digestive enzyme supplement for better digestion', 
      strength: 'Enzyme Mix/5ml', 
      price: 24.99, 
      packSize: '200ml Bottle',
      therapeuticClass: 'Digestive Aid'
    },

    // INJECTIONS
    { 
      id: 21, 
      name: 'Insulin Injection', 
      category: 'Injection', 
      image: 'https://i.imgur.com/DtpLPTR.jpeg', 
      description: 'Fast-acting insulin for diabetes management', 
      strength: '100 IU/ml', 
      price: 89.99, 
      packSize: '10ml Vial',
      therapeuticClass: 'Antidiabetic'
    },
    { 
      id: 22, 
      name: 'Antibiotic Injection', 
      category: 'Injection', 
      image: 'https://i.imgur.com/YW3tjXp.jpeg', 
      description: 'Broad-spectrum injectable antibiotic', 
      strength: '1g', 
      price: 45.00, 
      packSize: '1 Vial + WFI',
      therapeuticClass: 'Injectable Antibiotic'
    },
    { 
      id: 23, 
      name: 'Vitamin B12 Injection', 
      category: 'Injection', 
      image: 'https://i.imgur.com/IrQxGmD.jpeg', 
      description: 'Vitamin B12 injection for deficiency treatment', 
      strength: '1000mcg/ml', 
      price: 25.99, 
      packSize: '5x1ml Ampoules',
      therapeuticClass: 'Vitamin Injection'
    },
    { 
      id: 24, 
      name: 'Iron Injection', 
      category: 'Injection', 
      image: 'https://i.imgur.com/mgD2JXs.jpeg', 
      description: 'Iron sucrose injection for severe anemia', 
      strength: '100mg/5ml', 
      price: 65.00, 
      packSize: '5ml Vial',
      therapeuticClass: 'Hematonic Injection'
    },
    { 
      id: 25, 
      name: 'Pain Relief Injection', 
      category: 'Injection', 
      image: 'https://i.imgur.com/pDpfHoP.jpeg', 
      description: 'Fast-acting pain relief injection', 
      strength: '75mg/3ml', 
      price: 38.50, 
      packSize: '3ml Ampoule',
      therapeuticClass: 'Analgesic Injection'
    },
    { 
      id: 26, 
      name: 'Anti-inflammatory Injection', 
      category: 'Injection', 
      image: 'https://i.imgur.com/9S0ikqa.jpeg', 
      description: 'Injectable anti-inflammatory medication', 
      strength: '40mg/ml', 
      price: 52.99, 
      packSize: '2ml Vial',
      therapeuticClass: 'Anti-inflammatory'
    },

    // OINTMENTS & CREAMS (New Category)
    { 
      id: 27, 
      name: 'Antibiotic Ointment', 
      category: 'Ointment', 
      image: 'https://i.imgur.com/ZlmLF7x.jpeg', 
      description: 'Topical antibiotic for wound care and infections', 
      strength: '2% w/w', 
      price: 15.99, 
      packSize: '15g Tube',
      therapeuticClass: 'Topical Antibiotic'
    },
    { 
      id: 28, 
      name: 'Pain Relief Gel', 
      category: 'Ointment', 
      image: 'https://i.imgur.com/0LHfUib.jpeg', 
      description: 'Topical pain relief gel for muscle and joint pain', 
      strength: '1.16% w/w', 
      price: 18.50, 
      packSize: '30g Tube',
      therapeuticClass: 'Topical Analgesic'
    },
    { 
      id: 29, 
      name: 'Antifungal Cream', 
      category: 'Ointment', 
      image: 'https://i.imgur.com/cuUVl4k.jpeg', 
      description: 'Broad-spectrum antifungal cream', 
      strength: '1% w/w', 
      price: 22.99, 
      packSize: '20g Tube',
      therapeuticClass: 'Antifungal'
    },
    { 
      id: 30, 
      name: 'Hydrocortisone Cream', 
      category: 'Ointment', 
      image: 'https://i.imgur.com/Aebl8DE.jpeg', 
      description: 'Anti-inflammatory cream for skin conditions', 
      strength: '1% w/w', 
      price: 19.75, 
      packSize: '15g Tube',
      therapeuticClass: 'Topical Steroid'
    }
  ]

  const categories = ['All', 'Tablet', 'Capsule', 'Syrup', 'Injection', 'Ointment']

  const getFilteredProducts = () => {
    if (activeFilter === 'All') {
      return products
    }
    return products.filter(product => product.category === activeFilter)
  }

  const filteredProducts = getFilteredProducts()

  const getImageWithFallback = (product) => {
    // Map categories to generic SVG fallbacks
    const fallbackImages = {
      'Tablet': '/images/products/tablet-generic.svg',
      'Capsule': '/images/products/capsule-generic.svg',
      'Syrup': '/images/products/syrup-generic.svg',
      'Injection': '/images/products/injection-generic.svg',
      'Ointment': '/images/products/ointment-generic.svg'
    }
    
    return {
      src: product.image,
      fallback: fallbackImages[product.category] || '/images/products/tablet-generic.svg'
    }
  }

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc
  }

  const handleAddToCart = (product) => {
    try {
      addToCart(product)
      // In a real app, you'd use a proper toast notification system
      const notification = document.createElement('div')
      notification.textContent = `${product.name} added to cart!`
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        z-index: 1000;
        font-size: 14px;
      `
      document.body.appendChild(notification)
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 3000)
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  return (
    <div className="rx-gallery">
      <div className="container">
        <h1>RX Product Gallery</h1>
        {/* <h3>The RX Products Enhance for your Medication</h3> */}
        
        <div className="filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={activeFilter === category ? 'active' : ''}
            >
              {category} ({category === 'All' ? products.length : products.filter(p => p.category === category).length})
            </button>
          ))}
        </div>

        <div className="products">
          {filteredProducts.map(product => {
            const imageData = getImageWithFallback(product)
            return (
              <div key={product.id} className="card">
                <img 
                  src={imageData.src} 
                  alt={`${product.name} - ${product.strength} ${product.category} for ${product.therapeuticClass}`}
                  loading="lazy"
                  onError={(e) => handleImageError(e, imageData.fallback)}
                />
              <div className="card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-details">
                  <span className="strength" aria-label="Strength">{product.strength}</span>
                  <span className="category" aria-label="Category">{product.category}</span>
                </div>
                <div className="product-footer">
                  <div className="price" aria-label="Price">${product.price}</div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RXGallery