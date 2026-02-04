export const metadata = {
  title: "Store Maintenance Services to Keep Online Business Running",
  description:
    "Our store maintenance services keep your ecommerce site fast, secure, and error-free—ensuring a smooth shopping experience and peace of mind around the clock.",
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

import vector from "../../../../public/images/store-maintenance-banner.webp";

import service1 from "../../../../public/images/store-services/store-maintenance/1.webp";
import service2 from "../../../../public/images/store-services/store-maintenance/2.webp";
import service3 from "../../../../public/images/store-services/store-maintenance/3.webp";
import service4 from "../../../../public/images/store-services/store-maintenance/4.webp";
import service5 from "../../../../public/images/store-services/store-maintenance/5.webp";
import service6 from "../../../../public/images/store-services/store-maintenance/6.webp";

import discussCtaImage from "../../../../public/images/store-maintenance-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Reliable Store<span> Maintenance Services</span>
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech offers expert store maintenance services to keep Shopify,
      Magento, and eCommerce platforms secure, optimized, and running smoothly
      for better performance.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Keeping Online Store Secure
      <br /> <span> and Up-to-Date</span>
    </h2>
  ),
  para: "Our eCommerce site maintenance services include updates, performance checks, and issue fixes to ensure secure, high-performing stores with smooth, uninterrupted shopping experiences.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Regular
          <br />
          Updates
        </h4>
      ),
      para: "We provide timely platform, plugin, and security updates to keep your store maintenance seamless, secure, and always up-to-date.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Performance
          <br />
          Optimization
        </h4>
      ),
      para: "Our team ensures smooth store maintenance by monitoring performance, fixing bottlenecks, and improving speed, responsiveness, and overall efficiency.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Issue <br />
          Resolution
        </h4>
      ),
      para: "We proactively identify and fix technical issues, glitches, and errors to ensure seamless performance and uninterrupted store operations.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Shopify Store
          <br />
          Maintenance
        </h4>
      ),
      para: "Our Shopify store maintenance services optimize themes, apps, and checkout flows to enhance user experience, performance, and conversion rates.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Magento Store <br />
          Maintenance
        </h4>
      ),
      para: "Our Magento store maintenance services ensure security, optimized databases, and smooth performance through regular updates and extension management.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Analytics and <br />
          Reporting
        </h4>
      ),
      para: "We track key performance metrics and provide actionable insights to help optimize store operations, user experience, and sales performance.",
    },
  ],
  btnText: "Start Store Maintenance",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Store Efficiency</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>and Reliability</span>
    </h3>
  ),
  para: "Partner with HadzTech for expert store maintenance ensuring security, reliability, and smooth performance to support eCommerce growth and customer satisfaction.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Store Maintenance Solutions<span> for High-Performing E-Commerce</span>
    </h2>
  ),
  para: "Our eCommerce site maintenance services ensure secure, efficient, and high-performing online stores through proactive monitoring, optimization, and technical support. We specialize in store maintenance, including Shopify store maintenance and Magento store management, keeping your eCommerce platform updated, reliable, and ready to deliver seamless shopping experiences.",
  demandBox: [
    {
      heading4: (
        <h4>
          Store <br />
          Upgrades
        </h4>
      ),
      para: "We ensure store stability and performance by updating features, versions, and security protocols regularly.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Responsive Issue <br />
          Resolution
        </h4>
      ),
      para: "We quickly fix technical issues to minimize downtime and ensure smooth, uninterrupted customer experiences.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Security
          <br />
          Optimization
        </h4>
      ),
      para: "We monitor and improve site speed, security, and reliability to ensure a safe, optimized shopping experience.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Platform-Specific <br /> Maintenance
        </h4>
      ),
      para: "We provide tailored Shopify and Magento store maintenance services designed for each platform’s unique needs.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What is store maintenance?",
    answer:
      "Store maintenance involves regular updates, bug fixes, performance optimization, and security checks to keep an online store running smoothly.",
  },
  {
    question: "What are eCommerce site maintenance services?",
    answer:
      "eCommerce site maintenance services include updates, performance monitoring, security management, and technical support for online stores across various platforms.",
  },
  {
    question: "Can you provide Shopify store maintenance?",
    answer:
      "Yes, our shopify store maintenance services cover theme updates, app management, checkout optimization, and performance enhancements.",
  },
  {
    question: "Do you provide Magento store maintenance?",
    answer:
      "Absolutely. Our magento store maintenance services include security patches, extension updates, database optimization, and performance monitoring.",
  },
  {
    question: "How often should online stores be maintained?",
    answer:
      "Regular maintenance is recommended at least monthly, with critical updates applied immediately to ensure security, speed, and optimal functionality.",
  },
  {
    question: "Do you provide analytics and performance reports?",
    answer:
      "Yes, we provide detailed insights and actionable recommendations to help improve store performance, user experience, and sales metrics.",
  },
];

const StoreMaintenance = () => {
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

export default StoreMaintenance;
