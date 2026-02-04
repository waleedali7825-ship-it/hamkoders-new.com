export const metadata = {
  title: "Custom iOS App Development Services for High-Impact Apps",
  description:
    "We create custom iOS app development services that blend design, performance, and user experience—perfect for startups, brands, and growing businesses.",
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

import vector from "../../../../public/images/ios-app-vector.webp";

import service1 from "../../../../public/images/app-services/ios-app-development/1.webp";
import service2 from "../../../../public/images/app-services/ios-app-development/2.webp";
import service3 from "../../../../public/images/app-services/ios-app-development/3.webp";
import service4 from "../../../../public/images/app-services/ios-app-development/4.webp";
import service5 from "../../../../public/images/app-services/ios-app-development/5.webp";
import service6 from "../../../../public/images/app-services/ios-app-development/6.webp";

import discussCtaImage from "../../../../public/images/ios-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      High-Quality<span> iOS App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s custom iOS app development services provide high-performance, user-friendly apps with seamless design and reliable functionality to boost brand engagement.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building iOS Apps<br /> <span>That Delight Users</span>
    </h2>
  ),
  para: "Our app development for iOS creates fast, visually appealing, and user-friendly apps that enhance user experience, boost brand presence, and deliver seamless functionality from concept to deployment.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          App<br />
          Architecture
        </h4>
      ),
      para: "We design apps with clean, scalable architecture that supports future enhancements and growing user bases. Each build ensures long-term performance and reliability.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          UI/UX <br />
          Design
        </h4>
      ),
      para: "Our team creates interfaces that are visually engaging and easy to navigate. Thoughtful design ensures users enjoy seamless interactions and increased retention.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Performance<br />
          Optimization
        </h4>
      ),
      para: "We implement efficient coding practices and rigorous testing to ensure smooth performance across all iOS devices. Fast, responsive apps improve user satisfaction and engagement.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Security and<br />
          Data
        </h4>
      ),
      para: "We implement secure authentication, encrypted data storage, and strict compliance measures to safeguard sensitive user information and protect valuable business data effectively.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          App Store <br />
          Readiness 
        </h4>
      ),
      para: "From guideline compliance to final submission, we optimize iOS apps for seamless App Store launches and enhanced visibility to reach more users.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Support<br />
          and Updates
        </h4>
      ),
      para: "We offer continuous post-launch maintenance, updates, and feature enhancements to keep your app secure, relevant, and aligned with evolving user needs.",
    },
  ],
  btnText: "Start iOS App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Brand with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Powerful iOS Apps</span>
      </h3>
    ),
  para: "Partner with HadzTech to deliver perfection in mobile using experience. Our iOS apps are built to engage users, drive conversions, and scale as business grows.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      iOS App Development Solutions<span> Personalized for Performance</span>
    </h2>
  ),
  para: 'Our custom iOS app development services focus on innovation, design, and flawless performance. By developing an app for iOS, HadzTech delivers personalized, high-performing mobile solutions that engage users, enhance brand visibility, and achieve measurable business results through advanced technology and seamless user experiences.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic App <br /> Planning</h4>
      ),
      para: 'We align app objectives with business goals, creating a clear roadmap for development and features.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized App <br />Architecture</h4>
      ),
      para: 'We create fast, stable, and maintainable apps ensuring consistent performance across varying user loads.',
      image: signVector
    },
    {
      heading4: (
        <h4>Future-Ready<br />Apps</h4>
      ),
      para: 'Our solutions support new features, integrations, and updates while maintaining smooth, uninterrupted performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security <br /> Measures</h4>
      ),
      para: 'We ensure user data protection and compliance through secure authentication and encrypted storage in development.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is iOS app development?",
    answer:
      "iOS app development involves creating mobile applications specifically for Apple devices, ensuring high performance, smooth functionality, and optimized user experiences.",
  },
  {
    question: "How long does it take to develop an iOS app?",
    answer:
      "The timeline depends on complexity, features, and design requirements. Most apps take 8 to 16 weeks from planning to App Store submission.",
  },
  {
    question: "Will my app be compatible with all iOS devices?",
    answer:
      "Yes, we develop responsive, optimized apps that work seamlessly across iPhones, iPads, and other iOS devices.",
  },
  {
    question: "Can you assist with App Store submission?",
    answer:
      "Absolutely. We guide apps through Apple’s guidelines and submission process for a smooth launch.",
  },
  {
    question: "Do you provide post-launch support for iOS apps?",
    answer:
      "Yes, we offer updates, maintenance, and feature enhancements to ensure the app remains secure, relevant, and high-performing.",
  },
  {
    question: "Can the iOS app integrate with existing systems?",
    answer:
      "Yes, we can integrate app with CRMs, analytics tools, payment gateways, and other enterprise or third-party systems.",
  }
];

const IOSAppDevelopment = () => {
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

export default IOSAppDevelopment;
