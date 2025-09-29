import React from 'react';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="py-[120px] bg-[#0F071D]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="flex justify-between items-start gap-[118px]">
          {/* Left Side - Image */}
          <div className="flex-shrink-0">
            <img 
              src="/images/about.png" 
              alt="About Relique Consultants" 
              className="w-[635px] h-[400px] object-cover rounded-[16px]"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-[635px]">
            <h2 
              className="text-[#F5F5F5] font-medium text-[48px] leading-[1.125em] mb-[32px]"
              style={{ fontFamily: 'Roboto' }}
            >
              About us<br />
              Who We Are
            </h2>
            
            <p 
              className="text-[#B0B0B0] font-normal text-[16px] leading-[1.75em] mb-[48px]"
              style={{ fontFamily: 'Roboto' }}
            >
              We are a consulting and liaising company focused on delivering clarity and results across IT strategy, digital transformation, regulatory approvals, and stakeholder coordination. With a team of domain experts, we act as your extended arm in navigating complexity — from compliance to innovation.
            </p>
            
            <Button
              href="#know-more"
              variant="primary"
              className="w-[183px]"
              style={{
                paddingRight: '21.39px'
              }}
            >
              Know more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 