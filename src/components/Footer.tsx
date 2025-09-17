import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from './icons/ChevronIcons';

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
            
            <motion.h3 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[8px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Relique Consultants
            </motion.h3>
            
            <motion.p 
              className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] mb-[25px] max-w-[305px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Your trusted partner for Go-To-Market strategies, digital transformation, and business growth.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-[11px]">
              <div className="flex items-center gap-[10px]">
                <Mail size={15} className="text-white" />
                <span className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                  contact@reliqueconsultants.com
                </span>
              </div>
              
              <div className="flex items-center gap-[10px]">
                <Phone size={16} className="text-white" />
                <span className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                  +91-XXXXXXXXXX
                </span>
              </div>
              
              <div className="flex items-center gap-[10px]">
                <MapPin size={16} className="text-white" />
                <span className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                  Your trusted partner for Go-To-Market strategies, digital transformation, 
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[28px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Quick Links
            </h3>
            
            <ul className="space-y-[18px]">
              {['Home', 'Services', 'Solutions & Case Studies', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                    style={{ fontFamily: 'Roboto' }}
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 
              className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[28px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Services
            </h3>
            
            <ul className="space-y-[18px]">
              {[
                'Go-to-Market Strategy',
                'Project Execution & Customer Success',
                'Business Growth & Retention',
                'BFSI & IT Advisory',
                'AI Innovations',
                'Startup Advisory'
              ].map((service) => (
                <li key={service}>
                  <motion.a 
                    href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                    style={{ fontFamily: 'Roboto' }}
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Additional Contact */}
          <div>
            <div className="mb-[44px]">
              <p 
                className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em] mb-[69px] max-w-[286px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Your trusted partner for Go-To-Market strategies, digital transformation, 
              </p>

              {/* Social Media */}
              <div className="flex items-center gap-[12px]">
                {[
                  { icon: Linkedin, href: '#linkedin' },
                  { icon: Twitter, href: '#twitter' },
                  { icon: Facebook, href: '#facebook' },
                  { icon: Instagram, href: '#instagram' }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-[40px] h-[40px] rounded-full border border-white/13 flex items-center justify-center hover:bg-[#4EC6C6] hover:border-[#4EC6C6] transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent size={16} className="text-white" />
                    </motion.a>
                  );
                })}
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
              <motion.a 
                href="#privacy"
                className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
                whileHover={{ x: 3 }}
              >
                Privacy Policy
              </motion.a>
              
              <motion.a 
                href="#terms"
                className="text-[#B0B0B0] font-normal text-[14px] leading-[2.14em] hover:text-[#4EC6C6] transition-colors duration-300"
                style={{ fontFamily: 'Roboto' }}
                whileHover={{ x: 3 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 