import { useState } from 'react'
import './QuotationForm.css'

function QuotationForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    productService: '',
    quantity: '',
    additionalNotes: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          companyName: '',
          email: '',
          phone: '',
          productService: '',
          quantity: '',
          additionalNotes: ''
        })
      }, 3000)
    }, 1000)
  }

  const productOptions = [
    'Tablets Manufacturing',
    'Capsules Manufacturing',
    'Liquid Formulations',
    'Injectable Solutions',
    'Topical Creams & Ointments',
    'Powder Sachets',
    'Nutraceutical Products',
    'Packaging Solutions',
    'Regulatory Consulting',
    'Custom Formulation',
    'Other (Please specify in notes)'
  ]

  if (isSubmitted) {
    return (
      <div className="quotation-form-container">
        <div className="quotation-form">
          <div className="success-message">
            <div className="success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="9"/>
              </svg>
            </div>
            <h2>Quotation Request Submitted Successfully</h2>
            <p>
              Thank you for your interest in our pharmaceutical services. 
              Our team will review your requirements and contact you within 24 hours 
              with a detailed quotation.
            </p>
            <div className="next-steps">
              <h3>What happens next?</h3>
              <ul>
                <li>Our technical team will review your requirements</li>
                <li>We will prepare a customized quotation</li>
                <li>You will receive a detailed proposal via email</li>
                <li>Our representative will contact you to discuss further</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quotation-form-container">
      <div className="quotation-form">
        <div className="form-header">
          <h2>Request a Quotation</h2>
          <p>
            Get a customized quote for our pharmaceutical manufacturing services. 
            Please provide detailed information about your requirements for an accurate estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name *</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                placeholder="Enter your company name"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="productService">Product / Service Required *</label>
              <select
                id="productService"
                name="productService"
                value={formData.productService}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select a product or service</option>
                {productOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Estimated Quantity</label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 100,000 tablets, 50,000 bottles"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="additionalNotes">Additional Notes / Message</label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              rows="5"
              placeholder="Please provide any additional details about your requirements, specifications, timeline, or special considerations..."
              disabled={isSubmitting}
            ></textarea>
          </div>

          <div className="form-footer">
            <div className="privacy-notice">
              <p>
                By submitting this form, you agree to our privacy policy. 
                Your information will be used solely for providing quotations and will not be shared with third parties.
              </p>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Submitting Request...
                </>
              ) : (
                <>
                  Submit Quotation Request
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuotationForm