export const metadata = {
  title: "Custom Web App Development That Powers Growth and Innovation",
  description:
    "We offer custom web app development crafted for performance, scalable, reliable, and tailored to deliver smooth, user-friendly experiences across all platforms.",
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

import vector from "../../../../public/images/web-app-vector.webp";

import service1 from "../../../../public/images/website-services/web-app-development/1.webp";
import service2 from "../../../../public/images/website-services/web-app-development/2.webp";
import service3 from "../../../../public/images/website-services/web-app-development/3.webp";
import service4 from "../../../../public/images/website-services/web-app-development/4.webp";
import service5 from "../../../../public/images/website-services/web-app-development/5.webp";
import service6 from "../../../../public/images/website-services/web-app-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-web-app-dev.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Web <span>App  Development</span> Services
    </h1>
  ),
  para: (
    <p className="para">
      We offer custom web app development focused on building responsive, scalable solutions that boost performance, enhance user experience, and drive business growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Empowering Businesses with <br /> <span>Intelligent Web Solutions</span>
    </h2>
  ),
  para: "We develop web app solutions tailored to business goals, ensuring speed, functionality, and seamless performance across all devices for an exceptional user experience and measurable results.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Application <br />
          Architecture
        </h4>
      ),
      para: "We design purpose-built applications from the ground up, engineered for reliability and scalability. Every solution is structured to support growth and integrate smoothly into existing digital ecosystems.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          User-Focused <br />
          Design Experience
        </h4>
      ),
      para: "Our development approach prioritizes intuitive interfaces and user-centric navigation. We build applications that simplify workflows, enhance engagement, and deliver lasting value to customers.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized Performance <br />
          Delivery
        </h4>
      ),
      para: "From front-end responsiveness to backend efficiency, we fine-tune every layer for speed and stability. High-performing applications improve user satisfaction, retention, and overall conversion rates.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data Security <br />
          and Compliance
        </h4>
      ),
      para: "Security is integral to every build. Our applications feature encrypted data handling, role-based access controls, and adherence to industry compliance standards, ensuring operations remain protected.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO-Ready Application  <br />
          Framework
        </h4>
      ),
      para: "We implement SEO-friendly structures and dynamic rendering practices to enhance discoverability. Strong visibility ensures application reaches and retains the right audience.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Business-Centric <br />
          Results
        </h4>
      ),
      para: "Our data-driven methodology ensures measurable outcomes, from increased operational efficiency to higher revenue potential. Every project is built to achieve clear, strategic business goals.",
    }
  ],
  btnText: "Start Web Application Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Fueling Growth Through Dynamic</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Web Applications</span>
      </h3>
    ),
  para: "Partner with HadzTech to build scalable, high-performance web applications that drive innovation, adapt to growth, and deliver measurable business value.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Web<span> Application Solutions</span> Built for Scalability and Impact
    </h2>
  ),
  para: 'Our Web Application Development Services empower businesses to achieve ambitious goals through innovative, scalable, and flexible digital solutions. Built with cutting-edge technologies, each application ensures long-term performance, adaptability, and measurable impact, helping organizations stay competitive and drive sustainable growth in a rapidly evolving digital landscape.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic <br /> Roadmap</h4>
      ),
      para: 'We work collaboratively to create precise development plans aligned with operational goals and growth vision.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance <br /> Architecture</h4>
      ),
      para: 'We build efficient, modular, and stable applications optimized for reliable performance during heavy traffic and user growth.',
      image: signVector
    },
    {
      heading4: (
        <h4>Future-Ready <br />Scalability</h4>
      ),
      para: 'We design scalable, modular solutions enabling seamless, cost-effective updates, integrations, and future enhancements as needs evolve.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security <br /> Infrastructure</h4>
      ),
      para: 'We ensure data, user, and business security through layered protection and proactive threat monitoring systems.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is web application development?",
    answer:
      "Web application development involves building browser-based software that delivers dynamic, interactive functionality for users, businesses, or enterprises.",
  },
  {
    question: "How long does it take to build a web application?",
    answer:
      "Development time varies based on scope and complexity. Most projects range from 8 to 20 weeks, including planning, design, development, testing, and deployment.",
  },
  {
    question: "Can my web app integrate with existing systems?",
    answer:
      "Yes. We can integrate applications with CRMs, ERPs, analytics platforms, payment gateways, and more to ensure a seamless digital ecosystem.",
  },
  {
    question: "Will the application work on all devices?",
    answer:
      "Absolutely. We build fully responsive web applications optimized for performance across desktops, tablets, and mobile devices.",
  },
  {
    question: "How do you ensure application security?",
    answer:
      "We incorporate encryption, secure authentication, compliance checks, and regular audits to safeguard applications from potential threats.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes. We offer continuous support, feature updates, and maintenance to keep applications secure, optimized, and future-proof.",
  }
];

const WebAppDevelopment = () => {
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

export default WebAppDevelopment;
