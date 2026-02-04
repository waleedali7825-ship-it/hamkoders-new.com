export const metadata = {
  title: "Cross Platform Game Development for All Screens and Players",
  description:
    "We offer cross platform game development that ensures smooth, consistent gameplay across devices—designed to engage players and grow your audience everywhere.",
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

import vector from "../../../../public/images/cross-platform-app-banner.webp";

import service1 from "../../../../public/images/game-dev-services/cross-platform-game-development/1.webp";
import service2 from "../../../../public/images/game-dev-services/cross-platform-game-development/2.webp";
import service3 from "../../../../public/images/game-dev-services/cross-platform-game-development/3.webp";
import service4 from "../../../../public/images/game-dev-services/cross-platform-game-development/4.webp";
import service5 from "../../../../public/images/game-dev-services/cross-platform-game-development/5.webp";
import service6 from "../../../../public/images/game-dev-services/cross-platform-game-development/6.webp";

import discussCtaImage from "../../../../public/images/cross-platform-app-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Seamless <span>Game Creation</span>
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech offers expert cross platform game development delivering high-performance, engaging, and visually stunning games that run seamlessly across Android, iOS, and multiple devices.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Games That<br /> <span>Engage on Every Device</span>
    </h2>
  ),
  para: "We develop cross platform games that deliver interactive gameplay, stunning visuals, and smooth performance, ensuring players enjoy a seamless and immersive experience across every device.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Unified Game<br />
          Architecture
        </h4>
      ),
      para: "We create a unified codebase that runs seamlessly across platforms, minimizing development time and ensuring consistent performance and functionality.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized <br />
          Performance
        </h4>
      ),
      para: "We optimize games for speed, responsiveness, and smooth animations, ensuring seamless, uninterrupted gameplay across all devices and platforms.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Interactive <br />
          UI/UX Design
        </h4>
      ),
      para: "We create intuitive interfaces and responsive controls that elevate gameplay, ensuring a smooth and consistent experience across all platforms.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Cross-Platform <br />
          Compatibility Testing
        </h4>
      ),
      para: "Our team performs thorough testing to guarantee games run reliably and smoothly across Android, iOS, tablets, and all other devices.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integrated Analytics <br />
          and Monetization
        </h4>
      ),
      para: "We integrate analytics, in-app purchases, and ad networks to monitor performance, boost engagement, and increase revenue across all platforms.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Support <br />
          and Updates
        </h4>
      ),
      para: "We deliver continuous updates, fix bugs, and implement feature enhancements to ensure optimal performance, robust security, and ongoing user engagement.",
    }
  ],
  btnText: "Start Cross Platform App development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Reach with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Cross-Platform Expertise</span>
      </h3>
    ),
  para: "We provide 3d game development cross platform services, delivering updates, bug fixes, and feature enhancements for optimal performance, security, and engagement.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Cross-Platform Game<span> Development Solutions</span>
    </h2>
  ),
  para: 'Our cross platform game development services deliver high-performing, scalable, and engaging games for multiple platforms. With expertise in cross platform game development iOS Android, we create interactive, visually stunning games that captivate players, ensuring seamless performance and immersive experiences across all devices.',
  demandBox: [
    {
      heading4: (
        <h4>Codebase <br/> Architecture</h4>
      ),
      para: 'We build games using a unified architecture that supports Android, iOS, and other platforms efficiently.',
      image: signVector
    },
    {
      heading4: (
        <h4>Engaging  <br />UI/UX</h4>
      ),
      para: 'Our team designs interactive interfaces and controls that enhance the gaming experience across all devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Monetization <br />Integration</h4>
      ),
      para: 'We integrate performance tracking, in-app purchases, and ads to optimize engagement and revenue.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security and <br /> Stability</h4>
      ),
      para: 'Games are developed with secure coding practices and stability in mind, ensuring a reliable experience for users.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is cross-platform game development?",
    answer:
      "It is the creation of games that work seamlessly across multiple platforms such as Android, iOS, and tablets using a single codebase.",
  },
  {
    question: "How long does cross-platform game development take?",
    answer:
      "Depending on complexity and features, it usually takes 10 to 20 weeks, including design, development, and testing.",
  },
  {
    question: "Will the gameplay experience be consistent across all platforms?",
    answer:
      "Yes, we ensure smooth and uniform gameplay with fully optimized graphics and controls across all devices.",
  },
  {
    question: "Can you integrate monetization features in cross-platform games?",
    answer:
      "Absolutely. We include in-app purchases, subscriptions, and ad networks to generate revenue.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we provide continuous updates, bug fixes, and performance optimizations to ensure long-term stability.",
  },
  {
    question: "How do you test cross-platform compatibility?",
    answer:
      "Our team performs extensive testing on multiple devices and platforms to ensure flawless functionality and performance.",
  }
];

const CrossPlatformAppDevelopment = () => {
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

export default CrossPlatformAppDevelopment;
