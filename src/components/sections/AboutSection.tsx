import React from 'react';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="mb-[150px] bg-[#0F071D]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="flex justify-between items-start gap-[40px]">
          {/* Left Side - Image */}
          <div className="flex-shrink-0">
            <img 
              src="/images/about.png" 
              alt="About Relique Consultants" 
              className="object-cover rounded-[16px]"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-[635px]">
            <h2 
              className="text-[#F5F5F5] font-regular text-[48px] leading-[1.125em] mb-[32px]"
              style={{ fontFamily: 'Roboto' }}
            >
              About<br />
              <span className='font-black'>Relique Consultants</span>
            </h2>
            
            <p 
              className="text-[#B0B0B0] font-normal text-[16px] leading-[1.75em] mb-[48px]"
              style={{ fontFamily: 'Roboto' }}
            >
              we bring businesses together to compliment and deliver solutions that align with real market needs. <br /><br />
              Our focus is on empowering start-ups and mid-sized organizations to connect with their desired customers while bridging technology gaps through the right strategies, tools, and partnerships. <br />
              We believe every business has the potential to scale, and with the right blend of innovation, collaboration, and technology, we help our clients unlock opportunities, accelerate growth, and stay competitive in a fast-changing world.
            </p>
            
            <Button
              to="/about"
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