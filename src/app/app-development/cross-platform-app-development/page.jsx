export const metadata = {
  title: "Cross Platform App Development Services for Every Device",
  description:
    "We offer cross platform app development services that save time and cost—build once, launch everywhere with smooth performance across iOS, Android, and the web.",
};
import React from "react";
import PageLayout from "@/components/PageLayout";
import AndroidAppBanner from "@/components/AndroidAppBanner/AndroidAppBanner";
import FeaturedBrands from "@/components/PortfolioComp/FeaturedBrands/FeaturedBrands";
import AndroidServices from "@/components/AndroidServices/AndroidServices";
import AndroidProgress from "@/components/AndroidProgress/AndroidProgress";
import AwardsSec from "@/components/AwardsSec/AwardsSec";
import DiscussCta from "@/components/DiscussCta/DiscussCta";
import Testimonials from "@/components/Testimonials/Testimonials";
import CategoryService from "@/components/CategoryService/CategoryService";
import FAQSection from "@/components/AboutComp/FaqSec/FaqSec";
import DemandComp from "@/components/DemandComp/DemandComp";

import vector from "../../../../public/images/cross-platform-app-vector.webp";

import service1 from "../../../../public/images/app-services/cross-platform-app-development/1.webp";
import service2 from "../../../../public/images/app-services/cross-platform-app-development/2.webp";
import service3 from "../../../../public/images/app-services/cross-platform-app-development/3.webp";
import service4 from "../../../../public/images/app-services/cross-platform-app-development/4.webp";
import service5 from "../../../../public/images/app-services/cross-platform-app-development/5.webp";
import service6 from "../../../../public/images/app-services/cross-platform-app-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Cross-Platform <span>App Development</span>
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s cross platform app development services deliver seamless, high-performing applications with consistent design and optimized functionality across iOS, Android, and web platforms.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building Apps That<br /> <span>Work Everywhere</span>
    </h2>
  ),
  para: "Our multi-platform app development ensures flawless performance across all devices and operating systems, delivering consistent speed, usability, and seamless user experiences on every platform.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Unified App<br />
          Architecture
        </h4>
      ),
      para: "We design a single codebase that runs efficiently on iOS, Android, and web platforms. This approach reduces development time while ensuring consistent functionality.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Consistent User <br />
          Interface
        </h4>
      ),
      para: "Our team creates interfaces that deliver the same high-quality experience across devices. Uniform design improves usability, engagement, and brand perception.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized<br />
          Performance
        </h4>
      ),
      para: "We implement best coding practices and rigorous testing to ensure smooth performance on all target platforms. High-performing apps reduce crashes and enhance user satisfaction.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Secure and <br />
          Reliable Systems
        </h4>
      ),
      para: "We integrate robust security measures, encrypted data storage, and secure communication protocols to protect user and business data across all platforms.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Cost-Effective <br />
          Development
        </h4>
      ),
      para: "Using a single codebase for multiple platforms, we lower development costs, simplify maintenance, and ensure consistent, high-quality app performance.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Post-Launch Support<br />
          and Updates
        </h4>
      ),
      para: "We offer ongoing monitoring, updates, and feature enhancements to keep your app secure, relevant, and high-performing across all platforms consistently.",
    },
  ],
  btnText: "Start Cross Platform App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Business with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Cross-Platform Solutions</span>
      </h3>
    ),
  para: "Partner with HadzTech to create apps that deliver a seamless user experience on every device. Our cross-platform development approach ensures maximum reach, efficiency, and measurable business impact.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      iOS App Development Solutions<span> Personalized for Performance</span>
    </h2>
  ),
  para: 'Our cross platform app development services integrate advanced technology and strategic design to deliver seamless, high-performing applications. By develop mobile apps cross platform, HadzTech ensures consistent functionality, scalability, and user experience across devices, helping businesses reach wider audiences efficiently while maintaining top performance and reliability.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic App <br /> Planning</h4>
      ),
      para: 'We create a roadmap aligning business goals with cross-platform compatibility, ensuring every feature enhances performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance <br />Architecture</h4>
      ),
      para: 'Our solutions ensure responsiveness, speed, and reliability across devices for a smooth, consistent user experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable and<br />Future-Ready Apps</h4>
      ),
      para: 'We build scalable, modular apps that support new features and integrations without affecting performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security Across <br /> Platforms</h4>
      ),
      para: 'Our apps ensure strong security with encrypted data handling and authentication, protecting users and business information.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is cross-platform app development?",
    answer:
      "Cross-platform development builds a single application that works seamlessly across multiple operating systems, including iOS, Android, and web platforms.",
  },
  {
    question: "What technologies do you use for cross-platform apps?",
    answer:
      "We use frameworks like React Native, Flutter, and Xamarin to ensure apps run efficiently on all devices while maintaining high performance.",
  },
  {
    question: "How long does it take to develop a cross-platform app?",
    answer:
      "Development typically ranges from 10 to 18 weeks, depending on complexity, features, and platform requirements.",
  },
  {
    question: "Will the app perform the same on all devices?",
    answer:
      "Yes, we optimize the code and design to ensure consistent functionality, responsiveness, and user experience across all platforms.",
  },
  {
    question: "Can cross-platform apps integrate with existing systems?",
    answer:
      "Absolutely. We can integrate app with CRMs, payment gateways, analytics tools, and other third-party platforms.",
  },
  {
    question: "Do you provide maintenance and updates post-launch?",
    answer:
      "Yes, we offer continuous support, updates, and feature enhancements to keep cross-platform apps secure, functional, and up-to-date.",
  }
];

const CrossPlatformAppDevelopment = () => {
  return (
    <PageLayout>
      <AndroidAppBanner bannerData={bannerData} />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"Leading Brands"} />
      <AndroidServices serviceData={serviceData} />
      <AndroidProgress />
      <AwardsSec />
      <DiscussCta discussCtaData={discussCtaData} />
      <Testimonials />
      <div className="CategoryService_padding">
        <CategoryService />
      </div>
      <DemandComp demandCompData={demandCompData}/>
      <FAQSection faqs={faqs} />
    </PageLayout>
  );
};

export default CrossPlatformAppDevelopment;
