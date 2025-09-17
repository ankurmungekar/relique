import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonColor: string;
  titleColor: string;
  subtitleColor: string;
  backgroundImages: string[];
}

const HeroSection: React.FC = () => {
  const swiperRef = useRef<any>(null);

      const heroSlides: HeroSlide[] = [
      {
        id: 1,
        title: "Bridging the gap,\nBuilding the growth",
        subtitle: "Your trusted partner in Go-To-Market strategies, digital transformation, and business growth across global markets.",
        buttonText: "Explore Solutions",
        buttonColor: "#4EC6C6",
        titleColor: "#FFFFFF",
        subtitleColor: "#FFFFFF",
        backgroundImages: ["/images/hero-variant1-bg.jpg"]
      },
      {
        id: 2,
        title: "Your Catalyst for\nBusiness Excellence",
        subtitle: "Accelerating success across industries with proven consulting solutions.",
        buttonText: "Explore Solutions",
        buttonColor: "#7B4EFF",
        titleColor: "#FFFFFF",
        subtitleColor: "#FFFFFF",
        backgroundImages: ["/images/hero-variant2-bg.jpg"]
      },
      {
        id: 3,
        title: "Where Partnerships\nCreate Possibilities",
        subtitle: "Building trust-driven alliances that deliver real impact.",
        buttonText: "Explore Solutions",
        buttonColor: "#4EC6C6",
        titleColor: "#000000",
        subtitleColor: "#000000",
        backgroundImages: ["/images/hero-variant3-bg.jpg"]
      }
    ];

  return (
    <section className="w-full pt-[88px] bg-[#0F071D]">
      <div className="max-w-[1440px] mx-auto px-[36px]">
        <div className="relative w-full h-[712px] rounded-[16px] overflow-hidden">
            <Swiper
            modules={[Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            pagination={{
               clickable: true,
               bulletClass: 'hero-pagination-bullet',
               bulletActiveClass: 'hero-pagination-bullet-active',
               renderBullet: function (index: number, className: string) {
                 return `<span class="${className}"></span>`;
               }
             }}
            speed={1000}
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
            className="hero-swiper w-full h-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={slide.backgroundImages[0]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-[50px] px-4 sm:px-8 lg:px-12">
                    {/* Main Heading */}
                    <h1 
                      className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.125em] mb-[20px] sm:mb-[24px] lg:mb-[27px] max-w-[300px] sm:max-w-[360px] lg:max-w-[440px] text-center"
                      style={{
                        textShadow: '0px 6px 6px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'Roboto',
                        color: slide.titleColor,
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p 
                      className="font-medium text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.45em] mb-[24px] sm:mb-[28px] lg:mb-[29px] max-w-[280px] sm:max-w-[480px] lg:max-w-[623px] text-center"
                      style={{
                        textShadow: '0px 6px 6px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'Roboto',
                        color: slide.subtitleColor
                      }}
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA Button */}
                    <a
                      href="#explore-solutions"
                      className="inline-flex items-center justify-center px-[16px] sm:px-[18px] lg:px-[21px] py-[10px] sm:py-[11px] lg:py-[12px] font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5em] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-[160px] sm:w-[170px] lg:w-[183px]"
                      style={{
                        fontFamily: 'Roboto',
                        letterSpacing: '-1.25%',
                        backgroundColor: slide.buttonColor,
                        color: slide.buttonColor === "#4EC6C6" ? "#0F071D" : "#FFFFFF",
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .hero-swiper {
          --swiper-pagination-bottom: 30px;
          --swiper-pagination-bullet-width: 12px;
          --swiper-pagination-bullet-height: 12px;
          --swiper-pagination-bullet-inactive-opacity: 1;
        }
        
        .hero-pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid #FFFFFF;
          background: transparent;
          opacity: 1;
          margin: 0 3px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .hero-pagination-bullet:hover {
          transform: scale(1.2);
        }
        
        .hero-pagination-bullet-active {
          background: #FFFFFF;
          transform: scale(1.1);
        }
        
        .hero-pagination-bullet-active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          background: #FFFFFF;
          border-radius: 50%;
        }
        
        .hero-swiper .swiper-slide {
          transition: opacity 1s ease-in-out;
        }
        
        .hero-swiper .swiper-pagination {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          display: flex;
          justify-content: center;
          gap: 6px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 