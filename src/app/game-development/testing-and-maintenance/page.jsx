export const metadata = {
  title: "Game Performance Testing That Ensures Stability and Speed",
  description:
    "We offer game performance testing to detect bugs, boost speed, and enhance gameplay—ensuring your game runs smoothly across all devices and player scenarios.",
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

import vector from "../../../../public/images/testing-and-maintenance-banner.webp";

import service1 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/1.webp";
import service2 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/2.webp";
import service3 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/3.webp";
import service4 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/4.webp";
import service5 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/5.webp";
import service6 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/6.webp";

import discussCtaImage from "../../../../public/images/testing-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Flawless<span> App Performance </span>Solutions
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech offers expert game performance testing services to ensure smooth gameplay, enhanced speed, robust security, and reliable performance across all gaming platforms.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Ensuring Quality, Security, <br /> <span>and Performance</span>
    </h2>
  ),
  para: "Our game QA testing services ensure flawless gameplay through proactive maintenance, early bug detection, and continuous optimization, delivering stable, high-performing games throughout their lifecycle.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Functional <br />
          Testing
        </h4>
      ),
      para: "We verify that all features and functionalities perform as intended, ensuring seamless interactions and flawless operations.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Performance <br />
          Testing
        </h4>
      ),
      para: "Our team tests apps under various conditions to ensure speed, responsiveness, and stability, even during peak usage.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Vulnerability<br />
          Assessment
        </h4>
      ),
      para: "We conduct thorough security audits and implement preventive measures to protect user data and prevent potential breaches.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Bug Fixes<br />
          and Update
        </h4>
      ),
      para: "We provide timely fixes for detected issues and regular updates to maintain compatibility with devices, OS versions, and third-party integrations.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Compatibility <br />
          Checks
        </h4>
      ),
      para: "We ensure applications function consistently across mobile, web, and other platforms, delivering a uniform user experience.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Monitoring
        </h4>
      ),
      para: "We monitor app performance, apply improvements, and optimize continuously to meet changing business needs and user expectations.",
    },
  ],
  btnText: "Start testing & Maintenance",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize App Reliability</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>and User Satisfaction</span>
      </h3>
    ),
  para: "Partner with HadzTech for cloud-based game testing that ensures secure, fast, and reliable apps, enhancing performance, uptime, and user engagement.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Testing & Maintenance Solutions<span> for Optimal App Performance</span>
    </h2>
  ),
  para: 'Our Testing & Maintenance Services ensure lasting app excellence through structured procedures, proactive monitoring, and timely updates. With advanced game performance testing and dedicated post-launch game support, we optimize stability, security, and speed delivering seamless user experiences and reliable performance across all gaming platforms.',
  demandBox: [
    {
      heading4: (
        <h4>Comprehensive <br /> Quality Assurance</h4>
      ),
      para: 'We perform detailed testing to detect and fix functional, performance, and security issues before user impact.',
      image: signVector
    },
    {
      heading4: (
        <h4>Performance <br /> Optimization</h4>
      ),
      para: 'We ensure apps deliver fast load times, smooth performance, and efficient operation across all devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security<br />and Compliance</h4>
      ),
      para: 'We ensure data protection through strict security measures, safeguarding user privacy and maintaining regulatory compliance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Updates and<br />Support</h4>
      ),
      para: 'We deliver continuous maintenance, updates, and support to ensure applications remain reliable and up-to-date.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is testing and maintenance in app development?",
    answer:
      "It involves verifying app functionality, performance, and security, while providing ongoing updates and optimizations post-launch.",
  },
  {
    question: "Why is testing important?",
    answer:
      "Testing ensures the app is free from bugs, runs efficiently, and provides a seamless user experience across all platforms.",
  },
  {
    question: "Do you provide security testing?",
    answer:
      "Yes, we conduct thorough security assessments to detect vulnerabilities and implement preventive measures.",
  },
  {
    question: "How often should app maintenance be done?",
    answer:
      "Regular maintenance is recommended monthly or as needed, including updates, bug fixes, and performance optimization."
  },
  {
    question: "Can you maintain cross-platform applications",
    answer:
      "Absolutely. We ensure apps function consistently on mobile, web, and other platforms.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide continuous monitoring, updates, bug fixes, and technical support to maintain app reliability and performance.",
  }
];

const TestingAndMaintenance = () => {
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

export default TestingAndMaintenance;
