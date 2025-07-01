import React, { useState } from 'react'
import { useLanguage } from '../Context/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const {t} = useLanguage();
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {t('contact.title')}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {t('contact.subtitle')}
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              {t('contact.send')}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {t('contact.info')}
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-green-600 dark:text-green-400" size={20} />
              <span className="text-gray-600 dark:text-gray-300">
                info@agritechinsights.com
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="text-green-600 dark:text-green-400" size={20} />
              <span className="text-gray-600 dark:text-gray-300">
                +977-1-1234567
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="text-green-600 dark:text-green-400" size={20} />
              <span className="text-gray-600 dark:text-gray-300">
                {t('contact.address')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
