import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from '../ui/icons/ChevronIcons';
import Button from '../ui/Button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const CoreExpertiseSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(4);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  
  const expertiseData: ExpertiseCard[] = [
    {
      id: '1',
      title: 'Go-to-Market Strategy',
      description: 'Launch and scale successfully with region-specific strategies and insights.',
      image: '/images/go-to-marketplace.png',
      link: '/services/go-to-market-strategy'
    },
    {
      id: '2',
      title: 'Startup Advisory',
      description: 'Empowering startups with strategic guidance and scalable growth frameworks.',
      image: '/images/startup-advisory.png',
      link: '/services/startup-advisory'
    },
    {
      id: '3',
      title: 'BFSI & IT Advisory',
      description: 'Driving transformation through regulatory expertise and digital innovation.',
      image: '/images/bfsi-it-advisory.png',
      link: '/services/bfsi-it-advisory'
    },
    {
      id: '4',
      title: 'AI Innovations',
      description: 'Leverage AI-powered solutions for automation, analytics, and transformation.',
      image: '/images/ai-innovations.png',
      link: '/services/ai-innovations'
    },
    {
      id: '5',
      title: 'Project Excellence',
      description: 'Seamless delivery, localized engagement, and measurable outcomes.',
      image: '/images/project-excellence.png',
      link: '/services/project-excellence'
    },
    {
      id: '6',
      title: 'Business Growth & Retention',
      description: 'Build loyalty and retention frameworks that turn customers into advocates.',
      image: '/images/business-growth.png',
      link: '/services/business-growth-retention'
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
  // Force 100% when at the end to ensure last item visibility shows full progress
  const progressPercentage = isEnd ? 100 : (maxSlideIndex > 0 ? (currentSlide / maxSlideIndex) * 100 : 100);

  return (
    <section className="bg-[#0F071D] my-[60px] md:my-[100px] lg:my-[150px]">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-[32px] md:gap-[48px] lg:gap-[67px] overflow-hidden">
          {/* Left Section - Title and Button */}
          <div className="flex-shrink-0 w-full lg:w-[386px]">
            <h2 
              className="text-[#F5F5F5] font-regular text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.125em] mb-[16px] md:mb-[24px] max-w-full lg:max-w-[319px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Our
              <br />
              <span className='font-black'>Core Expertise</span>
            </h2>
            <div className='text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.5em] mb-[24px] md:mb-[36px]'>Comprehensive consulting solutions designed to accelerate your growth across global markets.</div>
            <Button
              to="/services/go-to-market-strategy"
              variant="primary"
              className="w-full sm:w-[183px]"
              style={{
                paddingRight: '21.39px',
                backgroundColor: '#7B4EFF',
                color: '#F5F5F5'
              }}
            >
              View All
            </Button>
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
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper: any) => {
                  setCurrentSlide(swiper.activeIndex);
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
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
                    <Link to={card.link} className="group flex-shrink-0 mx-auto block">
                      {/* Card Image */}
                      <div className="overflow-hidden mb-[24px] relative mx-auto flex-shrink-0 rounded-[16px]">
                        <img 
                          src={card.image}
                          alt={card.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="text-left mx-auto">
                        <h3 
                          className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[8px] group-hover:text-[#4EC6C6] transition-colors duration-300"
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
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation and Progress Section */}
            <div className="flex items-center justify-between">
              {/* Navigation Buttons */}
              <div className="hidden lg:flex items-center gap-[20px] mr-[30px]">
                <button
                  onClick={handlePrevSlide}
                  disabled={isBeginning}
                  className={`w-[52px] h-[52px] rounded-full bg-[#2E2E3E] flex items-center justify-center transition-all duration-300 focus:outline-none ${
                    isBeginning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4EC6C6] cursor-pointer'
                  }`}
                >
                  <ChevronLeft size={24} className="text-[#F5F5F5]" />
                </button>

                <button
                  onClick={handleNextSlide}
                  disabled={isEnd}
                  className={`w-[52px] h-[52px] rounded-full bg-[#4EC6C6] flex items-center justify-center transition-all duration-300 focus:outline-none ${
                    isEnd ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#42B8B8] cursor-pointer'
                  }`}
                >
                  <ChevronRight size={24} className="text-[#0F071D]" />
                </button>
              </div>

              {/* Progress Lines */}
              <div className="hidden lg:flex items-center relative flex-1">
                {/* Background line */}
                <div className="w-full h-[1px] bg-[#2E2E3E]"></div>
                {/* Progress line */}
                <div 
                  className="absolute left-0 h-[3px] bg-[#4EC6C6] transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
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