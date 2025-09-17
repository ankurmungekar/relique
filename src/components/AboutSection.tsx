import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#0F071D] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="grid grid-cols-2 gap-[120px] items-center">
          {/* Left Content */}
          <div>
            <motion.h2 
              className="text-[#F5F5F5] font-medium text-[48px] leading-[1.125em] mb-[52px] max-w-[437px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'Roboto' }}
            >
              About
              <br />
              Relique Consultants
            </motion.h2>
            
            <motion.p 
              className="text-[#B0B0B0] font-normal text-[20px] leading-[1.6em] mb-[32px] max-w-[590px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'Roboto' }}
            >
              We are a consulting and liaising company focused on delivering clarity and results across IT strategy, digital transformation, regulatory approvals, and stakeholder coordination.
            </motion.p>

            <div className="flex gap-[24px]">
              <motion.a
                href="#know-more"
                className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#4EC6C6] text-[#0F071D] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#42B8B8] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#42B8B8",
                  boxShadow: "0px 4px 12px rgba(78, 198, 198, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: 'Roboto',
                  letterSpacing: '-1.25%'
                }}
              >
                Know more
              </motion.a>
              
              <motion.a
                href="#talk-to-expert"
                className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#6A42E6] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#6A42E6",
                  boxShadow: "0px 4px 12px rgba(123, 78, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: 'Roboto',
                  letterSpacing: '-1.25%'
                }}
              >
                Talk to an Expert
              </motion.a>
            </div>
          </div>

          {/* Right Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[387px] h-[464px] rounded-[16px] overflow-hidden bg-[#D9D9D9]">
              <img 
                src="/images/business-team-meeting.webp"
                alt="Business team meeting"
                className="w-full h-full object-cover"
                style={{
                  transform: 'translate(-10px, -126px)',
                  width: '418px',
                  height: '611px'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 