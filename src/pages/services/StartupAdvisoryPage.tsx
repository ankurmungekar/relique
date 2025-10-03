import React from 'react';
import ServiceLayout from '../../components/layout/ServiceLayout';

const StartupAdvisoryPage: React.FC = () => {
  return (
    <ServiceLayout
      title="Startup Advisory"
      description="We partner with early-stage and growth-stage startups to help them navigate uncertainty, build scalable foundations, and accelerate time-to-market. From idea validation to driving new sales and revenue opportunities, our Startup Advisory services provide strategic insights and hands-on execution support"
    >
      <div className="space-y-[20px]">
        {/* Grid of Cards */}
        <div className="grid grid-cols-3 gap-[20px]">
          {/* Business Model Validation */}
          <div className="bg-[#1B1328] rounded-[16px] p-[28px] flex flex-col items-center text-center">
            <div className="w-[40px] h-[40px] mb-[20px] flex items-center justify-center">
              {/* Search Icon */}
              <img src="/images/icons/search.svg" alt="Business Model Validation" className="w-[40px] h-[40px]" />
            </div>
            <h3 
              className="text-[#F5F5F5] font-medium text-[20px] leading-[1.2em] mb-[8px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Business Model Validation
            </h3>
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[1.57em]"
              style={{ fontFamily: 'Roboto' }}
            >
              Test feasibility & refine value proposition.
            </p>
          </div>

          {/* Product-Market Fit */}
          <div className="bg-[#1B1328] rounded-[16px] p-[28px] flex flex-col items-center text-center">
            <div className="w-[40px] h-[40px] mb-[20px] flex items-center justify-center">
              {/* Target Icon */}
              <img src="/images/icons/target.svg" alt="Product-Market Fit" className="w-[40px] h-[40px]" />
            </div>
            <h3 
              className="text-[#F5F5F5] font-medium text-[20px] leading-[1.2em] mb-[8px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Product-Market Fit
            </h3>
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[1.57em]"
              style={{ fontFamily: 'Roboto' }}
            >
              Validate demand & align features with needs.
            </p>
          </div>

          {/* Go-to-Market Planning */}
          <div className="bg-[#1B1328] rounded-[16px] p-[28px] flex flex-col items-center text-center">
            <div className="w-[40px] h-[40px] mb-[20px] flex items-center justify-center">
              {/* User Flow Icon */}
              <img src="/images/icons/user-flow.svg" alt="Go-to-Market Planning" className="w-[40px] h-[40px]" />
            </div>
            <h3 
              className="text-[#F5F5F5] font-medium text-[20px] leading-[1.2em] mb-[8px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Go-to-Market Planning
            </h3>
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[1.57em]"
              style={{ fontFamily: 'Roboto' }}
            >
              Define ICP, craft messaging & launch strategy.
            </p>
          </div>

          {/* Fundraising & Investor Readiness */}
          <div className="bg-[#1B1328] rounded-[16px] p-[28px] flex flex-col items-center text-center">
            <div className="w-[40px] h-[40px] mb-[20px] flex items-center justify-center">
              {/* Coins Icon */}
              <img src="/images/icons/coins.svg" alt="Fundraising & Investor Readiness" className="w-[40px] h-[40px]" />
            </div>
            <h3 
              className="text-[#F5F5F5] font-medium text-[20px] leading-[1.2em] mb-[8px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Fundraising & Investor Readiness
            </h3>
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[1.57em]"
              style={{ fontFamily: 'Roboto' }}
            >
              Assist in shaping pitch narratives & guiding preparation for due diligence.
            </p>
          </div>

          {/* Scaling Operations */}
          <div className="bg-[#1B1328] rounded-[16px] p-[28px] flex flex-col items-center text-center">
            <div className="w-[30px] h-[30px] mb-[20px] flex items-center justify-center">
              {/* Layers Icon */}
              <img src="/images/icons/layers.svg" alt="Scaling Operations" className="w-[40px] h-[40px]" />
            </div>
            <h3 
              className="text-[#F5F5F5] font-medium text-[20px] leading-[1.2em] mb-[8px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Scaling Operations
            </h3>
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[1.57em]"
              style={{ fontFamily: 'Roboto' }}
            >
              Support in setting up lean teams, defining KPIs, and creating scalable processes.
            </p>
          </div>

          {/* Governance & Compliance */}
          <div className="bg-[#1B1328] rounded-[16px] p-[28px] flex flex-col items-center text-center">
            <div className="w-[32px] h-[32px] mb-[20px] flex items-center justify-center">
              {/* Scale/Balance Icon */}
              <img src="/images/icons/scale.svg" alt="Governance & Compliance" className="w-[40px] h-[40px]" />
            </div>
            <h3 
              className="text-[#F5F5F5] font-medium text-[20px] leading-[1.2em] mb-[8px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Governance & Compliance
            </h3>
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[1.57em]"
              style={{ fontFamily: 'Roboto' }}
            >
              Provide guidance to ensure legal, financial, and regulatory readiness.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default StartupAdvisoryPage;

