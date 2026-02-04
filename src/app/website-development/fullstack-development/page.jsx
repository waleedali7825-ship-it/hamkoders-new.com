export const metadata = {
  title: "Full Stack Development Agency Services for Scalable Solution",
  description:
    "We offer full-stack development agency services that bring frontend and backend together — smart, secure, and built to scale with your business at every stages.",
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

import vector from "../../../../public/images/fullstack-vector.webp";

import service1 from "../../../../public/images/website-services/fullstack-development/1.webp";
import service2 from "../../../../public/images/website-services/fullstack-development/2.webp";
import service3 from "../../../../public/images/website-services/fullstack-development/3.webp";
import service4 from "../../../../public/images/website-services/fullstack-development/4.webp";
import service5 from "../../../../public/images/website-services/fullstack-development/5.webp";
import service6 from "../../../../public/images/website-services/fullstack-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-full-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Comprehensive<span> Full-Stack</span> Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech, a leading full stack development agency, delivers seamless, scalable front-end and back-end solutions, turning ideas into fully functional digital experiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Bridging Front-End Innovation<br /> <span>with Back-End Power</span>
    </h2>
  ),
  para: "Designing intelligent, scalable platforms, full stack developers ensure every layer from front-end to back-end works seamlessly, delivering high-performance, user-friendly, and impactful web solutions for business growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Unified <br />
          Architecture
        </h4>
      ),
      para: "We build complete systems that seamlessly connect user interfaces with server-side logic. This unified approach ensures fast performance, smooth functionality, and scalable infrastructure.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          End-to-End <br />
          Development
        </h4>
      ),
      para: "From design to deployment, our process covers every stage of development. A single, integrated team ensures consistency, faster delivery, and superior quality control.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized<br />
          Performance
        </h4>
      ),
      para: "We develop interfaces that engage users and server systems that handle complex operations with speed and precision. Every element is engineered for responsiveness, security, and reliability.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Advanced<br />
          Integration
        </h4>
      ),
      para: "Our full-stack solutions support a wide range of integrations from third-party APIs and databases to enterprise platforms ensuring flexibility and future scalability.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Security and<br />
          Compliance
        </h4>
      ),
      para: "With secure coding practices, encrypted communication, and continuous vulnerability assessments, we protect sensitive data and maintain platform integrity.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Measurable<br />
          Business Value 
        </h4>
      ),
      para: "Our goal is to deliver real results increased engagement, improved conversions, and enhanced operational efficiency through fully optimized digital solutions.",
    }
  ],
  btnText: "Start Fullstack Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Delivering Digital Ecosystems</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>from a Single Source</span>
      </h3>
    ),
  para: "Partner with HadzTech for end-to-end development, ensuring seamless integration of all components, accelerating innovation, streamlining delivery, and achieving measurable digital product results.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      End-to-End<span> Full Stack Development</span> for Scalable Growth
    </h2>
  ),
  para: 'Our full stack development agency offers comprehensive full stack development services that combine front-end and back-end expertise. We build seamless, high-performing digital products optimized for speed, scalability, and business impact, delivering agile solutions that engage users and drive measurable growth.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic Product <br /> Planning</h4>
      ),
      para: 'We create a tailored full-stack roadmap, aligning decisions with business goals through data-driven, growth-focused strategies.',
      image: signVector
    },
    {
      heading4: (
        <h4>Robust <br /> Architecture</h4>
      ),
      para: 'Our solutions scale seamlessly, managing growing traffic, features, and business needs while maintaining top performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Continuous<br />Innovation</h4>
      ),
      para: 'We leverage modern technologies and frameworks to keep products competitive, adaptable, and aligned with market changes.',
      image: signVector
    },
    {
      heading4: (
        <h4>Reliable<br /> Infrastructure</h4>
      ),
      para: 'We implement multi-layered security, safeguarding both server and user interactions to protect platforms effectively.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is full-stack development?",
    answer:
      "Full-stack development covers both front-end (client-side) and back-end (server-side) components of a web application, delivering complete, fully functional digital solutions.",
  },
  {
    question: "Why should I choose full-stack development?",
    answer:
      "It ensures a cohesive build process, faster delivery, and seamless integration between different components resulting in better performance and scalability.",
  },
  {
    question: "What technologies do you use for full-stack projects?",
    answer:
      "We use a combination of technologies like React, Vue.js, Angular, Node.js, Python, PHP, and databases such as MongoDB and PostgreSQL.",
  },
  {
    question: "Can you upgrade or scale existing full-stack applications?",
    answer:
      "Yes. We can modernize legacy systems, improve performance, and add new features to meet evolving business needs.",
  },
  {
    question: "How long does a typical full-stack project take?",
    answer:
      "Depending on complexity, most projects are completed within 10 to 20 weeks, including planning, development, testing, and deployment.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely. We provide ongoing maintenance, updates, performance monitoring, and feature enhancements to ensure long-term success.",
  }
];

const FullstackDevelopment = () => {
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

export default FullstackDevelopment;
