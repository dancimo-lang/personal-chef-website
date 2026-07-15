'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: '#002b00'}}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-400 text-gray-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            style={{backgroundColor: '#d7e1c7'}}
            suppressHydrationWarning
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: '#002b00'}}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-400 text-gray-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            style={{backgroundColor: '#d7e1c7'}}
            suppressHydrationWarning
          />
        </div>
        
                
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: '#002b00'}}>
            Tell me what you're looking for *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your vision, dietary restrictions, preferences, or any special requirements..."
            className="w-full px-4 py-2 border border-gray-400 text-gray-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            style={{backgroundColor: '#d7e1c7'}}
            suppressHydrationWarning
          />
        </div>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 rounded-lg bg-green-100 border border-green-400">
            <p className="text-green-700 font-medium">
              Thank you for your inquiry! I will get back to you within 24-48 hours.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-100 border border-red-400">
            <p className="text-red-700 font-medium">
              {errorMessage}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
  );
}
