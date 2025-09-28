import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from '../ui/icons/ChevronIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F071D] relative">
      {/* Top Border Line */}
      <div className="w-full h-[1px] bg-white opacity-20"></div>
      
      <div className="max-w-[1440px] mx-auto px-[120px] pt-[40px] pb-[31px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-[60px] mb-[25px]">
          {/* Company Info */}
          <div>
            <div className="mb-[32px]">
              <img 
                src="/images/relique-logo-white.png" 
                alt="Relique Consultants" 
                className="w-[116px] h-[78px] object-contain mb-[16px]"
              />
            </div>
            
            <h3 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[8px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Relique Consultants
            </h3>
            
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] mb-[25px] max-w-[305px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Your trusted partner for Go-To-Market strategies, digital transformation, and business growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-[11px]">
              <div className="flex items-center gap-[12px]">
                <Mail size={16} className="text-[#4EC6C6]" />
                <a 
                  href="mailto:hello@reliqueconsultants.com"
                  className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                  style={{ fontFamily: 'Roboto' }}
                >
                  hello@reliqueconsultants.com
                </a>
              </div>
              
              <div className="flex items-center gap-[12px]">
                <Phone size={16} className="text-[#4EC6C6]" />
                <a 
                  href="tel:+1234567890"
                  className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                  style={{ fontFamily: 'Roboto' }}
                >
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="flex items-start gap-[12px]">
                <MapPin size={16} className="text-[#4EC6C6] mt-[2px]" />
                <span 
                  className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[24px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Services
            </h4>
            <div className="space-y-[16px]">
              <a 
                href="#go-to-market"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Go-to-Market Strategy
              </a>
              <a 
                href="#project-excellence"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Project Excellence
              </a>
              <a 
                href="#business-growth"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Business Growth & Retention
              </a>
              <a 
                href="#ai-innovations"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                AI Innovations
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[24px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Industries
            </h4>
            <div className="space-y-[16px]">
              <a 
                href="#bfsi"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                BFSI
              </a>
              <a 
                href="#it-tech"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                IT & Tech Services
              </a>
              <a 
                href="#retail"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Retail & E-Commerce
              </a>
              <a 
                href="#data-analytics"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Data & Analytics
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[24px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Company
            </h4>
            <div className="space-y-[16px]">
              <a 
                href="#about"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                About Us
              </a>
              <a 
                href="#careers"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Careers
              </a>
              <a 
                href="#contact"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Contact
              </a>
              <a 
                href="#blog"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Blog
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-[32px]">
              <h5 
                className="text-[#F5F5F5] font-medium text-[14px] leading-[1.43em] mb-[16px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Follow Us
              </h5>
              <div className="flex items-center gap-[16px]">
                <a 
                  href="#linkedin"
                  className="w-[32px] h-[32px] rounded-full bg-[#2E2E3E] flex items-center justify-center hover:bg-[#4EC6C6] transition-colors duration-300"
                >
                  <Linkedin size={16} className="text-[#F5F5F5]" />
                </a>
                <a 
                  href="#twitter"
                  className="w-[32px] h-[32px] rounded-full bg-[#2E2E3E] flex items-center justify-center hover:bg-[#4EC6C6] transition-colors duration-300"
                >
                  <Twitter size={16} className="text-[#F5F5F5]" />
                </a>
                <a 
                  href="#facebook"
                  className="w-[32px] h-[32px] rounded-full bg-[#2E2E3E] flex items-center justify-center hover:bg-[#4EC6C6] transition-colors duration-300"
                >
                  <Facebook size={16} className="text-[#F5F5F5]" />
                </a>
                <a 
                  href="#instagram"
                  className="w-[32px] h-[32px] rounded-full bg-[#2E2E3E] flex items-center justify-center hover:bg-[#4EC6C6] transition-colors duration-300"
                >
                  <Instagram size={16} className="text-[#F5F5F5]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-[31px] border-t border-white/20">
          <div className="flex items-center justify-between">
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em]"
              style={{ fontFamily: 'Roboto' }}
            >
              © 2025 Relique Consultants. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-[40px]">
              <a 
                href="#privacy"
                className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Privacy Policy
              </a>
              
              <a 
                href="#terms"
                className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 