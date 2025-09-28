import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="ContactPage">
      <section className="bg-[#0F071D] py-[120px]">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <h1 
            className="text-[#F5F5F5] font-medium text-[48px] leading-[1.125em] mb-[32px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Contact Us
          </h1>
          <p 
            className="text-[#B0B0B0] font-normal text-[20px] leading-[1.6em] max-w-[800px] mb-[48px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Get in touch with our experts to discuss your business needs and discover how we can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
            {/* Contact Information */}
            <div>
              <h2 
                className="text-[#F5F5F5] font-medium text-[32px] leading-[1.25em] mb-[32px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Get in Touch
              </h2>
              
              <div className="space-y-[24px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[48px] h-[48px] bg-[#4EC6C6] rounded-full flex items-center justify-center">
                    <svg className="w-[24px] h-[24px] text-[#0F071D]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium text-[16px]" style={{ fontFamily: 'Roboto' }}>
                      Email
                    </p>
                    <p className="text-[#B0B0B0] font-normal text-[14px]" style={{ fontFamily: 'Roboto' }}>
                      hello@reliqueconsultants.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-[16px]">
                  <div className="w-[48px] h-[48px] bg-[#4EC6C6] rounded-full flex items-center justify-center">
                    <svg className="w-[24px] h-[24px] text-[#0F071D]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium text-[16px]" style={{ fontFamily: 'Roboto' }}>
                      Phone
                    </p>
                    <p className="text-[#B0B0B0] font-normal text-[14px]" style={{ fontFamily: 'Roboto' }}>
                      +1 (234) 567-890
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-[16px]">
                  <div className="w-[48px] h-[48px] bg-[#4EC6C6] rounded-full flex items-center justify-center">
                    <svg className="w-[24px] h-[24px] text-[#0F071D]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium text-[16px]" style={{ fontFamily: 'Roboto' }}>
                      Address
                    </p>
                    <p className="text-[#B0B0B0] font-normal text-[14px]" style={{ fontFamily: 'Roboto' }}>
                      123 Business Ave, Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 
                className="text-[#F5F5F5] font-medium text-[32px] leading-[1.25em] mb-[32px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Send us a Message
              </h2>
              
              <form className="space-y-[24px]">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-[20px] py-[16px] bg-[#2E2E3E] border border-[#4A4A5A] rounded-[8px] text-[#F5F5F5] placeholder-[#B0B0B0] focus:border-[#4EC6C6] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'Roboto' }}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-[20px] py-[16px] bg-[#2E2E3E] border border-[#4A4A5A] rounded-[8px] text-[#F5F5F5] placeholder-[#B0B0B0] focus:border-[#4EC6C6] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'Roboto' }}
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-[20px] py-[16px] bg-[#2E2E3E] border border-[#4A4A5A] rounded-[8px] text-[#F5F5F5] placeholder-[#B0B0B0] focus:border-[#4EC6C6] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'Roboto' }}
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-[20px] py-[16px] bg-[#2E2E3E] border border-[#4A4A5A] rounded-[8px] text-[#F5F5F5] placeholder-[#B0B0B0] focus:border-[#4EC6C6] focus:outline-none transition-colors duration-300 resize-vertical"
                    style={{ fontFamily: 'Roboto' }}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-[20px] py-[16px] bg-[#4EC6C6] text-[#0F071D] font-medium text-[16px] leading-[1.5em] rounded-[8px] hover:bg-[#42B8B8] transition-all duration-300"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 