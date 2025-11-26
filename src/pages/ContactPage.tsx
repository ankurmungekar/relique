import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { SEO } from '../components/ui';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: 'looking-for-solution',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
  }>({});

  const validateForm = () => {
    const errors: { name?: string; email?: string } = {};

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });
    setFieldErrors({});

    // Validate form
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors below before submitting.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you for contacting us! We will get back to you soon.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          subject: 'looking-for-solution',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time email validation
    if (name === 'email' && value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setFieldErrors({
          ...fieldErrors,
          email: 'Please enter a valid email address'
        });
      } else {
        setFieldErrors({
          ...fieldErrors,
          email: undefined
        });
      }
    } else if (name === 'email' && !value.trim()) {
      // Clear email error if field is empty (required error will show on submit)
      setFieldErrors({
        ...fieldErrors,
        email: undefined
      });
    } else if (fieldErrors[name as keyof typeof fieldErrors]) {
      // Clear error for other fields when user starts typing
      setFieldErrors({
        ...fieldErrors,
        [name]: undefined
      });
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Relique Consultants"
        description="Get in touch with Relique Consultants for business growth, digital transformation, and strategic advisory services. We're here to help you succeed."
        canonical="/contact"
      />
      <div className="ContactPage mt-[60px] md:mt-[72px] lg:mt-[88px] mb-[60px] md:mb-[90px] lg:mb-[120px]">
      {/* Hero Banner Section */}
      <section className="relative bg-[#0F071D] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/contact-us-banner.jpg)'
          }}
        />
        {/* Banner Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px] h-full flex flex-col items-center justify-center">
          {/* Solutions Catalog */}
          <h1 
            className="text-[#F5F5F5] font-black text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.33em] text-center mb-[10px] md:mb-[14px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Connect with Relique consultants
          </h1>
          
          {/* Description */}
          <p 
            className="text-white font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6em] text-center max-w-full sm:max-w-[480px] md:max-w-[560px] lg:max-w-[585px] mb-[20px] md:mb-[27px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            If you are looking for a solution or you have a solution or innovative idea for a business challenge, connect with us.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#0F071D] relative">
        <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-[488px_1fr] gap-[40px] md:gap-[60px] lg:gap-[102px] relative">
            {/* Contact Form - Left Column */}
            <div className="relative z-10 mt-[-40px] sm:mt-[-50px] lg:mt-[-65px]">
              <div className="bg-[#0F071D] border border-[rgba(123,78,255,0.5)] rounded-[12px] md:rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px] shadow-[0_0_8px_2px_rgba(123,78,255,0.2)]">
                <h2 
                  className="text-[#F5F5F5] font-black text-[22px] md:text-[26px] lg:text-[28px] leading-[1.43em] mb-[24px] md:mb-[32px] lg:mb-[40px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Let's do great work together
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-[20px] md:space-y-[24px]">
                  <div>
                    <label 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.25em] block mb-[8px]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Name <span className="text-[#FF4D4D]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                      className={`w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] placeholder-opacity-40 font-medium text-[14px] leading-[1.43em] focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                        fieldErrors.name 
                          ? 'border-2 border-[#FF4D4D] focus:ring-2 focus:ring-[#FF4D4D]' 
                          : 'border-none focus:ring-1 focus:ring-[#4EC6C6]'
                      }`}
                      style={{ fontFamily: 'Roboto' }}
                    />
                    {fieldErrors.name && (
                      <p className="text-[#FF4D4D] text-[12px] mt-[6px] flex items-center gap-[4px]" style={{ fontFamily: 'Roboto' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C10.87 14 14 10.87 14 7C14 3.13 10.87 0 7 0ZM7.7 10.5H6.3V9.1H7.7V10.5ZM7.7 7.7H6.3V3.5H7.7V7.7Z" fill="#FF4D4D"/>
                        </svg>
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.25em] block mb-[8px]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Email <span className="text-[#FF4D4D]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                        className={`w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] placeholder-opacity-40 font-medium text-[14px] leading-[1.43em] focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                          fieldErrors.email 
                            ? 'border-2 border-[#FF4D4D] focus:ring-2 focus:ring-[#FF4D4D]' 
                            : 'border-none focus:ring-1 focus:ring-[#4EC6C6]'
                        }`}
                        style={{ fontFamily: 'Roboto' }}
                      />
                      {!fieldErrors.email && formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                        <div className="absolute right-[14px] top-1/2 transform -translate-y-1/2">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#27C840"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    {fieldErrors.email && (
                      <p className="text-[#FF4D4D] text-[12px] mt-[6px] flex items-center gap-[4px]" style={{ fontFamily: 'Roboto' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C10.87 14 14 10.87 14 7C14 3.13 10.87 0 7 0ZM7.7 10.5H6.3V9.1H7.7V10.5ZM7.7 7.7H6.3V3.5H7.7V7.7Z" fill="#FF4D4D"/>
                        </svg>
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.25em] block mb-[8px]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                      className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] placeholder-opacity-40 font-normal text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Roboto' }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.25em] block mb-[8px]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#F5F5F5] font-normal text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        <option value="looking-for-solution" className="bg-[#0F071D] text-[#F5F5F5]">Looking for a solution</option>
                        <option value="partnering" className="bg-[#0F071D] text-[#F5F5F5]">Looking for partnering with us</option>
                        <option value="query" className="bg-[#0F071D] text-[#F5F5F5]">You have a query for us</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.89 2.89L6 6L9.11 2.89L10 3.78L6 7.78L2 3.78L2.89 2.89Z" fill="#F5F5F5" stroke="#F5F5F5" strokeWidth="0.5"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.25em] block mb-[8px]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] placeholder-opacity-40 font-normal text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Roboto' }}
                    />
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`p-[16px] rounded-[8px] ${
                        submitStatus.type === 'success'
                          ? 'bg-[rgba(39,200,64,0.1)] border border-[#27C840]'
                          : 'bg-[rgba(255,77,77,0.1)] border border-[#FF4D4D]'
                      }`}
                    >
                      <p
                        className={`text-[14px] leading-[1.5em] ${
                          submitStatus.type === 'success' ? 'text-[#27C840]' : 'text-[#FF4D4D]'
                        }`}
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {submitStatus.message}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      disabled={
                        isSubmitting ||
                        formData.name.trim() === '' ||
                        formData.email.trim() === '' ||
                        Boolean(fieldErrors.email) ||
                        (formData.email.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                      }
                    >
                      {isSubmitting ? 'Sending...' : 'Get In Touch'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Information - Right Column */}
            <div className="pt-[40px] relative z-10">
              <h1 
                className="text-[#F5F5F5] font-black text-[32px] leading-[2em] mb-[24px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Stay Connected
              </h1>

              <div className="space-y-[26px] mb-[48px]">
                {/* Location */}
                <div className="flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px] bg-[#7B4EFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2C6.13 2 3 5.13 3 9C3 13.17 10 20 10 20C10 20 17 13.17 17 9C17 5.13 13.87 2 10 2ZM10 11.5C8.62 11.5 7.5 10.38 7.5 9C7.5 7.62 8.62 6.5 10 6.5C11.38 6.5 12.5 7.62 12.5 9C12.5 10.38 11.38 11.5 10 11.5Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.43em]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Locate us at: SHAMS, UAE
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px] bg-[#4EC6C6] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M1.86 2.7H16.11V7.9L9 11.34L1.89 7.9L1.86 2.7Z" fill="white"/>
                      <path d="M0.9 4.41L9 8.85L17.1 4.41V15.3H0.9V4.41Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.88em]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      <a 
                        href="mailto:reachus@reliqueconsultants.com"
                        className="text-[#F5F5F5] font-normal text-[16px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        reachus@reliqueconsultants.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px] bg-[#7B4EFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5.52 9.82C6.96 12.65 9.28 14.96 12.11 16.41L14.31 14.21C14.58 13.94 14.98 13.85 15.33 13.97C16.45 14.34 17.66 14.54 18.9 14.54C19.45 14.54 19.9 14.99 19.9 15.54V18.9C19.9 19.45 19.45 19.9 18.9 19.9C9.51 19.9 1.9 12.29 1.9 2.9C1.9 2.35 2.35 1.9 2.9 1.9H6.27C6.82 1.9 7.27 2.35 7.27 2.9C7.27 4.15 7.47 5.35 7.84 6.47C7.95 6.82 7.87 7.21 7.59 7.49L5.52 9.82Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.88em]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                     <a 
                      href="tel:+971585673819"
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      +971 58 567 3819
                    </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white opacity-20 mb-[32px]" />

              {/* Social Media Section */}
              <div className="flex flex-row items-center justify-between">
                <h3 
                  className="text-[#B0B0B0] font-normal text-[20px] leading-[1.6em]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Social Media:
                </h3>
                
                <div className="flex gap-[12px]">
                  {/* LinkedIn */}
                  <button 
                    type="button"
                    onClick={() => window.open('https://www.linkedin.com/in/relique-consultants-856035389', '_blank')}
                    className="cursor-pointer w-[40px] h-[40px] rounded-full border border-[rgba(255,255,255,0.13)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 focus:outline-none"
                    aria-label="LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M0 5H3.5V16H0V5Z" fill="white"/>
                      <path d="M0 0H3.5V3.5H0V0Z" fill="white"/>
                      <path d="M5.5 5H9V6.5C9 6.5 10 5 12 5C14 5 15.5 6 15.5 9V16H12V9.5C12 8.5 11.5 7.5 10 7.5C8.5 7.5 8.5 8.5 8.5 9.5V16H5.5V5Z" fill="white"/>
                    </svg>
                  </button>

                  {/* Instagram */}
                  <button 
                    type="button"
                    onClick={() => window.open('https://instagram.com/reliqueconsultants', '_blank')}
                    className="cursor-pointer w-[40px] h-[40px] rounded-full border border-[rgba(255,255,255,0.13)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 focus:outline-none"
                    aria-label="Instagram"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.718 1.417.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372a3.916 3.916 0 0 0 1.417-.923c.445-.445.718-.891.923-1.417.198-.51.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942a3.926 3.926 0 0 0-.923-1.417A3.916 3.916 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.44c2.136 0 2.389.009 3.232.047.78.036 1.203.166 1.485.276.373.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.389-.047 3.232c-.036.78-.166 1.203-.276 1.485a2.477 2.477 0 0 1-.598.92c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.389-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.843-.047-1.096-.047-3.232s.009-2.389.047-3.232c.036-.78.166-1.203.276-1.485.145-.373.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047z" fill="white"/>
                      <path d="M8 10.667a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334zM8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm5.23-.116a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" fill="white"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContactPage; 