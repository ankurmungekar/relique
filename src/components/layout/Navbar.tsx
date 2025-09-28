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

          {/* Industries */}
          <div className="relative ml-[24px]">
            <button 
              onClick={() => handleDropdownToggle('industries')}
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 gap-[9.92px] ${
                activeDropdown === 'industries' 
                  ? 'bg-[#F5F5F5] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
              style={{ fontFamily: 'Roboto' }}
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
            
            {/* Industries Dropdown */}
            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-0 mt-2 w-[200px] bg-[#1B1328] rounded-lg shadow-lg border border-[#2A1F3D] py-2 z-50">
                <Link 
                  to="/industries/bfsi" 
                  className="block px-4 py-2 text-[#F5F5F5] hover:bg-[#2A1F3D] hover:text-[#4EC6C6] transition-colors duration-200"
                  style={{ fontFamily: 'Roboto' }}
                  onClick={() => setActiveDropdown(null)}
                >
                  BFSI
                </Link>
                <Link 
                  to="/industries/retail" 
                  className="block px-4 py-2 text-[#F5F5F5] hover:bg-[#2A1F3D] hover:text-[#4EC6C6] transition-colors duration-200"
                  style={{ fontFamily: 'Roboto' }}
                  onClick={() => setActiveDropdown(null)}
                >
                  Retail & E-Commerce
                </Link>
                <Link 
                  to="/industries/tech" 
                  className="block px-4 py-2 text-[#F5F5F5] hover:bg-[#2A1F3D] hover:text-[#4EC6C6] transition-colors duration-200"
                  style={{ fontFamily: 'Roboto' }}
                  onClick={() => setActiveDropdown(null)}
                >
                  IT & Tech Services
                </Link>
                <Link 
                  to="/industries/data-analytics" 
                  className="block px-4 py-2 text-[#F5F5F5] hover:bg-[#2A1F3D] hover:text-[#4EC6C6] transition-colors duration-200"
                  style={{ fontFamily: 'Roboto' }}
                  onClick={() => setActiveDropdown(null)}
                >
                  Data & Analytics
                </Link>
              </div>
            )}
          </div>

          {/* Solutions & Case Studies */}
          <div className="relative ml-[24px]">
            <button 
              onClick={() => handleDropdownToggle('solutions')}
              className={`inline-flex items-center justify-center px-[12px] py-[12px] rounded-full font-medium text-[16px] leading-[1.5em] transition-all duration-300 gap-[9.92px] ${
                activeDropdown === 'solutions' 
                  ? 'bg-[#F5F5F5] text-[#0F071D]' 
                  : 'text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0F071D]'
              }`}
              style={{ fontFamily: 'Roboto' }}
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
            
            {/* Solutions Dropdown */}
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full left-0 mt-2 w-[240px] bg-[#1B1328] rounded-lg shadow-lg border border-[#2A1F3D] py-2 z-50">
                <Link 
                  to="/solutions/catalog" 
                  className="block px-4 py-2 text-[#F5F5F5] hover:bg-[#2A1F3D] hover:text-[#4EC6C6] transition-colors duration-200"
                  style={{ fontFamily: 'Roboto' }}
                  onClick={() => setActiveDropdown(null)}
                >
                  Solutions Catalog
                </Link>
                <Link 
                  to="/solutions/case-studies" 
                  className="block px-4 py-2 text-[#F5F5F5] hover:bg-[#2A1F3D] hover:text-[#4EC6C6] transition-colors duration-200"
                  style={{ fontFamily: 'Roboto' }}
                  onClick={() => setActiveDropdown(null)}
                >
                  Case Studies
                </Link>
                <Link 
                  to="/solutions/success-stories" 
                  className="block px-4 py-2 text-[#F5F5F5] hover:bg-[#2A1F3D] hover:text-[#4EC6C6] transition-colors duration-200"
                  style={{ fontFamily: 'Roboto' }}
                  onClick={() => setActiveDropdown(null)}
                >
                  Success Stories
                </Link>
              </div>
            )}
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