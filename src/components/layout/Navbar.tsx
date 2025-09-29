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

          {/* Services */}
          <div className="ml-[24px]">
            <Link 
              to="/services"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 ${
                isActivePage('/services') 
                  ? 'bg-[#4EC6C6] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Services
            </Link>
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