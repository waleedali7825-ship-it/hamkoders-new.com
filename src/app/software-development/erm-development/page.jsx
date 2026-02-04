export const metadata = {
  title: "Enterprise Risk Management Services for Smarter Decisions",
  description:
    "We provide enterprise risk management services to help you identify, manage, and reduce business risks—ensuring compliance, continuity, and long-term stability.",
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

import vector from "../../../../public/images/erm-dev-banner.webp";

import service1 from "../../../../public/images/software-development-services/erm-development/1.webp";
import service2 from "../../../../public/images/software-development-services/erm-development/2.webp";
import service3 from "../../../../public/images/software-development-services/erm-development/3.webp";
import service4 from "../../../../public/images/software-development-services/erm-development/4.webp";
import service5 from "../../../../public/images/software-development-services/erm-development/5.webp";
import service6 from "../../../../public/images/software-development-services/erm-development/6.webp";

import discussCtaImage from "../../../../public/images/erm-dev-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Enterprise<span> Risk Management </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      Strengthen your organization’s resilience and decision-making with our expert enterprise risk management services. We help you identify, assess, and mitigate risks through centralized data, automated workflows, and secure, compliant solutions  empowering smarter business operations and long-term growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Delivering ERM Solutions
      <br /> <span>That Minimize Risk</span>
    </h2>
  ),
  para: "Our tailored enterprise risk management services help organizations identify threats, streamline compliance, reduce operational risks, and ensure secure, scalable business continuity.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom ERM <br />
          Development
        </h4>
      ),
      para: "We design tailored ERM solutions that align with your organization’s risk management goals, improving visibility, compliance, and operational efficiency.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          ERM Software <br />
          Integration
        </h4>
      ),
      para: "Our expert team delivers advanced ERM software development, enabling businesses to effectively identify, assess, and mitigate potential risks across all departments.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Automation and <br />
          Workflow
        </h4>
      ),
      para: "We automate complex risk management tasks, minimize manual processes, and streamline workflows to enhance accuracy, speed, and overall productivity.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data Analytics <br />
          and Reporting
        </h4>
      ),
      para: "Our ERM platforms provide real-time insights, interactive dashboards, and detailed reports that empower better decision-making and business resilience.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integration with <br />
          Existing Systems
        </h4>
      ),
      para: "We ensure seamless integration of ERM tools with existing ERP, CRM, and finance systems for unified operations and improved performance.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Support and 
          <br />
          Maintenance
        </h4>
      ),
      para: "Through our enterprise risk management services, we provide continuous monitoring, timely updates, and dedicated support to keep your ERM systems secure, efficient, and scalable.",
    },
  ],
  btnText: "Start ERM Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Business Control</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>and Risk Readiness</span>
    </h3>
  ),
  para: "Partner with HadzTech for ERM software development that centralizes risk data, automates compliance workflows, improves decision-making, and supports sustainable business growth",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Risk Management Solutions<span> for Modern Enterprises</span>
    </h2>
  ),
  para: "HadzTech provides expert enterprise risk management services to help organizations identify threats, ensure compliance, and maintain operational stability. Our scalable solutions are designed to support business growth, strengthen internal controls, and adapt to evolving risks empowering companies to manage uncertainty with confidence in today’s fast-changing regulatory and business environment.",
  demandBox: [
    {
      heading4: (
        <h4>
          Custom ERM <br />Architecture
        </h4>
      ),
      para: "We develop scalable ERM systems tailored to your industry and business needs for optimal performance.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Advanced Risk <br />
          Capabilities
        </h4>
      ),
      para: "Integrated ERM features help organizations proactively address operational, financial, and compliance risks.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Workflow <br />
          Automation
        </h4>
      ),
      para: "Our solutions streamline communication, automate tasks, and boost team productivity.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Insightful <br /> Analytics
        </h4>
      ),
      para: "Gain real-time data, detailed reports, and dashboards to guide strategic decisions and performance tracking.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What is ERM development?",
    answer:
      "ERM development focuses on building systems that identify, assess, and manage enterprise-level risks to ensure business continuity and compliance.",
  },
  {
    question: "How does ERM improve risk control?",
    answer:
      "By combining enterprise risk management services with advanced ERM software development, businesses gain real-time visibility into potential risks and can respond more effectively.",
  },
  {
    question: "Can ERM solutions be tailored by industry?",
    answer:
      "Yes, our ERM frameworks are fully customized to meet the unique regulatory, operational, and strategic needs of different industries.",
  },
  {
    question: "Do ERM systems provide analytics?",
    answer:
      "Absolutely. Our solutions offer real-time dashboards, reports, and data insights for informed risk-based decisions.",
  },
  {
    question: "Are ERM tools compatible with other systems?",
    answer:
      "Yes, we integrate ERM with ERP, finance, and compliance platforms for smooth, centralized operations.",
  },
  {
    question: "Is ongoing support available?",
    answer:
      "We provide continuous maintenance, updates, and support to ensure your ERM system stays reliable and secure.",
  },
];

const ErpDevelopment = () => {
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

export default ErpDevelopment;
