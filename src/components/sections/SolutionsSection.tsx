import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';

interface SolutionCard {
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  iconColor: string;
  icon?: React.ReactNode;
}

const SolutionsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const solutionsData: SolutionCard[] = [
    {
      id: '1',
      title: 'BFSI',
      description: 'Driving digital banking excellence with core system upgrades, secure onboarding, and compliance-ready solutions.',
      image: '/images/icons/bank.svg',
      bgColor: '#7B4EFF',
      iconColor: '#FFFFFF'
    },
    {
      id: '2',
      title: 'IT & Tech Services',
      description: 'Empowering enterprises with cloud migration, DevOps, cybersecurity, and next-gen IT frameworks.',
      image: '/images/icons/cloud-setting.svg',
      bgColor: '#6D75ED',
      iconColor: '#FFFFFF'
    },
    {
      id: '3',
      title: 'Retail & E-Commerce',
      description: 'Enabling smarter retail with AI-driven pricing, loyalty programs, and seamless marketplace integration.',
      image: '/images/icons/cart.svg',
      bgColor: '#5E9BDB',
      iconColor: '#FFFFFF'
    },
    {
      id: '4',
      title: 'Data & Analytics',
      description: 'Transforming data into actionable insights with BI dashboards, data lakes, and real-time analytics.',
      image: '/images/icons/data.svg',
      bgColor: '#54B6CD',
      iconColor: '#FFFFFF'
    },
    {
      id: '5',
      title: 'Startup Advisory',
      description: 'Transforming data into actionable insights with BI dashboards, data lakes, and real-time analytics.',
      image: '/images/icons/data.svg',
      bgColor: '#54B6CD',
      iconColor: '#FFFFFF'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isDragging) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === solutionsData.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isDragging, solutionsData.length]);

  // Handle mouse drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Handle mouse drag
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Handle mouse drag end
  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest card
    if (carouselRef.current) {
      const cardWidth = 320; // 300px width + 20px gap
      const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(newIndex, 0), solutionsData.length - 1));
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      const cardWidth = 320;
      const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(newIndex, 0), solutionsData.length - 1));
    }
  };

  // Update carousel position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current && !isDragging) {
      const cardWidth = 320;
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isDragging]);

  return (
    <section className="bg-[#0F071D] mb-[120px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        {/* Section Header */}
        <div className="mb-[30px] flex justify-between items-center">
          {/* Left side - Title and Description */}
          <div className="max-w-[504px]">
            <h2 
              className="text-[#F5F5F5] font-regular text-[40px] leading-[1.35em] mb-[16px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Solutions <span className='font-black'>That Drive Growth</span>
            </h2>
            
            <p 
              className="text-[#B0B0B0] font-normal text-[16px] leading-[1.75em]"
              style={{ fontFamily: 'Roboto' }}
            >
              Explore industry-specific solutions and innovations powering transformation across sectors.
            </p>
          </div>

          {/* Right side - Button */}
          <Button
            to="/services/go-to-market-strategy"
            variant="primary"
            className="w-[183px]"
            style={{
              backgroundColor: '#7B4EFF',
              color: '#F5F5F5',
              paddingRight: '21.39px'
            }}
          >
            View All Services
          </Button>
        </div>

        {/* Solutions Carousel */}
        <div className="relative pt-[8px] pb-[8px]">
          <div 
            ref={carouselRef}
            className="overflow-x-auto overflow-y-visible scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              scrollBehavior: isDragging ? 'auto' : 'smooth',
              userSelect: 'none'
            }}
          >
            <div className="flex gap-[20px] min-w-max py-[8px]">
              {solutionsData.map((solution) => (
                <div
                  key={solution.id}
                  className="group cursor-pointer flex-shrink-0 w-[300px] text-center"
                >
                  <div 
                    className="rounded-[16px] h-[264px] p-[30px] flex flex-col items-center justify-center relative overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300"
                    style={{ backgroundColor: solution.bgColor }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[80px] h-[80px] bg-[#0F071D] rounded-full flex items-center justify-center mb-[24px]">
                      {/* SVG icons would go here based on the solution type */}
                      <div className="w-[36px] h-[36px] rounded">
                        <img 
                          src={solution.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          draggable={false}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 
                        className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[12px]"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {solution.title}
                      </h3>
                      <p 
                        className="text-[#F5F5F5] font-normal text-[14px] leading-[1.43em]"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {solution.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection; 