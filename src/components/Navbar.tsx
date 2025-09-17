import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from './icons/ChevronIcons';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F071D] h-[88px] px-4">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 ml-[111px]">
          <img 
            src="/images/relique-logo-white.png" 
            alt="Relique Consultants" 
            className="w-[104px] h-[70px] object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-0">
          {/* Home */}
          <motion.div 
            className="px-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a 
              href="#home"
              className="inline-flex items-center justify-center px-[12px] py-[12px] rounded-full text-[#4EC6C6] font-medium text-[16px] leading-[1.5em] hover:bg-[#4EC6C6] hover:text-[#0F071D] transition-all duration-300"
              whileHover={{ backgroundColor: "#4EC6C6", color: "#0F071D" }}
            >
              Home
            </motion.a>
          </motion.div>

          {/* Services */}
          <div className="relative">
            <motion.button 
              onClick={() => handleDropdownToggle('services')}
              className="inline-flex items-center justify-center px-[12px] py-[12px] rounded-full text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] hover:bg-[#F5F5F5] hover:text-[#0F071D] transition-all duration-300 gap-[9.63px]"
              whileHover={{ backgroundColor: "#F5F5F5", color: "#0F071D" }}
              transition={{ duration: 0.2 }}
            >
              Services
              <motion.div
                animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={12} />
              </motion.div>
            </motion.button>
          </div>

          {/* Solutions & Case Studies */}
          <div className="relative">
            <motion.button 
              onClick={() => handleDropdownToggle('solutions')}
              className="inline-flex items-center justify-center px-[12px] py-[12px] rounded-full text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] hover:bg-[#F5F5F5] hover:text-[#0F071D] transition-all duration-300 gap-[9.92px]"
              whileHover={{ backgroundColor: "#F5F5F5", color: "#0F071D" }}
              transition={{ duration: 0.2 }}
            >
              Solutions & Case Studies
              <motion.div
                animate={{ rotate: activeDropdown === 'solutions' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={12} />
              </motion.div>
            </motion.button>
          </div>

          {/* About us */}
          <motion.div 
            className="px-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a 
              href="#about"
              className="inline-flex items-center justify-center px-[12px] py-[12px] rounded-full text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] hover:bg-[#F5F5F5] hover:text-[#0F071D] transition-all duration-300"
              whileHover={{ backgroundColor: "#F5F5F5", color: "#0F071D" }}
            >
              About us
            </motion.a>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="px-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a 
              href="#contact"
              className="inline-flex items-center justify-center px-[12px] py-[12px] rounded-full text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] hover:bg-[#F5F5F5] hover:text-[#0F071D] transition-all duration-300"
              whileHover={{ backgroundColor: "#F5F5F5", color: "#0F071D" }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0 mr-[111px]">
          <motion.a
            href="#talk-to-expert"
            className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#6A42E6] transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#6A42E6",
              boxShadow: "0px 4px 12px rgba(123, 78, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to an Expert
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 