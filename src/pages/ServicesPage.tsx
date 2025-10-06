import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="ServicesPage">
      <section className="bg-[#0F071D] py-[60px] md:py-[90px] lg:py-[120px] mt-[60px] md:mt-[72px] lg:mt-[88px]">
        <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
          <h1 
            className="text-[#F5F5F5] font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.125em] mb-[20px] md:mb-[28px] lg:mb-[32px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Our Services
          </h1>
          <p 
            className="text-[#B0B0B0] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6em] max-w-full md:max-w-[680px] lg:max-w-[800px]"
            style={{ fontFamily: 'Roboto' }}
          >
            This is a placeholder for the Services page. You can add detailed service descriptions, 
            pricing, case studies, and service-specific content here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 