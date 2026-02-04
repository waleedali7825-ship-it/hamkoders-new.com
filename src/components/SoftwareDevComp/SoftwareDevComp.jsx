"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import WebsiteDevCompBanner from "@/components/WebsiteDevComp/WebsiteDevCompBanner";
import FeaturedBrands from "@/components/PortfolioComp/FeaturedBrands/FeaturedBrands";
import IdeaTransformation from "@/components/IdeaTransformation/IdeaTransformation";
import WhySec from "@/components/WhySec/WhySec";
import WhatWeOffer from "@/components/WhatWeOffer/WhatWeOffer";
import CategoryService from "@/components/CategoryService/CategoryService";
import OurWork from "@/components/OurWork/OurWork";
import Testimonials from "@/components/Testimonials/Testimonials";
import CtaSec from "@/components/CtaSec/CtaSec";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import whySecWebdev from "../../../public/images/whySecSoftwareDev.webp";

import whatWeOfferBox1 from "../../../public/images/software-dev-solution/1.webp";
import whatWeOfferBox2 from "../../../public/images/software-dev-solution/2.webp";
import whatWeOfferBox3 from "../../../public/images/software-dev-solution/3.webp";
import whatWeOfferBox4 from "../../../public/images/software-dev-solution/4.webp";
import whatWeOfferBox5 from "../../../public/images/software-dev-solution/5.webp";
import whatWeOfferBox6 from "../../../public/images/software-dev-solution/6.webp";

import websitePortSlide1 from "../../../public/images/software-banner/1.webp";
import websitePortSlide2 from "../../../public/images/software-banner/2.webp";
import websitePortSlide3 from "../../../public/images/software-banner/3.webp";
import websitePortSlide4 from "../../../public/images/software-banner/4.webp";
import websitePortSlide5 from "../../../public/images/software-banner/5.webp";
import webDevServiceBefore from "../../../public/images/software-dev-before.webp";
import webDevServiceAfter from "../../../public/images/software-dev-after.webp";
import axiosInstance from "@/utils/axiosInstance";

const whySecData = {
  heading3: "Why to Choose HadzTech?",
  heading2: (
    <h2 className="same-heading">
      Trusted <span>Software Development</span> Partner
    </h2>
  ),
  para: "We deliver strategic, scalable solutions that empower businesses to grow, innovate, and lead. Our exclusive range of software development delivers CMS, HRMIS, and different business support. We have comprehensive online invoicing solutions to rapid eBill generation.",
  points: [
    "Software application development to reach goals and workflows",
    "From concept and coding to deployment 24/7 support",
    "Engineered solutions that grow with your business and future needs.",
    "Integrate smoothly with existing systems and technology stack.",
    "Focused on speed, security, and functionality to deliver quality outcomes.",
  ],
  image: whySecWebdev,
  attachmentAlt: "whySecWebdev",
};

const whatWeOfferData = {
  heading3: "TAILORED SOFTWARE SOLUTION",
  heading2: (
    <h2 className="same-heading">
      CUSTOM<span> SOFTWARE DEVELOPMENT</span> SERVICES
    </h2>
  ),
  whatWeOfferBox: [
    {
      image: whatWeOfferBox1,
      heading3: "Custom Applications",
      para: "We design and develop bespoke software solutions improved to business goals and operational needs.",
      imageAlt: "whatWeOfferBox1",
    },
    {
      image: whatWeOfferBox2,
      heading3: "Expert Development Team",
      para: "Our skilled application software developers bring technical expertise and strategic thinking to every project.",
      imageAlt: "whatWeOfferBox2",
    },
    {
      image: whatWeOfferBox3,
      heading3: "Scalable Architecture",
      para: "Solutions designed to scale with your business, delivering lasting value, flexibility, and future adaptability.",
      imageAlt: "whatWeOfferBox3",
    },
    {
      image: whatWeOfferBox4,
      heading3: "Unified Integration",
      para: "Our software works flawlessly with existing available tools, platforms, and systems.",
      imageAlt: "whatWeOfferBox4",
    },
    {
      image: whatWeOfferBox5,
      heading3: "Secure & Compliant",
      para: "We prioritize security, compliance, and reliability to protect business and user data.",
      imageAlt: "whatWeOfferBox5",
    },
    {
      image: whatWeOfferBox6,
      heading3: "End-to-End Delivery",
      para: "From strategy and planning to deployment and ongoing support, we manage the entire lifecycle of software.",
      imageAlt: "whatWeOfferBox6",
    },
  ],
};

const websiteDevCompBannerData = {
  imageBefore: webDevServiceBefore,
  imageAfter: webDevServiceAfter,
  h1Part1: (
    <h1 className="same-heading">
      BEST{" "}
      <span>
        SOFTWARE <br /> DEVELOPMENT
      </span>{" "}
      AGENCY
    </h1>
  ),
  para: (
    <p className="para">
      Hadztech, a professional software development agency, crafts powerful,
      <br />
      user-focused software that drives innovation and business growth.
    </p>
  ),
  swipperImages: [
    {
      image: websitePortSlide1,
      imageAlt: "websitePortSlide1",
    },
    {
      image: websitePortSlide2,
      imageAlt: "websitePortSlide2",
    },
    {
      image: websitePortSlide3,
      imageAlt: "websitePortSlide3",
    },
    {
      image: websitePortSlide4,
      imageAlt: "websitePortSlide4",
    },
    {
      image: websitePortSlide5,
      imageAlt: "websitePortSlide5",
    },
    {
      image: websitePortSlide1,
      imageAlt: "websitePortSlide1",
    },
  ],
};

const SoftwareDevComp = () => {
  const [isBlogs, setIsBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/api/blogs");
        if (res.status) {
          setIsBlogs(res.data.items);
        } else if (res.status === 404) {
          console.log("api error");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
    <PageLayout>
      <WebsiteDevCompBanner
        websiteDevCompBannerData={websiteDevCompBannerData}
      />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"Leading Brands"} />
      <IdeaTransformation />
      <WhySec whySecData={whySecData} />
      <WhatWeOffer whatWeOfferData={whatWeOfferData} />
      <CategoryService />
      <OurWork />
      <Testimonials />
      <CtaSec />
      <OurBlogs isBlogs={isBlogs} />
    </PageLayout>
  );
};

export default SoftwareDevComp;
