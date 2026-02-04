export const metadata = {
  title: "Custom WordPress Development for Powerful, Scalable Websites",
  description:
    "We offer custom WordPress development that blends speed, design, and flexibility — crafted to deliver user-friendly, secure, and fully manageable websites.",
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

import vector from "../../../../public/images/wordpress-vector.webp";

import service1 from "../../../../public/images/store-services/wordpress-development/1.webp";
import service2 from "../../../../public/images/store-services/wordpress-development/2.webp";
import service3 from "../../../../public/images/store-services/wordpress-development/3.webp";
import service4 from "../../../../public/images/store-services/wordpress-development/4.webp";
import service5 from "../../../../public/images/store-services/wordpress-development/5.webp";
import service6 from "../../../../public/images/store-services/wordpress-development/6.webp";

import discussCtaImage from "../../../../public/images/wordpress-cta.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Professional<span> WordPress Development </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech offers custom wordpress development services, creating versatile, scalable websites that combine creativity, functionality, and AI-powered solutions for high-performance, personalized business websites.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating WordPress Websites<br /> <span>That Perform</span>
    </h2>
  ),
  para: "HadzTech specializes in wordpress theme development, creating visually appealing, user-friendly websites that enhance brand identity, boost engagement, and deliver measurable business results.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom WordPress<br />
          Development
        </h4>
      ),
      para: "We deliver custom WordPress development solutions tailored to your business goals, creating unique, scalable, and fully optimized websites.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          WordPress Theme<br />
          Development
        </h4>
      ),
      para: "We provide WordPress theme development services, designing visually stunning, responsive themes that ensure a seamless and consistent user experience on all devices.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          AI-Powered WordPress <br />
          Development
        </h4>
      ),
      para: "Our AI-powered WordPress development integrates advanced tools to automate processes, enhance personalization, and boost user engagement with intelligent website features.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Hire WordPress <br />
          Developer
        </h4>
      ),
      para: "Our expert team builds websites with clean code, best practices, and reliable performance. Hire WordPress developers for projects or support.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO and Performance<br />
          Optimization
        </h4>
      ),
      para: "We apply SEO strategies, fast-loading designs, and performance optimization to boost search visibility, attract organic traffic, and enhance website success.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Support
        </h4>
      ),
      para: "After launch, we offer updates, technical support, and enhancements to keep your WordPress website secure, functional, and business-ready.",
    }
  ],
  btnText: "Start Wordpress development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Business with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>WordPress Expertise</span>
      </h3>
    ),
  para: "Partner with HadzTech for custom wordpress development, creating innovative, functional, and AI-enhanced websites tailored for professional, scalable business digital platforms.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      WordPress Development Solutions<span> for Dynamic Websites</span>
    </h2>
  ),
  para: 'HadzTech offers custom wordpress development services, delivering end-to-end solutions for businesses seeking responsive, engaging, and high-performing websites. You can hire WordPress developers from our expert team to build, customize, and maintain digital platforms that drive growth and success.',
  demandBox: [
    {
      heading4: (
        <h4>Custom <br />Architecture</h4>
      ),
      para: 'We provide custom WordPress development tailored to business needs, ensuring flexible, scalable solutions for long-term growth.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive <br />UI/UX</h4>
      ),
      para: 'We design intuitive, mobile-responsive WordPress interfaces that boost user experience and engagement across all devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>AI-Powered<br />Features</h4>
      ),
      para: 'We deliver AI-powered WordPress development solutions, enabling personalization, chatbots, content recommendations, and automated workflows.',
      image: signVector
    },
    {
      heading4: (
        <h4>Theme <br /> Customization</h4>
      ),
      para: 'Our WordPress theme development services create visually appealing, fully customizable themes aligned with brand identity and user expectations.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is WordPress development?",
    answer:
      "WordPress development involves building websites with WordPress, including custom wordpress development, theme creation, and functional enhancements.",
  },
  {
    question: "How long does it take to develop a WordPress website?",
    answer:
      "Depending on complexity, WordPress websites usually take 3 to 6 weeks, including planning, design, development, and testing.",
  },
  {
    question: "Can I hire a developer for my WordPress project?",
    answer:
      "Yes, you can hire wordpress developers from our team for full project development, ongoing support, or specific customizations.",
  },
  {
    question: "Do you provide custom themes for WordPress?",
    answer:
      "Absolutely. Our wordpress theme development services deliver unique, responsive, and brand-aligned themes.",
  },
  {
    question: "What is AI-powered WordPress development?",
    answer:
      "We integrate AI tools and automation to enhance personalization, optimize workflows, and improve user engagement on websites.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer continuous maintenance, updates, and technical support to keep WordPress website secure, optimized, and future-ready.",
  }
];

const WordpressDevelopment = () => {
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

export default WordpressDevelopment;
