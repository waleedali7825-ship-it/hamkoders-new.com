export const metadata = {
  title: "Hybrid Mobile App Development Services for Faster Launches",
  description:
    "We provide hybrid mobile app development services that combine speed, flexibility, and reach—one codebase, smooth performance across iOS and Android platforms.",
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

import vector from "../../../../public/images/hybrid-app-vector.webp";

import service1 from "../../../../public/images/app-services/hybrid-app-development/1.webp";
import service2 from "../../../../public/images/app-services/hybrid-app-development/2.webp";
import service3 from "../../../../public/images/app-services/hybrid-app-development/3.webp";
import service4 from "../../../../public/images/app-services/hybrid-app-development/4.webp";
import service5 from "../../../../public/images/app-services/hybrid-app-development/5.webp";
import service6 from "../../../../public/images/app-services/hybrid-app-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Innovative<span> Hybrid App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s hybrid mobile app development services create powerful, high-speed apps combining web technology flexibility with native performance for seamless mobile experiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building Hybrid Apps That<br /> <span>Perform Everywhere</span>
    </h2>
  ),
  para: "We develop hybrid app solutions that deliver fast, reliable performance and visual consistency on iOS and Android, optimizing every feature for usability and business growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Single<br />
          Codebase
        </h4>
      ),
      para: "We build apps with a unified codebase for iOS and Android, reducing development time, costs, and maintenance efforts efficiently.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Consistent<br />
          UI/UX
        </h4>
      ),
      para: "Our team designs interfaces that maintain uniformity and deliver an intuitive experience on all devices, enhancing engagement and brand perception.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized<br />
          Performance
        </h4>
      ),
      para: "Through efficient coding and advanced optimization techniques, we ensure hybrid apps perform smoothly, reducing latency and improving responsiveness.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Secure<br />
          Data
        </h4>
      ),
      para: "We implement robust security measures, including encryption and secure authentication, to safeguard sensitive data and maintain user trust.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Cost-Effective <br />
          Development
        </h4>
      ),
      para: "Hybrid apps allow for faster delivery and lower costs compared to building separate native apps while maintaining quality and performance.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Support
        </h4>
      ),
      para: "We provide continuous monitoring, updates, and feature enhancements to keep hybrid app secure, relevant, and high-performing over time.",
    },
  ],
  btnText: "Start Hybrid App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Reach with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Hybrid App Solutions</span>
      </h3>
    ),
  para: "Partner with HadzTech for scalable, cross-device apps. Our hybrid solutions deliver efficiency, performance, and engaging experiences that drive measurable business results.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Hybrid App Development Solutions Designed<span> for Efficiency and Growth</span>
    </h2>
  ),
  para: 'Our hybrid mobile app development services combine innovation, technology, and strategic design to create reliable, high-performing apps across all platforms. Through hybrid android app development, HadzTech delivers cost-effective, scalable solutions that enhance efficiency, reduce development time, and provide seamless user experiences for sustainable digital growth.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic Planning <br /> and Design</h4>
      ),
      para: 'We align app design, features, and functionality with business goals to deliver measurable value.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized Cross-Platform<br />Architecture</h4>
      ),
      para: 'Our apps ensure responsiveness, speed, and seamless performance across both iOS and Android devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable and<br />Adaptable Solutions</h4>
      ),
      para: 'We build modular hybrid apps supporting new features, integrations, and updates without impacting performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security and <br /> Compliance</h4>
      ),
      para: 'Robust security protocols safeguard user and business data, ensuring safe, reliable, and secure app usage.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is hybrid app development?",
    answer:
      "Hybrid app development combines web technologies and native functionality to build a single app that works across iOS and Android platforms.",
  },
  {
    question: "What technologies do you use for hybrid apps?",
    answer:
      "We use frameworks like Ionic, Flutter, and React Native to create fast, responsive, and cross-platform compatible apps.",
  },
  {
    question: "How long does it take to develop a hybrid app?",
    answer:
      "Development typically ranges from 8 to 16 weeks depending on app complexity, design, and features.",
  },
  {
    question: "Will the app work seamlessly on all devices?",
    answer:
      "Yes, hybrid apps are optimized for performance and responsiveness across both iOS and Android devices.",
  },
  {
    question: "Can hybrid apps integrate with other systems?",
    answer:
      "Absolutely. We can connect hybrid apps to CRMs, payment gateways, analytics tools, and other third-party platforms.",
  },
  {
    question: "Do you provide post-launch maintenance for hybrid apps?",
    answer:
      "Yes, we offer continuous support, updates, and feature enhancements to ensure the app remains secure, functional, and competitive.",
  }
];

const HybridAppDevelopment = () => {
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

export default HybridAppDevelopment;
