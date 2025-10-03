import React from 'react';
import ServiceLayout from '../../components/layout/ServiceLayout';

const BFSIAdvisoryPage: React.FC = () => {
  const ArrowIcon = () => (
    <img src="/images/icons/arrow-right.svg" alt="" className="w-[12px] h-[12px] flex-shrink-0" />
  );

  return (
    <ServiceLayout
      title="BFSI & IT Advisory"
      description="With deep domain expertise in BFSI and tech, we provide tailored insights and hands-on guidance for enterprises navigating complex sales landscapes."
    >
      <div className="space-y-[20px]">
        {/* Main Content Section */}
        <div className="flex gap-[20px]">
          {/* Image Card */}
          <div className="w-[347px] h-[263px] flex-shrink-0 rounded-[16px] overflow-hidden bg-cover bg-center" 
               style={{ backgroundImage: 'url(/images/services/advisory.png)' }}>
          </div>

          {/* Content Card */}
          <div className="flex-1 mt-[-10px]">
            <div className="space-y-[1px]">
              <div className="flex items-center gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Digital Engagement
                </p>
              </div>
              
              <div className="flex items-center gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Enterprise SaaS Sales Advisory
                </p>
              </div>
              
              <div className="flex items-center gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Sales Tech Stack Recommendations
                </p>
              </div>
              
              <div className="flex items-center gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Governance, Risk & Compliance
                </p>
              </div>
              
              <div className="flex items-center gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Fraud Management & Process Automation
                </p>
              </div>
              
              <div className="flex items-center gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  AI Powered InsurTech
                </p>
              </div>
              
              <div className="flex items-center gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                  Process Automation for Loan Recovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default BFSIAdvisoryPage;

