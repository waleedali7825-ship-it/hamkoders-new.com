export const metadata = {
  title: "Console Game Development for Bold, Immersive Player Worlds",
  description:
    "We provide console game development focused on rich visuals, smooth controls, and engaging gameplay—crafted to deliver thrilling experiences across platforms.",
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

import vector from "../../../../public/images/console-game-banner.webp";

import service1 from "../../../../public/images/game-dev-services/console-game-app/1.webp";
import service2 from "../../../../public/images/game-dev-services/console-game-app/2.webp";
import service3 from "../../../../public/images/game-dev-services/console-game-app/3.webp";
import service4 from "../../../../public/images/game-dev-services/console-game-app/4.webp";
import service5 from "../../../../public/images/game-dev-services/console-game-app/5.webp";
import service6 from "../../../../public/images/game-dev-services/console-game-app/6.webp";

import discussCtaImage from "../../../../public/images/cross-platform-app-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Advanced<span> Console Game </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech offers console game development, delivering high-performance PS5 games, cross-platform experiences, and AI-integrated solutions for engaging, immersive gameplay.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Crafting Console Games<br /> <span>That Entertain and Engage</span>
    </h2>
  ),
  para: "Our PS5 game development services create realistic, engaging console games with smooth controls and interactive gameplay, maximizing player engagement and delivering unforgettable experiences.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          PS5 Game<br />
          Development
        </h4>
      ),
      para: "We specialize in PS5 game development, using advanced hardware, high-resolution graphics, and fast load times for immersive gaming experiences.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          AI in <br />
          Console Games
        </h4>
      ),
      para: "Our team integrates AI in console games to enhance gameplay, create dynamic environments, and develop intelligent, adaptive in-game characters.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Console Game<br />
          Development
        </h4>
      ),
      para: "We provide cross-platform console game development, delivering games that run seamlessly on multiple consoles with consistent performance and gameplay.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Quality Game<br />
          Architecture
        </h4>
      ),
      para: "Our games are developed with optimized code and scalable architecture, ensuring smooth performance, realistic physics, and fast responsiveness.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Interactive <br />
          Controls
        </h4>
      ),
      para: "We design intuitive interfaces, fantastic controls, and engaging gameplay mechanics that provide a seamless console gaming experience.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Support<br />
          and Updates
        </h4>
      ),
      para: "Post-launch, we provide updates, bug fixes, and feature enhancements to ensure console games remain optimized, secure, and engaging over time.",
    },
  ],
  btnText: "Start Console Game App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Player Engagement with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Console Expertise</span>
      </h3>
    ),
  para: "Partner with HadzTech for AI in console games, delivering high-performance, multi-platform experiences that combine advanced technology, creativity, and immersive gameplay.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Console Game<span> Development Solutions</span>
    </h2>
  ),
  para: 'Our console game development services create interactive, high-performance, and scalable games for modern gaming consoles. Create high-performance, AI-driven, and stunning gaming experiences with console game development services. Moreover, our expertise in PS5 game development and cross-platform console game development designed for modern players.',
  demandBox: [
    {
      heading4: (
        <h4>Custom Game <br /> Architecture</h4>
      ),
      para: 'We build optimized frameworks for console games, supporting advanced graphics, AI functionality, and responsive gameplay.',
      image: signVector
    },
    {
      heading4: (
        <h4>AI-Driven  <br /> Gameplay</h4>
      ),
      para: 'We incorporate AI in console games to create dynamic in-game experiences, adaptive challenges, and intelligent NPC behavior.',
      image: signVector
    },
    {
      heading4: (
        <h4>Console<br />Compatibility</h4>
      ),
      para: 'Through cross-platform console game development, we ensure games perform seamlessly across multiple console platforms.',
      image: signVector
    },
    {
      heading4: (
        <h4>PS5 Game <br />Optimization</h4>
      ),
      para: 'We deliver high-quality PS5 game development leveraging next-gen graphics, hardware capabilities, and fast-loading environments.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is console game development?",
    answer:
      "Console game development involves creating games specifically for gaming consoles, optimized for performance, graphics, and user experience.",
  },
  {
    question: "Can you develop games for PS5?",
    answer:
      "Yes, our PS5 game development services utilize next-gen hardware capabilities to deliver premium, high-performance gaming experiences.",
  },
  {
    question: "What is AI in console games?",
    answer:
      "AI in console games refers to integrating artificial intelligence to create adaptive gameplay, dynamic environments, and intelligent in-game characters.",
  },
  {
    question: "Can console games be cross-platform?",
    answer:
      "Absolutely. Our cross-platform console game development ensures consistent performance across multiple console platforms.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer continuous updates, bug fixes, and performance enhancements to maintain game stability and engagement.",
  },
  {
    question: "How long does console game development take?",
    answer:
      "The timeline varies based on game complexity, features, and platform, typically ranging from 12 to 24 weeks.",
  }
];

const ConsoleGameAppDevelopment = () => {
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

export default ConsoleGameAppDevelopment;
