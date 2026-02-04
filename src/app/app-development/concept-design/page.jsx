export const metadata = {
  title: "App Development Concept Design That Brings Ideas to Life",
  description:
    "We shape your app development concept into a clear, functional design—focusing on user needs, business goals, and creative direction from the very first step.",
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

import vector from "../../../../public/images/concept-design-vector.webp";

import service1 from "../../../../public/images/app-services/concept-design/1.webp";
import service2 from "../../../../public/images/app-services/concept-design/2.webp";
import service3 from "../../../../public/images/app-services/concept-design/3.webp";
import service4 from "../../../../public/images/app-services/concept-design/4.webp";
import service5 from "../../../../public/images/app-services/concept-design/5.webp";
import service6 from "../../../../public/images/app-services/concept-design/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Visionary<span> App Concept </span>Design
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s app development concept services transform ideas into actionable, user-centric blueprints, combining creativity, research, and strategy for successful app development.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Designing App Concepts That <br /> <span>Inspire and Guide</span>
    </h2>
  ),
  para: "Our app concept to prototype process transforms user needs, business goals, and market insights into a clear, actionable plan that guides every stage of app development.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Idea<br />
          Validation
        </h4>
      ),
      para: "We analyze market trends, target audiences, and competitor offerings to validate app concepts, uncover unique opportunities, and ensure solutions are innovative, relevant, and strategically positioned.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Wireframing
        </h4>
      ),
      para: "We study market trends, target audiences, and competitors to validate app concepts, discover unique opportunities, and ensure solutions are innovative, relevant, and strategically aligned for success.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          UI/UX<br />
          Prototyping
        </h4>
      ),
      para: "We create interactive prototypes showcasing app functionality, enabling early user testing and feedback, refining design and features before full-scale development begins.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature<br />
          Prioritization
        </h4>
      ),
      para: "We pinpoint essential features to ensure the app concept emphasizes user value and maximizes business impact, guiding development toward meaningful and effective solutions.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Feasibility <br />
          Assessment
        </h4>
      ),
      para: "Our experts assess technical feasibility, identify potential challenges, and determine optimal solutions to efficiently transform app ideas into functional, high-quality, and market-ready applications.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Strategic<br />
          Roadmap
        </h4>
      ),
      para: "We provide a detailed development roadmap outlining milestones, design specifications, and functionality requirements to ensure smooth, efficient, and well-organized project execution from start to finish.",
    }
  ],
  btnText: "Start Concept Design",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Bring Mobile App Online</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with HadzTech</span>
      </h3>
    ),
  para: "Our Concept Design Services turn visions into clear, user-focused app concepts, guiding development with innovation, clarity, and successful execution.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Concept Design Solutions <span> for Scalable App Development</span>
    </h2>
  ),
  para: 'Our Concept Design Services provide a solid app development concept that serves as a blueprint for high-performing applications. Using research, strategy, and creativity, we create interactive app mockups that are engaging, viable, and aligned with your business goals, ensuring successful development.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic <br /> Planning</h4>
      ),
      para: 'We define app objectives, features, and target audience to ensure the concept meets real user needs.',
      image: signVector
    },
    {
      heading4: (
        <h4>Visual<br />Storyboarding</h4>
      ),
      para: 'We create wireframes, sketches, and flow diagrams to visualize app interactions and enhance user experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>Prototype <br />Development</h4>
      ),
      para: 'Interactive prototypes test key functionalities, enhancing design decisions and minimizing risks during app development.',
      image: signVector
    },
    {
      heading4: (
        <h4>Concept <br /> Architecture</h4>
      ),
      para: 'Our concepts support future growth, new features, and evolving user requirements for scalable, adaptable app development.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is app concept design?",
    answer:
      "App concept design is the process of turning an idea into a clear blueprint that guides development, user experience, and feature planning.",
  },
  {
    question: "Why is concept design important?",
    answer:
      "It ensures the app idea is viable, user-friendly, and strategically aligned with business objectives before investing in development.",
  },
  {
    question: "How long does concept design take?",
    answer:
      "Depending on complexity, concept design typically takes 2 to 4 weeks, including research, wireframes, and prototyping.",
  },
  {
    question: "Will I get a visual representation of my app??",
    answer:
      "Yes, we provide wireframes, prototypes, and interactive mockups to visualize app features and user flows.",
  },
  {
    question: "Can the concept design influence the final app development?",
    answer:
      "Absolutely. Concept design provides the foundation, guiding the design, development, and functionality decisions.",
  },
  {
    question: "Do you provide recommendations on feature prioritization?",
    answer:
      "Yes, we analyze user needs and business goals to prioritize features for maximum impact and efficiency.",
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
