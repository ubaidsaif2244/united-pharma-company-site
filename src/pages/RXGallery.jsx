import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './RXGallery.css'

function RXGallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { addToCart } = useCart()

  const products = [
    { 
      id: 1, 
      name: 'Amoxicillin 500mg', 
      category: 'Tablet', 
      image: '/images/products/tablet-generic.svg', 
      description: 'Broad-spectrum antibiotic for bacterial infections', 
      strength: '500mg', 
      price: 24.99, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'Antibiotic'
    },
    { 
      id: 2, 
      name: 'Paracetamol Syrup', 
      category: 'Syrup', 
      image: '/images/products/syrup-generic.svg', 
      description: 'Analgesic and antipyretic for pain and fever relief', 
      strength: '120mg/5ml', 
      price: 12.50, 
      packSize: '60ml Bottle',
      therapeuticClass: 'Analgesic'
    },
    { 
      id: 3, 
      name: 'Vitamin D3', 
      category: 'Capsule', 
      image: '/images/products/capsule-generic.svg', 
      description: 'Essential vitamin for bone health and immunity', 
      strength: '60000 IU', 
      price: 18.50, 
      packSize: '4x15 Capsules',
      therapeuticClass: 'Vitamin Supplement'
    },
    { 
      id: 4, 
      name: 'Insulin Injection', 
      category: 'Injection', 
      image: '/images/products/injection-generic.svg', 
      description: 'Fast-acting insulin for diabetes management', 
      strength: '100 IU/ml', 
      price: 89.99, 
      packSize: '10ml Vial',
      therapeuticClass: 'Antidiabetic'
    },
    { 
      id: 5, 
      name: 'Ibuprofen 400mg', 
      category: 'Tablet', 
      image: '/images/products/tablet-generic.svg', 
      description: 'Non-steroidal anti-inflammatory drug', 
      strength: '400mg', 
      price: 16.75, 
      packSize: '10x10 Tablets',
      therapeuticClass: 'NSAID'
    },
    { 
      id: 6, 
      name: 'Cough Syrup', 
      category: 'Syrup', 
      image: '/images/products/syrup-generic.svg', 
      description: 'Effective cough suppressant and expectorant', 
      strength: '15mg/5ml', 
      price: 14.25, 
      packSize: '100ml Bottle',
      therapeuticClass: 'Antitussive'
    },
    { 
      id: 7, 
      name: 'Omega-3 Capsules', 
      category: 'Capsule', 
      image: '/images/products/capsule-generic.svg', 
      description: 'Essential fatty acids for cardiovascular health', 
      strength: '1000mg', 
      price: 22.99, 
      packSize: '3x10 Capsules',
      therapeuticClass: 'Nutritional Supplement'
    },
    { 
      id: 8, 
      name: 'Antibiotic Injection', 
      category: 'Injection', 
      image: '/images/products/injection-generic.svg', 
      description: 'Broad-spectrum injectable antibiotic', 
      strength: '1g', 
      price: 45.00, 
      packSize: '1 Vial + WFI',
      therapeuticClass: 'Injectable Antibiotic'
    }
  ]

  const categories = ['All', 'Tablet', 'Syrup', 'Capsule', 'Injection']

  const getFilteredProducts = () => {
    if (activeFilter === 'All') {
      return products
    }
    return products.filter(product => product.category === activeFilter)
  }

  const filteredProducts = getFilteredProducts()

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
          {filteredProducts.map(product => (
            <div key={product.id} className="card">
              <img 
                src={product.image} 
                alt={`${product.name} - ${product.strength} ${product.category} for ${product.therapeuticClass}`}
                loading="lazy"
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default RXGallery