import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Hero slides with different content and images
  const heroSlides = [
    {
      image: '/images/hero-background.png',
      title: 'Bridging the gap,\nBuilding the growth',
      subtitle: 'Your trusted partner in Go-To-Market strategies, digital transformation, and business growth across global markets.',
      buttonText: 'Explore Solutions'
    },
    {
      image: '/images/hero-background.png',
      title: 'Digital Transformation\nExperts',
      subtitle: 'Leading businesses through innovative technology solutions and strategic digital initiatives for sustainable growth.',
      buttonText: 'Start Your Journey'
    },
    {
      image: '/images/hero-background.png',
      title: 'Global Market\nExpansion',
      subtitle: 'Unlock new opportunities across international markets with our proven strategies and local expertise.',
      buttonText: 'Expand Globally'
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleSlideClick = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      {/* Header */}
      <header className="bg-dark px-4 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/relique-logo.png" alt="Relique" className="h-16 w-24" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="bg-primary-light text-white px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity">
              Home
            </a>
            <div className="relative group">
              <button className="text-gray-light hover:text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2">
                <span>Services</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-light hover:text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2">
                <span>Solutions & Case Studies</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <button className="text-gray-light hover:text-white px-6 py-3 rounded-full font-medium">
              About us
            </button>
            <a href="#contact" className="text-gray-light hover:text-white px-6 py-3 rounded-full font-medium">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:block">
            <button className="bg-primary text-white px-5 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Talk to an Expert
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Slider */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl mx-9 mt-6">
          <div className="relative h-[712px] flex items-center justify-center text-center">
            {/* Complete Hero Slides with Content and Background */}
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-xl opacity-20"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Slide Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="max-w-4xl mx-auto px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-medium mb-8 text-primary-dark leading-tight">
                      {slide.title.split('\\n').map((line, lineIndex) => (
                        <span key={lineIndex}>
                          {line}
                          {lineIndex < slide.title.split('\\n').length - 1 && <br />}
                        </span>
                      ))}
                    </h1>
                    <p className="text-xl font-medium mb-12 text-white max-w-2xl mx-auto leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <button className="bg-primary-light text-white px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity shadow-lg">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Interactive Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`w-3 h-3 rounded-full border border-white transition-all duration-300 hover:scale-110 cursor-pointer ${
                    index === currentSlide 
                      ? 'bg-white shadow-lg' 
                      : 'bg-transparent hover:bg-white hover:bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrow */}
            <button 
              onClick={handleNextSlide}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center group cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Our Core Expertise Section */}
      <section className="py-16 px-9">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-5xl font-medium text-gray-light mb-8 leading-tight">
                Our<br />
                Core Expertise
              </h2>
              <button className="bg-primary text-white px-5 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                View All
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Go-to-Market Strategy */}
            <div className="text-left">
              <h3 className="text-lg font-medium text-gray-light mb-4">Go-to-Market Strategy</h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                Launch and scale successfully with region-specific strategies and insights.
              </p>
            </div>
            
            {/* Project Excellence */}
            <div className="text-left">
              <h3 className="text-lg font-medium text-gray-light mb-4">Project Excellence</h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                Seamless delivery, localized engagement, and measurable outcomes.
              </p>
            </div>
            
            {/* Business Growth & Retention */}
            <div className="text-left">
              <h3 className="text-lg font-medium text-gray-light mb-4">Business Growth & Retention</h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                Build loyalty and retention frameworks that turn customers into advocates.
              </p>
            </div>
            
            {/* AI Innovations */}
            <div className="text-left">
              <h3 className="text-lg font-medium text-gray-light mb-4">AI Innovations</h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                Leverage AI-powered solutions for automation, analytics, and transformation.
              </p>
            </div>
          </div>

          {/* Visual elements with images */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <div className="rounded-xl bg-gray-300 h-56 overflow-hidden">
              <div className="h-full bg-gradient-to-br from-purple-400 to-blue-400"></div>
            </div>
            <div className="rounded-xl bg-gray-300 h-56 overflow-hidden">
              <div className="h-full bg-gradient-to-br from-green-400 to-blue-500"></div>
            </div>
            <div className="rounded-xl bg-gray-300 h-56 overflow-hidden">
              <div className="h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
            </div>
            <div className="rounded-xl bg-gray-300 h-56 overflow-hidden">
              <div className="h-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
            </div>
            <div className="rounded-xl bg-primary-dark h-56 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-80"></div>
              <div className="absolute bottom-4 right-4">
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h8l-4 4-4-4zm8 6l-4 4-4-4h8z"/>
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-gray-dark rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h8l-4 4-4-4zm8 6l-4 4-4-4h8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider lines */}
          <div className="relative mb-16">
            <div className="h-px bg-gray-dark w-full"></div>
            <div className="h-1 bg-primary-light w-1/4 absolute top-0 left-0"></div>
          </div>
        </div>
      </section>

      {/* About Relique Consultants Section */}
      <section className="py-16 px-9">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative">
            <img 
              src="/images/business-team.png" 
              alt="Business Team" 
              className="rounded-xl w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-5xl font-medium text-gray-light mb-8 leading-tight">
              About<br />
              Relique Consultants
            </h2>
            <p className="text-gray-medium text-lg mb-8 leading-relaxed">
              Comprehensive consulting solutions designed to accelerate your growth across global markets.
            </p>
            <p className="text-xl text-gray-light mb-12 leading-relaxed">
              We are a consulting and liaising company focused on delivering clarity and results across IT strategy, digital transformation, regulatory approvals, and stakeholder coordination.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary-light text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Know more
              </button>
              <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions That Drive Growth Section */}
      <section className="py-16 px-9">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-medium text-gray-light mb-6">Solutions That Drive Growth</h2>
              <p className="text-xl text-gray-medium leading-relaxed max-w-2xl">
                Explore industry-specific solutions and innovations powering transformation across sectors.
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              View All Services
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* BFSI Card */}
            <div className="bg-primary rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-4">BFSI</h3>
              <p className="text-sm text-white leading-relaxed">
                Driving digital banking excellence with core system upgrades, secure onboarding, and compliance-ready solutions.
              </p>
            </div>

            {/* IT & Tech Services Card */}
            <div className="bg-blue-500 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-4">IT & Tech Services</h3>
              <p className="text-sm text-white leading-relaxed">
                Empowering enterprises with cloud migration, DevOps, cybersecurity, and next-gen IT frameworks.
              </p>
            </div>

            {/* Retail & E-Commerce Card */}
            <div className="bg-purple-500 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-4">Retail & E-Commerce</h3>
              <p className="text-sm text-white leading-relaxed">
                Enabling smarter retail with AI-driven pricing, loyalty programs, and seamless marketplace integration.
              </p>
            </div>

            {/* Data & Analytics Card */}
            <div className="bg-cyan-500 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-4">Data & Analytics</h3>
              <p className="text-sm text-white leading-relaxed">
                Transforming data into actionable insights with BI dashboards, data lakes, and real-time analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark border-t border-gray-dark py-16 px-9">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <img src="/images/relique-logo.png" alt="Relique" className="h-16 w-24 mb-6" />
              <h3 className="text-lg font-medium text-gray-light mb-4">Relique Consultants</h3>
              <p className="text-gray-medium text-sm leading-relaxed mb-6">
                Your trusted partner for Go-To-Market strategies, digital transformation, and business growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-gray-light text-sm">contact@reliqueconsultants.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-gray-light text-sm">+91-XXXXXXXXXX</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium text-gray-light mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-medium text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Solutions & Case Studies</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-medium text-gray-light mb-6">Services</h3>
              <ul className="space-y-3 text-gray-medium text-sm">
                <li><a href="#go-to-market" className="hover:text-white transition-colors">Go-to-Market Strategy</a></li>
                <li><a href="#project-execution" className="hover:text-white transition-colors">Project Execution & Customer Success</a></li>
                <li><a href="#business-growth" className="hover:text-white transition-colors">Business Growth & Retention</a></li>
                <li><a href="#bfsi-advisory" className="hover:text-white transition-colors">BFSI & IT Advisory</a></li>
                <li><a href="#ai-innovations" className="hover:text-white transition-colors">AI Innovations</a></li>
                <li><a href="#startup-advisory" className="hover:text-white transition-colors">Startup Advisory</a></li>
              </ul>
            </div>

            {/* Contact Info Extended */}
            <div>
              <p className="text-gray-light text-sm leading-relaxed mb-6">
                Your trusted partner for Go-To-Market strategies, digital transformation,
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-3 mb-6">
                <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary-light transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary-light transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary-light transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary-light transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-medium text-sm">
                © 2025 Relique Consultants. All Rights Reserved.
              </p>
              <div className="flex space-x-8 text-gray-medium text-sm">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 