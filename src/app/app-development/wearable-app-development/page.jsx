export const metadata = {
  title: "Wearable App Development Services for Smarter User Connection",
  description:
    "We deliver wearable app development services designed for speed, usability, and real-world performance—helping your brand connect with users on the move.",
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

import vector from "../../../../public/images/wearable-app-vector.webp";

import service1 from "../../../../public/images/app-services/wearable-app-development/1.webp";
import service2 from "../../../../public/images/app-services/wearable-app-development/2.webp";
import service3 from "../../../../public/images/app-services/wearable-app-development/3.webp";
import service4 from "../../../../public/images/app-services/wearable-app-development/4.webp";
import service5 from "../../../../public/images/app-services/wearable-app-development/5.webp";
import service6 from "../../../../public/images/app-services/wearable-app-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Advanced <span> Wearable App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s wearable app development services create innovative apps for smartwatches, fitness trackers, and IoT devices, delivering real-time functionality, accurate data tracking, and seamless user experiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Designing Wearable Apps<br /> <span>That Enhance Daily Life</span>
    </h2>
  ),
  para: "Our smart band/wearable mobile app development focuses on usability, performance, and connectivity, delivering apps that provide insights, streamline interactions, and engage users directly on wearable devices.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          In-built<br />
          User Interface
        </h4>
      ),
      para: "We design interfaces specifically for small screens, ensuring all interactions are intuitive, clear, and user-friendly, providing a seamless and engaging experience on wearable devices.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Real-Time<br />
          Integration
        </h4>
      ),
      para: "Our AR app development for wearables ensures apps sync seamlessly with sensors and IoT devices, delivering real-time data, analytics, and instant notifications for enhanced user experiences.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Performance <br />
          Optimization
        </h4>
      ),
      para: "We develop lightweight, high-performance apps that deliver consistent functionality, ensuring smooth operation and optimal efficiency without overusing device resources, enhancing user experience across wearable devices.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Cross-Platform <br />
          Compatibility
        </h4>
      ),
      para: "Our cross-platform wearable app development solutions function seamlessly across multiple devices, including Apple Watch, Wear OS, and other IoT-enabled platforms, ensuring consistent performance and user experience.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Secure Data <br />
          Handling
        </h4>
      ),
      para: "We implement advanced security protocols and encryption measures to safeguard sensitive health, fitness, and personal data, ensuring privacy and trust for all wearable app users.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Post-Launch<br />
          Support
        </h4>
      ),
      para: "We offer continuous monitoring, regular updates, and feature enhancements to keep wearable apps secure, reliable, and up-to-date, ensuring optimal performance and user satisfaction.",
    }
  ],
  btnText: "Start Wearable App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Users with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Smart Wearable Apps</span>
      </h3>
    ),
  para: "Partner with HadzTech for wearable device app development, creating functional, engaging, and secure apps that enhance performance and ensure user satisfaction.",
  image: discussCtaImage,
  width: "521px"
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Wearable App Development Solutions<span> for Connected Devices</span>
    </h2>
  ),
  para: 'Our wearable app development services merge innovative design, cutting-edge technology, and real-time connectivity to deliver reliable, high-performing applications. Through watchOS app development, HadzTech creates engaging, seamless experiences that enhance functionality and enrich user interaction across connected wearable devices.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic App <br />Planning</h4>
      ),
      para: 'We define objectives, key features, and device requirements to ensure wearable apps effectively meet user needs.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized UI/UX <br />for Wearables</h4>
      ),
      para: 'Interfaces are optimized for small screens and quick interactions, enhancing usability, engagement, and user experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance <br />Architecture</h4>
      ),
      para: 'Our apps are lightweight, efficient, and optimized for minimal battery usage while ensuring consistent performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security and <br /> Compliance</h4>
      ),
      para: 'We prioritize data security and compliance with health, fitness, and device-specific regulations to protect users.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is wearable app development?",
    answer:
      "Wearable app development involves creating applications for smartwatches, fitness trackers, and IoT devices to deliver real-time functionality and engagement.",
  },
  {
    question: "Which devices do you develop apps for?",
    answer:
      "We develop apps for Apple Watch, Wear OS devices, and other IoT-enabled wearable platforms.",
  },
  {
    question: "How long does it take to develop a wearable app?",
    answer:
      "Timelines typically range from 6 to 12 weeks, depending on complexity, features, and platform requirements.",
  },
  {
    question: "Will the wearable app integrate with other devices or apps?",
    answer:
      "Yes, we can integrate wearable apps with mobile apps, sensors, cloud platforms, and IoT devices for seamless connectivity.",
  },
  {
    question: "How do you ensure data security in wearable apps?",
    answer:
      "We implement encryption, secure authentication, and compliance with relevant data protection standards to safeguard sensitive information.",
  },
  {
    question: "Do you provide post-launch support for wearable apps?",
    answer:
      "Yes, we offer updates, performance optimization, and technical support to ensure long-term reliability and enhanced user experience.",
  }
];

const WearableAppDevelopment = () => {
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

export default WearableAppDevelopment;
