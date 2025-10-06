import React from 'react';
import ServiceLayout from '../../components/layout/ServiceLayout';

const ProjectExecutionPage: React.FC = () => {
  return (
    <ServiceLayout
      title="Project Execution and Customer Success"
      description="Your Partner in Project execution, Customer success and value realization"
    >
      <div className="space-y-[16px] md:space-y-[20px]">
        {/* Grid of 8 cards in 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[21px]">
          {/* Card 1: End-to-End Project Ownership */}
          <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[18px] md:p-[20px] min-h-[160px] md:h-[172px]">
            <img src="/images/icons/user-flow.svg" alt="" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] mb-[10px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              End-to-End Project Ownership
            </h3>
            <p className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              From planning to execution, we ensure seamless delivery tailored to regional dynamics.
            </p>
          </div>

          {/* Card 2: Customer-Centric Approach */}
          <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[18px] md:p-[20px] min-h-[160px] md:h-[172px]">
            <img src="/images/icons/target.svg" alt="" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] mb-[10px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Customer-Centric Approach
            </h3>
            <p className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              We align with your goals and local needs to drive true customer satisfaction.
            </p>
          </div>

          {/* Card 3: Accelerated Time-to-Value */}
          <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[18px] md:p-[20px] min-h-[160px] md:h-[172px]">
            <img src="/images/icons/rocket.svg" alt="" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] mb-[10px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Accelerated Time-to-Value
            </h3>
            <p className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Rapid deployment and measurable outcomes that justify your investment early.
            </p>
          </div>

          {/* Card 4: Localized Support & Engagement */}
          <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[18px] md:p-[20px] min-h-[160px] md:h-[172px]">
            <img src="/images/icons/headphones.svg" alt="" className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] mb-[10px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Localized Support & Engagement
            </h3>
            <p className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              On-ground expertise and culturally aligned engagement for faster adoption.
            </p>
          </div>

          {/* Card 5: Cross-Functional Collaboration */}
          <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[18px] md:p-[20px] min-h-[160px] md:h-[172px]">
            <img src="/images/icons/handshake.svg" alt="" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] mb-[10px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Cross-Functional Collaboration
            </h3>
            <p className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              We bridge gaps between teams, stakeholders, and systems for unified success.
            </p>
          </div>

          {/* Card 6: Scalable Execution Models */}
          <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[18px] md:p-[20px] min-h-[160px] md:h-[172px]">
            <img src="/images/icons/layers.svg" alt="" className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] mb-[10px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Scalable Execution Models
            </h3>
            <p className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Whether pilot or full-scale, our models adapt to your growth path.
            </p>
          </div>

          {/* Card 7: Risk Mitigation & Compliance Readiness */}
          <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[18px] md:p-[20px] min-h-[160px] md:h-[172px]">
            <img src="/images/icons/shield.svg" alt="" className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] mb-[10px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Risk Mitigation & Compliance Readiness
            </h3>
            <p className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Proactively address regulatory and operational risks in the new region.
            </p>
          </div>

          {/* Card 8: Data-Driven Insights */}
          <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[18px] md:p-[20px] min-h-[160px] md:h-[172px]">
            <img src="/images/icons/graph.svg" alt="" className="w-[30px] h-[30px] md:w-[32px] md:h-[32px] mb-[10px]" />
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Data-Driven Insights
            </h3>
            <p className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Measure what matters with region-specific KPIs and dashboards.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ProjectExecutionPage;
