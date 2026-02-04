export const metadata = {
  title: "ERP Software Development Services to Streamline Operations",
  description:
    "Our ERP software development services simplify complex processes—boosting productivity with tailored systems that connect teams, data, and workflows.",
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

import vector from "../../../../public/images/erp-development-banner.webp";

import service1 from "../../../../public/images/software-development-services/erp-development/1.webp";
import service2 from "../../../../public/images/software-development-services/erp-development/1.webp";
import service3 from "../../../../public/images/software-development-services/erp-development/2.webp";
import service4 from "../../../../public/images/software-development-services/erp-development/3.webp";
import service5 from "../../../../public/images/software-development-services/erp-development/4.webp";
import service6 from "../../../../public/images/software-development-services/erp-development/5.webp";

import discussCtaImage from "../../../../public/images/erp-dev-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Smart<span> ERP Solutions </span>for Growth
    </h1>
  ),
  para: (
    <p className="para">
      Boost productivity and efficiency with HadzTech’s ERP software development services, integrating finance, HR, and operations into one smart, connected system.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating ERP Systems<br /> <span>That Empower Businesses</span>
    </h2>
  ),
  para: "Our ERP app development solutions are tailored to your business needs, streamlining workflows, improving teamwork, and delivering real-time insights for smarter decision-making.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom ERP <br />
          Solutions
        </h4>
      ),
      para: "We build ERP systems specifically tailored to business processes, ensuring complete alignment with operational needs.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Modular and <br />
          Scalable
        </h4>
      ),
      para: "Our ERP platforms are modular, enabling easy addition of new features and scalability as business grows.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Process<br />
          Automation
        </h4>
      ),
      para: "We automate repetitive and time-consuming tasks, improving efficiency and reducing human error across organizations.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data <br />
          Analytics
        </h4>
      ),
      para: "Our ERP systems provide real-time insights, customizable reports, and dashboards to support informed decision-making.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integration
        </h4>
      ),
      para: "We ensure seamless integration with current software and tools to maintain continuity and optimize workflows.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Maintenance
        </h4>
      ),
      para: "We offer updates, monitoring, and support to keep your ERP system efficient, secure, and reliable.",
    },
  ],
  btnText: "Start ERP Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Operational Efficiency</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with ERP Expertise</span>
      </h3>
    ),
  para: "Partner with HadzTech’s expert developer ERP team to streamline operations, boost productivity, and enable scalable business growth through integrated management solutions.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      ERP Development Solutions<span> for Modern Businesses</span>
    </h2>
  ),
  para: 'Our ERP software development services deliver complete solutions that streamline operations, cut costs, and enhance decision-making. Hire ERP developer experts from HadzTech to unify workflows, boost productivity, and empower scalable business growth with efficient and integrated management systems.',
  demandBox: [
    {
      heading4: (
        <h4>Custom ERP <br /> Development</h4>
      ),
      para: 'We design solutions tailored to industry and business needs, ensuring optimal functionality and workflow management.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable <br />Architecture</h4>
      ),
      para: 'ERP systems are built with flexibility in mind, supporting growth and future enhancements without disruption.',
      image: signVector
    },
    {
      heading4: (
        <h4>Workflow <br />Automation</h4>
      ),
      para: 'We automate processes to reduce manual work, minimize errors, and increase overall efficiency.',
      image: signVector
    },
    {
      heading4: (
        <h4>Data-Driven <br /> Support</h4>
      ),
      para: 'Our ERP platforms provide real-time analytics, reports, and insights to facilitate strategic planning and performance tracking.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is ERP development?",
    answer:
      "ERP development involves creating enterprise resource planning systems that integrate multiple business processes into a single, efficient platform.",
  },
  {
    question: "How long does it take to develop an ERP system?",
    answer:
      "The timeline depends on complexity and features, typically ranging from 12 to 24 weeks for a fully customized ERP solution.",
  },
  {
    question: "Can ERP systems be customized for different industries?",
    answer:
      "Yes, we provide custom ERP development tailored to industry, workflow, and operational needs.",
  },
  {
    question: "Does ERP help with data analytics?",
    answer:
      "Absolutely. ERP systems provide real-time data analytics, dashboards, and reports for informed decision-making.",
  },
  {
    question: "Can ERP integrate with existing business tools?",
    answer:
      "Yes, we ensure seamless integration with current software, including accounting, CRM, and inventory management systems.",
  },
  {
    question: "Do you provide ongoing ERP support?",
    answer:
      "Yes, we offer continuous maintenance, updates, and technical support to ensure reliable ERP performance.",
  }
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
      <DemandComp demandCompData={demandCompData}/>
      <FAQSection faqs={faqs} />
    </PageLayout>
  );
};

export default ErpDevelopment;
