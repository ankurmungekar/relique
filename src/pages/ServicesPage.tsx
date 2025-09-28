import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="ServicesPage">
      <section className="bg-[#0F071D] py-[120px]">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <h1 
            className="text-[#F5F5F5] font-medium text-[48px] leading-[1.125em] mb-[32px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Our Services
          </h1>
          <p 
            className="text-[#B0B0B0] font-normal text-[20px] leading-[1.6em] max-w-[800px]"
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