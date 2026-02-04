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
import whySecStoreDev from "../../../public/images/whySecStoreDev.webp";

import whatWeOfferBox1 from "../../../public/images/store-dev-solution/1.webp";
import whatWeOfferBox2 from "../../../public/images/store-dev-solution/2.webp";
import whatWeOfferBox3 from "../../../public/images/store-dev-solution/3.webp";
import whatWeOfferBox4 from "../../../public/images/store-dev-solution/4.webp";
import whatWeOfferBox5 from "../../../public/images/store-dev-solution/5.webp";
import whatWeOfferBox6 from "../../../public/images/store-dev-solution/6.webp";

import websitePortSlide1 from "../../../public/images/store-banner/1.webp";
import websitePortSlide2 from "../../../public/images/store-banner/2.webp";
import websitePortSlide3 from "../../../public/images/store-banner/3.webp";
import websitePortSlide4 from "../../../public/images/store-banner/4.webp";
import websitePortSlide5 from "../../../public/images/store-banner/5.webp";
import webDevServiceBefore from "../../../public/images/store-dev-before.webp";
import webDevServiceAfter from "../../../public/images/store-dev-after.webp";
import axiosInstance from "@/utils/axiosInstance";

const whySecData = {
  heading3: "Why Choose HadzTech?",
  heading2: (
    <h2 className="same-heading">
      Your Trusted Partner for <span>Store Development</span>
    </h2>
  ),
  para: "We specialize in store development, creating engaging shopping experiences that boost customer loyalty. Our expert team offers Shopify and WooCommerce website development, delivering effective eStore solutions that drive business growth and lasting success.",
  points: [
    "eCommerce store development services offer unique brand needs.",
    "User Experience with engaging design, and fast checkout processes",
    "Scalable & Flexible Platforms to grow with market changes.",
    "Secure Payment & Data for safe payment gateways.",
    "Conversion-Focused Design increases sales and boost revenue.",
  ],
  image: whySecStoreDev,
  attachmentAlt: "whySecWebdev",
};

const whatWeOfferData = {
  heading3: "MOBILE COMMERCE SOLUTION",
  heading2: (
    <h2 className="same-heading">
      CUSTOM<span> ECOMMERCE STORE DEVELOPMENT</span> SERVICES
    </h2>
  ),
  whatWeOfferBox: [
    {
      image: whatWeOfferBox1,
      heading3: "Custom Online Stores",
      para: "We design and develop eCommerce platforms for products, customers, and business goals.",
      imageAlt: "whatWeOfferBox1",
    },
    {
      image: whatWeOfferBox2,
      heading3: "Expert Store Developers",
      para: "Our skilled online store developers create innovative, conversion-driven online retail experiences.",
      imageAlt: "whatWeOfferBox2",
    },
    {
      image: whatWeOfferBox3,
      heading3: "Engaging UI/UX Design",
      para: "We focus on user-friendly interfaces, unified navigation, and optimized layouts for higher conversions.",
      imageAlt: "whatWeOfferBox3",
    },
    {
      image: whatWeOfferBox4,
      heading3: "Secure Payment Systems",
      para: "With safe and reliable integrations, we ensure every transaction is protected and trustworthy.",
      imageAlt: "whatWeOfferBox4",
    },
    {
      image: whatWeOfferBox5,
      heading3: "Scalable Solutions",
      para: "Our stores are built for growth, capable of expanding with inventory and audience.",
      imageAlt: "whatWeOfferBox5",
    },
    {
      image: whatWeOfferBox6,
      heading3: "Ongoing Support",
      para: "From launch to long-term updates, we provide continuous support to keep online store ahead of the competition.",
      imageAlt: "whatWeOfferBox6",
    },
  ],
};

const websiteDevCompBannerData = {
  imageBefore: webDevServiceBefore,
  imageAfter: webDevServiceAfter,
  h1Part1: (
    <h1 className="same-heading">
      CUSTOM <span>E-COMMERCE</span> <br /> STORE DEVELOPMENT
      <br />
      <span> COMPANY</span>
    </h1>
  ),
  para: (
    <p className="para">
      We offer custom eCommerce store development services, creating scalable,{" "}
      <br />
      engaging platforms with expert online store builder solutions like Shopify
      and WooCommerce.
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

const StoreDevelopmentComp = () => {
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

export default StoreDevelopmentComp;
