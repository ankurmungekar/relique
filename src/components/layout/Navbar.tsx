import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from '../ui/icons/ChevronIcons';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const handleDropdownOpen = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  // Close dropdown and mobile menu when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F071D] h-[60px] md:h-[72px] lg:h-[88px]" ref={navRef}>
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="block">
            <img 
              src="/images/relique-logo-white.png" 
              alt="Relique Consultants" 
              className="w-[80px] h-[54px] md:w-[92px] md:h-[62px] lg:w-[104px] lg:h-[70px] object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col items-center justify-center w-[40px] h-[40px] focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-[24px] h-[2px] bg-[#F5F5F5] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-[24px] h-[2px] bg-[#F5F5F5] mt-[6px] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[24px] h-[2px] bg-[#F5F5F5] mt-[6px] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center">
          {/* Home */}
          <div>
            <Link 
              to="/"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 outline-none focus:outline-none ${
                isActivePage('/') 
                  ? 'text-[#4EC6C6]' 
                  : 'text-[#F5F5F5] hover:text-[#4EC6C6]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Home
            </Link>
          </div>

          {/* Services Dropdown */}
          <div 
            className="ml-[24px] relative"
            onMouseEnter={() => handleDropdownOpen('services')}
            onMouseLeave={handleDropdownClose}
          >
            <button 
              className={`inline-flex items-center justify-center gap-[9.63px] px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 outline-none focus:outline-none ${
                location.pathname.startsWith('/services') 
                  ? 'text-[#4EC6C6]' 
                  : 'text-[#F5F5F5] hover:text-[#4EC6C6]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Services
              <ChevronDown className={`w-[12px] h-[12px] transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Services Dropdown Menu */}
            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 pt-[4px]">
                <div className="bg-[#08040F] rounded-[16px] border border-[rgba(123,78,255,0.5)] shadow-[0_0_8px_2px_rgba(123,78,255,0.2)] py-[8px] min-w-[285px]">
                <Link
                  to="/services/go-to-market-strategy"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200 outline-none focus:outline-none"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Go-to-Market Strategy
                </Link>
                <Link
                  to="/services/startup-advisory"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200 outline-none focus:outline-none"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Startup Advisory
                </Link>
                <Link
                  to="/services/bfsi-it-advisory"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200 outline-none focus:outline-none"
                  style={{ fontFamily: 'Roboto' }}
                >
                  BFSI & IT Advisory
                </Link>
                <Link
                  to="/services/ai-innovations"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200 outline-none focus:outline-none"
                  style={{ fontFamily: 'Roboto' }}
                >
                  AI Innovations
                </Link>
                <Link
                  to="/services/project-execution"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200 outline-none focus:outline-none"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Project Excellence
                </Link>
                <Link
                  to="/services/business-growth"
                  className="block px-[12px] py-[12px] text-[#F5F5F5] font-normal text-[14px] leading-[1.71em] hover:bg-[rgba(123,78,255,0.1)] transition-all duration-200 outline-none focus:outline-none"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Business Growth & Retention
                </Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Hub */}
          <div className="ml-[24px]">
            <Link 
              to="/solutions"
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 outline-none focus:outline-none ${
                isActivePage('/solutions') 
                  ? 'text-[#4EC6C6]' 
                  : 'text-[#F5F5F5] hover:text-[#4EC6C6]'
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
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 outline-none focus:outline-none ${
                isActivePage('/about') 
                  ? 'text-[#4EC6C6]' 
                  : 'text-[#F5F5F5] hover:text-[#4EC6C6]'
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
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 outline-none focus:outline-none ${
                isActivePage('/contact') 
                  ? 'text-[#4EC6C6]' 
                  : 'text-[#F5F5F5] hover:text-[#4EC6C6]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#6A42E6] transition-all duration-300 shadow-lg hover:shadow-xl outline-none focus:outline-none"
            style={{ fontFamily: 'Roboto', width: '183px' }}
          >
            Talk to an Expert
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-[60px] md:top-[72px] left-0 right-0 bg-[#08040F] border-t border-[rgba(123,78,255,0.3)] transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-[16px] py-[20px] max-h-[calc(100vh-60px)] md:max-h-[calc(100vh-72px)] overflow-y-auto">
          {/* Mobile Home Link */}
          <Link 
            to="/"
            className={`block px-[16px] py-[12px] text-[16px] font-medium rounded-lg transition-all duration-200 ${
              isActivePage('/') 
                ? 'text-[#4EC6C6] bg-[rgba(78,198,198,0.1)]' 
                : 'text-[#F5F5F5] hover:bg-[rgba(123,78,255,0.1)]'
            }`}
            style={{ fontFamily: 'Roboto' }}
          >
            Home
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="mt-[8px]">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              className={`w-full flex items-center justify-between px-[16px] py-[12px] text-[16px] font-medium rounded-lg transition-all duration-200 ${
                location.pathname.startsWith('/services') 
                  ? 'text-[#4EC6C6] bg-[rgba(78,198,198,0.1)]' 
                  : 'text-[#F5F5F5] hover:bg-[rgba(123,78,255,0.1)]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Services
              <ChevronDown className={`w-[16px] h-[16px] transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'services' && (
              <div className="mt-[4px] ml-[16px] space-y-[4px]">
                <Link
                  to="/services/go-to-market-strategy"
                  className="block px-[16px] py-[10px] text-[#F5F5F5] font-normal text-[14px] hover:bg-[rgba(123,78,255,0.1)] rounded-lg transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Go-to-Market Strategy
                </Link>
                <Link
                  to="/services/startup-advisory"
                  className="block px-[16px] py-[10px] text-[#F5F5F5] font-normal text-[14px] hover:bg-[rgba(123,78,255,0.1)] rounded-lg transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Startup Advisory
                </Link>
                <Link
                  to="/services/bfsi-it-advisory"
                  className="block px-[16px] py-[10px] text-[#F5F5F5] font-normal text-[14px] hover:bg-[rgba(123,78,255,0.1)] rounded-lg transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  BFSI & IT Advisory
                </Link>
                <Link
                  to="/services/ai-innovations"
                  className="block px-[16px] py-[10px] text-[#F5F5F5] font-normal text-[14px] hover:bg-[rgba(123,78,255,0.1)] rounded-lg transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  AI Innovations
                </Link>
                <Link
                  to="/services/project-execution"
                  className="block px-[16px] py-[10px] text-[#F5F5F5] font-normal text-[14px] hover:bg-[rgba(123,78,255,0.1)] rounded-lg transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Project Excellence
                </Link>
                <Link
                  to="/services/business-growth"
                  className="block px-[16px] py-[10px] text-[#F5F5F5] font-normal text-[14px] hover:bg-[rgba(123,78,255,0.1)] rounded-lg transition-all duration-200"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Business Growth & Retention
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Solutions Hub Link */}
          <Link 
            to="/solutions"
            className={`block mt-[8px] px-[16px] py-[12px] text-[16px] font-medium rounded-lg transition-all duration-200 ${
              isActivePage('/solutions') 
                ? 'text-[#4EC6C6] bg-[rgba(78,198,198,0.1)]' 
                : 'text-[#F5F5F5] hover:bg-[rgba(123,78,255,0.1)]'
            }`}
            style={{ fontFamily: 'Roboto' }}
          >
            Solutions Hub
          </Link>

          {/* Mobile About Link */}
          <Link 
            to="/about"
            className={`block mt-[8px] px-[16px] py-[12px] text-[16px] font-medium rounded-lg transition-all duration-200 ${
              isActivePage('/about') 
                ? 'text-[#4EC6C6] bg-[rgba(78,198,198,0.1)]' 
                : 'text-[#F5F5F5] hover:bg-[rgba(123,78,255,0.1)]'
            }`}
            style={{ fontFamily: 'Roboto' }}
          >
            About us
          </Link>

          {/* Mobile Contact Link */}
          <Link 
            to="/contact"
            className={`block mt-[8px] px-[16px] py-[12px] text-[16px] font-medium rounded-lg transition-all duration-200 ${
              isActivePage('/contact') 
                ? 'text-[#4EC6C6] bg-[rgba(78,198,198,0.1)]' 
                : 'text-[#F5F5F5] hover:bg-[rgba(123,78,255,0.1)]'
            }`}
            style={{ fontFamily: 'Roboto' }}
          >
            Contact
          </Link>

          {/* Mobile CTA Button */}
          <Link
            to="/contact"
            className="block mt-[20px] text-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] rounded-full hover:bg-[#6A42E6] transition-all duration-300 shadow-lg"
            style={{ fontFamily: 'Roboto' }}
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 