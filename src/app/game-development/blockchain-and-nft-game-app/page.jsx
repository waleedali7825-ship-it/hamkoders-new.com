export const metadata = {
  title: "Blockchain Game Development Services for Future-Ready Gaming",
  description:
    "We offer blockchain game development services that combine fun, ownership, and security—creating NFT-powered games that engage players and reward real value.",
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

import vector from "../../../../public/images/blockchain-vector-banner.webp";

import service1 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/1.webp";
import service2 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/2.webp";
import service3 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/3.webp";
import service4 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/4.webp";
import service5 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/5.webp";
import service6 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/6.webp";

import discussCtaImage from "../../../../public/images/cross-platform-app-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Blockchain &<span> NFT Game App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech offers blockchain game development services, creating NFT blockchain games and marketplaces with innovative, interactive, and revenue-generating digital ownership experiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Blockchain and NFT Games <br /> <span>That Engage and Reward</span>
    </h2>
  ),
  para: "HadzTech provides NFT marketplace integration, developing blockchain games and marketplaces that deliver innovative, interactive, and revenue-generating experiences while enabling secure digital ownership for players.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          NFT Blockchain<br />
          Development
        </h4>
      ),
      para: "We create NFT blockchain games allowing players to earn, trade, and use unique digital assets, enhancing engagement and in-game experiences.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Blockchain Game <br />
          Architecture
        </h4>
      ),
      para: "Our blockchain games use strong protocols, providing secure, transparent, and tamper-proof transactions for players while ensuring trust and reliability.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          NFT Marketplace<br />
          Integration
        </h4>
      ),
      para: "We offer smooth NFT marketplace integration, allowing players to buy, sell, and trade digital assets seamlessly within the gaming environment.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Cross-Platform<br />
          Gameplay
        </h4>
      ),
      para: "Our blockchain games work across devices, providing smooth, engaging, and consistent experiences on desktop, mobile, and web platforms.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Smart Contract<br />
          Implementation
        </h4>
      ),
      para: "We create secure, automated smart contracts for in-game assets, rewards, and marketplace transactions, ensuring trust, transparency, and efficiency.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Updates<br />
          and Support
        </h4>
      ),
      para: "After launch, we deliver updates, release new assets, and provide technical support to ensure continued security, engagement, and optimal performance.",
    },
  ],
  btnText: "Start Blockchain & NFT Game App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Players</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with Blockchain Gaming</span>
      </h3>
    ),
  para: "Partner with HadzTech for nft blockchain games that are secure, scalable, and rewarding, offering players ownership of achievements and digital assets.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Blockchain & NFT Game<span> Development Solutions</span>
    </h2>
  ),
  para: 'Our blockchain game development services offer end-to-end solutions for creating secure, interactive, and revenue-generating games. We specialize in NFT blockchain games, combining innovation, security, and engaging gameplay to deliver next-generation experiences that captivate players and maximize digital asset opportunities.',
  demandBox: [
    {
      heading4: (
        <h4>Custom Blockchain <br /> Game Architecture</h4>
      ),
      para: 'We design decentralized game frameworks that support NFTs, cryptocurrencies, and secure player transactions.',
      image: signVector
    },
    {
      heading4: (
        <h4>NFT Marketplace<br />Integration</h4>
      ),
      para: 'We enable seamless buying, selling, and trading of in-game digital assets through integrated NFT marketplaces.',
      image: signVector
    },
    {
      heading4: (
        <h4>Cross-Platform<br />Compatibility</h4>
      ),
      para: 'Games are developed to perform flawlessly across mobile, desktop, and web platforms, ensuring a wide reach.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security and <br /> Smart Contracts</h4>
      ),
      para: 'We implement secure smart contracts and blockchain protocols to protect digital assets, transactions, and user data.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is blockchain game development?",
    answer:
      "Blockchain game development services create games with decentralized technologies, enabling secure asset ownership, transparency, and enhanced user engagement.",
  },
  {
    question: "What are NFT blockchain games?",
    answer:
      "NFT blockchain games allow players to earn, trade, and own unique in-game digital assets on a secure blockchain network.",
  },
  {
    question: "Can you integrate NFT marketplaces into games?",
    answer:
      "Yes, we provide NFT marketplace integration for seamless buying, selling, and trading of digital assets within the game.",
  },
  {
    question: "How secure are blockchain games?",
    answer:
      "Blockchain-based games use encrypted transactions, smart contracts, and secure protocols to protect player data and digital assets.",
  },
  {
    question: "Can blockchain games be developed for multiple platforms?",
    answer:
      "Absolutely. We develop cross-platform blockchain games compatible with mobile, desktop, and web devices.",
  },
  {
    question: "Do you provide post-launch support for blockchain games?",
    answer:
      "Yes, we offer ongoing updates, new asset releases, and technical support to ensure smooth performance and continued engagement.",
  }
];

const BlockchainAppDevelopment = () => {
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

export default BlockchainAppDevelopment;
