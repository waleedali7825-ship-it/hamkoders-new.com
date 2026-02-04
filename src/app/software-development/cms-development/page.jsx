export const metadata = {
  title: "CMS Development Services for Easy Content Control and Growth",
  description:
    "We deliver CMS development services that give you full control—build fast, secure, and scalable websites that are easy to update, manage, and grow over time.",
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

import vector from "../../../../public/images/cms-dev-banner.webp";

import service1 from "../../../../public/images/software-development-services/cms-development/1.webp";
import service2 from "../../../../public/images/software-development-services/cms-development/2.webp";
import service3 from "../../../../public/images/software-development-services/cms-development/3.webp";
import service4 from "../../../../public/images/software-development-services/cms-development/4.webp";
import service5 from "../../../../public/images/software-development-services/cms-development/5.webp";
import service6 from "../../../../public/images/software-development-services/cms-development/6.webp";

import discussCtaImage from "../../../../public/images/cms-dev-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Next-Gen<span> CMS </span>Solutions
    </h1>
  ),
  para: (
    <p className="para">
      Enhance digital presence with HadzTech CMS development services, offering efficient content management, enterprise solutions, and trusted CMS website development in the USA.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building CMS Platforms <br /> <span>That Empower Businesses</span>
    </h2>
  ),
  para: "Our CMS website development solutions deliver flexible, scalable, and secure platforms, simplifying content management, enhancing collaboration, and ensuring consistent, seamless digital experiences across all channels.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom CMS <br />
          Development
        </h4>
      ),
      para: "We develop CMS platforms customized to business requirements, allowing intuitive content creation, editing, and publishing.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Enterprise CMS <br />
          Development
        </h4>
      ),
      para: "Our enterprise CMS development solutions provide robust functionality, advanced security, and scalability to support large organizations.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Responsive CMS<br />
          Development
        </h4>
      ),
      para: "We build CMS website development solutions that are mobile-friendly, SEO-optimized, and user-centric to engage visitors effectively.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Automation and <br />
          Collaboration
        </h4>
      ),
      para: "Our CMS platforms streamline processes, automate repetitive tasks, and facilitate collaboration among teams for efficient operations.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integration with <br /> 
          Third-Party Tools
        </h4>
      ),
      para: "We ensure seamless integration with marketing, analytics, CRM, and other enterprise systems to enhance functionality.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Maintenance <br />
          & Support
        </h4>
      ),
      para: "We provide continuous monitoring, updates, and technical support to keep CMS secure, fast, and aligned with evolving business needs.",
    },
  ],
  btnText: "Start CMS Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Content </h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Management Efficiency</span>
      </h3>
    ),
  para: "Partner with HadzTech for enterprise CMS development that streamlines website management, enhances digital growth, and delivers secure, flexible, and scalable solutions for businesses.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      CMS Development Solutions<span> for Modern Enterprises</span>
    </h2>
  ),
  para: 'Our CMS development services provide comprehensive solutions for building dynamic, secure, and scalable websites. HadzTech, a trusted CMS development company in USA, delivers enterprise CMS development and expert CMS website development to enhance digital presence, streamline operations, and boost business efficiency.',
  demandBox: [
    {
      heading4: (
        <h4>Custom CMS <br /> Architecture</h4>
      ),
      para: 'We design and implement CMS platforms that match business processes and content strategy.',
      image: signVector
    },
    {
      heading4: (
        <h4>Enterprise CMS <br />Development</h4>
      ),
      para: 'Our solutions provide high-level security, modular functionality, and scalability for enterprise-level organizations.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive and <br /> Interactive Design</h4>
      ),
      para: 'We develop CMS website development that is visually appealing, user-friendly, and optimized for all devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integration and <br />Optimization</h4>
      ),
      para: 'We ensure seamless integration with third-party systems and optimize performance for speed, reliability, and usability.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is CMS development?",
    answer:
      "CMS development services involve creating platforms that allow businesses to manage website content efficiently and effectively.",
  },
  {
    question: "What is enterprise CMS development",
    answer:
      "Enterprise CMS development provides scalable, secure, and robust content management solutions for large organizations.",
  },
  {
    question: "Can CMS websites be customized?",
    answer:
      "Yes, we deliver fully customized CMS website development tailored to workflows, design, and business requirements.",
  },
  {
    question: "Why choose HadzTech as a CMS development company in USA?",
    answer:
      "As a trusted CMS development company in USA, we combine expertise, innovation, and best practices to deliver high-quality, scalable, and secure CMS solutions.",
  },
  {
    question: "Can CMS integrate with other business tools?",
    answer:
      "Absolutely. Our CMS solutions integrate with CRM, marketing, analytics, and other enterprise systems for enhanced functionality.",
  },
  {
    question: "Do you provide ongoing CMS support and maintenance?",
    answer:
      "Yes, we offer continuous updates, monitoring, and technical support to ensure CMS remains secure, optimized, and reliable.",
  }
];

const CmsDevelopment = () => {
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

export default CmsDevelopment;
