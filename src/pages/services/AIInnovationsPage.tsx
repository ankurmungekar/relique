import React from 'react';
import ServiceLayout from '../../components/layout/ServiceLayout';

const AIInnovationsPage: React.FC = () => {
  const ArrowIcon = () => (
    <img src="/images/icons/arrow-right.svg" alt="" className="w-[12px] h-[12px] flex-shrink-0" />
  );

  return (
    <ServiceLayout
      title="AI Innovations"
      description="Harness the power of Artificial Intelligence to unlock new opportunities and transform your business. We go beyond buzzwords — focusing on building practical, scalable AI-driven solutions that deliver measurable results."
    >
      <div className="space-y-[30px]">
        {/* Main Content Section with Image Banner and Two Columns */}
        <div className="space-y-[20px]">
          {/* Two Column Layout */}
          <div className="flex gap-[40px]">
            {/* Left Column */}
            <div className="flex-1 mt-[-10px]">
              <div className="space-y-[1px]">
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                    Custom AI Solutions
                  </p>
                </div>
                
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                    Data Intelligence
                  </p>
                </div>
                
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                    Process Automation
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 mt-[-10px]">
              <div className="space-y-[1px]">
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                    Predictive Analytics
                  </p>
                </div>
                
                <div className="flex items-center gap-[6px]">
                  <ArrowIcon />
                  <p className="text-[#F5F5F5] font-medium text-[16px] leading-[2.5em]" style={{ fontFamily: 'Roboto' }}>
                    Responsible AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Banner */}
        <div className="w-[534px] h-[160px] rounded-[16px] overflow-hidden bg-gradient-to-b from-[#44208380] to-[#0F071D]">
          <div className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: 'url(/images/services/ai-innovations.png)' }}>
          </div>
        </div>

        {/* Our Vision Section */}
        <div>
          <div className="flex items-center gap-[6px] mb-[12px]">
            <img src="/images/icons/our-vision.svg" alt="" className="w-[28px] h-[28px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
              Our vision
            </h3>
          </div>
          <p className="text-[#B0B0B0] font-normal text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
            AI isn't the future, it's the present. Our vision is to bridge the gap between innovative AI solutions and real-world market needs, enabling organizations to make smarter decisions, deliver seamless customer experiences, and unlock new growth opportunities.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default AIInnovationsPage;

