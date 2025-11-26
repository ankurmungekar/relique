import React from 'react';
import ServiceLayout from '../../components/layout/ServiceLayout';
import { SEO } from '../../components/ui';

const GoToMarketStrategyPage: React.FC = () => {
  const ArrowIcon = () => (
    <img src="/images/icons/arrow-right.svg" alt="" className="w-[12px] h-[12px] flex-shrink-0 mt-1" />
  );

  const BulletIcon = () => (
    <img src="/images/icons/bullet.svg" alt="" className="w-[8px] h-[8px] flex-shrink-0 mt-[11px]" />
  );

  return (
    <>
      <SEO
        title="Go-to-Market Strategy Services - Relique Consultants"
        description="Crafting high-impact GTM strategies that align products with the right markets, messaging, and momentum for GCC, APAC, US, Europe and Africa."
        canonical="/services/go-to-market-strategy"
      />
      <ServiceLayout
        title="Go-to-Market Strategy"
        description="Partner in Go-to-Market strategy, specifically for the regions of GCC, APAC, US, Europe and Africa. Crafting high-impact GTM strategies that align products with the right markets, messaging, and momentum."
      >
      <div className="space-y-[16px] md:space-y-[20px]">
        {/* Market Research & Regional Fit + Image */}
        <div className="flex flex-col lg:flex-row gap-[16px] md:gap-[20px]">
          {/* Image Card */}
          <div className="w-full lg:w-[245px] h-[200px] md:h-[220px] lg:h-[245px] flex-shrink-0 rounded-[12px] md:rounded-[16px] overflow-hidden bg-cover bg-center" 
               style={{ backgroundImage: 'url(/images/services/market-research.png)' }}>
            <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-transparent" />
          </div>

          {/* Content Card */}
          <div className="flex-1 rounded-[12px] md:rounded-[16px]">
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[12px] md:mb-[14px]" style={{ fontFamily: 'Roboto' }}>
              Market Research & Regional Fit
            </h3>
            
            <div className="space-y-[8px]">
              <div className="flex gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[1.5em]" style={{ fontFamily: 'Roboto' }}>
                  Understand the target region's
                </p>
              </div>
              
              <div className="ml-[18px] flex flex-col md:flex-row gap-[8px] md:gap-[40px]">
                {/* Left column - 3 items */}
                <div className="w-full md:w-1/2 space-y-[4px]">
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                      Cultural nuances
                    </p>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                      Buying behaviour
                    </p>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                      Regulatory environment
                    </p>
                  </div>
                </div>
                
                {/* Right column - 2 items */}
                <div className="w-full md:w-1/2 space-y-[4px]">
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                      Competitors (local & global)
                    </p>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                      Tech infrastructure (for digital products)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-[6px] mt-[12px] md:mt-[16px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[1.5em]" style={{ fontFamily: 'Roboto' }}>
                  Evaluate product-market fit
                </p>
              </div>

              <div className="ml-[18px] space-y-[4px]">
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Will the product need localization (language, UX, compliance)?
                  </p>
                </div>
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Does the pricing model work locally?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ideal Customer Profile + Image */}
        <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px] flex flex-col lg:flex-row gap-[24px] md:gap-[32px] lg:gap-[40px]">
          <div className="flex-1">
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[12px] md:mb-[14px]" style={{ fontFamily: 'Roboto' }}>
              Ideal Customer Profile (ICP) & Segmentation
            </h3>
            
            <div className="space-y-[8px]">
              <div className="flex gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[1.5em]" style={{ fontFamily: 'Roboto' }}>
                  Define who your ideal customers are in this region
                </p>
              </div>
              
              <div className="ml-[18px]">
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    B2B: Industry type, company size, job titles
                  </p>
                </div>
              </div>

              <div className="flex gap-[6px] mt-[12px] md:mt-[16px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[1.5em]" style={{ fontFamily: 'Roboto' }}>
                  Product positioning based on
                </p>
              </div>

              <div className="ml-[18px] space-y-[4px]">
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Demographics
                  </p>
                </div>
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Digital readiness
                  </p>
                </div>
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Existing alternatives
                  </p>
                </div>
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Pain points your product solves
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[347px] h-[200px] md:h-[220px] lg:h-[245px] flex-shrink-0 rounded-[12px] md:rounded-[16px] overflow-hidden bg-cover bg-center" 
               style={{ backgroundImage: 'url(/images/services/customer-profile.png)' }}>
            <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-transparent" />
          </div>
        </div>

        {/* Value Proposition & Messaging + Pricing Strategy */}
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[20px]">
          {/* Value Proposition & Messaging */}
          <div className="flex-1 bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px]">
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[12px] md:mb-[14px]" style={{ fontFamily: 'Roboto' }}>
              Value Proposition & Messaging
            </h3>
            
            <div className="space-y-[8px]">
              <div className="flex gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[1.5em]" style={{ fontFamily: 'Roboto' }}>
                  Tailor your value proposition to regional needs and perceptions
                </p>
              </div>
              
              <div className="ml-[18px]">
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                    Adapt messaging to the local language, tone, and cultural preferences<br />
                    Ex: What's "fast & efficient" in one market might be "trusted & personalized" in another
                  </p>
                </div>
              </div>

              <div className="flex gap-[6px] mt-[12px] md:mt-[16px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[1.5em]" style={{ fontFamily: 'Roboto' }}>
                  Build alliances with
                </p>
              </div>

              <div className="ml-[18px] space-y-[4px]">
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                    Local influencers, consultants, or decision-makers
                  </p>
                </div>
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Regional trade bodies or associations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Strategy */}
          <div className="flex-1 bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px]">
            <div className="flex items-center gap-[16px] mb-[12px] md:mb-[14px]">
              <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
              Distribution & Channel Strategy
              </h3>
            </div>
            
            <div className="space-y-[8px]">
              <div className="flex gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[1.5em]" style={{ fontFamily: 'Roboto' }}>
                  Build alliances with
                </p>
              </div>
              
              <div className="ml-[18px] space-y-[4px]">
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Local influencers, consultants, or decision-makers
                  </p>
                </div>
                <div className="flex gap-[6px]">
                  <BulletIcon />
                  <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Regional trade bodies or associations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] px-[20px] md:px-[32px] lg:px-[40px] py-[16px] md:py-[20px] flex flex-col lg:flex-row items-start lg:items-center gap-[16px] lg:gap-[20px]">
          <h3 className="w-full lg:w-[28%] text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
            Pricing Strategy <br/>
            <span className="font-normal text-[14px] md:text-[16px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>Determine pricing based on</span>
          </h3>
          
          <div className="hidden lg:block h-[90px] w-[1px] bg-white/20 flex-shrink-0" />
          
          <div className="w-full lg:w-[72%] space-y-[4px]">
            <div className="flex gap-[6px]">
              <BulletIcon />
              <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                Ensure product meets local regulatory standards (tax, IT, safety, etc.)
              </p>
            </div>
            <div className="flex gap-[6px]">
              <BulletIcon />
              <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                Secure licenses or certifications if applicable
              </p>
            </div>
            <div className="flex gap-[6px]">
              <BulletIcon />
              <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                Address data privacy laws (e.g., GDPR, DPDP Act India, PDPA(Singapore), PDPL for GCC)
              </p>
            </div>
          </div>
        </div>

        {/* Distribution & Channel Strategy + Sales Strategy */}
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[20px]">
          {/* Distribution */}
          <div className="flex-1 bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px]">
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[12px] md:mb-[14px]" style={{ fontFamily: 'Roboto' }}>
              Sales Strategy
            </h3>
            <div className="space-y-[8px]">
              <div className="flex gap-[6px]">
                <BulletIcon />
                <p className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                Build a local sales team or representative network
                </p>
              </div>
              <div className="flex gap-[6px]">
                <BulletIcon />
                <p className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                Leverage inside sales or remote selling if high digital literacy
                </p>
              </div>
              <div className="flex gap-[6px]">
                <BulletIcon />
                <p className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                Equip the team with localized sales collateral
                </p>
              </div>
              <div className="flex gap-[6px]">
                <BulletIcon />
                <p className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                Offer trial/demo or PoC for high-involvement B2B products
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="w-full h-[100px] md:h-[120px] lg:h-[126px] rounded-[12px] md:rounded-[16px] overflow-hidden bg-cover bg-center mt-[20px] md:mt-[24px]" 
                 style={{ backgroundImage: 'url(/images/services/distribution.png)' }}>
              <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-transparent" />
            </div>
          </div>

          {/* Sales Strategy */}
          <div className="flex-1 bg-[#1B1328] rounded-[12px] md:rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px]">
          <div className="w-full h-[100px] md:h-[120px] lg:h-[126px] rounded-[12px] md:rounded-[16px] overflow-hidden bg-cover bg-center mb-[20px] md:mb-[24px]" 
                 style={{ backgroundImage: 'url(/images/services/sales-strategy.png)' }}>
              <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-transparent" />
            </div>
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[12px] md:mb-[14px]" style={{ fontFamily: 'Roboto' }}>
              Customer Support & Success
            </h3>
            <div className="space-y-[8px]">
              <div className="flex gap-[6px]">
                <BulletIcon />
                <p className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                  Offer trial/demo or PoC for high-involvement B2B products
                </p>
              </div>
              <div className="flex gap-[6px]">
                <BulletIcon />
                <p className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                  Equip the team with localized sales collateral
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* KPIs & Success Metrics */}
        <div className="bg-[#1B1328] rounded-[12px] md:rounded-[16px] px-[20px] md:px-[32px] lg:px-[40px] py-[16px] md:py-[20px] flex flex-col lg:flex-row items-start lg:items-center gap-[16px] lg:gap-[20px]">
          <h3 className="w-full lg:w-[20%] text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
            Compliance & Legal Readiness
          </h3>
          
          <div className="hidden lg:block h-[90px] w-[1px] bg-white/20 flex-shrink-0" />
          
          <div className="w-full lg:w-[80%] space-y-[4px]">
            <div className="flex gap-[6px]">
              <BulletIcon />
              <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                Ensure product meets local regulatory standards (tax, IT, safety, etc.)
              </p>
            </div>
            <div className="flex gap-[6px]">
              <BulletIcon />
              <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                Secure licenses or certifications if applicable
              </p>
            </div>
            <div className="flex gap-[6px]">
              <BulletIcon />
              <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                Address data privacy laws (e.g., GDPR, DPDP Act India, PDPA(Singapore), PDPL for GCC)
              </p>
            </div>
          </div>
        </div>

        {/* Market Research & Regional Fit */}
        <div className="flex flex-col lg:flex-row gap-[16px] md:gap-[20px]">
          {/* Image Card */}
          <div className="w-full lg:w-[245px] h-[200px] md:h-[220px] lg:h-[245px] flex-shrink-0 rounded-[12px] md:rounded-[16px] overflow-hidden bg-cover bg-center" 
               style={{ backgroundImage: 'url(/images/services/market-research.png)' }}>
            <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-transparent" />
          </div>

          {/* Content Card */}
          <div className="flex-1 rounded-[12px] md:rounded-[16px]">
            <h3 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[12px] md:mb-[14px]" style={{ fontFamily: 'Roboto' }}>
              KPIs & Success Metrics
            </h3>
            
            <div className="space-y-[8px]">
              <div className="flex gap-[6px]">
                <ArrowIcon />
                <p className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[1.5em]" style={{ fontFamily: 'Roboto' }}>
                Track key performance indicators such as:
                </p>
              </div>
              
              <div className="ml-[18px] flex flex-col md:flex-row gap-[8px] md:gap-[40px]">
                {/* Left column - 3 items */}
                <div className="w-full md:w-1/2 space-y-[4px]">
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Customer acquisition cost (CAC)
                    </p>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Product performance
                    </p>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Customer satisfaction index
                    </p>
                  </div>
                </div>
                
                {/* Right column - 2 items */}
                <div className="w-full md:w-1/2 space-y-[4px]">
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Repeat sales
                    </p>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <BulletIcon />
                    <p className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    Product usage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </ServiceLayout>
    </>
  );
};

export default GoToMarketStrategyPage;
