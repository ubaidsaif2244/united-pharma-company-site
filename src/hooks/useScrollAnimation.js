import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Auto-detect elements to animate
    const animateElements = document.querySelectorAll(`
      .fade-in,
      .slide-up,
      .slide-left,
      .slide-right,
      .scale-in,
      section,
      .hero-content,
      .product-card,
      .service-card,
      .feature-card,
      .stats-item,
      .testimonial-card,
      .gallery-item,
      .contact-form,
      .about-content,
      .process-step
    `)
    
    animateElements.forEach(el => {
      // Add default animation class if none exists
      if (!el.classList.contains('fade-in') && 
          !el.classList.contains('slide-up') && 
          !el.classList.contains('slide-left') && 
          !el.classList.contains('slide-right') && 
          !el.classList.contains('scale-in')) {
        el.classList.add('fade-in')
      }
      observer.observe(el)
    })

    return () => {
      animateElements.forEach(el => observer.unobserve(el))
    }
  }, [])
}

export default useScrollAnimation