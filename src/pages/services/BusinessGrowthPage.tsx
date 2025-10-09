import React from 'react';
import ServiceLayout from '../../components/layout/ServiceLayout';

const BusinessGrowthPage: React.FC = () => {
  const ArrowIcon = () => (
    <img src="/images/icons/arrow-right.svg" alt="" className="w-[12px] h-[12px] flex-shrink-0" />
  );
  return (
    <ServiceLayout
      title="Business Growth & Retention"
      description="Loyal customers are built, not found. We help you create repeatable experiences that turn customers into advocates."
    >
      <div className="space-y-[24px] md:space-y-[30px]">
        {/* Image Banner */}
        <div className="w-full md:w-[534px] h-[140px] md:h-[160px] rounded-[12px] md:rounded-[16px] overflow-hidden bg-gradient-to-b from-[#44208380] to-[#0F071D]">
          <div className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: 'url(/images/services/businees-growth.png)' }}>
          </div>
        </div>
        <div className="space-y-[16px] md:space-y-[20px]">
          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
            {/* Left Column */}
            <div className="flex-1 mt-0 md:mt-[-10px]">
              <div className="space-y-[1px]">
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  New Customer Onboarding
                  </p>
                </div>
                
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Customer Journey Mapping
                  </p>
                </div>
                
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Voice of Customer (VOC) Programs
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 mt-0 md:mt-[-10px]">
              <div className="space-y-[1px]">
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Retention Frameworks
                  </p>
                </div>
                
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Loyalty Program Advisory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default BusinessGrowthPage;

