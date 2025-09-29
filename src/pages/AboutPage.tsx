import React from 'react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="AboutPage bg-[#0F071D] min-h-screen pt-[88px]">
      {/* Hero Banner Section */}
      <section className="py-[60px]">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="w-full h-[300px] rounded-[16px] overflow-hidden">
            <img 
              src="/images/about-banner.png" 
              alt="About Relique Consultants" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-[60px]">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="flex justify-between items-start gap-[118px]">
            {/* Left Content */}
            <div className="flex-1 max-w-[635px]">
              <h1 
                className="text-[#F5F5F5] font-medium text-[48px] leading-[1.125em] mb-[32px]"
                style={{ fontFamily: 'Roboto' }}
              >
                About us<br />
                Who We Are
              </h1>
              
              <p 
                className="text-[#B0B0B0] font-normal text-[16px] leading-[1.75em] mb-[48px]"
                style={{ fontFamily: 'Roboto' }}
              >
                At Relique Consultants, we specialize in IT strategy, digital transformation, and stakeholder coordination. Our mission is to bridge the gap between technology and business objectives, ensuring seamless integration and optimal performance across all organizational levels.
              </p>
              
              <Button to="/contact" variant="primary">
                Work With Us
              </Button>
            </div>

            {/* Right Vision Card */}
            <div className="flex-shrink-0">
              <div 
                className="relative rounded-[16px] border border-[rgba(123,78,255,0.5)] shadow-[0px_0px_8px_2px_rgba(123,78,255,0.2)] w-[447px] h-[340px]"
              >
                {/* Vision Icon */}
                <div className="absolute left-[40px] top-[42px] w-[100px] h-[100px] flex items-center justify-center">
                  <img src="/images/icons/our-vision.svg" alt="Our Vision" />
                </div>
                
                {/* Vision Title */}
                <h3 
                  className="absolute left-[40px] top-[146px] w-[150px] h-[40px] text-[#F5F5F5] font-medium text-[24px] leading-[1.67em]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Our Vision
                </h3>
                
                {/* Vision Text */}
                <p 
                  className="absolute left-[40px] top-[202px] w-[366px] h-[96px] text-[#F5F5F5] font-normal text-[16px] leading-[1.5em]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  To be the leading consultancy that transforms businesses through innovative technology solutions and strategic insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-[120px]">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="flex items-center gap-[80px]">
            {/* Left Side - Text Content */}
            <div className="flex-1">
              <h2 
                className="text-[#F5F5F5] font-medium text-[40px] leading-[1.35em] mb-[32px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Our<br />
                Core Values
              </h2>
              <p 
                className="text-[#B0B0B0] font-normal text-[16px] leading-[1.75em] max-w-[904px] mb-[48px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Guiding principles that define how we work and deliver results.
              </p>
            </div>

            {/* Right Side - Core Values Image */}
            <div className="flex-shrink-0">
              <img 
                src="/images/core-values.png" 
                alt="Core Values Illustration" 
                className="w-[860px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 