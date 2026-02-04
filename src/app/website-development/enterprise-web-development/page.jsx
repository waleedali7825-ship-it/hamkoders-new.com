export const metadata = {
  title: "Enterprise Web Development Services for Scalable Performance",
  description:
    "We deliver enterprise web development that’s scalable, secure, and tailored to complex business needs, built for performance, flexibility, and long-term growth.",
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

import vector from "../../../../public/images/enterprise-web-vector.webp";

import service1 from "../../../../public/images/website-services/enterprise-web-development/1.webp";
import service2 from "../../../../public/images/website-services/enterprise-web-development/2.webp";
import service3 from "../../../../public/images/website-services/enterprise-web-development/3.webp";
import service4 from "../../../../public/images/website-services/enterprise-web-development/4.webp";
import service5 from "../../../../public/images/website-services/enterprise-web-development/5.webp";
import service6 from "../../../../public/images/website-services/enterprise-web-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-ent-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.webp";
import enterpriseBGImage from "../../../../public/images/enterprise-dev-banner.webp";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      <span>Enterprise-Grade</span> Web Solutions
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech offers
      <span> Enterprise Web Development </span> Services focused on secure,
      scalable, and innovative platforms that enhance operations, drive growth,
      and empower long-term digital success.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building the Digital Core <br /> <span> of Large-Scale Enterprises</span>
    </h2>
  ),
  para: "Our advanced Web Development Services deliver high-performing, scalable platforms designed to handle complex data, heavy traffic, and critical operations while driving agility, innovation, and sustainable business growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Advanced Platform <br />
          Architecture
        </h4>
      ),
      para: "We design multi-layered, scalable platforms that evolve with organization. Our infrastructure supports rapid feature expansion, seamless integration, and uninterrupted performance under enterprise demands.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Seamless User <br />
          Ecosystem
        </h4>
      ),
      para: "User-centric functionality and intuitive interface design power adoption across departments and stakeholders. We build platforms that simplify collaboration, improve engagement, and drive consistent results.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Peak Performance <br />
          Engineering
        </h4>
      ),
      para: "Our development strategies emphasize optimization at every layer from backend logic to frontend responsiveness. The result is a stable, lightning-fast platform built to handle high-volume operations with ease.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Enterprise-Grade <br />
          Data Protection
        </h4>
      ),
      para: "We implement industry-leading encryption, compliance standards, and continuous monitoring protocols. Sensitive business data remains secure, while critical operations stay resilient against evolving cyber threats.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Search-Centric <br />
          Architecture
        </h4>
      ),
      para: "Enterprise websites built by HadzTech are structured for superior discoverability. We embed SEO-ready architecture and indexing strategies to ensure sustained visibility in competitive markets.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Measurable <br />
          Outcomes
        </h4>
      ),
      para: "Our enterprise builds don’t just support business, they strengthen it. Every solution is designed to deliver operational efficiencies, improve revenue channels, and support strategic growth initiatives.",
    },
  ],
  btnText: "Start Enterprise Website Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Powering the Next Generation of</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>Enterprise Operations</span>
    </h3>
  ),
  para: "Partner with HadzTech to create scalable digital solutions that transform complex challenges into efficient systems, driving global impact, innovation, and long-term business growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Enterprise <span> Development Solutions</span> Engineered for Evolution
    </h2>
  ),
  para: "Our Enterprise Web Development solutions empower large organizations with scalable, future-ready digital platforms designed for growth and innovation. Each solution aligns with strategic goals, enhances operational efficiency, and ensures long-term performance excellence, helping enterprises achieve sustainable success in an ever-evolving digital landscape.",
  demandBox: [
    {
      heading4: (
        <h4>
          Tailored
          <br /> Digital Strategy
        </h4>
      ),
      para: "We collaborate with stakeholders to create tailored solutions aligned with goals, industry standards, and enterprise workflows.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Infrastructure Built <br /> for Reliability
        </h4>
      ),
      para: "We build scalable, reliable systems with cloud-native architecture and microservices to ensure continuous performance and growth.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Adaptive Scalability <br /> Model
        </h4>
      ),
      para: "We create scalable solutions that grow seamlessly, adding features and users without affecting performance or operations.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Integrated Security <br /> Foundation
        </h4>
      ),
      para: "We embed compliance, encryption, and access control to secure data and maintain regulatory readiness throughout development.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What defines enterprise-level web development?",
    answer:
      "It’s the process of building large-scale, secure, and scalable platforms tailored to support complex operations, multiple departments, and high-volume data processing.",
  },
  {
    question: "How do enterprise projects differ from standard websites?",
    answer:
      "Enterprise platforms require deeper architecture, advanced integrations, stronger security, and performance optimization capable of supporting thousands of users simultaneously.",
  },
  {
    question:
      "Can existing enterprise systems be integrated with new platforms?",
    answer:
      "Yes. We specialize in seamless integration with ERPs, CRMs, analytics suites, and other mission-critical tools to unify the technology ecosystem.",
  },
  {
    question: "How long does an enterprise project typically take?",
    answer:
      "Depending on complexity, development timelines range from 12 to 24 weeks, covering planning, architecture, development, testing, and deployment.",
  },
  {
    question: "Will the platform remain adaptable to future needs?",
    answer:
      "Absolutely. Our modular approach ensures easy upgrades, technology adoption, and scalability as organization evolves.",
  },
  {
    question: "Do you provide post-launch enterprise support?",
    answer:
      "Yes. We offer continuous monitoring, performance optimization, and maintenance services to keep enterprise systems secure and future-ready.",
  },
];

const EnterpriseWebDevelopment = () => {
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

export default EnterpriseWebDevelopment;
