export const metadata = {
  title: "Landing Page Development Services Agency for High Conversion",
  description:
    "We offer landing page development services that turn clicks into customers—custom-built, fast, and designed to drive results for agencies, brands, and startups.",
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

import vector from "../../../../public/images/landing-page-vector.webp";

import service1 from "../../../../public/images/website-services/landing-page-development/1.webp";
import service2 from "../../../../public/images/website-services/landing-page-development/2.webp";
import service3 from "../../../../public/images/website-services/landing-page-development/3.webp";
import service4 from "../../../../public/images/website-services/landing-page-development/4.webp";
import service5 from "../../../../public/images/website-services/landing-page-development/5.webp";
import service6 from "../../../../public/images/website-services/landing-page-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-landing-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Effective <span>Landing Page</span> Development
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s landing page development services create engaging, high-converting pages with strategic design, compelling content, and seamless functionality to drive targeted actions.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Precision-Built Landing Pages<br /> <span>That Deliver Results</span>
    </h2>
  ),
  para: "We develop landing page designs that align with campaign goals, engage audiences, and guide users toward clear actions, maximizing ROI through strategic layout, copy, and visuals.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Conversion-Centered <br />
          Design
        </h4>
      ),
      para: "We design landing pages with a single goal in mind: to turn visitors into leads or customers. Clear messaging, persuasive CTAs, and intuitive layouts ensure high conversion performance.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized <br />
          User Flow
        </h4>
      ),
      para: "Our pages are engineered for seamless navigation and focused engagement. We eliminate distractions, streamline user journeys, and make actions effortless for higher conversion rates.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          SEO & Marketing<br />
          Alignment
        </h4>
      ),
      para: "We build landing pages that integrate seamlessly into the marketing ecosystem. From keyword optimization to analytics tracking, every detail supports broader campaign strategy.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Responsive and<br />
          Fast-Loading
        </h4>
      ),
      para: "Performance matters our landing pages are fully responsive, lightning-fast, and optimized for all devices, ensuring a frictionless user experience that keeps visitors engaged.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          A/B Testing and<br />
          Analytics Integration
        </h4>
      ),
      para: "We incorporate advanced testing capabilities and analytics tools to measure performance and refine results over time. Data-driven insights help you continuously improve conversion rates.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Scalable and<br />
          Campaign-Ready 
        </h4>
      ),
      para: "Whether you’re launching a single product, running an ad campaign, or testing a new idea, our landing pages are designed to scale and adapt to evolving marketing goals.",
    }
  ],
  btnText: "Start Landing Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Turn Clicks Into Customers</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with Landing Pages</span>
      </h3>
    ),
  para: "Partner with HadzTech to create mobile-friendly landing pages that blend creativity, strategy, and technical expertise, transforming marketing efforts into measurable business results.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Landing Page Solutions That Fuel<span> Conversions and Growth</span>
    </h2>
  ),
  para: 'Our landing page development services go beyond simple design. We develop landing page solutions that deliver high-impact, engaging digital experiences, capturing attention and driving actions. Each page is strategically crafted to boost lead generation, increase sales, and enhance brand engagement effectively.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic Campaign<br /> Planning</h4>
      ),
      para: 'We define goals, audiences, and conversions to develop landing pages perfectly aligned with marketing strategy.',
      image: signVector
    },
    {
      heading4: (
        <h4>Persuasive Copy <br /> and Design</h4>
      ),
      para: 'We create compelling headlines, visuals, and optimized messaging to develop landing pages that engage and convert users.',
      image: signVector
    },
    {
      heading4: (
        <h4>Performance-Driven<br />Development</h4>
      ),
      para: 'We prioritize speed, functionality, and SEO to ensure landing page design performs flawlessly under real-world traffic.',
      image: signVector
    },
    {
      heading4: (
        <h4>Ongoing Optimization<br /> Support</h4>
      ),
      para: 'We provide ongoing support with performance tracking, A/B testing, and improvements to maximize long-term ROI.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is a landing page, and why is it important?",
    answer:
      "A landing page is a standalone web page designed to convert visitors into leads or customers. It focuses on a single objective, such as capturing sign-ups, selling a product, or promoting an event.",
  },
  {
    question: "How long does it take to develop a landing page?",
    answer:
      "Depending on complexity and campaign requirements, development typically takes 1 to 3 weeks, including planning, design, development, and testing.",
  },
  {
    question: "Can you integrate marketing tools and analytics?",
    answer:
      "Yes, we integrate platforms like Google Analytics, HubSpot, Mailchimp, and more to help you track conversions and campaign performance.",
  },
  {
    question: "Will the landing page be mobile-friendly?",
    answer:
      "Absolutely. Every landing page we develop is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Can you design multiple landing pages for different campaigns?",
    answer:
      "Yes, we can build custom landing pages for multiple campaigns, audiences, or products to maximize engagement and conversion.",
  },
  {
    question: "Do you provide ongoing optimization services?",
    answer:
      "Yes, we offer continuous testing, performance tracking, and iterative enhancements to ensure landing pages keep delivering results.",
  }
];

const LandingPageDevelopment = () => {
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

export default LandingPageDevelopment;
