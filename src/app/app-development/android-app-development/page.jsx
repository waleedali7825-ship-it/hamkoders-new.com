export const metadata = {
  title: "Custom Android App Development for Growth-Ready Businesses",
  description:
    "We deliver custom Android app development services that blend sleek design, smooth performance, and scalability—built to engage users across all devices.",
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

import vector from "../../../../public/images/android-app-vector.webp";

import service1 from "../../../../public/images/app-services/android-development/1.webp";
import service2 from "../../../../public/images/app-services/android-development/2.webp";
import service3 from "../../../../public/images/app-services/android-development/3.webp";
import service4 from "../../../../public/images/app-services/android-development/4.webp";
import service5 from "../../../../public/images/app-services/android-development/5.webp";
import service6 from "../../../../public/images/app-services/android-development/6.webp";

import discussCtaImage from "../../../../public/images/android-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Powerful<span> Android App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s android app development services create high-performing, user-friendly apps with seamless design and functionality to expand reach and boost engagement.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Android Apps<br /> <span>That Connect and Convert</span>
    </h2>
  ),
  para: "Our android app development process focuses to develop app for android that’s fast, scalable, and user-friendly, enhancing engagement and achieving business goals.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom App<br />
          Architecture
        </h4>
      ),
      para: "We design Android apps with scalable and maintainable architecture to support growth and evolving requirements. Every build ensures reliable performance under high user demand.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          User-Centered <br />
          UI/UX Design
        </h4>
      ),
      para: "Our team develops interfaces that are intuitive, visually engaging, and easy to navigate. Thoughtful design enhances user satisfaction, retention, and conversion rates.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized<br />
          Performance
        </h4>
      ),
      para: "We employ efficient coding practices and rigorous testing to deliver smooth, responsive performance across all Android devices. Fast apps increase engagement and reduce churn.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data Security<br />
          and Privacy
        </h4>
      ),
      para: "We integrate secure authentication, encrypted data storage, and strict compliance standards to safeguard sensitive user information and protect vital business data effectively.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Google Play <br />
          Store Ready
        </h4>
      ),
      para: "We ensure your app complies with all Google Play guidelines, enabling smooth submission, enhanced visibility, and better discoverability in the Play Store.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Maintenance<br />
          and Updates
        </h4>
      ),
      para: "After launch, we offer continuous updates, technical support, and feature enhancements to keep your Android app secure, modern, and high-performing.",
    },
  ],
  btnText: "Start Android App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Brand with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Robust Android Apps</span>
      </h3>
    ),
  para: "Partner with HadzTech to bring business Android apps with stunning impressions. We build mobile solutions that engage users, streamline operations, and scale with business growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Android App Development Solutions<span> Designed for Performance</span>
    </h2>
  ),
  para: 'Our android app development services merge advanced technology with strategic design to deliver high-performing, visually stunning mobile apps. By developing an app for android, HadzTech ensures flawless functionality, brand success, and customer satisfaction through exceptional quality, seamless performance, and a focus on long-term business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic <br /> Planning</h4>
      ),
      para: 'We align app design and functionality with business goals to ensure clarity, direction, and measurable results.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance<br />App</h4>
      ),
      para: 'We build responsive, stable, and efficient apps ensuring consistent performance across all user conditions.',
      image: signVector
    },
    {
      heading4: (
        <h4>Future-Proof<br />Apps</h4>
      ),
      para: 'We create apps that support new features, integrations, and updates without affecting performance or user experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>Comprehensive <br /> Security</h4>
      ),
      para: 'We prioritize security with encrypted storage, secure authentication, and continuous threat monitoring at every development stage.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is Android app development?",
    answer:
      "Android app development is the process of creating mobile applications specifically for Android devices, focusing on usability, performance, and user engagement.",
  },
  {
    question: "How long does it take to develop an Android app?",
    answer:
      "Development timelines typically range from 8 to 16 weeks, depending on complexity, design, and feature requirements.",
  },
  {
    question: "Will my Android app work on all devices?",
    answer:
      "Yes, we develop responsive apps that perform seamlessly across smartphones, tablets, and other Android devices.",
  },
  {
    question: "Can you assist with Google Play Store submission?",
    answer:
      "Absolutely. We handle compliance with Google Play guidelines and manage the submission process for a smooth launch.",
  },
  {
    question: "Do you provide post-launch support for Android apps?",
    answer:
      "Yes, we offer ongoing updates, technical support, and performance optimization to ensure the app stays current and secure.",
  },
  {
    question: "Can the Android app integrate with other systems?",
    answer:
      "Yes, our apps can integrate with CRMs, payment gateways, analytics tools, and other third-party platforms to streamline operations.",
  }
];

const AndroidAppDevelopment = () => {
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

export default AndroidAppDevelopment;
