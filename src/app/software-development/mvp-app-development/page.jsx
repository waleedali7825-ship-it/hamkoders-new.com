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

import vector from "../../../../public/images/mvp-app-vector.webp";

import service1 from "../../../../public/images/android-service-1.webp";
import service2 from "../../../../public/images/android-service-1.webp";
import service3 from "../../../../public/images/android-service-1.webp";
import service4 from "../../../../public/images/android-service-1.webp";
import service5 from "../../../../public/images/android-service-1.webp";
import service6 from "../../../../public/images/android-service-1.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  heading1: (
    <h1 className="same-heading">
      Rapid<span> MVP App Development </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech, a leading mvp app development company, helps startups validate ideas by creating scalable, user-friendly MVPs focused on essential features and performance.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building MVPs That Test, Learn,<br /> <span>and Scale</span>
    </h2>
  ),
  para: "Our MVP mobile app development delivers functional, reliable applications that validate ideas, meet early user expectations, and allow rapid iteration for growth based on real-world feedback.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Feature-Focused<br />
          Development
        </h4>
      ),
      para: "We prioritize essential features to validate business ideas quickly without unnecessary complexity. This ensures fast deployment and early user engagement.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          User-Centric<br />
          Design
        </h4>
      ),
      para: "Our team develops intuitive interfaces that deliver a seamless experience for early adopters. Effective design encourages adoption and provides actionable insights.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Scalable<br />
          Architecture
        </h4>
      ),
      para: "Even as a lean version, the MVP is designed on a scalable foundation, supporting future features, updates, and business growth.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Rapid<br />
          Development
        </h4>
      ),
      para: "We employ agile methodologies to speed up development, ensuring your MVP is delivered efficiently and reaches the market quickly.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Feedback-Driven <br />
          Iteration
        </h4>
      ),
      para: "Our MVPs efficiently gather user feedback, enabling continuous improvements and refinements that guide product development and drive sustainable growth.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Post-Launch<br />
          Support
        </h4>
      ),
      para: "We offer continuous maintenance and updates, transforming your MVP into a fully-featured, scalable application that grows alongside your business needs.",
    }
  ],
  btnText: "Start MVP App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Validate Concepts</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Quickly and Effectively</span>
      </h3>
    ),
  para: "Partner with HadzTech to develop MVPs that validate ideas, gather insights, and deliver scalable, fast, and functional solutions for market success.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      MVP App Development Solutions Designed<span> for Speed and Growth</span>
    </h2>
  ),
  para: 'Our MVP App Development Services focus on creating efficient, scalable, and functional applications. As a trusted mvp app development company, our expert app developer MVP team accelerates time-to-market, validates business ideas, and delivers high-quality strategies to enhance app performance and drive growth.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic <br /> MVP Planning</h4>
      ),
      para: 'We define essential features and functionality to validate concepts while ensuring alignment with business goals.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized Lean<br />Architecture</h4>
      ),
      para: 'We develop lightweight, modular applications that can scale into full-featured products without complete reconstruction.',
      image: signVector
    },
    {
      heading4: (
        <h4>Agile Development<br />Process</h4>
      ),
      para: 'We use iterative development and testing to deliver a reliable MVP quickly, adapting based on user feedback.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security and <br /> Reliability</h4>
      ),
      para: 'Even as a lean product, the MVP ensures robust security and consistent performance to protect data.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is MVP app development?",
    answer:
      "MVP app development focuses on creating a simplified version of a product with essential features to validate an idea and test the market.",
  },
  {
    question: "How long does it take to develop an MVP?",
    answer:
      "Most MVPs can be developed within 4 to 8 weeks, depending on complexity and required features.",
  },
  {
    question: "Can the MVP scale into a full-featured app?",
    answer:
      "Yes, our MVPs are built on scalable architecture that allows seamless expansion as product evolves.",
  },
  {
    question: "Will the MVP be user-friendly?",
    answer:
      "Absolutely. We prioritize intuitive design and usability to ensure early adopters can engage effectively.",
  },
  {
    question: "Can you integrate third-party tools in the MVP?",
    answer:
      "Yes, we can integrate essential third-party services like analytics, payment gateways, and CRMs as needed.",
  },
  {
    question: "Do you offer post-launch support for MVPs?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and enhancements to help MVP transition into a fully-featured application.",
  }
];

const MvpAppDevelopment = () => {
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

export default MvpAppDevelopment;
