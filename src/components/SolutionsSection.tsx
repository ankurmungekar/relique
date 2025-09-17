import React from 'react';
import { motion } from 'framer-motion';

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
      image: '/images/solutions/bfsi.webp',
      bgColor: '#7B4EFF',
      iconColor: '#FFFFFF'
    },
    {
      id: '2',
      title: 'IT & Tech Services',
      description: 'Empowering enterprises with cloud migration, DevOps, cybersecurity, and next-gen IT frameworks.',
      image: '/images/solutions/it-tech.webp',
      bgColor: '#6D75ED',
      iconColor: '#FFFFFF'
    },
    {
      id: '3',
      title: 'Retail & E-Commerce',
      description: 'Enabling smarter retail with AI-driven pricing, loyalty programs, and seamless marketplace integration.',
      image: '/images/solutions/retail.webp',
      bgColor: '#5E9BDB',
      iconColor: '#FFFFFF'
    },
    {
      id: '4',
      title: 'Data & Analytics',
      description: 'Transforming data into actionable insights with BI dashboards, data lakes, and real-time analytics.',
      image: '/images/solutions/data-analytics.webp',
      bgColor: '#54B6CD',
      iconColor: '#FFFFFF'
    }
  ];

  return (
    <section className="bg-[#0F071D] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        {/* Section Header */}
        <div className="mb-[70px]">
          <motion.h2 
            className="text-[#F5F5F5] font-medium text-[40px] leading-[1.35em] mb-[16px] max-w-[504px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Roboto' }}
          >
            Solutions That Drive Growth
          </motion.h2>
          
          <motion.p 
            className="text-[#B0B0B0] font-normal text-[20px] leading-[1.6em] mb-[32px] max-w-[590px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Roboto' }}
          >
            Explore industry-specific solutions and innovations powering transformation across sectors.
          </motion.p>

          <motion.a
            href="#view-all-services"
            className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#7B4EFF] text-[#F5F5F5] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#6A42E6] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
            View All Services
          </motion.a>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-4 gap-[20px]">
          {solutionsData.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="rounded-[16px] h-[264px] p-[30px] flex flex-col justify-end relative overflow-hidden"
                style={{ backgroundColor: solution.bgColor }}
              >
                {/* Background Pattern/Image */}
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={solution.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Icon Circle */}
                <div className="absolute top-[38px] left-[30px] w-[80px] h-[80px] bg-[#0F071D] rounded-full flex items-center justify-center">
                  {/* SVG icons would go here based on the solution type */}
                  <div className="w-[36px] h-[36px] bg-white rounded opacity-80"></div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection; 