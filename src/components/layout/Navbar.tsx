import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from '../ui/icons/ChevronIcons';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F071D] h-[88px]" ref={navRef}>
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-[120px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="block">
            <img 
              src="/images/relique-logo-white.png" 
              alt="Relique Consultants" 
              className="w-[104px] h-[70px] object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          {/* Home */}
          <div>
            <Link 
              to="/"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Home
            </Link>
          </div>

          {/* Services Dropdown */}
          <div className="ml-[24px] relative">
            <button 
              onClick={() => handleDropdownToggle('services')}
              className={`inline-flex items-center justify-center gap-[9.63px] px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                location.pathname.startsWith('/services') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Services
              <ChevronDown className={`w-[12px] h-[12px] transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Services Dropdown Menu */}
            {activeDropdown === 'services' && (
              <div className="absolute top-[calc(100%+4px)] left-0 bg-[#08040F] rounded-[16px] border border-[rgba(123,78,255,0.5)] shadow-[0_0_8px_2px_rgba(123,78,255,0.2)] py-[8px] min-w-[285px] z-50">
                <Link
                  to="/services/go-to-market-strategy"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Go-to-Market Strategy
                </Link>
                <Link
                  to="/services/project-execution"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Project Execution and Customer Success
                </Link>
                <Link
                  to="/services/business-growth"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Business Growth & Retention
                </Link>
                <Link
                  to="/services/bfsi-it-advisory"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  BFSI & IT Advisory
                </Link>
                <Link
                  to="/services/ai-innovations"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  AI Innovations
                </Link>
                <Link
                  to="/services/startup-advisory"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Startup Advisory
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Hub */}
          <div className="ml-[24px]">
            <Link 
              to="/services"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/solutions') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Solutions Hub
            </Link>
          </div>

          {/* About us */}
          <div className="ml-[24px]">
            <Link 
              to="/about"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/about') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              About us
            </Link>
          </div>

          {/* Contact */}
          <div className="ml-[24px]">
            <Link 
              to="/contact"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/contact') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#6A42E6] transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Roboto', width: '183px' }}
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 