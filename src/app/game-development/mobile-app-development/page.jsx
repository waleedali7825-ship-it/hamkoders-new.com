export const metadata = {
  title: "Mobile Game Development Company Creating Next-Level Games",
  description:
    "We’re a mobile game development company turning ideas into fun, high-performing games—built for engagement, smooth play, and success across all platforms.",
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

import vector from "../../../../public/images/mobile-app-banner.webp";

import service1 from "../../../../public/images/game-dev-services/mobile-app-development/1.webp";
import service2 from "../../../../public/images/game-dev-services/mobile-app-development/2.webp";
import service3 from "../../../../public/images/game-dev-services/mobile-app-development/3.webp";
import service4 from "../../../../public/images/game-dev-services/mobile-app-development/4.webp";
import service5 from "../../../../public/images/game-dev-services/mobile-app-development/5.webp";
import service6 from "../../../../public/images/game-dev-services/mobile-app-development/6.webp";

import discussCtaImage from "../../../../public/images/mobile-app-dev-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Innovative<span> Mobile Game </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech, a leading mobile game development company, creates engaging Android and iOS games with innovative design, smooth performance, and immersive gameplay experiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Crafting Mobile Games <br /> <span>That Fascinate and Entertain</span>
    </h2>
  ),
  para: "Our expert game developers in Houston design visually stunning, responsive, and immersive games with smooth mechanics, engaging interfaces, and rewarding player experiences that drive retention.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Game<br />
          Design
        </h4>
      ),
      para: "We create unique game concepts, characters, and storylines that resonate with the target audience and enhance player engagement.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Cross-Platform <br />
          Development
        </h4>
      ),
      para: "Our games are developed for both Android and iOS platforms, ensuring a consistent and seamless experience across devices.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized <br />
          Performance
        </h4>
      ),
      para: "We implement advanced coding practices and optimization techniques to ensure fast loading, smooth gameplay, and minimal latency.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Interactive <br />
          UI/UX
        </h4>
      ),
      para: "Our team designs intuitive interfaces and interactive elements that enhance gameplay and provide an enjoyable user experience.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Analytics and <br />
          Monetization
        </h4>
      ),
      para: "We integrate analytics, in-app purchases, and ad networks to maximize user retention, engagement, and revenue generation.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Post-Launch <br />
          Support
        </h4>
      ),
      para: "We provide ongoing maintenance, updates, and enhancements to keep game fresh, secure, and optimized for the latest devices and OS versions.",
    }
  ],
  btnText: "Start Mobile Game development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Player Engagement</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>and Retention</span>
      </h3>
    ),
  para: "Partner with HadzTech for expert game design and development that delivers engaging, high-performance mobile games with immersive and unforgettable player experiences.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Mobile Game Development Solutions<span> for All Platforms</span>
    </h2>
  ),
  para: 'As a leading mobile game development company, HadzTech delivers interactive, high-quality, and performance-driven games for all platforms. Our expertise spans engaging gameplay, scalability, and VR game development, ensuring immersive experiences that captivate players, enhance retention, and drive long-term success across Android, iOS, and emerging gaming technologies.',
  demandBox: [
    {
      heading4: (
        <h4>Storyboarding</h4>
      ),
      para: 'We transform every game idea into detailed storyboards, gameplay mechanics, and interactive prototypes for effective development.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance <br />Building</h4>
      ),
      para: 'We build games with optimized architecture to support smooth gameplay, scalability, and long-term maintenance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Cross-Platform<br />Compatibility</h4>
      ),
      para: 'Games are developed to perform seamlessly across Android and iOS devices, ensuring broad reach and user accessibility.',
      image: signVector
    },
    {
      heading4: (
        <h4>Analytics and <br /> Monetization</h4>
      ),
      para: 'We integrate real-time analytics, in-app purchases, and monetization options to track performance and drive revenue growth.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is mobile game development?",
    answer:
      "Mobile game development involves creating interactive games for smartphones and tablets, optimized for performance, user experience, and engagement.",
  },
  {
    question: "How long does it take to develop a mobile game?",
    answer:
      "The timeline depends on game complexity, features, and design requirements, typically ranging from 8 to 20 weeks.",
  },
  {
    question: "Can games be developed for both Android and iOS?",
    answer:
      "Yes, our cross-platform development ensures games perform seamlessly on both Android and iOS devices.",
  },
  {
    question: "Do you provide post-launch updates?",
    answer:
      "Absolutely. We offer ongoing support, updates, and feature enhancements to keep games engaging and optimized for new OS versions.",
  },
  {
    question: "Can you integrate in-app purchases and ads?",
    answer:
      "Yes, we integrate monetization features like in-app purchases, ads, and subscriptions to maximize revenue.",
  },
  {
    question: "How do you ensure smooth gameplay and performance?",
    answer:
      "We employ optimized coding practices, thorough testing, and performance tuning to ensure fast, smooth, and uninterrupted gameplay.",
  }
];

const MobileAppDevelopment = () => {
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

export default MobileAppDevelopment;
