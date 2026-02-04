export const metadata = {
  title: "Shopify Expert Developer Services for Custom Store Solutions",
  description:
    "Get Shopify expert developer services that bring your store to life—custom themes, smooth performance, and features designed to boost sales and user experience.",
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

import vector from "../../../../public/images/shopify-vector.webp";

import service1 from "../../../../public/images/store-services/shopify-development/1.webp";
import service2 from "../../../../public/images/store-services/shopify-development/2.webp";
import service3 from "../../../../public/images/store-services/shopify-development/3.webp";
import service4 from "../../../../public/images/store-services/shopify-development/4.webp";
import service5 from "../../../../public/images/store-services/shopify-development/5.webp";
import service6 from "../../../../public/images/store-services/shopify-development/6.webp";

import discussCtaImage from "../../../../public/images/shopify-dev-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Expert <span> Shopify Development </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      Boost your online sales with HadzTech, a trusted Shopify expert developer offering custom designs, seamless functionality, and secure payments.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Shopify Stores That<br /> <span>Engage and Convert</span>
    </h2>
  ),
  para: "HadzTech specializes in Shopify custom theme development and 2.0 theme development, creating visually stunning, user-friendly stores designed to boost conversions and showcase your brand identity.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Shopify<br />
          Design
        </h4>
      ),
      para: "We create unique, responsive Shopify stores that perfectly reflect your brand’s aesthetics while delivering a seamless, intuitive, and engaging shopping experience for customers.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized<br />
          Store
        </h4>
      ),
      para: "Our team guarantees fast-loading pages, effortless navigation, and seamless checkout experiences, designed to enhance user satisfaction, boost engagement, and drive higher sales for your store.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Payment <br />
          Integration
        </h4>
      ),
      para: "We seamlessly integrate secure payment gateways, providing customers with safe, reliable, and hassle-free transactions, ensuring trust, convenience, and a smooth shopping experience every time.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich <br />
          Functionality
        </h4>
      ),
      para: "We deliver Shopify stores complete with product catalogs, inventory management, marketing tools, and analytics, offering all essential e-commerce features for efficient, growth-driven online business.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO-Friendly <br />
          Architecture
        </h4>
      ),
      para: "We apply SEO best practices across store structure, product pages, and content, boosting search visibility, attracting organic traffic, and helping your Shopify store rank higher.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Maintenance
        </h4>
      ),
      para: "After launch, we deliver regular updates, feature enhancements, and dedicated technical support, keeping your Shopify store secure, up-to-date, and performing at its best.",
    }
  ],
  btnText: "Start Shopify development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Online Business</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with Shopify Expertise</span>
      </h3>
    ),
  para: "Partner with HadzTech for theme development Shopify, delivering innovative, functional stores optimized for growth, customer engagement, and success in competitive e-commerce markets.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Shopify Development Solutions<span> for Modern E-Commerce</span>
    </h2>
  ),
  para: 'HadzTech’s Shopify Development Services, led by a trusted Shopify expert developer, combine design, technology, and strategy to create custom stores. With seamless payment gateway integration, we build engaging, high-converting e-commerce solutions that attract customers and rapidly boost online sales.',
  demandBox: [
    {
      heading4: (
        <h4>Store <br />Architecture</h4>
      ),
      para: 'We create Shopify stores tailored to your business model, product range, and seamless customer journey.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive <br />UI/UX</h4>
      ),
      para: 'We design fully responsive, easy-to-navigate Shopify stores, delivering a seamless and superior shopping experience everywhere.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated <br />Marketing</h4>
      ),
      para: 'We integrate apps and tools to boost promotions, enhance customer engagement, and track store performance effectively.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure <br /> Platform</h4>
      ),
      para: 'We ensure secure transactions, data handling, and platform management, protecting both your business and customer information.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is Shopify development?",
    answer:
      "Shopify development involves designing, building, and customizing online stores on the Shopify platform to meet business goals and enhance user experience.",
  },
  {
    question: "How long does it take to develop a Shopify store?",
    answer:
      "Depending on complexity and features, Shopify stores typically take 3 to 8 weeks to develop, from planning to launch.",
  },
  {
    question: "Can you create a fully custom Shopify store?",
    answer:
      "Yes, we provide fully customized designs, themes, and features tailored to brand and business objectives.",
  },
  {
    question: "Will the store be optimized for mobile devices?",
    answer:
      "Absolutely. Every Shopify store we build is fully responsive and optimized for mobile, tablet, and desktop viewing.",
  },
  {
    question: "Can you integrate third-party apps and payment gateways?",
    answer:
      "Yes, we integrate payment solutions, analytics tools, marketing apps, and other third-party services to extend store functionality.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer ongoing maintenance, updates, and technical support to ensure Shopify stores remain secure, fast, and optimized.",
  }
];

const ShopifyDevelopment = () => {
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

export default ShopifyDevelopment;
