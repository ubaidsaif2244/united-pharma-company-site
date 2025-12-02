// API service for United Pharma backend integration

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic API request method
  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const requestOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.detail || 'Request failed');
      }

      return {
        success: true,
        data: data,
        status: response.status,
      };
    } catch (error) {
      console.error('API Request Error:', error);
      return {
        success: false,
        error: error.message,
        status: error.status || 500,
      };
    }
  }

  // Contact form submission
  async submitContactForm(formData) {
    return this.makeRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Quote form submission
  async submitQuoteForm(formData) {
    return this.makeRequest('/api/quote', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Quick inquiry form submission
  async submitQuickInquiry(formData) {
    return this.makeRequest('/api/quick-inquiry', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Health check
  async healthCheck() {
    return this.makeRequest('/health');
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;

// Export individual methods for convenience
export const {
  submitContactForm,
  submitQuoteForm,
  submitQuickInquiry,
  healthCheck,
} = apiService;