import { useState } from 'react';
import apiService from '../services/api';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [message, setMessage] = useState('');

  const resetStatus = () => {
    setSubmitStatus(null);
    setMessage('');
  };

  const submitForm = async (formType, formData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setMessage('');

    try {
      let result;

      switch (formType) {
        case 'contact':
          result = await apiService.submitContactForm(formData);
          break;
        case 'quote':
          result = await apiService.submitQuoteForm(formData);
          break;
        case 'quick-inquiry':
          result = await apiService.submitQuickInquiry(formData);
          break;
        default:
          throw new Error('Invalid form type');
      }

      if (result.success) {
        setSubmitStatus('success');
        setMessage(result.data.message || 'Form submitted successfully!');
        return { success: true, data: result.data };
      } else {
        setSubmitStatus('error');
        setMessage(result.error || 'Failed to submit form. Please try again.');
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setMessage('An unexpected error occurred. Please try again.');
      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitStatus,
    message,
    submitForm,
    resetStatus,
  };
};