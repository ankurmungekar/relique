import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from '../ui/icons/ChevronIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F071D] relative">
      {/* Top Border Line */}
      <div className="w-full h-[1px] bg-white opacity-20"></div>
      
      <div className="max-w-[1440px] mx-auto px-[120px] pt-[40px] pb-[31px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-[60px] mb-[30px]">
          {/* Company Info */}
          <div>
            <div className="mb-[15px]">
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[10px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Quick Links
            </h4>
            <div className="space-y-0">
              <a 
                href="/"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Home
              </a>
              <a 
                href="/services"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Services
              </a>
              <a 
                href="/solutions"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Solutions Hub
              </a>
              <a 
                href="/about"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                About Us
              </a>
              <a 
                href="/contact"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[10px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Services
            </h4>
            <div className="space-y-0">
              <a 
                href="/services/go-to-market-strategy"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Go-to-Market Strategy
              </a>
              <a 
                href="/services/project-execution"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Project Execution & Customer Success
              </a>
              <a 
                href="/services/business-growth"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Business Growth & Retention
              </a>
              <a 
                href="/services/bfsi-it-advisory"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                BFSI & IT Advisory
              </a>
              <a 
                href="/services/ai-innovations"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                AI Innovations
              </a>
              <a 
                href="/services/startup-advisory"
                className="block text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
              >
                Startup Advisory
              </a>
            </div>
          </div>

          {/* Contact Info & Social Media */}
          <div>
            {/* Contact Info */}
            <div className="space-y-[11px] mb-[19px]">
              <div className="flex items-start gap-[12px]">
                <MapPin size={16} className="text-[#FFFFFF] mt-[2px]" />
                <span 
                  className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Locate us at: SHAMS, UAE.
                </span>
              </div>
              
              <div className="flex items-center gap-[12px]">
                <Mail size={15} className="text-[#FFFFFF]" />
                <a 
                  href="mailto:reachus@reliqueconsultants.com"
                  className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                  style={{ fontFamily: 'Roboto' }}
                >
                  reachus@reliqueconsultants.com
                </a>
              </div>
              
              <div className="flex items-center gap-[12px]">
                <Phone size={16} className="text-[#FFFFFF]" />
                <a 
                  href="tel:+91XXXXXXXXXX"
                  className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em] hover:text-[#4EC6C6] transition-colors duration-300"
                  style={{ fontFamily: 'Roboto' }}
                >
                  +91-XXXXXXXXXX
                </a>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] mb-[19px] border-t border-dashed border-white/20"></div>

            {/* Social Media */}
            <div className="flex items-center gap-[12px]">
              <a 
                href="#linkedin"
                className="w-[40px] h-[40px] rounded-full border border-white/[0.13] flex items-center justify-center hover:bg-[#4EC6C6] transition-colors duration-300"
              >
                <Linkedin size={16} className="text-[#F5F5F5]" />
              </a>
              <a 
                href="#instagram"
                className="w-[40px] h-[40px] rounded-full border border-white/[0.13] flex items-center justify-center hover:bg-[#4EC6C6] transition-colors duration-300"
              >
                <Instagram size={16} className="text-[#F5F5F5]" />
              </a>
              <a 
                href="#youtube"
                className="w-[40px] h-[40px] rounded-full border border-white/[0.13] flex items-center justify-center hover:bg-[#4EC6C6] transition-colors duration-300"
              >
                <Youtube size={16} className="text-[#F5F5F5]" />
              </a>
              <a 
                href="#twitter"
                className="w-[40px] h-[40px] rounded-full border border-white/[0.13] flex items-center justify-center hover:bg-[#4EC6C6] transition-colors duration-300"
              >
                <Twitter size={16} className="text-[#F5F5F5]" />
              </a>
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