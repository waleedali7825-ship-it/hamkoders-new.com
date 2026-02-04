export const metadata = {
  title: "SaaS App Development Services That Scale with Your Business",
  description:
    "We provide SaaS app development services that are secure and scalable, tailored to help your business grow, engage users, and thrive in a competitive market.",
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

import vector from "../../../../public/images/saas-app-vector.webp";

import service1 from "../../../../public/images/app-services/saas-app-development/1.webp";
import service2 from "../../../../public/images/app-services/saas-app-development/2.webp";
import service3 from "../../../../public/images/app-services/saas-app-development/3.webp";
import service4 from "../../../../public/images/app-services/saas-app-development/4.webp";
import service5 from "../../../../public/images/app-services/saas-app-development/5.webp";
import service6 from "../../../../public/images/app-services/saas-app-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/backend-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Scalable <br /><span> SaaS App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s saas app development services create secure, scalable, and
      high-performing cloud solutions that drive innovation, boost revenue, and
      empower business growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building SaaS Applications
      <br /> <span>That Scale</span>
    </h2>
  ),
  para: "Our SaaS application development services deliver optimized, reliable, and user-friendly apps with multi-tenant architecture, cloud integration, and seamless functionality for businesses of all sizes.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom SaaS
          <br />
          Architecture
        </h4>
      ),
      para: "We develop scalable, modular applications tailored to unique business needs, ensuring each solution provides long-term flexibility, supports future growth, and adapts seamlessly to evolving requirements and market demands.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          User-Friendly
          <br />
          Interface
        </h4>
      ),
      para: "Our team creates intuitive dashboards and user interfaces that streamline workflows, improve usability, and boost engagement. Thoughtful, user-centric design ensures higher adoption, increased retention, and enhanced overall user satisfaction.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          High-Performance
          <br />
          Cloud Solutions
        </h4>
      ),
      para: "We enhance server-side logic, streamline database management, and integrate APIs efficiently to deliver fast, reliable, and seamless application performance, ensuring optimal functionality and a smooth user experience across platforms.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Security and <br />
          Compliance
        </h4>
      ),
      para: "We implement best practices, including secure data storage and adherence to industry standards, to protect sensitive business and user information, ensuring compliance, trust, and reliable security across all applications.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Multi-Tenant <br />
          and Subscription
        </h4>
      ),
      para: "Our solutions enable multi-client management, support various subscription tiers, and accommodate different user roles, offering flexible, scalable, and controlled operations that optimize SaaS performance and streamline business management.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Maintenance
          <br />
          and Updates
        </h4>
      ),
      para: "We offer continuous monitoring, performance optimization, and regular feature enhancements to ensure your SaaS application remains competitive, reliable, high-performing, and aligned with evolving business needs and user expectations.",
    },
  ],
  btnText: "Start Saas App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Business with</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>SaaS Solutions</span>
    </h3>
  ),
  para: "Partner with HadzTech to develop scalable SaaS platforms that streamline operations, enhance user engagement, and drive measurable business results.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      SaaS App Development Solutions Designed
      <span> for Efficiency and Growth</span>
    </h2>
  ),
  para: "Our saas app development services integrate strategic planning, advanced technology, and robust architecture to build scalable, high-performing cloud platforms. Through AI-powered SaaS development, HadzTech delivers intelligent solutions that enhance efficiency, drive growth, and provide innovative, future-ready applications for businesses of all sizes.",
  demandBox: [
    {
      heading4: (
        <h4>
          Strategic <br /> SaaS Planning
        </h4>
      ),
      para: "We align app features, architecture, and functionality with business goals to deliver growth-driven solutions.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Scalable and
          <br />
          Modular
        </h4>
      ),
      para: "Our applications are scalable, supporting new features and integrations without affecting performance or user experience.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Optimized
          <br />
          Performance
        </h4>
      ),
      para: "We prioritize speed, reliability, and seamless functionality to deliver high-performing applications across all user activities.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Security <br /> Measures
        </h4>
      ),
      para: "We implement multi-layered security, encryption, and compliance measures to safeguard sensitive data and ensure user trust.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What is SaaS app development?",
    answer:
      "SaaS app development involves creating cloud-based software that is accessible online and provides scalable, subscription-based services to multiple users.",
  },
  {
    question: "How long does it take to develop a SaaS app?",
    answer:
      "Depending on complexity, features, and integrations, development typically takes 12 to 20 weeks.",
  },
  {
    question: "Can SaaS apps support multiple clients and subscriptions?",
    answer:
      "Yes, our apps are built with multi-tenant architecture and subscription management capabilities to handle multiple clients efficiently.",
  },
  {
    question: "Will the SaaS app be secure and compliant?",
    answer:
      "Absolutely. We implement encryption, secure authentication, and compliance with industry standards to protect data and maintain user trust.",
  },
  {
    question: "Can SaaS apps integrate with existing systems?",
    answer:
      "Yes, we can integrate CRMs, payment gateways, analytics tools, and other third-party platforms to extend functionality.",
  },
  {
    question: "Do you provide post-launch support for SaaS apps?",
    answer:
      "Yes, we offer ongoing maintenance, feature updates, performance monitoring, and technical support to ensure long-term reliability and growth.",
  },
];

const SaasAppDevelopment = () => {
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
      <DemandComp demandCompData={demandCompData} />
      <FAQSection faqs={faqs} />
    </PageLayout>
  );
};

export default SaasAppDevelopment;
