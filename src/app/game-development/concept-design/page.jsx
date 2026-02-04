export const metadata = {
  title: "Game Concept Designer Crafting Unique Worlds and Experiences",
  description:
    "Our game concept designers bring your vision to life with original worlds, characters, and mechanics—laying the creative foundation for unforgettable gameplay.",
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

import vector from "../../../../public/images/concept-game-vector.webp";

import service1 from "../../../../public/images/game-dev-services/concept-design/1.webp";
import service2 from "../../../../public/images/game-dev-services/concept-design/2.webp";
import service3 from "../../../../public/images/game-dev-services/concept-design/3.webp";
import service4 from "../../../../public/images/game-dev-services/concept-design/4.webp";
import service5 from "../../../../public/images/game-dev-services/concept-design/5.webp";
import service6 from "../../../../public/images/game-dev-services/concept-design/6.webp";

import discussCtaImage from "../../../../public/images/cross-platform-app-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/backend-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Concept Design<span> for Game </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s expert game concept designer team transforms creative ideas into engaging, visually stunning, and technically feasible game development strategies.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building the Foundation <br /> <span>for Exceptional Games</span>
    </h2>
  ),
  para: "Our game concept design process blends creativity, technology, and user engagement to craft scalable, optimized game concepts that enhance gameplay and ensure lasting success.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Game <br />
          Storyboarding
        </h4>
      ),
      para: "We create immersive stories, dynamic characters, and engaging worlds that captivate players and sustain their interest throughout gameplay.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Gameplay <br />
          Mechanics
        </h4>
      ),
      para: "We design core gameplay loops, interactive mechanics, and progression systems that enhance player enjoyment, engagement, and long-term retention.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Visual<br />
          Concept
        </h4>
      ),
      para: "We create concept art, character designs, and environment visuals that define the game’s aesthetic style and strengthen its visual identity.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Prototype<br />
          Development
        </h4>
      ),
      para: "We build interactive prototypes to validate gameplay mechanics, user interactions, and overall feasibility before moving into full development.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Engagement <br />
          Strategy
        </h4>
      ),
      para: "We design intuitive controls, seamless interfaces, and engaging progression systems to elevate player satisfaction and overall gaming experience.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Collaboration<br />
          with Teams
        </h4>
      ),
      para: "Our concept design collaborates with developers to ensure creative ideas are feasible, technically sound, and aligned with project objectives.",
    },
  ],
  btnText: "Start Concept Design Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Game Potential</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>from the Start</span>
      </h3>
    ),
  para: "Partner with HadzTech for expert concept design services that streamline development, reduce risks, and ensure a unified vision from start to launch.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Concept Design Solutions<span> for Game Development</span>
    </h2>
  ),
  para: 'Our game concept designer team at HadzTech crafts detailed game design concepts that define visuals, mechanics, and user interaction strategies. We ensure each concept blends creativity with technical precision, resulting in visually stunning, engaging, and feasible games that capture player interest and support seamless development from idea to execution.',
  demandBox: [
    {
      heading4: (
        <h4>Detailed<br /> Narratives</h4>
      ),
      para: 'We develop rich storylines, characters, and world-building elements to create fantastic player experiences.',
      image: signVector
    },
    {
      heading4: (
        <h4>Gameplay <br /> Planning</h4>
      ),
      para: 'We map core mechanics, user interactions, and progression systems to ensure engaging and balanced gameplay.',
      image: signVector
    },
    {
      heading4: (
        <h4>Prototype<br />Design</h4>
      ),
      para: 'We create concept art and prototypes to define visuals and test gameplay functionality early in development.',
      image: signVector
    },
    {
      heading4: (
        <h4>Strategic<br />Development</h4>
      ),
      para: 'We collaborate with developers and designers to create practical, technically sound concepts aligned with project goals.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is concept design in game development?",
    answer:
      "Concept design involves creating the foundational vision for a game, including story, characters, gameplay mechanics, and visual style.",
  },
  {
    question: "Why is concept design important?",
    answer:
      "It ensures games are engaging, technically feasible, and aligned with the intended player experience before full-scale development begins.",
  },
  {
    question: "Do you provide visual concepts and prototypes?",
    answer:
      "Yes, we create detailed concept art, sketches, and interactive prototypes to test gameplay, visuals, and mechanics.",
  },
  {
    question: "Can you design game narratives and characters?",
    answer:
      "Absolutely. We craft compelling storylines, characters, and world-building elements to enhance player immersion.",
  },
  {
    question: "How do you ensure feasibility with development teams?",
    answer:
      "Our concept design integrates closely with developers to ensure ideas are practical, technically achievable, and align with project goals.",
  },
  {
    question: "What types of games can you create concept designs for?",
    answer:
      "We provide concept design for mobile, console, blockchain, NFT, and cross-platform games, supporting diverse gaming genres.",
  }
];

const ConceptDesign = () => {
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

export default ConceptDesign;
