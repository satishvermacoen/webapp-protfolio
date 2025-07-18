'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import SectionTitle from '@/components/landingpage/SectionTitle';
import Icon from '@/components/landingpage/Icon';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setStatus('success');
      setResponseMessage(result.message);
      setFormData({ name: '', email: '', message: '' }); // Reset form

    } catch (error) {
      setStatus('error');
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      setResponseMessage(errorMessage);
    }
  };

  return (
    <div className="pt-24 bg-white">
      <section id="contact-form" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition"
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status === 'loading' && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Response Message Area */}
                {status !== 'idle' && responseMessage && (
                    <div className={`mt-4 p-4 rounded-lg text-center ${
                        status === 'success' ? 'bg-green-100 text-green-800' : ''
                    } ${
                        status === 'error' ? 'bg-red-100 text-red-800' : ''
                    }`}>
                        {responseMessage}
                    </div>
                )}

              </form>
            </div>
            {/* Contact Info */}
            <div className="space-y-6">
                 <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                    <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 rounded-full mr-5">
                        <Icon name="mail" className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Email</h4>
                        <a href="mailto:hello@janedoe.design" className="text-gray-600 hover:text-pink-500">hello@janedoe.design</a>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                    <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 rounded-full mr-5">
                        <Icon name="phone" className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Phone</h4>
                        <p className="text-gray-600">+1 (123) 456-7890</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                    <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 rounded-full mr-5">
                        <Icon name="map-pin" className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Location</h4>
                        <p className="text-gray-600">123 Design St, Creative City</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
