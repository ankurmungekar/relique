import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui';

const TermsOfServicePage: React.FC = () => {
  const renderBulletIcon = () => (
    <img 
      src="/images/icons/bullet.svg" 
      alt="" 
      className="w-[8px] h-[8px] flex-shrink-0 mt-[6px]"
    />
  );

  const renderArrowIcon = () => (
    <img 
      src="/images/icons/arrow-right.svg" 
      alt="" 
      className="w-[12px] h-[12px] flex-shrink-0"
    />
  );

  const otherApplicableTerms = [
    "Our Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our site, you consent to such processing and you warrant that all data provided by you is accurate.",
    "Our Cookie Policy, which sets out information about the cookies on our site."
  ];

  const linkingToOurSite = [
    "You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.",
    "You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.",
    "You must not establish a link to our site in any website that is not owned by you.",
    "Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page.",
    "We reserve the right to withdraw linking permission without notice."
  ];

  const liabilityItems = [
    "Use of, or inability to use, our site; or",
    "Use of or reliance on any content displayed on our site.",
    "Loss of profits, sales, business, or revenue;",
    "Business interruption;",
    "Loss of anticipated savings;",
    "Loss of business opportunity, goodwill or reputation; or",
    "Any indirect or consequential loss or damage."
  ];

  return (
    <>
      <SEO
        title="Terms and Conditions - Relique Consultants"
        description="Read our terms of service outlining the rules and regulations for using our website and services. Learn about your rights and responsibilities."
        canonical="/terms-of-service"
      />
      <div className="TermsOfServicePage bg-[#0F071D] min-h-screen mt-[60px] md:mt-[72px] lg:mt-[88px]">
      {/* Hero Banner Section */}
      <section className="relative bg-[#010507] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: 'url(/images/terms-banner.jpg)'
          }}
        />

        {/* Banner Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[36px] lg:px-[222px] h-full flex flex-col justify-center">
          {/* Terms and Conditions Title */}
          <h1 
            className="text-[#F5F5F5] font-black text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.33em] mb-[10px] md:mb-[14px]"
            style={{ 
              fontFamily: 'Roboto',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Terms and Conditions
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
          
          {/* Terms of website use */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em] mb-[16px]" style={{ fontFamily: 'Roboto' }}>
              Terms of website use
            </h2>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[16px]" style={{ fontFamily: 'Roboto' }}>
              This terms of use (together with the documents referred to in it) tells you the terms of use on which you may make use of our website <a href="https://www.reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors" target="_blank" rel="noopener noreferrer">www.reliqueconsultants.com</a> ("our site"), whether as a guest or a registered user. Use of our site includes accessing, browsing, or registering to use our site.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[16px]" style={{ fontFamily: 'Roboto' }}>
              Please read these terms of use carefully before you start to use our site, as these will apply to your use of our site. We recommend that you print a copy of this for future reference.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              By using our site, you confirm that you accept these terms of use and that you agree to comply with them. If you do not agree to these terms of use, you must not use our site.
            </p>
          </div>

          {/* Other applicable terms */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Other applicable terms
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[16px]" style={{ fontFamily: 'Roboto' }}>
              These terms of use refer to the following additional terms, which also apply to your use of our site:
            </p>
            <div className="flex flex-col">
              <div className="flex items-start gap-[10px] py-[10px]">
                {renderBulletIcon()}
                <p className="text-[#B0B0B0] font-normal text-[13px] md:text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                  Our <Link to="/privacy-policy" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors">Privacy Policy</Link>, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our site, you consent to such processing and you warrant that all data provided by you is accurate.
                </p>
              </div>
              <div className="flex items-start gap-[10px] py-[10px]">
                {renderBulletIcon()}
                <p className="text-[#B0B0B0] font-normal text-[13px] md:text-[14px] leading-[1.43em]" style={{ fontFamily: 'Roboto' }}>
                  Our Cookie Policy, which sets out information about the cookies on our site.
                </p>
              </div>
            </div>
          </div>

          {/* Information about us */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Information about us
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              <a href="https://www.reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors" target="_blank" rel="noopener noreferrer">www.reliqueconsultants.com</a> is a site operated by Relique consultants LLC ("We"). We are registered in Sharjah, UAE and have our registered office at Sharjah Media City, Sharjah,
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              We are a limited liability company.
            </p>
          </div>

          {/* Changes to these terms */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Changes to these terms
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              We may revise these terms of use at any time by amending this page.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Please check this page from time to time to take notice of any changes we make, as they are binding on you.
            </p>
          </div>

          {/* Changes to our site */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Changes to our site
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              We may update our site from time to time, and may change the content at any time. However, please note that any of the content on our site may be out of date at any given time, and we are under no obligation to update it.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              We do not guarantee that our site, or any content on it, will be free from errors or omissions.
            </p>
          </div>

          {/* Accessing our site */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Accessing our site
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Our site is made available free of charge.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              We do not guarantee that our site, or any content on it, will always be available or be uninterrupted. Access to our site is permitted on a temporary basis. We may suspend, withdraw, discontinue or change all or any part of our site without notice. We will not be liable to you if for any reason our site is unavailable at any time or for any period.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              You are responsible for making all arrangements necessary for you to have access to our site.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.
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

          {/* Your account and password */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Your account and password
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms of use.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              If you know or suspect that anyone other than you knows your user identification code or password, you must promptly notify us at <a href="mailto:reachus@reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors">reachus@reliqueconsultants.com</a>
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.
            </p>
          </div>

          {/* Intellectual property rights */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Intellectual property rights
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              You may print off one copy, and may download extracts, of any page(s) from our site for your personal use and you may draw the attention of others within your organisation to content posted on our site.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Our status (and that of any identified contributors) as the authors of content on our site must always be acknowledged.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              You must not use any part of the content on our site for commercial purposes without obtaining a licence to do so from us or our licensors.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.
            </p>
          </div>

          {/* No reliance on information */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                No reliance on information
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              The content on our site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up-to-date.
            </p>
          </div>

          {/* Limitation of our liability */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Limitation of our liability
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Nothing in these terms of use excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by Applicable law of United Arab Emirates.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              To the extent permitted by law, we exclude all conditions, warranties, representations or other terms which may apply to our site or any content on it, whether express or implied.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[16px]" style={{ fontFamily: 'Roboto' }}>
              We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[16px]" style={{ fontFamily: 'Roboto' }}>
              If you are a business user, please note that in particular, we will not be liable for:
            </p>
            <div className="flex flex-col mb-[16px]">
              {liabilityItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-[10px] py-[5px]">
                  {renderBulletIcon()}
                  <p className="text-[#B0B0B0] font-normal text-[13px] md:text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              If you are a consumer user, please note that we only provide our site for domestic and private use. You agree not to use our site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              We will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any content on it, or on any website linked to it.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              We assume no responsibility for the content of websites linked on our site. Such links should not be interpreted as endorsement by us of those linked websites. We will not be liable for any loss or damage that may arise from your use of them.
            </p>
          </div>

          {/* Viruses */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Viruses
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              We do not guarantee that our site will be secure or free from bugs or viruses.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              You are responsible for configuring your information technology, computer programs and platform in order to access our site. You should use your own virus protection software.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              By breaching this provision, you would commit a criminal offence under the Computer Misuse Act applicable under the laws of United Arab emirates. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.
            </p>
          </div>

          {/* Linking to our site */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Linking to our site
              </h2>
            </div>
            <div className="flex flex-col">
              {linkingToOurSite.map((item, idx) => (
                <div key={idx} className="flex items-start gap-[10px] py-[5px]">
                  {renderBulletIcon()}
                  <p className="text-[#B0B0B0] font-normal text-[13px] md:text-[14px] leading-[2.14em]" style={{ fontFamily: 'Roboto' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional note after IP rights */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              If you wish to make any use of content on our site other than that set out above, please contact <a href="mailto:reachus@reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors">reachus@reliqueconsultants.com</a>
            </p>
          </div>

          {/* Third party links and resources on our website */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Third party links and resources on our website
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              We have no control over the contents of those sites or resources.
            </p>
          </div>

          {/* Applicable law */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Applicable law
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              If you are a consumer, please note that these terms of use, its subject matter and its formation, are governed by the laws of United Arab Emirates.
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              If you are a business, these terms of use, its subject matter and its formation (and any non-contractual disputes or claims) are governed by the laws of United Arab Emirates.
            </p>
          </div>

          {/* Contact us */}
          <div className="mb-[24px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex items-center gap-[6px] mb-[12px]">
              {renderArrowIcon()}
              <h2 className="text-[#F5F5F5] font-medium text-[18px] md:text-[20px] leading-[1.2em]" style={{ fontFamily: 'Roboto' }}>
                Contact us
              </h2>
            </div>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em] mb-[8px]" style={{ fontFamily: 'Roboto' }}>
              To contact us, please email <a href="mailto:reachus@reliqueconsultants.com" className="text-[#4EC6C6] hover:text-[#3DB5B5] underline transition-colors">reachus@reliqueconsultants.com</a>
            </p>
            <p className="text-[#F5F5F5] font-normal text-[14px] md:text-[16px] leading-[1.75em]" style={{ fontFamily: 'Roboto' }}>
              Thank you for visiting our site.
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default TermsOfServicePage;

