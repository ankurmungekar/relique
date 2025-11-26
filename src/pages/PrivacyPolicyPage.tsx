import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui';

const PrivacyPolicyPage: React.FC = () => {
  const renderBulletIcon = () => (
    <img 
      src="/images/icons/bullet.svg" 
      alt="" 
      className="w-[8px] h-[8px] flex-shrink-0 mt-[10px]"
    />
  );

  const renderArrowIcon = () => (
    <img 
      src="/images/icons/arrow-right.svg" 
      alt="" 
      className="w-[12px] h-[12px] flex-shrink-0"
    />
  );

  const informationWeCollect = [
    "Contact information (such as name, email, address etc.).",
    "Billing information.",
    "Internet activity (such as pages viewed on our website).",
    "Computer/device information (such as IP address or geolocation information).",
    "Usage data from your use of our products and services (for product/service maintenance and enhancements).",
    "Professional or employment related information.",
    "Inferences drawn from the foregoing."
  ];

  const disclosureParties = [
    "Business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you.",
    "Advertisers and advertising networks that require the data to select and serve relevant adverts to you and others.",
    "Analytics and search engine providers that assist us in the improvement and optimisation of our site and/or services.",
    "Regulatory due diligence check which may involve personal data.",
    "In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.",
    "If we or substantially all of our assets are acquired by a third party, in which case personal data held by us about our customers will be one of the transferred assets.",
    "If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property, or safety of our company (including our subsidiaries, our ultimate holding company and its subsidiaries), our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction."
  ];

  const yourRights = [
    {
      title: "Right to withdraw consent",
      text: "Where we are relying on your consent to process your personal data, you can withdraw it at any time by contacting us at reachus@reliqueconsultants.com. However, there are circumstances where we can process your personal data without your consent, such as when necessary to fulfil a contractual obligation, comply with a legal requirement, or protect vital interests."
    },
    {
      title: "Right to rectification",
      text: "You can request us to rectify inaccurate or incomplete personal data, which we aim to do promptly and usually within one month unless the request is complex."
    },
    {
      title: "Right to erasure",
      text: "You have the right to request the erasure of your personal data (\"right to be forgotten\") in cases where there's no compelling reason for continued processing, though exceptions may apply, and we'll notify you accordingly (unless prevented to do so by law)."
    },
    {
      title: "Right to restrict processing",
      text: "You can request to restrict processing of your personal data in certain situations, such as when the data is inaccurate, processed unlawfully or where the data is no longer relevant to the intended purpose. In such cases, we will retain the data but refrain from further processing without your consent. Exceptions include situations where processing is necessary for legal claims, protecting rights of individuals, or public interest reasons. We'll inform you if we intend to lift the restriction on processing your personal data."
    },
    {
      title: "Right to access",
      text: "You may request access to your personal data via a subject access request. To do so, please email us at reachus@reliqueconsultants.com with our request in writing. We may ask you for proof of your identity before providing the data. Typically, there is no fee for such a request. However, in some cases, we may charge an administrative fee based on the cost of providing the information."
    },
    {
      title: "Right to object to marketing",
      text: "You have the right to request that we do not process your personal data for marketing purposes, including profiling. We will typically inform you before collecting your data if we intend to use your data for such purposes or to disclose your information to any third parties. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data. Additionally, you can also exercise this right at any time by contacting us at reachus@reliqueconsultants.com."
    },
    {
      title: "Right to data portability",
      text: "You have the right to obtain and reuse your personal data for your own purposes across different services (right to data portability). This right applies only to data that you have provided to us, where we are processing the data based on your consent or for the performance of a contract, and when the processing is carried out by automated means. If this right applies, we will provide the data in a structured, commonly used, and machine-readable format."
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy - Relique Consultants"
        description="Our privacy policy outlines how we collect, process, and protect your personal data. Learn about your rights and how we handle your information."
        canonical="/privacy-policy"
      />
      <div className="PrivacyPolicyPage bg-[#0F071D] min-h-screen mt-[60px] md:mt-[72px] lg:mt-[88px]">
      {/* Hero Banner Section */}
      <section className="relative bg-[#0F1113] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: 'url(/images/privacy-banner.jpg)'
          }}
        />

        {/* Banner Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[222px] h-full flex flex-col justify-center">
          {/* Privacy Policy Title */}
          <h1 
            className="text-[#F5F5F5] font-black text-[28px] sm:text-[36px] md:h-[42px] lg:text-[48px] leading-[1.33em] mb-[20px] md:mb-[34px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Privacy Policy
          </h1>
          
          {/* Date */}
          <p 
            className="text-white font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6em]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Date effective September 15, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-[24px] md:py-[32px] lg:py-[40px]">
        <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[222px]">
          
          {/* Introduction */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              This policy (together with our <Link to="/terms-of-service" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors">terms of use</Link> and any other referenced documents) outlines how we process any personal data collected from you or provided by you to us. It pertains solely to the personal data of our clients and does not extend to any personal data of your customers, which may be processed using our services; in such cases, we act as the data processor operating under your instructions. The terms 'Relique', 'we,' and 'us' refer to Relique consultants LLC.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Please carefully review the following to understand our perspectives and regarding your personal data and how we handle it. By visiting <a href="https://www.reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors" target="_blank" rel="noopener noreferrer">www.reliqueconsultants.com</a> or using any of our products or services you are accepting and consenting to the practices described in this Privacy Policy. Your continued use of our site <a href="https://www.reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors" target="_blank" rel="noopener noreferrer">www.reliqueconsultants.com</a> (our site) and/or our products and services constitute your consent to the contents of this Privacy Policy.
            </p>
          </div>

          {/* Information we may collect from you */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Information we may collect from you
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[16px]" style={{ fontFamily: 'Roboto' }}>
              We may collect and process the following data about you:
            </p>
            <div className="flex flex-col">
              {informationWeCollect.map((item, idx) => (
                <div key={idx} className="flex items-start gap-[10px] py-[5px]">
                  {renderBulletIcon()}
                  <p className="text-[#B0B0B0] font-normal text-[13px] md:text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Information you give us */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Information you give us
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              You may provide us information about you by filling in forms on our site or by communicating with us via phone, e-mail or other means. This includes information you provide when registering to use our site, subscribing to our services, searching for a product or service, participating in discussion boards or other social media functions on our site, entering a competition, promotion, or survey, submitting contact details, a job application, or signing up for email newsletters, as well as when reporting a problem with our site. The information you give us may include your name, address, e-mail address and phone number, financial and credit card information, personal description and photograph, and your consent to being tracked.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mt-[16px]" style={{ fontFamily: 'Roboto' }}>
              If You fail to provide the personal data necessary for us to provide the service, we may not be able to fulfil our contractual obligations. You are responsible for ensuring that the personal data you provide to us is accurate and up to date.
            </p>
          </div>

          {/* Information we collect about you */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Information we collect about you
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              With regard to each of your visits to our site or usage of our products and services, we may automatically collect the following information:
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform;
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Information about your visit or usage, including but not limited to the full Uniform Resource Locators (URL) clickstream to, through and from our site (including date and time); products and services you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page, and any phone number used to call our customer service number.
            </p>
          </div>

          {/* Information we receive from other sources */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Information we receive from other sources
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              We may obtain personal data about you from various third parties and public sources as outlined below. If you use any of our other websites or services, we may receive information about you. When collecting such data, we will have notified you that it may be shared internally and combined with data collected on this site. Additionally, we collaborate closely with third parties such as business partners, sub-contractors providing technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies, from whom we may receive information about you.
            </p>
          </div>

          {/* Disclosure of your information */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Disclosure of your information
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[16px]" style={{ fontFamily: 'Roboto' }}>
              We may disclose your personal information to any member of our group, which includes our subsidiaries.
            </p>
            <p className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[12px]" style={{ fontFamily: 'Roboto' }}>
              We may share your information with selected third parties including:
            </p>
            <div className="flex flex-col">
              {disclosureParties.map((item, idx) => (
                <div key={idx} className="flex items-start gap-[10px] py-[5px]">
                  {renderBulletIcon()}
                  <p className="text-[#B0B0B0] font-normal text-[13px] md:text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Your rights */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Your rights
              </h2>
            </div>
            <div className="flex flex-col">
              {yourRights.map((right, idx) => (
                <div key={idx} className="flex items-start gap-[10px] py-[5px]">
                  {renderBulletIcon()}
                  <p className="text-[#B0B0B0] font-normal text-[13px] md:text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                    {right.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Links to other websites */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Our site, products and services may occasionally include links to and from the websites of our partner networks, advertisers and affiliates. Please note that these websites have their own privacy policies, and we do not accept any responsibility or liability for them. Before submitting any personal data to these websites, please review their respective privacy policies.
            </p>
          </div>

          {/* Changes to our Privacy Policy */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Changes to our Privacy Policy
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Any future changes to our privacy policy will be posted on this page. We encourage you to check back regularly for updates or revisions to our privacy policy.
            </p>
          </div>

          {/* Contact and complaints */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Contact and complaints
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to <a href="mailto:reachus@reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors">reachus@reliqueconsultants.com</a>
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              If you have any concerns about the processing of your personal data, we encourage you to contact us first at <a href="mailto:reachus@reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors">reachus@reliqueconsultants.com</a>
            </p>
          </div>

        </div>
      </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;

