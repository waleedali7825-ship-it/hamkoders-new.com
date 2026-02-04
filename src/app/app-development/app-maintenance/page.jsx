export const metadata = {
  title: "Mobile App Maintenance Services for Seamless App Performance",
  description:
    "Our mobile app maintenance services ensure your app stays fast, secure, and up-to-date—preventing issues, improving UX, and supporting your app’s growth.",
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

import vector from "../../../../public/images/app-maintenance-vector.webp";

import service1 from "../../../../public/images/app-services/app-maintenance/1.webp";
import service2 from "../../../../public/images/app-services/app-maintenance/2.webp";
import service3 from "../../../../public/images/app-services/app-maintenance/3.webp";
import service4 from "../../../../public/images/app-services/app-maintenance/4.webp";
import service5 from "../../../../public/images/app-services/app-maintenance/5.webp";
import service6 from "../../../../public/images/app-services/app-maintenance/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-maintain-ser.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Ongoing <span>App Maintenance</span>
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s mobile app maintenance services ensure apps remain secure, efficient, and up-to-date, monitoring performance for smooth operation and supporting business growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Keeping Applications Secure,<br /> <span>Fast, and Functional</span>
    </h2>
  ),
  para: "Our app backup and recovery and mobile app performance monitoring services ensure optimal performance, reliability, and user satisfaction by addressing technical issues, optimizing functionality, and maintaining compatibility with evolving platforms.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Performance<br />
          Monitoring
        </h4>
      ),
      para: "We monitor app performance metrics, detect bottlenecks, and implement enhancements to ensure smooth, responsive, and high-performing operation across all platforms and user interactions.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Bug Fixes
        </h4>
      ),
      para: "Our team quickly resolves errors, crashes, and technical issues, minimizing downtime and ensuring a seamless, uninterrupted, and reliable user experience across all applications.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Feature<br />
          Enhancements
        </h4>
      ),
      para: "We update app frameworks, libraries, and functionalities while introducing new features, improving usability, enhancing engagement, and ensuring applications remain modern, efficient, and high-performing.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Security <br />
          Management
        </h4>
      ),
      para: "Continuous monitoring and regular security updates safeguard sensitive data, prevent vulnerabilities, ensure compliance with industry standards, and maintain secure, reliable, and high-performing application environments.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Cross-Platform <br />
          Compatibility
        </h4>
      ),
      para: "We ensure applications stay fully compatible with the latest operating systems, devices, and third-party integrations, maintaining seamless functionality, optimal performance, and consistent user experience across platforms.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Analytics and<br />
          Reporting
        </h4>
      ),
      para: "We deliver performance insights, analyze user behavior, and offer actionable recommendations to enhance app efficiency, optimize growth, and ensure a seamless, high-performing user experience.",
    }
  ],
  btnText: "Start App Maintenance",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize App</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Reliability and Longevity</span>
      </h3>
    ),
  para: "Partner with HadzTech for app backup and recovery, ensuring applications deliver consistent performance, strong security, uninterrupted experiences, and remain valuable long-term assets.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Application Maintenance Solutions<span> for Continuous Success</span>
    </h2>
  ),
  para: 'Our mobile app maintenance services combine proactive monitoring, optimization, and high-quality technical support. Through mobile app support & maintenance services, HadzTech ensures apps remain secure, stable, future-ready, and perform flawlessly, providing continuous coverage and delivering exceptional user experiences while supporting business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Proactive<br />Monitoring</h4>
      ),
      para: 'We track system performance and optimize app speed, responsiveness, and efficiency on an ongoing basis.',
      image: signVector
    },
    {
      heading4: (
        <h4>Technical  <br />Support</h4>
      ),
      para: 'Our team resolves issues promptly, ensuring minimal disruption to users and smooth app functionality.',
      image: signVector
    },
    {
      heading4: (
        <h4>Feature <br />Updates</h4>
      ),
      para: 'We implement improvements and new functionalities that align with user feedback and business goals.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security <br /> Management</h4>
      ),
      para: 'Continuous updates and security measures protect sensitive data and maintain regulatory compliance.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is application maintenance?",
    answer:
      "Application maintenance involves ongoing support, updates, optimization, and issue resolution to keep apps secure, functional, and relevant.",
  },
  {
    question: "How often should apps be maintained?",
    answer:
      "Regular maintenance is recommended at least monthly, with critical updates applied immediately to ensure security and performance.",
  },
  {
    question: "Do you provide updates for both mobile and web applications?",
    answer:
      "Yes, we maintain and update both mobile and web apps, including frameworks, libraries, and features.",
  },
  {
    question: "Can you fix bugs and performance issues?",
    answer:
      "Absolutely. Our team promptly identifies and resolves errors, crashes, and performance bottlenecks.",
  },
  {
    question: "How do you ensure app security?",
    answer:
      "We implement security patches, encryption, authentication measures, and compliance best practices to protect data.",
  },
  {
    question: "Do you provide reports on app performance?",
    answer:
      "Yes, we provide analytics, performance reports, and actionable recommendations for optimization and growth.",
  }
];

const AppMaintenance = () => {
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

export default AppMaintenance;
