import React, { useState } from 'react';
import Button from '../components/ui/Button';

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
            If you are looking for a solution or you have a solution or innovative idea for a business challenge , connect with us
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

                {/* Status Messages */}
                {submitStatus.type && (
                  <div
                    className={`p-[16px] rounded-[8px] mb-[24px] ${
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
                      placeholder="Name"
                      disabled={isSubmitting}
                      className={`w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] font-medium text-[14px] leading-[1.43em] focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
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
                        placeholder="Email"
                        disabled={isSubmitting}
                        className={`w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] font-medium text-[14px] leading-[1.43em] focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
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
                      placeholder="Contact Number"
                      disabled={isSubmitting}
                      className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] font-normal text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        <option value="looking-for-solution" className="bg-[#0F071D] text-[#F5F5F5]">Are you looking for a solution.</option>
                        <option value="partnering" className="bg-[#0F071D] text-[#F5F5F5]">Looking for partnering with us.</option>
                        <option value="query" className="bg-[#0F071D] text-[#F5F5F5]">You have a query for us.</option>
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
                      placeholder="Message"
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] font-normal text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Roboto' }}
                    />
                  </div>
                  
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
                      className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Locate us at: SHAMS, UAE.
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
                      reachus@reliqueconsultants.com
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
                      +971-54511819
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
                    onClick={() => window.open('https://www.linkedin.com/company/relique-consultants', '_blank')}
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
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path d="M9.5 1.44C12.02 1.44 12.33 1.45 13.35 1.5C14.28 1.54 14.79 1.7 15.13 1.83C15.58 2 15.91 2.22 16.26 2.57C16.61 2.92 16.83 3.25 17 3.7C17.13 4.04 17.29 4.55 17.33 5.48C17.38 6.5 17.39 6.81 17.39 9.33C17.39 11.85 17.38 12.16 17.33 13.18C17.29 14.11 17.13 14.62 17 14.96C16.83 15.41 16.61 15.74 16.26 16.09C15.91 16.44 15.58 16.66 15.13 16.83C14.79 16.96 14.28 17.12 13.35 17.16C12.33 17.21 12.02 17.22 9.5 17.22C6.98 17.22 6.67 17.21 5.65 17.16C4.72 17.12 4.21 16.96 3.87 16.83C3.42 16.66 3.09 16.44 2.74 16.09C2.39 15.74 2.17 15.41 2 14.96C1.87 14.62 1.71 14.11 1.67 13.18C1.62 12.16 1.61 11.85 1.61 9.33C1.61 6.81 1.62 6.5 1.67 5.48C1.71 4.55 1.87 4.04 2 3.7C2.17 3.25 2.39 2.92 2.74 2.57C3.09 2.22 3.42 2 3.87 1.83C4.21 1.7 4.72 1.54 5.65 1.5C6.67 1.45 6.98 1.44 9.5 1.44ZM9.5 0C6.93 0 6.6 0.01 5.57 0.06C4.54 0.11 3.83 0.28 3.21 0.53C2.57 0.78 2.02 1.12 1.47 1.67C0.92 2.22 0.58 2.77 0.33 3.41C0.08 4.03 -0.09 4.74 -0.14 5.77C-0.19 6.8 -0.2 7.13 -0.2 9.7C-0.2 12.27 -0.19 12.6 -0.14 13.63C-0.09 14.66 0.08 15.37 0.33 15.99C0.58 16.63 0.92 17.18 1.47 17.73C2.02 18.28 2.57 18.62 3.21 18.87C3.83 19.12 4.54 19.29 5.57 19.34C6.6 19.39 6.93 19.4 9.5 19.4C12.07 19.4 12.4 19.39 13.43 19.34C14.46 19.29 15.17 19.12 15.79 18.87C16.43 18.62 16.98 18.28 17.53 17.73C18.08 17.18 18.42 16.63 18.67 15.99C18.92 15.37 19.09 14.66 19.14 13.63C19.19 12.6 19.2 12.27 19.2 9.7C19.2 7.13 19.19 6.8 19.14 5.77C19.09 4.74 18.92 4.03 18.67 3.41C18.42 2.77 18.08 2.22 17.53 1.67C16.98 1.12 16.43 0.78 15.79 0.53C15.17 0.28 14.46 0.11 13.43 0.06C12.4 0.01 12.07 0 9.5 0Z" fill="white"/>
                      <path d="M9.5 4.65C6.82 4.65 4.65 6.82 4.65 9.5C4.65 12.18 6.82 14.35 9.5 14.35C12.18 14.35 14.35 12.18 14.35 9.5C14.35 6.82 12.18 4.65 9.5 4.65ZM9.5 12.67C7.75 12.67 6.33 11.25 6.33 9.5C6.33 7.75 7.75 6.33 9.5 6.33C11.25 6.33 12.67 7.75 12.67 9.5C12.67 11.25 11.25 12.67 9.5 12.67Z" fill="white"/>
                      <circle cx="14.5594" cy="4.44063" r="1.125" fill="white"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 