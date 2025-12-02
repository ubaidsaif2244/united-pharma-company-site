import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartSidebar.css'

function CartSidebar() {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h3>Shopping Cart ({cartItems.length})</h3>
          <button className="close-cart" onClick={toggleCart}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <h4>Your cart is empty</h4>
              <p>Add some pharmaceutical products to get started</p>
              <Link to="/rx-gallery" className="shop-now-btn" onClick={toggleCart}>
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>{item.strength}</p>
                      <div className="item-controls">
                        <div className="quantity-controls">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="qty-btn"
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="qty-btn"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <div className="total-row">
                    <span>Subtotal:</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Shipping:</span>
                    <span>{getCartTotal() > 100 ? 'Free' : '$9.99'}</span>
                  </div>
                  <div className="total-row final">
                    <span>Total:</span>
                    <span>${(getCartTotal() + (getCartTotal() > 100 ? 0 : 9.99)).toFixed(2)}</span>
                  </div>
                </div>

                <div className="cart-actions">
                  <Link to="/checkout" className="checkout-btn" onClick={toggleCart}>
                    Proceed to Checkout
                  </Link>
                  <Link to="/rx-gallery" className="continue-shopping" onClick={toggleCart}>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar