import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Button from '../ui/Button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      title: 'Cross-Industry/Core Technologies',
      description: 'Driving innovation with AI, cloud, and automation to accelerate transformation across sectors.',
      image: '/images/icons/bulb.svg',
      bgColor: '#5E9BDB',
      iconColor: '#FFFFFF'
    },
    {
      id: '4',
      title: 'Data Warehousing & Analytics',
      description: 'Transforming data into actionable insights with BI dashboards, data lakes, and real-time analytics.',
      image: '/images/icons/data.svg',
      bgColor: '#54B6CD',
      iconColor: '#FFFFFF'
    },
    {
      id: '5',
      title: 'Market Research & Customer Intelligence',
      description: 'Delivering data-driven insights and customer analysis for smarter business decisions.',
      image: '/images/icons/data.svg',
      bgColor: '#7B4EFF',
      iconColor: '#FFFFFF'
    },
    {
      id: '6',
      title: 'Retail & E-Commerce',
      description: 'Enabling smarter retail with AI-driven pricing, loyalty programs, and seamless marketplace integration.',
      image: '/images/icons/cart.svg',
      bgColor: '#6D75ED',
      iconColor: '#FFFFFF'
    },
  ];

  return (
    <section className="bg-[#0F071D] mb-[60px] md:mb-[90px] lg:mb-[120px]">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[120px]">
        {/* Section Header */}
        <div className="mb-[24px] md:mb-[30px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[20px] lg:gap-[40px]">
          {/* Left side - Title and Description */}
          <div className="max-w-full lg:max-w-[504px]">
            <h2 
              className="text-[#F5F5F5] font-regular text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.35em] mb-[12px] md:mb-[16px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Solutions <span className='font-black'>That Drive Growth</span>
            </h2>
            
            <p 
              className="text-[#B0B0B0] font-normal text-[14px] md:text-[16px] leading-[1.75em]"
              style={{ fontFamily: 'Roboto' }}
            >
              Explore industry-specific solutions and innovations powering transformation across sectors.
            </p>
          </div>

          {/* Right side - Button */}
          <Button
            to="/services/go-to-market-strategy"
            variant="primary"
            className="w-full sm:w-[183px]"
            style={{
              backgroundColor: '#7B4EFF',
              color: '#F5F5F5',
              paddingRight: '21.39px'
            }}
          >
            Know More
          </Button>
        </div>

        {/* Solutions Carousel */}
        <div className="relative pt-[8px] pb-[8px]">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={600}
            grabCursor={true}
            className="solutions-swiper"
          >
            {solutionsData.map((solution) => (
              <SwiperSlide
                key={solution.id}
                className="!w-[260px] sm:!w-[280px] lg:!w-[300px]"
              >
                <div className="group cursor-pointer text-center py-[8px]">
                  <div 
                    className="rounded-[12px] md:rounded-[16px] h-[240px] sm:h-[252px] lg:h-[264px] p-[20px] sm:p-[28px] lg:p-[20px] flex flex-col items-center justify-center relative overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300"
                    style={{ backgroundColor: solution.bgColor }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[70px] h-[70px] bg-[#0F071D] rounded-full flex items-center justify-center mb-[20px] lg:mb-[24px]">
                      <div className="w-[32px] h-[32px] lg:w-[36px] lg:h-[36px] rounded">
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
                        className="text-[#F5F5F5] font-medium text-[15px] lg:text-[16px] leading-[1.25em] mb-[10px] lg:mb-[12px]"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {solution.title}
                      </h3>
                      <p 
                        className="text-[#F5F5F5] font-normal text-[13px] lg:text-[14px] leading-[1.43em]"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {solution.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection; 