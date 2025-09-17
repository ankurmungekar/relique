import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from './icons/ChevronIcons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  titleColor: string;
  descColor: string;
}

const CoreExpertiseSection: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const expertiseData: ExpertiseCard[] = [
    {
      id: '1',
      title: 'Go-to-Market Strategy',
      description: 'Launch and scale successfully with region-specific strategies and insights.',
      image: '/images/expertise/go-to-market.webp',
      bgColor: '#D9D9D9',
      titleColor: '#F5F5F5',
      descColor: '#B0B0B0'
    },
    {
      id: '2',
      title: 'Project Excellence',
      description: 'Seamless delivery, localized engagement, and measurable outcomes.',
      image: '/images/expertise/project-excellence.webp',
      bgColor: '#D9D9D9',
      titleColor: '#F5F5F5',
      descColor: '#B0B0B0'
    },
    {
      id: '3',
      title: 'Business Growth & Retention',
      description: 'Build loyalty and retention frameworks that turn customers into advocates.',
      image: '/images/expertise/business-growth.webp',
      bgColor: '#D9D9D9',
      titleColor: '#F5F5F5',
      descColor: '#B0B0B0'
    },
    {
      id: '4',
      title: 'AI Innovations',
      description: 'Leverage AI-powered solutions for automation, analytics, and transformation.',
      image: '/images/expertise/ai-innovations.webp',
      bgColor: '#D9D9D9',
      titleColor: '#F5F5F5',
      descColor: '#B0B0B0'
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

  return (
    <section className="bg-[#0F071D] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-[67px]">
          <div>
            <motion.h2 
              className="text-[#F5F5F5] font-medium text-[48px] leading-[1.125em] mb-[36px] max-w-[319px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'Roboto' }}
            >
              Our
              <br />
              <span className='font-bold'>Core Expertise</span>
            </motion.h2>
            
            <motion.a
              href="#view-all"
              className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#6A42E6] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#6A42E6",
                boxShadow: "0px 4px 12px rgba(123, 78, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: 'Roboto',
                letterSpacing: '-1.25%'
              }}
            >
              View All
            </motion.a>
          </div>

          {/* Custom Navigation */}
          <div className="flex items-center gap-[20px]">
            {/* Progress Lines */}
            <div className="flex items-center gap-[421px]">
              <div className="w-[214px] h-[3px] bg-[#4EC6C6]"></div>
              <div className="w-[635px] h-[1px] bg-[#2E2E3E]"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-[20px]">
              <motion.button
                onClick={handlePrevSlide}
                className="w-[52px] h-[52px] rounded-full bg-[#2E2E3E] flex items-center justify-center hover:bg-[#4EC6C6] transition-all duration-300"
                whileHover={{ scale: 1.1, backgroundColor: "#4EC6C6" }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={24} className="text-[#F5F5F5]" />
              </motion.button>

              <motion.button
                onClick={handleNextSlide}
                className="w-[52px] h-[52px] rounded-full bg-[#4EC6C6] flex items-center justify-center hover:bg-[#42B8B8] transition-all duration-300"
                whileHover={{ scale: 1.1, backgroundColor: "#42B8B8" }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={24} className="text-[#0F071D]" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Expertise Cards Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
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
          >
            {expertiseData.map((card, index) => (
              <SwiperSlide key={card.id}>
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#D9D9D9] rounded-[16px] overflow-hidden h-[220px] mb-[24px] relative">
                    <img 
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="text-center px-[30px]">
                    <h3 
                      className="text-[#F5F5F5] font-medium text-[16px] leading-[1.25em] mb-[8px]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .expertise-swiper {
          padding-bottom: 20px;
        }
        
        .expertise-swiper .swiper-slide {
          height: auto;
        }

        .expertise-swiper .swiper-pagination {
          bottom: 0;
        }

        .expertise-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #2E2E3E;
          border: 1px solid #F5F5F5;
          opacity: 1;
        }

        .expertise-swiper .swiper-pagination-bullet-active {
          background: #4EC6C6;
          border-color: #4EC6C6;
        }
      `}</style>
    </section>
  );
};

export default CoreExpertiseSection; 