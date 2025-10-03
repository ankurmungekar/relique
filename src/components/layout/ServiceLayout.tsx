import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children, title, description }) => {
  const location = useLocation();

  const services = [
    { path: '/services/go-to-market-strategy', label: 'Go-to-Market Strategy' },
    { path: '/services/startup-advisory', label: 'Startup Advisory' },
    { path: '/services/bfsi-it-advisory', label: 'BFSI & IT Advisory' },
    { path: '/services/ai-innovations', label: 'AI Innovations' },
    { path: '/services/project-execution', label: 'Project Execution and Customer Success' },
    { path: '/services/business-growth', label: 'Business Growth & Retention' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="ServiceLayout mt-[88px] mb-[60px]">
      {/* Hero Banner Section */}
      <section className="relative bg-[#0F071D] h-[300px] overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/services-banner.jpg)'
          }}
        />

        {/* Banner Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-[120px] h-full flex flex-col items-center justify-center">
          {/* Our Expertise */}
          <h1 
            className="text-[#F5F5F5] font-black text-[48px] leading-[1.33em] text-center mb-[14px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Our Expertise
          </h1>
          
          {/* Description */}
          <p 
            className="text-white font-normal text-[20px] leading-[1.6em] text-center max-w-[585px] mb-[27px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Driving growth, innovation, and customer success across industries and regions
          </p>

          {/* Talk to Us Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#4EC6C6] text-[#0F071D] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#3DB5B5] transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ 
              fontFamily: 'Roboto', 
              letterSpacing: '-1.25%'
            }}
          >
            Talk to Us
          </Link>
        </div>
      </section>

      {/* Main Content with Sidenav */}
      <section className="bg-[#0F071D] py-[30px]">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="flex gap-[40px]">
            {/* Side Navigation */}
            <aside className="w-[285px] flex-shrink-0">
              <h2 
                className="text-[#F5F5F5] font-black text-[32px] leading-[2em] mb-[16px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Services
              </h2>
              <nav className="space-y-[16px]">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`block px-[22px] py-[18px] rounded-[4px] font-normal text-[16px] leading-[1.5em] transition-all duration-300 ${
                      isActive(service.path)
                        ? 'bg-[rgba(123,78,255,0.2)] border border-[rgba(123,78,255,0.5)] text-[#F5F5F5] font-medium shadow-[0_0_8px_2px_rgba(123,78,255,0.2)]'
                        : 'bg-[#1B1328] text-[#B0B0B0] hover:bg-[rgba(123,78,255,0.1)] hover:text-[#F5F5F5]'
                    }`}
                    style={{ fontFamily: 'Roboto' }}
                  >
                    {service.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 mt-[80px]">
              {/* Page Title and Description */}
              <div className="mb-[24px]">
                <h2 
                  className="text-[#F5F5F5] font-normal text-[32px] leading-[0.75em] mb-[15px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  {title}
                </h2>
                <p 
                  className="text-[#F5F5F5] font-normal text-[16px] leading-[1.75em] max-w-[793px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  {description}
                </p>
              </div>

              {/* Page Specific Content */}
              {children}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;

