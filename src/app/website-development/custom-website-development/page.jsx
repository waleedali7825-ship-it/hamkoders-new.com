export const metadata = {
  title: "Custom Web Development Services for Unique Digital Solutions",
  description:
    "We deliver custom web development services tailored to your brand — smart, scalable, and built to perform across every device, from first click to final result.",
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

import vector from "../../../../public/images/custom-web-vector.webp";

import service1 from "../../../../public/images/website-services/custom-website-development/1.webp";
import service2 from "../../../../public/images/website-services/custom-website-development/2.webp";
import service3 from "../../../../public/images/website-services/custom-website-development/3.webp";
import service4 from "../../../../public/images/website-services/custom-website-development/4.webp";
import service5 from "../../../../public/images/website-services/custom-website-development/5.webp";
import service6 from "../../../../public/images/website-services/custom-website-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-c-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Custom<span> Web Development</span> Services
    </h1>
  ),
  para: (
    <p className="para">
      Enhance your brand with <span>Custom Web Development</span> Services that
      deliver innovative design, seamless performance, and strong functionality
      to attract, engage, and convert audiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Unleashing New Perspectives <br /> <span> for Business Success</span>
    </h2>
  ),
  para: "Our web development services focus on speed, security, and SEO optimization, delivering measurable results, enhanced performance, and a seamless digital experience that drives user engagement and business growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Strategic Digital <br />
          Architecture
        </h4>
      ),
      para: "We design websites with a clear structure and scalable foundation to support evolving business needs and future expansion. Each project is built to adapt effortlessly as business grows, ensuring long-term digital sustainability.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Enhanced User <br />
          Engagement
        </h4>
      ),
      para: "Our focus on intuitive design and smooth navigation keeps visitors engaged and encourages meaningful interactions. We create user journeys that build trust, improve retention, and turn visitors into loyal customers.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized Performance <br />
          and Speed
        </h4>
      ),
      para: "We implement advanced coding practices and technologies to ensure lightning-fast load times and seamless functionality. Faster websites enhance user satisfaction, boost SEO performance, and increase conversion rates.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Robust Security <br />
          Measures
        </h4>
      ),
      para: "The website is built with enterprise-level security features to protect data, transactions, and user information. Continuous monitoring and proactive threat prevention safeguard platform against vulnerabilities.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Search Engine <br />
          Visibility
        </h4>
      ),
      para: "We integrate SEO best practices into every stage of development, improving search rankings and increasing organic reach. Our approach ensures the website attracts qualified traffic and maintains a strong digital footprint.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Measurable Business <br />
          Impact
        </h4>
      ),
      para: "Our data-driven approach powers real business growth, increasing conversions and brand authority. We deliver measurable results aligned with strategic goals to ensure consistent performance and long-term success.",
    },
  ],
  btnText: "Start Custom Website Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Digital Future Growth with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Custom Web Development</span>
      </h3>
    ),
  para: "Partner with HadzTech to transform online presence into a powerful growth engine. Our expert team creates personalized, high-performance websites designed to attract audiences.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Custom <span> Web Development Services</span> Built for Performance
    </h2>
  ),
  para: 'We create powerful, future-ready websites designed to grow with business. Our Custom Web Development Services focus on delivering seamless performance, reliable functionality, and flexible scalability. Every solution is personalized to goals, ensuring a digital platform that drives engagement, supports expansion, and delivers measurable results.',
  demandBox: [
    {
      heading4: (
        <h4>Development  <br /> Strategy</h4>
      ),
      para: 'We create websites tailored to business goals and industry needs, ensuring perfect alignment and lasting value.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance  <br /> Architecture</h4>
      ),
      para: 'We build fast, reliable, and optimized websites that enhance user experience and boost search visibility.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable Solutions  <br /> for Growth</h4>
      ),
      para: 'We create scalable, flexible websites with modular design that adapt seamlessly to future business growth.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure and Reliable  <br /> Framework</h4>
      ),
      para: 'We implement strong security at every stage to protect data, ensure compliance, and build user trust.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What are Custom Web Development Services?",
    answer:
      "Custom web development services involve building websites personalized to the specific needs, goals, and functionality requirements of a business. Unlike template-based solutions, they offer complete control over design, performance, scalability, and user experience.",
  },
  {
    question: "How long does it take to develop a custom website?",
    answer:
      "The timeline depends on the project’s complexity, features, and design requirements. On average, a custom website can take anywhere from 4 to 12 weeks, including planning, development, testing, and deployment.",
  },
  {
    question: "Why should I choose custom development over a website builder?",
    answer:
      "Custom development provides flexibility, scalability, and unique design possibilities that template-based platforms cannot match. It ensures better performance, stronger security, and the ability to scale as business grows.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Yes, every website we build is fully responsive and optimized for mobile devices. We also implement SEO best practices from the start to improve visibility and enhance search rankings.",
  },
  {
    question: "Can you integrate third-party tools or platforms into my website?",
    answer:
      "Absolutely. We can integrate CRMs, payment gateways, analytics tools, and other third-party platforms to extend website’s functionality and streamline business operations.",
  },
  {
    question: "Do you offer ongoing support after the website launch?",
    answer:
      "Yes, we provide continuous maintenance, updates, and technical support to ensure the website remains secure, optimized, and aligned with evolving business needs.",
  }
];

const CustomWebDevelopment = () => {
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

export default CustomWebDevelopment;
