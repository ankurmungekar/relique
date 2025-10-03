import React from 'react';
import { Link } from 'react-router-dom';

interface SolutionItem {
  text: string;
}

interface SolutionCard {
  title: string;
  image: string;
  solutions: SolutionItem[];
}

const SolutionsHubPage: React.FC = () => {
  const solutionCards: SolutionCard[] = [
    {
    title: "BFSI \n(Banking, Financial \nServices & Insurance)",
    image: "/images/solutions/bfsi.png",
    solutions: [
        { text: "Core Banking Transformation & Fintech Integrations" },
        { text: "Digital Lending Platforms & Credit Scoring Models" },
        { text: "Regulatory Reporting Automation (Basel, IFRS, etc.)" },
        { text: "Fraud Detection & AML Systems (AI/ML Based)" },
        { text: "Digital Onboarding, eKYC & Customer 360 Platforms" },
        { text: "Cloud-native Banking Solutions & Open Banking APIs" },
    ],
    },
    {
      title: "IT & Tech \nServices",
      image: "/images/solutions/it-tech-services.png",
      solutions: [
        { text: "ITSM / ITIL-Based Operations Consulting" },
        { text: "DevOps as a Service & Agile Transformation" },
        { text: "Cloud Migration & Multi-cloud Orchestration" },
        { text: "AI/ML Model Deployment & MLOps Frameworks" },
        { text: "Cybersecurity Frameworks (SOC, SIEM, Zero Trust)" },
        { text: "Platform Monitoring & Observability (Grafana, Prometheus, Datadog)" },
      ],
    },
    {
      title: "Cross-Industry / \nCore Technologies",
      image: "/images/solutions/core-technologies.png",
      solutions: [
        { text: "AI & GenAI Integration Consulting (Chatbots, Copilots)" },
        { text: "RPA (Robotic Process Automation) Solutions" },
        { text: "SaaS Enablement & Productization Strategy" },
        { text: "Blockchain for Document Authentication & Smart Contracts" },
        { text: "ESG Reporting Platforms & Regulatory Tech (RegTech)" },
      ],
    },
    {
      title: "Data Warehousing \n& Analytics",
      image: "/images/solutions/data-warehousing.png",
      solutions: [
        { text: "Data Lake & Warehouse Setup (Snowflake, Redshift, BigQuery)" },
        { text: "ETL/ELT Frameworks and Data Pipeline Engineering" },
        { text: "Self-service BI & Dashboarding (Power BI, Tableau, Looker)" },
        { text: "Data Governance, performance tuning, Quality & Metadata Management" },
        { text: "Real-time Analytics with Stream Processing (Kafka, Flink)" },
      ],
    },
    {
      title: "Market Research \n& Customer \nIntelligence",
      image: "/images/solutions/market-research.png",
      solutions: [
        { text: "Survey Platforms & Voice-of-Customer Analytics" },
        { text: "Sentiment Analysis using NLP Models" },
        { text: "Market Segmentation & Persona Development Tools" },
        { text: "Data Collection Compliance (GDPR, DPDP, CCPA)" },
        { text: "Dashboarding & Insight Generation Automation" },
      ],
    },
    {
      title: "Retail &\nProptech",
      image: "/images/solutions/retail-proptech.png",
      solutions: [
        { text: "Customer Analytics & Loyalty Management Solutions" },
        { text: "AI-based Pricing & Demand Forecasting Tools" },
        { text: "Marketplace Setup & ERP Integration" },
      ],
    },
  ];

  const renderBulletIcon = () => (
    <img 
      src="/images/icons/bullet.svg" 
      alt="" 
      className="w-[8px] h-[8px] flex-shrink-0"
    />
  );

  return (
    <div className="SolutionsHubPage bg-[#0F071D] min-h-screen mt-[88px]">
      {/* Hero Banner Section */}
      <section className="relative bg-[#0F071D] h-[300px] overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/solutions-banner.jpg)'
          }}
        />

        {/* Banner Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-[120px] h-full flex flex-col items-center justify-center">
          {/* Solutions Catalog */}
          <h1 
            className="text-[#F5F5F5] font-black text-[48px] leading-[1.33em] text-center mb-[14px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Solutions Catalog
          </h1>
          
          {/* Description */}
          <p 
            className="text-white font-normal text-[20px] leading-[1.6em] text-center max-w-[585px] mb-[27px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Explore our partner-led products & offerings across industries
          </p>

          {/* Talk to Us Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-[20px] py-[12px] bg-[#4EC6C6] text-[#0F071D] font-medium text-[16px] leading-[1.5em] rounded-full hover:bg-[#3DB5B5] transition-all duration-300 shadow-lg hover:shadow-xl outline-none focus:outline-none"
            style={{ 
              fontFamily: 'Roboto', 
              letterSpacing: '-1.25%'
            }}
          >
            Talk to Us
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[120px] mb-[60px]">
          <div className="grid grid-cols-3 gap-[20px]">
            {solutionCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#1B1328] rounded-[16px] overflow-hidden flex flex-col h-[480px]"
              >
                {/* Card Image */}
                <div className="relative h-[195px] overflow-hidden rounded-t-[8px] m-[20px] mb-[0px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-t-[8px]"
                  />
                  {/* Gradient Overlay for some cards */}
                  {(index === 2 || index === 4) && (
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: index === 2 
                          ? 'linear-gradient(90deg, rgba(0, 12, 19, 1) 7%, rgba(0, 44, 57, 0) 60%)'
                          : 'linear-gradient(180deg, rgba(0, 12, 19, 1) 13%, rgba(0, 44, 57, 0) 100%)'
                      }}
                    />
                  )}
                  {/* Title Overlay */}
                  <div className="absolute top-[24px] left-[24px] z-10">
                    <h3
                      className="text-[#F5F5F5] font-medium text-[20px] leading-[1.2em] whitespace-pre-line"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Solutions List */}
                <div className="flex-1 px-[20px] py-[20px] flex flex-col gap-[10px] overflow-y-auto">
                  {card.solutions.map((solution, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-[4px]"
                    >
                      <div className="flex-shrink-0 mt-[6px]">
                        {renderBulletIcon()}
                      </div>
                      <p
                        className="text-[#B0B0B0] font-normal text-[14px] leading-[1.43em] flex-1"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {solution.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsHubPage;

