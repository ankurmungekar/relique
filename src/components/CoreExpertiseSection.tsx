import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from './icons/ChevronIcons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const CoreExpertiseSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(4);
  
  const expertiseData: ExpertiseCard[] = [
    {
      id: '1',
      title: 'Go-to-Market Strategy',
      description: 'Launch and scale successfully with region-specific strategies and insights.',
      image: '/images/business-team-meeting.webp'
    },
    {
      id: '2',
      title: 'Project Excellence',
      description: 'Seamless delivery, localized engagement, and measurable outcomes.',
      image: '/images/hero-variant1-bg.jpg'
    },
    {
      id: '3',
      title: 'Business Growth & Retention',
      description: 'Build loyalty and retention frameworks that turn customers into advocates.',
      image: '/images/hero-variant2-bg.jpg'
    },
    {
      id: '4',
      title: 'AI Innovations',
      description: 'Leverage AI-powered solutions for automation, analytics, and transformation.',
      image: '/images/hero-variant3-bg.jpg'
    }
  ];

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Calculate progress percentage
  // With 4 slides and 3 visible: positions are 0 (shows 0,1,2) and 1 (shows 1,2,3)
  // So we have 2 total positions (0 and 1), making maxSlideIndex = 1
  const slidesPerViewCount = 3; // Desktop shows 3 slides
  const maxSlideIndex = Math.max(0, totalSlides - slidesPerViewCount);
  const progressPercentage = maxSlideIndex > 0 ? (currentSlide / maxSlideIndex) * 100 : 100;

  return (
    <section className="bg-[#0F071D] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        {/* Main Content Row */}
        <div className="flex items-start gap-[67px] overflow-hidden">
          {/* Left Section - Title and Button */}
          <div className="flex-shrink-0 w-[386px]">
            <h2 
              className="text-[#F5F5F5] font-medium text-[48px] leading-[1.125em] mb-[36px] max-w-[319px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Our
              <br />
              <span className='font-medium'>Core Expertise</span>
            </h2>
            <div className='text-[#B0B0B0] font-normal text-[16px] leading-[1.5em] mb-[36px]'>Comprehensive consulting solutions designed to accelerate your growth across global markets.</div>
            <a
              href="#view-all"
              className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#6A42E6] transition-all duration-300"
              style={{
                fontFamily: 'Roboto',
                letterSpacing: '-1.25%'
              }}
            >
              View All
            </a>
          </div>

          {/* Right Section - Carousel and Navigation */}
          <div className="flex-1 min-w-0 overflow-hidden">
            {/* Expertise Cards Carousel */}
            <div className="relative mb-[24px] w-full overflow-hidden">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={1}
                loop={false}
                speed={600}
                onSwiper={(swiper: any) => {
                  swiperRef.current = swiper;
                  setTotalSlides(expertiseData.length);
                }}
                onSlideChange={(swiper: any) => {
                  setCurrentSlide(swiper.activeIndex);
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="expertise-swiper"
                style={{ minHeight: '300px', overflow: 'hidden' }}
              >
                {expertiseData.map((card, index) => (
                  <SwiperSlide key={card.id}>
                    <div className="group cursor-pointer w-[220px] flex-shrink-0 mx-auto">
                      {/* Card Image */}
                      <div className="w-[220px] h-[220px] bg-[#D9D9D9] rounded-[16px] overflow-hidden mb-[24px] relative mx-auto flex-shrink-0">
                        <img 
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="text-left w-[220px] mx-auto">
                        <h3 
                          className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[8px]"
                          style={{ fontFamily: 'Roboto' }}
                        >
                          {card.title}
                        </h3>
                        <p 
                          className="text-[#B0B0B0] font-normal text-[14px] leading-[1.4285714285714286em]"
                          style={{ fontFamily: 'Roboto' }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation and Progress Section */}
            <div className="flex items-center justify-between">
              {/* Navigation Buttons */}
              <div className="flex items-center gap-[20px]">
                <button
                  onClick={handlePrevSlide}
                  className="w-[52px] h-[52px] rounded-full bg-[#2E2E3E] flex items-center justify-center hover:bg-[#4EC6C6] transition-all duration-300"
                >
                  <ChevronLeft size={24} className="text-[#F5F5F5]" />
                </button>

                <button
                  onClick={handleNextSlide}
                  className="w-[52px] h-[52px] rounded-full bg-[#4EC6C6] flex items-center justify-center hover:bg-[#42B8B8] transition-all duration-300"
                >
                  <ChevronRight size={24} className="text-[#0F071D]" />
                </button>
              </div>

              {/* Progress Lines */}
              <div className="flex items-center relative">
                {/* Background line */}
                <div className="w-[635px] h-[1px] bg-[#2E2E3E]"></div>
                {/* Progress line */}
                <div 
                  className="absolute left-0 h-[3px] bg-[#4EC6C6] transition-all duration-300"
                  style={{ width: `${Math.min(214, (214 * progressPercentage) / 100)}px` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .expertise-swiper {
          padding-bottom: 20px;
        }
        
        .expertise-swiper .swiper-slide {
          height: auto;
        }

        .expertise-swiper .swiper-wrapper {
          align-items: stretch;
        }

        /* Hide default Swiper navigation */
        .expertise-swiper .swiper-button-next,
        .expertise-swiper .swiper-button-prev {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CoreExpertiseSection; 