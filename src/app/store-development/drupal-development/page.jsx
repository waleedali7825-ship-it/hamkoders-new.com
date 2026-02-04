export const metadata = {
  title: "Drupal Development for Secure, Scalable, and Custom Websites",
  description:
    "We provide expert Drupal development to build secure, fast, and flexible websites—perfect for brands that need powerful performance with full content control.",
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

import vector from "../../../../public/images/drupal-vector-banner.webp";

import service1 from "../../../../public/images/store-services/drupal-development/1.webp";
import service2 from "../../../../public/images/store-services/drupal-development/2.webp";
import service3 from "../../../../public/images/store-services/drupal-development/3.webp";
import service4 from "../../../../public/images/store-services/drupal-development/4.webp";
import service5 from "../../../../public/images/store-services/drupal-development/5.webp";
import service6 from "../../../../public/images/store-services/drupal-development/6.webp";

import discussCtaImage from "../../../../public/images/drupal-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/backend-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Drupal Development for<span> Robust Websites </span>
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s expert drupal developer team builds scalable, secure, high-performance websites using Drupal 10, CMS 2.0, and API-first solutions.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Crafting Drupal Websites That<br /> <span> Perform and Scale</span>
    </h2>
  ),
  para: "We create tailored Drupal websites with intuitive navigation, strong security, and high performance, utilizing advanced Drupal CMS 2.0 features to deliver measurable business results.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Drupal 10<br />
          Development
        </h4>
      ),
      para: "HadzTech specializes in drupal 10 development, building modern, fast, and feature-rich websites designed for exceptional performance, scalability, and seamless user experiences.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Drupal CMS <br />
          2.0 Features
        </h4>
      ),
      para: "Our expert team leverages Drupal CMS 2.0 features to enhance content management, ensure modular architecture, and deliver flexible, dynamic, and high-performing websites.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Drupal API-First <br />
          Approach
        </h4>
      ),
      para: "We follow a Drupal API-first approach, ensuring seamless integration with mobile apps, external systems, and third-party services for a unified digital ecosystem.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Expert Drupal<br />
          Team
        </h4>
      ),
      para: "Our certified drupal developer experts deliver clean code, strong architecture, and a reliable development process, ensuring high-quality, scalable, and performance-driven Drupal solutions.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Responsive<br />
          Design
        </h4>
      ),
      para: "We create visually appealing, fully responsive, and user-friendly Drupal interfaces designed to deliver seamless, consistent, and engaging experiences across all devices.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Maintenance and <br />
          Support
        </h4>
      ),
      para: "After launch, we deliver updates, performance optimization, and technical support to keep your Drupal website secure, scalable, and aligned with business goals.",
    }
  ],
  btnText: "Start Drupal development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Business with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Drupal Expertise</span>
      </h3>
    ),
  para: "Partner with HadzTech for Drupal API-first approach, creating flexible, secure, and high-performance websites that drive efficient business growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Drupal Development Solutions<span> for Modern Web Platforms</span>
    </h2>
  ),
  para: 'Our expert Drupal developer team delivers end-to-end Drupal Development Services for enterprises and businesses, creating robust, scalable, and secure websites. We design tailored solutions with advanced performance, seamless functionality, and modern features to enhance user experience and support long-term digital growth across all platforms.',
  demandBox: [
    {
      heading4: (
        <h4>Custom <br />Architecture</h4>
      ),
      para: 'We build scalable, modular websites using Drupal 10 development and Drupal CMS 2.0 features for growth.',
      image: signVector
    },
    {
      heading4: (
        <h4>API-Driven <br />Integrations</h4>
      ),
      para: 'Our Drupal API-first approach ensures seamless integration with apps, tools, and systems for enhanced functionality.',
      image: signVector
    },
    {
      heading4: (
        <h4>Interactive<br />UI/UX</h4>
      ),
      para: 'We create responsive, intuitive designs that ensure consistent and engaging user experiences across all devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure <br /> Platform</h4>
      ),
      para: 'We build secure, compliant Drupal websites with optimized performance to protect data and ensure reliability.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is Drupal development?",
    answer:
      "Drupal development involves building websites using Drupal, leveraging Drupal 10 development, Drupal CMS 2.0 features, and modular architecture for scalable solutions.",
  },
  {
    question: "Who is a Drupal developer?",
    answer:
      "A drupal developer is an expert who designs, builds, and maintains Drupal websites, ensuring performance, security, and scalability.",
  },
  {
    question: "What is the API-first approach in Drupal?",
    answer:
      "The Drupal API-first approach allows websites to integrate with external systems, mobile apps, and third-party tools for a connected ecosystem.",
  },
  {
    question: "Can Drupal websites handle large-scale businesses?",
    answer:
      "Yes, Drupal’s modular and scalable architecture makes it ideal for enterprises, e-commerce platforms, and complex web applications.",
  },
  {
    question: "What are the benefits of Drupal CMS 2.0 features?",
    answer:
      "Drupal CMS 2.0 features offer advanced content management, flexible modules, enhanced performance, and robust security for modern websites.",
  },
  {
    question: "Do you provide post-launch support for Drupal websites?",
    answer:
      "Yes, we offer ongoing maintenance, updates, and technical support to keep Drupal websites secure, optimized, and future-ready.",
  }
];

const DrupalDevelopment = () => {
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

export default DrupalDevelopment;
