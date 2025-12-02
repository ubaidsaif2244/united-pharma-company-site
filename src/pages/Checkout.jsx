import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Checkout.css'

function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    // Customer Information
    fullName: '',
    email: '',
    phone: '',
    company: '',
    
    // Shipping Details
    shippingAddress: '',
    shippingCity: '',
    shippingZip: '',
    shippingCountry: 'United States',
    deliveryMethod: 'standard',
    
    // Billing Information
    sameAsBilling: true,
    billingAddress: '',
    billingCity: '',
    billingZip: '',
    billingCountry: 'United States',
    
    // Payment
    paymentMethod: 'card',
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const [errors, setErrors] = useState({})

  const subtotal = getCartTotal()
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Required fields
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.shippingAddress.trim()) newErrors.shippingAddress = 'Address is required'
    if (!formData.shippingCity.trim()) newErrors.shippingCity = 'City is required'
    if (!formData.shippingZip.trim()) newErrors.shippingZip = 'ZIP code is required'
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    // Payment validation
    if (formData.paymentMethod === 'card') {
      if (!formData.cardholderName.trim()) newErrors.cardholderName = 'Cardholder name is required'
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required'
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required'
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // In a real application, you would send this data to your backend API
      // const orderData = { formData, cartItems, total }
      // await submitOrder(orderData)
      
      alert('Order placed successfully!')
      clearCart() // Clear cart after successful order
    }
  }

  const isFormValid = () => {
    return formData.fullName && formData.email && formData.phone && 
           formData.shippingAddress && formData.shippingCity && formData.shippingZip &&
           (formData.paymentMethod === 'pod' || 
            (formData.cardholderName && formData.cardNumber && formData.expiryDate && formData.cvv))
  }

  // Redirect if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="checkout">
        <div className="checkout-container">
          <div className="empty-checkout">
            <h1>Your cart is empty</h1>
            <p>Add some products to your cart before proceeding to checkout.</p>
            <a href="/rx-gallery" className="shop-now-btn">Shop Now</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <p>Complete your pharmaceutical order</p>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="checkout-content">
            {/* Left Column - Forms */}
            <div className="checkout-forms">
              
              {/* Customer Information */}
              <section className="form-section">
                <h2>Customer Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={errors.fullName ? 'error' : ''}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="Enter your email"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company Name (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                    />
                  </div>
                </div>
              </section>

              {/* Shipping Details */}
              <section className="form-section">
                <h2>Shipping Details</h2>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label htmlFor="shippingAddress">Address *</label>
                    <input
                      type="text"
                      id="shippingAddress"
                      name="shippingAddress"
                      value={formData.shippingAddress}
                      onChange={handleInputChange}
                      className={errors.shippingAddress ? 'error' : ''}
                      placeholder="Enter your address"
                    />
                    {errors.shippingAddress && <span className="error-message">{errors.shippingAddress}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="shippingCity">City *</label>
                    <input
                      type="text"
                      id="shippingCity"
                      name="shippingCity"
                      value={formData.shippingCity}
                      onChange={handleInputChange}
                      className={errors.shippingCity ? 'error' : ''}
                      placeholder="Enter city"
                    />
                    {errors.shippingCity && <span className="error-message">{errors.shippingCity}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="shippingZip">ZIP / Postal Code *</label>
                    <input
                      type="text"
                      id="shippingZip"
                      name="shippingZip"
                      value={formData.shippingZip}
                      onChange={handleInputChange}
                      className={errors.shippingZip ? 'error' : ''}
                      placeholder="Enter ZIP code"
                    />
                    {errors.shippingZip && <span className="error-message">{errors.shippingZip}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="shippingCountry">Country</label>
                    <select
                      id="shippingCountry"
                      name="shippingCountry"
                      value={formData.shippingCountry}
                      onChange={handleInputChange}
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
                
                <div className="delivery-methods">
                  <h3>Delivery Method</h3>
                  <div className="delivery-options">
                    <label className="delivery-option">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="standard"
                        checked={formData.deliveryMethod === 'standard'}
                        onChange={handleInputChange}
                      />
                      <div className="delivery-info">
                        <span className="delivery-name">Standard Delivery</span>
                        <span className="delivery-time">5-7 business days</span>
                        <span className="delivery-price">$9.99</span>
                      </div>
                    </label>
                    
                    <label className="delivery-option">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="express"
                        checked={formData.deliveryMethod === 'express'}
                        onChange={handleInputChange}
                      />
                      <div className="delivery-info">
                        <span className="delivery-name">Express Delivery</span>
                        <span className="delivery-time">2-3 business days</span>
                        <span className="delivery-price">$19.99</span>
                      </div>
                    </label>
                    
                    <label className="delivery-option">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="overnight"
                        checked={formData.deliveryMethod === 'overnight'}
                        onChange={handleInputChange}
                      />
                      <div className="delivery-info">
                        <span className="delivery-name">Overnight Delivery</span>
                        <span className="delivery-time">Next business day</span>
                        <span className="delivery-price">$39.99</span>
                      </div>
                    </label>
                  </div>
                </div>
              </section>

              {/* Payment Section */}
              <section className="form-section">
                <h2>Payment Information</h2>
                
                <div className="payment-methods">
                  <label className="payment-method">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  
                  <label className="payment-method">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pod"
                      checked={formData.paymentMethod === 'pod'}
                      onChange={handleInputChange}
                    />
                    <span>Pay on Delivery</span>
                  </label>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="cardholderName">Cardholder Name *</label>
                      <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        className={errors.cardholderName ? 'error' : ''}
                        placeholder="Name on card"
                      />
                      {errors.cardholderName && <span className="error-message">{errors.cardholderName}</span>}
                    </div>
                    
                    <div className="form-group full-width">
                      <label htmlFor="cardNumber">Card Number *</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className={errors.cardNumber ? 'error' : ''}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                      {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="expiryDate">Expiry Date *</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className={errors.expiryDate ? 'error' : ''}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                      {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="cvv">CVV *</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className={errors.cvv ? 'error' : ''}
                        placeholder="123"
                        maxLength="4"
                      />
                      {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Right Column - Order Summary */}
            <div className="order-summary">
              <div className="summary-card">
                <h2>Order Summary</h2>
                
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>{item.strength} • {item.packSize}</p>
                        <div className="item-quantity">Qty: {item.quantity}</div>
                      </div>
                      <div className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="order-totals">
                  <div className="total-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="total-row final-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className={`place-order-btn ${!isFormValid() ? 'disabled' : ''}`}
                  disabled={!isFormValid()}
                >
                  Place Order
                </button>
                
                <div className="security-info">
                  <p>🔒 Your payment information is secure and encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout