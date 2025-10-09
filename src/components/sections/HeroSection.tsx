import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import Button from '../ui/Button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  buttonColor: string;
  titleColor: string;
  subtitleColor: string;
  backgroundImages: string[];
}

const HeroSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [swiperReady, setSwiperReady] = useState(false);

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "Bridging the gap,\nBuilding the growth",
      subtitle: "Your trusted partner in Go-To-Market strategies, digital transformation, and business growth across global markets.",
      buttonText: "Explore Solutions",
      buttonLink: "solutions",
      buttonColor: "#7B4EFF",
      titleColor: "#0F071D",
      subtitleColor: "#0F071D",
      backgroundImages: ["/images/hero-variant1-bg.jpg"]
    },
    {
      id: 2,
      title: "Your Catalyst for\nBusiness Excellence",
      subtitle: "Accelerating success across industries with proven consulting solutions.",
      buttonText: "Explore Solutions",
      buttonLink: "/solutions",
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
      buttonLink: "/solutions",
      buttonColor: "#4EC6C6",
      titleColor: "#FFFFFF",
      subtitleColor: "#FFFFFF",
      backgroundImages: ["/images/hero-variant3-bg.jpg"]
    }
  ];

  // Preload all images before showing the slider
  useEffect(() => {
    const imageUrls = heroSlides.flatMap(slide => slide.backgroundImages);
    let loadedCount = 0;

    const preloadImages = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          resolve(url);
        };
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(preloadImages)
      .then(() => {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          setImagesLoaded(true);
        }, 50);
      })
      .catch(err => {
        console.error('Error preloading images:', err);
        // Still show the slider even if some images fail to load
        setTimeout(() => {
          setImagesLoaded(true);
        }, 50);
      });
  }, []);

  return (
    <section className="w-full pt-[60px] md:pt-[72px] lg:pt-[88px] bg-[#0F071D]">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px]">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[712px] rounded-[8px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden">
          {!imagesLoaded ? (
            // Loading skeleton
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          ) : (
            <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            initialSlide={0}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: true
            }}
            pagination={{
               clickable: true,
               bulletClass: 'hero-pagination-bullet',
               bulletActiveClass: 'hero-pagination-bullet-active',
               renderBullet: function (index: number, className: string) {
                 return `<span class="${className}"></span>`;
               }
             }}
            speed={1000}
            onInit={(swiper: any) => {
              // Ensure we're on the real first slide (not a duplicate)
              swiper.slideTo(0, 0);
              setTimeout(() => {
                setSwiperReady(true);
              }, 100);
            }}
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
            className={`hero-swiper w-full h-full transition-opacity duration-500 ${swiperReady ? 'opacity-100' : 'opacity-0'}`}
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
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center lg:justify-start px-4 sm:px-8 lg:px-12 lg:pt-[50px]">
                    {/* Main Heading */}
                    <h1 
                      className="font-regular text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.125em] mb-[16px] sm:mb-[20px] md:mb-[24px] lg:mb-[27px] max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px] text-center"
                      style={{
                        textShadow: '0px 6px 6px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'Roboto',
                        color: slide.titleColor
                      }}
                    >
                      {slide.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {i === 1 ? <strong className="font-black">{line}</strong> : line}
                          {i < slide.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h1>

                    {/* Subtitle */}
                    <p 
                      className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] leading-[1.45em] mb-[20px] sm:mb-[24px] md:mb-[28px] lg:mb-[29px] max-w-[260px] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[623px] text-center"
                      style={{
                        textShadow: '0px 6px 6px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'Roboto',
                        color: slide.subtitleColor
                      }}
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA Button */}
                    <Button
                      to={slide.buttonLink}
                      variant="primary"
                      className="hover:scale-105 hover:shadow-lg text-[14px] lg:text-[16px] min-w-[140px] lg:min-w-[180px] h-[40px] lg:h-[48px]"
                      style={{
                        backgroundColor: slide.buttonColor,
                        color: slide.buttonColor === "#4EC6C6" ? "#0F071D" : "#FFFFFF",
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={() => {
                        if (swiperRef.current?.autoplay) {
                          swiperRef.current.autoplay.stop();
                        }
                      }}
                      onMouseLeave={() => {
                        if (swiperRef.current?.autoplay) {
                          swiperRef.current.autoplay.start();
                        }
                      }}
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          )}
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .loader {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-top-color: #4EC6C6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        .hero-swiper {
          --swiper-pagination-bottom: 20px;
          --swiper-pagination-bullet-width: 10px;
          --swiper-pagination-bullet-height: 10px;
          --swiper-pagination-bullet-inactive-opacity: 1;
        }
        
        @media (min-width: 768px) {
          .hero-swiper {
            --swiper-pagination-bottom: 30px;
            --swiper-pagination-bullet-width: 12px;
            --swiper-pagination-bullet-height: 12px;
          }
        }
        
        .hero-pagination-bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #FFFFFF;
          background: transparent;
          opacity: 1;
          margin: 0 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        @media (min-width: 768px) {
          .hero-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }
        
        .hero-pagination-bullet:hover {
          transform: scale(1.1);
        }
        
        .hero-pagination-bullet-active {
          background: transparent;
          border: 1px solid #FFFFFF;
        }
        
        .hero-pagination-bullet-active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 4px;
          height: 4px;
          background: #FFFFFF;
          border-radius: 50%;
        }
        
        @media (min-width: 768px) {
          .hero-pagination-bullet-active::after {
            width: 6px;
            height: 6px;
          }
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