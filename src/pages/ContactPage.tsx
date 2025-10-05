import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="ContactPage mt-[88px]">
      {/* Hero Banner Section */}
      <section className="relative bg-[#0F071D] h-[300px] overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/contact-us-banner.jpg)'
          }}
        />
        {/* Banner Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-[120px] h-full flex flex-col items-center justify-center">
          {/* Solutions Catalog */}
          <h1 
            className="text-[#F5F5F5] font-black text-[48px] leading-[1.33em] text-center mb-[14px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Connect with Relique consultants
          </h1>
          
          {/* Description */}
          <p 
            className="text-white font-normal text-[20px] leading-[1.6em] text-center max-w-[585px] mb-[27px]"
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
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-[488px_1fr] gap-[102px] relative">
            {/* Contact Form - Left Column */}
            <div className="relative z-10 mt-[-65px]">
              <div className="bg-[#0F071D] border border-[rgba(123,78,255,0.5)] rounded-[16px] p-[40px] shadow-[0_0_8px_2px_rgba(123,78,255,0.2)]">
                <h2 
                  className="text-[#F5F5F5] font-black text-[28px] leading-[1.43em] mb-[40px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Let's do great work together
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-[24px]">
                  <div>
                    <label 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.25em] block mb-[8px]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#F5F5F5] placeholder-[#F5F5F5] font-medium text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300"
                      style={{ fontFamily: 'Roboto' }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      className="text-[#F5F5F5] font-normal text-[16px] leading-[1.25em] block mb-[8px]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#F5F5F5] placeholder-[#F5F5F5] font-medium text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300"
                        style={{ fontFamily: 'Roboto' }}
                      />
                      {formData.email && formData.email.includes('@') && (
                        <div className="absolute right-[14px] top-1/2 transform -translate-y-1/2">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#27C840"/>
                          </svg>
                        </div>
                      )}
                    </div>
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
                      className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#F5F5F5] placeholder-[#B0B0B0] font-normal text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300"
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
                        className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300 appearance-none cursor-pointer"
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
                      className="w-full px-[14px] py-[12px] bg-[rgba(255,255,255,0.05)] border-none rounded-[4px] text-[#B0B0B0] placeholder-[#B0B0B0] font-normal text-[14px] leading-[1.43em] focus:outline-none focus:ring-1 focus:ring-[#4EC6C6] transition-all duration-300 resize-none"
                      style={{ fontFamily: 'Roboto' }}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" variant="primary">
                      Get In Touch
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
                      +91-XXXXXXXXXX
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
                  <a 
                    href="#" 
                    className="w-[40px] h-[40px] rounded-full border border-[rgba(255,255,255,0.13)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M0 5H3.5V16H0V5Z" fill="white"/>
                      <path d="M0 0H3.5V3.5H0V0Z" fill="white"/>
                      <path d="M5.5 5H9V6.5C9 6.5 10 5 12 5C14 5 15.5 6 15.5 9V16H12V9.5C12 8.5 11.5 7.5 10 7.5C8.5 7.5 8.5 8.5 8.5 9.5V16H5.5V5Z" fill="white"/>
                    </svg>
                  </a>

                  {/* Twitter/X */}
                  <a 
                    href="#" 
                    className="w-[40px] h-[40px] rounded-full border border-[rgba(255,255,255,0.13)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                  >
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M21.46 1.89C20.69 2.22 19.86 2.44 18.99 2.54C19.88 2.02 20.56 1.18 20.88 0.18C20.05 0.67 19.13 1.01 18.16 1.2C17.37 0.36 16.26 -0.14 15.04 -0.14C12.68 -0.14 10.77 1.77 10.77 4.13C10.77 4.46 10.81 4.78 10.88 5.09C7.12 4.91 3.78 3.23 1.54 0.65C1.17 1.29 0.96 2.02 0.96 2.8C0.96 4.28 1.71 5.59 2.86 6.37C2.16 6.35 1.51 6.16 0.93 5.85V5.9C0.93 7.97 2.4 9.69 4.35 10.08C4 10.17 3.63 10.22 3.26 10.22C3 10.22 2.74 10.19 2.49 10.14C3.01 11.84 4.58 13.08 6.45 13.11C4.99 14.26 3.17 14.94 1.18 14.94C0.84 14.94 0.5 14.92 0.17 14.88C2.06 16.1 4.31 16.81 6.73 16.81C15.03 16.81 19.56 10.29 19.56 4.62C19.56 4.43 19.56 4.25 19.55 4.07C20.39 3.48 21.12 2.74 21.7 1.89H21.46Z" fill="white"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="#" 
                    className="w-[40px] h-[40px] rounded-full border border-[rgba(255,255,255,0.13)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.2V16C13.1 15.4 16 12 16 8Z" fill="white"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="#" 
                    className="w-[40px] h-[40px] rounded-full border border-[rgba(255,255,255,0.13)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                  >
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path d="M9.5 1.44C12.02 1.44 12.33 1.45 13.35 1.5C14.28 1.54 14.79 1.7 15.13 1.83C15.58 2 15.91 2.22 16.26 2.57C16.61 2.92 16.83 3.25 17 3.7C17.13 4.04 17.29 4.55 17.33 5.48C17.38 6.5 17.39 6.81 17.39 9.33C17.39 11.85 17.38 12.16 17.33 13.18C17.29 14.11 17.13 14.62 17 14.96C16.83 15.41 16.61 15.74 16.26 16.09C15.91 16.44 15.58 16.66 15.13 16.83C14.79 16.96 14.28 17.12 13.35 17.16C12.33 17.21 12.02 17.22 9.5 17.22C6.98 17.22 6.67 17.21 5.65 17.16C4.72 17.12 4.21 16.96 3.87 16.83C3.42 16.66 3.09 16.44 2.74 16.09C2.39 15.74 2.17 15.41 2 14.96C1.87 14.62 1.71 14.11 1.67 13.18C1.62 12.16 1.61 11.85 1.61 9.33C1.61 6.81 1.62 6.5 1.67 5.48C1.71 4.55 1.87 4.04 2 3.7C2.17 3.25 2.39 2.92 2.74 2.57C3.09 2.22 3.42 2 3.87 1.83C4.21 1.7 4.72 1.54 5.65 1.5C6.67 1.45 6.98 1.44 9.5 1.44ZM9.5 0C6.93 0 6.6 0.01 5.57 0.06C4.54 0.11 3.83 0.28 3.21 0.53C2.57 0.78 2.02 1.12 1.47 1.67C0.92 2.22 0.58 2.77 0.33 3.41C0.08 4.03 -0.09 4.74 -0.14 5.77C-0.19 6.8 -0.2 7.13 -0.2 9.7C-0.2 12.27 -0.19 12.6 -0.14 13.63C-0.09 14.66 0.08 15.37 0.33 15.99C0.58 16.63 0.92 17.18 1.47 17.73C2.02 18.28 2.57 18.62 3.21 18.87C3.83 19.12 4.54 19.29 5.57 19.34C6.6 19.39 6.93 19.4 9.5 19.4C12.07 19.4 12.4 19.39 13.43 19.34C14.46 19.29 15.17 19.12 15.79 18.87C16.43 18.62 16.98 18.28 17.53 17.73C18.08 17.18 18.42 16.63 18.67 15.99C18.92 15.37 19.09 14.66 19.14 13.63C19.19 12.6 19.2 12.27 19.2 9.7C19.2 7.13 19.19 6.8 19.14 5.77C19.09 4.74 18.92 4.03 18.67 3.41C18.42 2.77 18.08 2.22 17.53 1.67C16.98 1.12 16.43 0.78 15.79 0.53C15.17 0.28 14.46 0.11 13.43 0.06C12.4 0.01 12.07 0 9.5 0Z" fill="white"/>
                      <path d="M9.5 4.65C6.82 4.65 4.65 6.82 4.65 9.5C4.65 12.18 6.82 14.35 9.5 14.35C12.18 14.35 14.35 12.18 14.35 9.5C14.35 6.82 12.18 4.65 9.5 4.65ZM9.5 12.67C7.75 12.67 6.33 11.25 6.33 9.5C6.33 7.75 7.75 6.33 9.5 6.33C11.25 6.33 12.67 7.75 12.67 9.5C12.67 11.25 11.25 12.67 9.5 12.67Z" fill="white"/>
                      <circle cx="14.5594" cy="4.44063" r="1.125" fill="white"/>
                    </svg>
                  </a>
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