import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#0F071D] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="grid grid-cols-2 gap-[46px] items-start">
          {/* Left Image */}
          <div className="relative w-[564px] h-[464px]">
            <img 
              src="/images/about.png"
              alt="About Relique Consultants"
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>

          {/* Right Content */}
          <div style={{ marginLeft: '46px' }}>
            <h2 
              className="text-[#F5F5F5] font-medium text-[40px] leading-[1.35em] mb-[28px] w-[365px]"
              style={{ fontFamily: 'Roboto' }}
            >
              About
              <br />
              Relique Consultants
            </h2>
            
            <p 
              className="text-[#B0B0B0] font-normal text-[16px] leading-[1.75em] mb-[52px] w-[590px]"
              style={{ fontFamily: 'Roboto' }}
            >
              We are a consulting and liaising company focused on delivering clarity and results across IT strategy, digital transformation, regulatory approvals, and stakeholder coordination.
            </p>

            <a
              href="#know-more"
              className="inline-flex items-center justify-center w-[183px] px-[20px] py-[12px] bg-[#4EC6C6] text-[#0F071D] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#42B8B8] transition-all duration-300"
              style={{
                fontFamily: 'Roboto',
                letterSpacing: '-1.25%',
                paddingRight: '21.39px'
              }}
            >
              Know more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 