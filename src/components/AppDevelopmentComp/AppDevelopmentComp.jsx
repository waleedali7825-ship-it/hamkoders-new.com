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
import axiosInstance from "@/utils/axiosInstance";

import whySecWebdev from "../../../public/images/why-sec-webdev.webp";

import whatWeOfferBox1 from "../../../public/images/app-dev-solution/1.webp";
import whatWeOfferBox2 from "../../../public/images/app-dev-solution/2.webp";
import whatWeOfferBox3 from "../../../public/images/app-dev-solution/3.webp";
import whatWeOfferBox4 from "../../../public/images/app-dev-solution/4.webp";
import whatWeOfferBox5 from "../../../public/images/app-dev-solution/5.webp";
import whatWeOfferBox6 from "../../../public/images/app-dev-solution/6.webp";

import appDevSlide1 from "../../../public/images/app-banner/1.webp";
import appDevSlide2 from "../../../public/images/app-banner/2.webp";
import appDevSlide3 from "../../../public/images/app-banner/3.webp";
import appDevSlide4 from "../../../public/images/app-banner/4.webp";
import appDevSlide5 from "../../../public/images/app-banner/5.webp";
import appDevSlide6 from "../../../public/images/app-banner/6.webp";
import appDevSlide7 from "../../../public/images/app-banner/7.webp";
import appDevSlide8 from "../../../public/images/app-banner/8.webp";
import appDevSlide9 from "../../../public/images/app-banner/9.webp";
import appDevSlide10 from "../../../public/images/app-banner/10.webp";
import appDevBefore from "../../../public/images/appDevBefore.webp";
import appDevAfter from "../../../public/images/appDevAfter.webp";

const whySecData = {
  heading3: "Why Choose HadzTech?",
  heading2: (
    <h2 className="same-heading">
      Smart <span>App</span> Website Design That <span>Performs</span>
    </h2>
  ),
  para: "Our custom app development services focus on innovation and performance, delivering responsive applications that engage users, strengthen brand identity, and drive consistent digital growth for your business.",
  points: [
    "Customized Solutions",
    "Responsive Performance",
    "Scalable & Future-Ready",
    "Secure Development",
    "User-Centric Design",
  ],
  video: "/images/appVideo.mp4",
  image: whySecWebdev,
  attachmentAlt: "whySecWebdev",
};

const whatWeOfferData = {
  heading3: "APP DEVELOPMENT SOLUTION",
  heading2: (
    <h2 className="same-heading">
      BEST<span> MOBILE APP DEVELOPMENT</span> COMPANY
    </h2>
  ),
  whatWeOfferBox: [
    {
      image: whatWeOfferBox1,
      heading3: "Custom-Built Apps",
      para: "Custom-built mobile applications designed to match business goals and user expectations.",
      imageAlt: "whatWeOfferBox1",
    },
    {
      image: whatWeOfferBox2,
      heading3: "Responsive Apps",
      para: "Responsive and high-performing apps that deliver seamless functionality across all devices.",
      imageAlt: "whatWeOfferBox2",
    },
    {
      image: whatWeOfferBox3,
      heading3: "Scalable Solutions",
      para: "Scalable solutions built to evolve with business and future technological demands.",
      imageAlt: "whatWeOfferBox3",
    },
    {
      image: whatWeOfferBox4,
      heading3: "Highly Secure",
      para: "Secure, reliable development practices delivering data protection and platform integrity.",
      imageAlt: "whatWeOfferBox4",
    },
    {
      image: whatWeOfferBox5,
      heading3: "User Friendly",
      para: "Intuitive, user-friendly designs that improve engagement and boost customer satisfaction.",
      imageAlt: "whatWeOfferBox5",
    },
    {
      image: whatWeOfferBox6,
      heading3: "End-to-end Support",
      para: "End-to-end development support, from concept and strategy to launch and ongoing maintenance.",
      imageAlt: "whatWeOfferBox6",
    },
  ],
};

const websiteDevCompBannerData = {
  imageBefore: appDevAfter,
  imageAfter: appDevBefore,
  h1Part1: (
    <h1 className="same-heading">
     Leading Custom <span>App <br /> Development</span> Company
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech stands out as a top custom app development company, delivering
      responsive, <br /> high-quality, and innovative mobile solutions across the USA.
    </p>
  ),
  swipperImages: [
    {
      image: appDevSlide1,
      imageAlt: "appDevSlide1",
    },
    {
      image: appDevSlide2,
      imageAlt: "appDevSlide2",
    },
    {
      image: appDevSlide3,
      imageAlt: "appDevSlide3",
    },
    {
      image: appDevSlide4,
      imageAlt: "appDevSlide4",
    },
    {
      image: appDevSlide5,
      imageAlt: "appDevSlide5",
    },
    {
      image: appDevSlide6,
      imageAlt: "appDevSlide6",
    },
    {
      image: appDevSlide7,
      imageAlt: "appDevSlide7",
    },
    {
      image: appDevSlide8,
      imageAlt: "appDevSlide8",
    },
    {
      image: appDevSlide9,
      imageAlt: "appDevSlide9",
    },
    {
      image: appDevSlide10,
      imageAlt: "appDevSlide10",
    },
  ],
};

const AppDevelopmentComp = () => {
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

export default AppDevelopmentComp;
