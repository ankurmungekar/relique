import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from '../ui/icons/ChevronIcons';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F071D] h-[88px] px-4">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 ml-[111px]">
          <Link to="/">
            <img 
              src="/images/relique-logo-white.png" 
              alt="Relique Consultants" 
              className="w-[104px] h-[70px] object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-0">
          {/* Home */}
          <div className="px-3">
            <Link 
              to="/"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
            >
              Home
            </Link>
          </div>

          {/* Services */}
          <div className="px-3">
            <Link 
              to="/services"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/services') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
            >
              Services
            </Link>
          </div>

          {/* Industries */}
          <div className="relative">
            <button 
              onClick={() => handleDropdownToggle('industries')}
              className="inline-flex items-center justify-center px-[12px] py-[12px] rounded-full text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] hover:bg-[#F5F5F5] hover:text-[#0F071D] transition-all duration-300 gap-[9.92px]"
            >
              Industries
              <div
                className={`transform transition-transform duration-200 ${
                  activeDropdown === 'industries' ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronDown size={12} />
              </div>
            </button>
          </div>

          {/* Solutions & Case Studies */}
          <div className="relative">
            <button 
              onClick={() => handleDropdownToggle('solutions')}
              className="inline-flex items-center justify-center px-[12px] py-[12px] rounded-full text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] hover:bg-[#F5F5F5] hover:text-[#0F071D] transition-all duration-300 gap-[9.92px]"
            >
              Solutions & Case Studies
              <div
                className={`transform transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronDown size={12} />
              </div>
            </button>
          </div>

          {/* About us */}
          <div className="px-3">
            <Link 
              to="/about"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/about') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
            >
              About us
            </Link>
          </div>

          {/* Contact */}
          <div className="px-3">
            <Link 
              to="/contact"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/contact') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0 mr-[111px]">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#6A42E6] transition-all duration-300"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 