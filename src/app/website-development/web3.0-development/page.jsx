export const metadata = {
  title: "Web 3.0 Development Services Agency for Scalable Innovation",
  description:
    "We offer web 3.0 development services designed for a decentralized future — secure, scalable, and built to help your brand grow in the evolving digital space.",
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

import vector from "../../../../public/images/web3.0-vector.webp";

import service1 from "../../../../public/images/website-services/web3.0-development/1.webp";
import service2 from "../../../../public/images/website-services/web3.0-development/2.webp";
import service3 from "../../../../public/images/website-services/web3.0-development/3.webp";
import service4 from "../../../../public/images/website-services/web3.0-development/4.webp";
import service5 from "../../../../public/images/website-services/web3.0-development/5.webp";
import service6 from "../../../../public/images/website-services/web3.0-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-web3-dev.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Innovative <br /> <span>Web 3.0</span> Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s web 3.0 development services create next-generation platforms using blockchain, decentralization, and interactive features for engaging, future-ready digital experiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building the Decentralized Web<br /> <span>for Tomorrow’s Businesses</span>
    </h2>
  ),
  para: "Our web development 3.0 services build intelligent, secure, and scalable platforms using blockchain, smart contracts, and AI, enhancing engagement, trust, and innovation for businesses.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Decentralized <br />
          Architecture
        </h4>
      ),
      para: "We design platforms built on decentralized networks, ensuring enhanced security, user control, and data privacy without reliance on centralized servers.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Blockchain <br />
          Functionality
        </h4>
      ),
      para: "From smart contracts to crypto wallet integration, we implement blockchain solutions that add trust, automation, and transparency to digital ecosystems.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Enhanced User<br />
          Interaction
        </h4>
      ),
      para: "Web 3.0 interfaces prioritize user ownership and personalized experiences. We create adaptive environments that respond intelligently to user actions.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Tokenization and<br />
          Digital Assets
        </h4>
      ),
      para: "We develop token-based platforms for seamless asset exchange, reward systems, and NFT functionalities exposing new revenue streams for business.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Unified<br />
          Interoperability 
        </h4>
      ),
      para: "Our solutions are designed for compatibility across blockchains, APIs, and traditional systems, ensuring future-ready integration and scalability.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          AI and Semantic<br />
          Web Integration
        </h4>
      ),
      para: "We integrate semantic data and machine learning technologies to deliver smarter, context-aware platforms that offer deeper personalization and functionality.",
    },
  ],
  btnText: "Start Web3.0 Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Business with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Web 3.0 Innovation</span>
      </h3>
    ),
  para: "Partner with HadzTech to transform traditional websites into scalable, transparent, blockchain-enabled platforms, embracing the decentralized future for long-term growth and innovation.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Custom Web 3.0 Platforms That<span> Redefine Digital Engagement</span>
    </h2>
  ),
  para: 'Our web 3.0 development services integrate advanced technologies and strategic planning to create industry-leading platforms. With robust Web 3.0 backend solutions, every project is future-proof, secure, and designed to deliver engaging, meaningful experiences while driving innovation and long-term digital growth.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic Decentralization<br /> Planning</h4>
      ),
      para: 'We design Web 3.0 architecture, including dApps and smart contracts, using optimal blockchain infrastructure.',
      image: signVector
    },
    {
      heading4: (
        <h4>Next-Gen User <br />Experience</h4>
      ),
      para: 'We design exceptional interfaces and personalized interactions to foster stronger, more meaningful connections with digital users.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure, Scalable<br />Infrastructure</h4>
      ),
      para: 'We develop with security-first principles and scalability in mind, allowing the platform to grow without compromising reliability.',
      image: signVector
    },
    {
      heading4: (
        <h4>Long-TERM Ecosystem<br /> Support</h4>
      ),
      para: 'Our team provides ongoing support, updates, and ecosystem integration so platform evolves alongside Web 3.0 advancements.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is Web 3.0 development?",
    answer:
      "Web 3.0 development focuses on building decentralized, blockchain-based platforms that prioritize data security, user ownership, and intelligent functionality beyond traditional web applications.",
  },
  {
    question: "What technologies are used in Web 3.0 solutions?",
    answer:
      "We leverage blockchain protocols, smart contracts, decentralized storage, semantic web technologies, and AI to deliver advanced, future-ready platforms.",
  },
  {
    question: "How long does it take to develop a Web 3.0 project?",
    answer:
      "Timelines vary based on complexity and features, but most projects take between 8 to 20 weeks, including planning, development, testing, and deployment.",
  },
  {
    question: "Can Web 3.0 solutions integrate with existing systems?",
    answer:
      "Yes, we ensure compatibility with legacy systems, APIs, and existing web platforms, allowing seamless migration or hybrid solutions.",
  },
  {
    question: "Do you develop decentralized apps (dApps)?",
    answer:
      "Absolutely. We design and deploy custom dApps personalized to the business model, ensuring secure, transparent, and automated operations.",
  },
  {
    question: "Is Web 3.0 suitable for startups and small businesses?",
    answer:
      "Yes, decentralized solutions can offer competitive advantages to businesses of all sizes, from improved security to new revenue models through tokenization and NFTs.",
  }
];

const Web3Development = () => {
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

export default Web3Development;
