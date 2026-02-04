export const metadata = {
  title: "Woo Commerce Development for Flexible High-Converting Stores",
  description:
    "We offer Woo Commerce development that blends speed, design, and flexibility—custom stores that are easy to manage, built to sell, and ready to scale with you.",
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

import vector from "../../../../public/images/woocommerce-vector.webp";

import service1 from "../../../../public/images/store-services/woocommerce-development/1.webp";
import service2 from "../../../../public/images/store-services/woocommerce-development/2.webp";
import service3 from "../../../../public/images/store-services/woocommerce-development/3.webp";
import service4 from "../../../../public/images/store-services/woocommerce-development/4.webp";
import service5 from "../../../../public/images/store-services/woocommerce-development/5.webp";
import service6 from "../../../../public/images/store-services/woocommerce-development/6.webp";

import discussCtaImage from "../../../../public/images/woocommerce-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Excellent<span> WooCommerce Development </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      Boost online business with HadzTech’s WooCommerce development, creating scalable, flexible stores for seamless product, payment, and customer management.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating WooCommerce Stores That <br /> <span>Engage and Convert</span>
    </h2>
  ),
  para: "HadzTech specializes in custom theme development for WooCommerce, creating visually appealing, user-friendly stores that reflect brand identity, drive high conversions, and deliver a seamless shopping experience.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Store <br />
          Design
        </h4>
      ),
      para: "We design tailored WooCommerce stores that reflect your brand and offer a seamless, intuitive shopping experience across all devices.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized <br />
          Performance
        </h4>
      ),
      para: "We build WooCommerce stores for speed, reliability, and efficiency, ensuring fast loading and seamless user experiences even during high traffic.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Secure Payment <br />
          and Checkout
        </h4>
      ),
      para: "We integrate multiple payment gateways, secure checkouts, and database optimization, providing customers with confidence, convenience, and seamless purchase experiences.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich <br />
          Online Store
        </h4>
      ),
      para: "Our WooCommerce solutions provide advanced functionality, including inventory management, product variations, marketing tools, and analytics dashboards to monitor store performance efficiently.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO <br />
          Optimization
        </h4>
      ),
      para: "We apply SEO and integrate marketing tools to boost organic traffic, enhance visibility, and improve customer acquisition for WooCommerce stores.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing<br />
          Maintenance
        </h4>
      ),
      para: "After launch, we offer updates, performance monitoring, and technical support to keep your WooCommerce store secure, optimized, and business-focused.",
    }
  ],
  btnText: "Start WooCommerce development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Business with </h2>,
  heading2: (
      <h3 className="same-heading">
        <span>WooCommerce Expertise</span>
      </h3>
    ),
  para: "Partner with HadzTech for Managed WooCommerce hosting and performance, creating stores that boost engagement, increase conversions, and support long-term business growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      WooCommerce Development Solutions<span> for Modern E-Commerce</span>
    </h2>
  ),
  para: 'HadzTech’s woo commerce development services combine strategic planning, custom solutions, and scalable architecture to build high-performing stores. We specialize in woo commerce website development in USA, delivering reliable, feature-rich, and growth-focused e-commerce solutions for modern businesses.',
  demandBox: [
    {
      heading4: (
        <h4>Tailored Store <br />Architecture</h4>
      ),
      para: 'We create fully customizable, scalable WooCommerce stores that efficiently support business operations and product catalogs.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive <br />UI/UX Design</h4>
      ),
      para: 'We design visually appealing, responsive, and easy-to-navigate WooCommerce interfaces across all devices, boosting user engagement.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated Analytics <br />Tools</h4>
      ),
      para: 'We integrate plugins for marketing, user tracking, and analytics, empowering businesses to make data-driven decisions.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure and <br /> Reliable Platform</h4>
      ),
      para: 'We ensure security with encrypted transactions, data protection, and updates, building trust and reliability for customers.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is WooCommerce development?",
    answer:
      "WooCommerce development involves creating custom e-commerce stores on WordPress, providing full control over design, features, and functionality.",
  },
  {
    question: "How long does it take to develop a WooCommerce store?",
    answer:
      "Depending on complexity and features, WooCommerce stores usually take 3 to 8 weeks from planning to launch.",
  },
  {
    question: "Can you create fully customized WooCommerce stores?",
    answer:
      "Yes, our custom ecommerce store development services provide tailored designs and features that reflect brand and business requirements.",
  },
  {
    question: "Will the store be mobile-friendly?",
    answer:
      "Absolutely. Every WooCommerce store we build is fully responsive and optimized for all devices, ensuring a seamless shopping experience.",
  },
  {
    question: "Can you integrate third-party apps and payment gateways?",
    answer:
      "Yes, as an experienced online store developer, we integrate payment solutions, CRM tools, analytics, and other third-party apps to enhance functionality.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer continuous maintenance, updates, and technical support to keep WooCommerce store secure, high-performing, and future-ready.",
  }
];

const WooCommerceDevelopment = () => {
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

export default WooCommerceDevelopment;
