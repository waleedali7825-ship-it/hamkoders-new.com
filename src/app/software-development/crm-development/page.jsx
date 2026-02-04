export const metadata = {
  title: "CRM Developer Services to Build Stronger Customer Relations",
  description:
    "Our expert CRM developers create custom solutions to organize sales, track customer data, and improve engagement—helping your team stay connected and responsive.",
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

import vector from "../../../../public/images/crm-dev-banner.webp";

import service1 from "../../../../public/images/software-development-services/crm-development/1.webp";
import service2 from "../../../../public/images/software-development-services/crm-development/2.webp";
import service3 from "../../../../public/images/software-development-services/crm-development/3.webp";
import service4 from "../../../../public/images/software-development-services/crm-development/4.webp";
import service5 from "../../../../public/images/software-development-services/crm-development/5.webp";
import service6 from "../../../../public/images/software-development-services/crm-development/6.webp";

import discussCtaImage from "../../../../public/images/crm-dev-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Smart<span> CRM Solutions </span>for Growth
    </h1>
  ),
  para: (
    <p className="para">
      Boost customer engagement and business efficiency with expert CRM developer solutions that centralize data, streamline communication, and ensure secure operations.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating CRM Solutions<br /> <span>That Drive Growth</span>
    </h2>
  ),
  para: "Our custom CRM development solutions align with your business goals, enhancing customer engagement, streamlining operations, and driving long-term growth with seamless functionality.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom CRM <br />
          Development
        </h4>
      ),
      para: "We create tailored CRM solutions that align with business workflows, enhancing productivity, efficiency, and client relationship management.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          ERM Software <br />
          Integration
        </h4>
      ),
      para: "Our CRM solutions integrate ERM software development features, helping businesses efficiently identify, monitor, and manage operational risks.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Automation<br />
          and Workflow
        </h4>
      ),
      para: "We automate repetitive tasks, minimize manual work, and optimize workflows to boost team productivity and overall efficiency.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data Analytics <br />
          and Reporting
        </h4>
      ),
      para: "Our CRM systems provide real-time insights, customizable dashboards, and detailed reports to enhance strategic decision-making and business growth.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integration with <br /> 
          Existing Tools
        </h4>
      ),
      para: "We ensure smooth integration of CRM with ERP, marketing, and communication platforms to maintain continuous and efficient business operations.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Support and <br />
          Maintenance
        </h4>
      ),
      para: "We offer ongoing updates, monitoring, and technical support to keep CRM systems secure, efficient, and scalable for businesses.",
    },
  ],
  btnText: "Start CRM Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Customer Engagement</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>and Risk Management</span>
      </h3>
    ),
  para: "Partner with HadzTech for CRM system development services that unify client data, streamline workflows, enhance engagement, and drive long-term business growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      CRM Development Solutions<span> for Modern Businesses</span>
    </h2>
  ),
  para: 'Our CRM development agency offers comprehensive solutions to enhance customer experience, streamline operations, and manage risks effectively. Hire expert CRM developer professionals from HadzTech to integrate ERM software, improve engagement, optimize workflows, and ensure secure, efficient, and scalable CRM systems for modern businesses.',
  demandBox: [
    {
      heading4: (
        <h4>Custom CRM <br /> Architecture</h4>
      ),
      para: 'We design scalable CRM systems personalized to industry and business requirements for maximum effectiveness.',
      image: signVector
    },
    {
      heading4: (
        <h4>ERM Software  <br />Capabilities</h4>
      ),
      para: 'We integrate ERM features enabling businesses to proactively manage operational, financial, and compliance risks efficiently.',
      image: signVector
    },
    {
      heading4: (
        <h4>Automation and <br />Productivity</h4>
      ),
      para: 'Our platforms streamline communication, tasks, and workflows to increase team efficiency and reduce errors.',
      image: signVector
    },
    {
      heading4: (
        <h4>Data-Driven <br /> Insights</h4>
      ),
      para: 'We provide real-time analytics, reports, and dashboards to support strategic planning and performance evaluation.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is CRM development?",
    answer:
      "CRM development involves building systems that manage customer data, optimize relationships, and improve operational efficiency.",
  },
  {
    question: "How does CRM support risk management?",
    answer:
      "By integrating enterprise risk management services and ERM software development, CRM systems help businesses identify, monitor, and mitigate potential risks.",
  },
  {
    question: "Can CRM be customized for different industries?",
    answer:
      "Yes, we provide fully tailored CRM solutions that align with workflows, goals, and industry requirements.",
  },
  {
    question: "Does CRM offer analytics and reporting?",
    answer:
      "Absolutely. Our systems deliver dashboards, reports, and real-time insights for better decision-making.",
  },
  {
    question: "Can CRM integrate with other business tools?",
    answer:
      "Yes, we ensure seamless integration with ERP, marketing platforms, and communication tools for smooth operations.",
  },
  {
    question: "Do you provide ongoing support for CRM systems?",
    answer:
      "Yes, we offer maintenance, updates, and technical support to keep CRM secure, efficient, and scalable.",
  }
];

const CrmDevelopment = () => {
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

export default CrmDevelopment;
