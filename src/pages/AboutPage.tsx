import React from 'react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="AboutPage bg-[#0F071D] min-h-screen pt-[60px] md:pt-[72px] lg:pt-[88px]">
      {/* Hero Banner Section */}
      <section className="pt-[32px] md:pt-[48px] lg:pt-[60px]">
        <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
          <div className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] rounded-[8px] md:rounded-[12px] lg:rounded-[16px] overflow-hidden">
            <img 
              src="/images/about-banner.png" 
              alt="About Relique Consultants" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="pt-[40px] md:pt-[52px] lg:pt-[60px] pb-[20px] md:pb-[24px]">
        <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
          <h1 
            className="text-[#F5F5F5] font-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.35em] text-center mb-[20px] md:mb-[24px]"
            style={{ fontFamily: 'Roboto' }}
          >
            About Us
          </h1>
          <p 
            className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em] text-center max-w-full md:max-w-[760px] lg:max-w-[980px] mx-auto mb-[32px] md:mb-[40px] lg:mb-[48px]"
            style={{ fontFamily: 'Roboto' }}
          >
            At Relique, collaboration is at the core of what we do: it should be a strategic advantage. We bring businesses together through technology, delivering solutions that align with real market needs and create measurable impact. We specialize in helping start-ups and mid-sized organizations bridge technology gaps, connect with their customers, and scale confidently in a digital-first world. By combining innovation, partnerships, and deep industry expertise, we design solutions that empower our clients to grow faster, smarter, and stronger.
          </p>
          
          <div className="flex justify-center">
            <Button to="/contact" variant="primary" className="w-full sm:w-auto">
              Work With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-[40px] md:py-[52px] lg:py-[60px]">
        <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[40px] md:gap-[60px] lg:gap-[118px]">
            {/* Left Content */}
            <div className="flex-1 max-w-full lg:max-w-[635px]">
              <h2 
                className="text-[#F5F5F5] font-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.35em] mb-[10px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Who We Are
              </h2>
              
              <p 
                className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[20px] md:mb-[24px]"
                style={{ fontFamily: 'Roboto' }}
              >
                We are a team of passionate consultants, technologists, and problem-solvers committed to unlocking the potential of every business we partner with. At Relique, collaboration is at the core of what we do:
              </p>

              {/* Bullet Points with Arrows */}
              <div className="space-y-[0px]">
                <div className="flex items-start gap-[14px] md:gap-[18px]">
                  <div className="flex-shrink-0 w-[16px] h-[16px] md:w-[18px] md:h-[18px] mt-[8px] md:mt-[10px]">
                    <img src="/images/icons/arrow-right.svg" alt="" className="w-full h-full" />
                  </div>
                  <p 
                    className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[2.5em]"
                    style={{ fontFamily: 'Roboto' }}
                  >
                    We listen first to understand your challenges.
                  </p>
                </div>
                <div className="flex items-start gap-[14px] md:gap-[18px]">
                  <div className="flex-shrink-0 w-[16px] h-[16px] md:w-[18px] md:h-[18px] mt-[8px] md:mt-[10px]">
                    <img src="/images/icons/arrow-right.svg" alt="" className="w-full h-full" />
                  </div>
                  <p 
                    className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[2.5em]"
                    style={{ fontFamily: 'Roboto' }}
                  >
                    We curate solutions that fit your goals, not just trends.
                  </p>
                </div>
                <div className="flex items-start gap-[14px] md:gap-[18px]">
                  <div className="flex-shrink-0 w-[16px] h-[16px] md:w-[18px] md:h-[18px] mt-[8px] md:mt-[10px]">
                    <img src="/images/icons/arrow-right.svg" alt="" className="w-full h-full" />
                  </div>
                  <p 
                    className="text-[#F5F5F5] font-medium text-[14px] md:text-[16px] leading-[2.5em]"
                    style={{ fontFamily: 'Roboto' }}
                  >
                    We enable growth through the right mix of technology, strategy, and execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Vision Card */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div 
                className="relative rounded-[12px] md:rounded-[16px] border border-[rgba(123,78,255,0.5)] shadow-[0px_0px_8px_2px_rgba(123,78,255,0.2)] w-full lg:w-[447px] p-[28px] md:p-[36px] lg:p-[40px]"
              >
                {/* Vision Icon */}
                <div className="w-[80px] h-[80px] md:w-[92px] md:h-[92px] lg:w-[103.47px] lg:h-[103.47px] mb-[20px] md:mb-[24px]">
                  <img src="/images/icons/our-vision.svg" alt="Our Vision" className="w-full h-full" />
                </div>
                
                {/* Vision Title */}
                <h3 
                  className="text-[#F5F5F5] font-medium text-[24px] md:text-[28px] lg:text-[32px] leading-[1.69em] mb-[12px] md:mb-[16px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Our Vision
                </h3>
                
                {/* Vision Text */}
                <p 
                  className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  To be the indispensable strategic partner that empowers businesses to harness technology, driving unprecedented growth and lasting competitive advantage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-[40px] md:py-[52px] lg:py-[60px] mb-[40px] md:mb-[52px] lg:mb-[60px]">
        <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
          {/* Title */}
          <h2 
            className="text-[#F5F5F5] font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.35em] text-center mb-[10px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Our Core Values
          </h2>
          <p 
            className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em] text-center max-w-full md:max-w-[720px] lg:max-w-[904px] mx-auto mb-[32px] md:mb-[40px] lg:mb-[48px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Guiding principles that define how we work and deliver results.
          </p>

          {/* Core Values Image */}
          <div className="flex justify-center">
            <img 
              src="/images/core-values.png" 
              alt="Core Values Illustration" 
              className="w-full h-auto object-contain max-w-[600px] md:max-w-[800px] lg:max-w-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 