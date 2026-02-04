export const metadata = {
  title: "Magento Development Services to Power High-Performing Stores",
  description:
    "Our Magento development services help you build fast, secure, and scalable ecommerce stores that engage customers and grow your business without limitations.",
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

import vector from "../../../../public/images/magento-development-banner.webp";

import service1 from "../../../../public/images/store-services/magento-development/1.webp";
import service2 from "../../../../public/images/store-services/magento-development/2.webp";
import service3 from "../../../../public/images/store-services/magento-development/3.webp";
import service4 from "../../../../public/images/store-services/magento-development/4.webp";
import service5 from "../../../../public/images/store-services/magento-development/5.webp";
import service6 from "../../../../public/images/store-services/magento-development/6.webp";

import discussCtaImage from "../../../../public/images/magento-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Magento <span>Development Experts</span>
    </h1>
  ),
  para: (
    <p className="para">
      Boost your online sales with HadzTech’s Magento development services,
      delivering custom, secure, scalable, and feature-rich e-commerce stores
      for businesses.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Crafting Magento Stores That
      <br /> <span>Engage and Convert</span>
    </h2>
  ),
  para: "HadzTech specializes in custom Magento development, creating fully optimized, user-friendly stores designed to boost conversions, provide seamless shopping experiences, and enhance overall operational efficiency.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Magento
          <br />
          Store
        </h4>
      ),
      para: "We create personalized, visually stunning Magento stores that reflect your brand identity while offering intuitive navigation for a seamless customer experience.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          High-Performance
          <br />
          Store
        </h4>
      ),
      para: "We build Magento stores for speed, reliability, and scalability, ensuring fast loading, smooth performance, and consistent operation even during high traffic.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Secure <br />
          Payment
        </h4>
      ),
      para: "We integrate secure payment gateways and seamless checkout processes, ensuring customer trust, satisfaction, and a smooth, reliable shopping experience.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich <br />
          Store
        </h4>
      ),
      para: "Our online store builder approach equips Magento stores with essential features such as product catalogs, inventory management, marketing tools, and analytics.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO and <br />
          Marketing
        </h4>
      ),
      para: "We apply SEO best practices and integrate marketing solutions to increase search visibility, drive targeted traffic, and boost online sales.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Support and <br />
          Maintenance
        </h4>
      ),
      para: "After launch, we offer updates, performance monitoring, and technical support to keep your Magento store secure, optimized, and fully functional.",
    },
  ],
  btnText: "Start Magento development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale E-Commerce Business</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>with Magento</span>
    </h3>
  ),
  para: "Partner with HadzTech for Magento API integration services, delivering innovative, functional stores that engage users, streamline operations, and boost business revenue.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Magento Development Solutions<span> for Modern Online Stores</span>
    </h2>
  ),
  para: "HadzTech’s Magento development services provide custom e-commerce solutions that are flexible, scalable, and growth-focused. With Magento cloud hosting and DevOps, we ensure high-performance, secure, and fully optimized stores, delivering excellence in every aspect of Magento online store development.",
  demandBox: [
    {
      heading4: (
        <h4>
          Tailored Store <br />
          Architecture
        </h4>
      ),
      para: "We create Magento stores aligned with business goals, products, and customer journey to drive growth.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Responsive <br />
          UI/UX Design
        </h4>
      ),
      para: "We design fully responsive, visually appealing Magento stores that are easy to navigate on all devices.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Integrated Analytics <br />
          Tools
        </h4>
      ),
      para: "We integrate apps and plugins to boost promotions, enhance customer engagement, and enable real-time performance tracking.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Secure and <br /> Reliable Platform
        </h4>
      ),
      para: "We ensure secure transactions, data protection, and compliance, delivering a reliable Magento platform with top-level security.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What is Magento development?",
    answer:
      "Magento development involves building custom ecommerce stores on the Magento platform, providing robust features, scalability, and optimized performance.",
  },
  {
    question: "How long does it take to develop a Magento store?",
    answer:
      "Depending on features and complexity, Magento stores typically take 4 to 10 weeks from planning to launch.",
  },
  {
    question: "Can you create a fully custom Magento store?",
    answer:
      "Yes, our custom ecommerce store development services deliver fully tailored designs and functionalities to meet business needs.",
  },
  {
    question: "Will the store be mobile-friendly?",
    answer:
      "Absolutely. All Magento stores we build are fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Can you integrate third-party apps and payment gateways?",
    answer:
      "Yes, as an experienced online store developer, we integrate payment solutions, analytics tools, marketing apps, and other third-party services.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer ongoing maintenance, updates, and technical support to ensure Magento stores remain secure, fast, and optimized.",
  },
];

const MagentoDevelopment = () => {
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

export default MagentoDevelopment;
