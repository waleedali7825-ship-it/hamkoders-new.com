export const metadata = {
  title: "Website Maintenance Service Agency for Reliable Site Support",
  description:
    "We provide website maintenance service agency solutions that keep your site fast, secure, and up-to-date — so you can focus on growth, not technical issues.",
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

import vector from "../../../../public/images/website-maintenance-vector.webp";

import service1 from "../../../../public/images/website-services/website-maintenance/1.webp";
import service2 from "../../../../public/images/website-services/website-maintenance/2.webp";
import service3 from "../../../../public/images/website-services/website-maintenance/3.webp";
import service4 from "../../../../public/images/website-services/website-maintenance/4.webp";
import service5 from "../../../../public/images/website-services/website-maintenance/5.webp";
import service6 from "../../../../public/images/website-services/website-maintenance/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-maintain-ser.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Reliable <span>Website Maintenance</span>
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s website maintenance service keeps your digital presence secure,
      fast, and fully functional, ensuring seamless performance and protecting
      brand reputation.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Keeping Website Secure, Fast,
      <br /> <span>and Up-to-Date</span>
    </h2>
  ),
  para: "Our maintenance of website services ensure updates, monitoring, and optimization keep your site secure, efficient, high-performing, and aligned with business goals, maintaining user trust.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Performance <br />
          Optimization
        </h4>
      ),
      para: "We regularly monitor load times, server response, and overall website speed. Optimized performance ensures better user experience and higher engagement rates.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Security Monitoring <br />
          and Updates
        </h4>
      ),
      para: "Our team implements security patches, scans for vulnerabilities, and enforces best practices to protect websites from cyber threats.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Content and
          <br />
          Feature Updates
        </h4>
      ),
      para: "We handle updates to content, plugins, and functionality, keeping the website fresh, relevant, and aligned with evolving business needs.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Backup and <br />
          Recovery Solutions
        </h4>
      ),
      para: "Regular backups and recovery strategies safeguard data. In the event of unexpected issues, we ensure minimal disruption and fast restoration.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO and <br />
          Compatibility Checks
        </h4>
      ),
      para: "We maintain SEO standards, browser compatibility, and responsive design to ensure the website continues to perform well in search rankings and across devices.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Analytics and <br />
          Reporting
        </h4>
      ),
      para: "Our team provides insights into website performance, user behavior, and technical health, helping guide future improvements and strategic decisions.",
    },
  ],
  btnText: "Start Website Maintenance",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Website’s Longevity</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>and Effectiveness</span>
    </h3>
  ),
  para: "Partner with HadzTech for continuous monitoring and professional website maintenance, keeping your platform secure, optimized, and a reliable, high-performing business asset.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Comprehensive Website<span> Maintenance Solutions</span>
    </h2>
  ),
  para: "Our website maintenance service offers comprehensive, proactive support to ensure your site remains secure, efficient, and high-performing. By preventing issues before they arise and adapting to evolving technologies, we keep your digital platform reliable, optimized, and ready to support ongoing business growth.",
  demandBox: [
    {
      heading4: (
        <h4>
          Monitoring and
          <br /> Updates
        </h4>
      ),
      para: "We regularly scan, update, and optimize all website components to prevent downtime and performance issues.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Security-First <br />
          Approach
        </h4>
      ),
      para: "Ongoing vulnerability checks and updates protect sensitive information and maintain user trust.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Functional
          <br />
          Support
        </h4>
      ),
      para: "We implement content revisions, plugin updates, and feature enhancements to keep the website relevant and effective.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Reporting and <br /> Recommendations
        </h4>
      ),
      para: "Detailed analytics and recommendations help identify areas for improvement and optimize site for long-term success.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What does website maintenance include?",
    answer:
      "It includes updates, security monitoring, performance optimization, backups, compatibility checks, and ongoing technical support.",
  },
  {
    question: "How often should a website be maintained?",
    answer:
      "Regular maintenance is recommended at least monthly, with critical updates applied immediately to ensure security and functionality.",
  },
  {
    question: "Can you handle content updates and design changes?",
    answer:
      "Yes, we manage content revisions, plugin updates, and minor design or functional changes as part of ongoing maintenance.",
  },
  {
    question: "How do you ensure website security?",
    answer:
      "We implement updates, vulnerability scans, firewall management, and proactive monitoring to prevent cyber threats.",
  },
  {
    question: "What if my website experiences downtime or technical issues?",
    answer:
      "Our team provides quick troubleshooting, restoration from backups, and resolution to minimize disruption and maintain performance.",
  },
  {
    question: "Do you offer performance reporting for my website?",
    answer:
      "Yes, we provide analytics on speed, user behavior, SEO, and technical health, along with actionable recommendations.",
  },
];

const WebMaintenance = () => {
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

export default WebMaintenance;
