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
import whySecWebdev from "../../../public/images/why-sec-webdev.webp";

import whatWeOfferBox1 from "../../../public/images/what-we-offer-box1.webp";
import whatWeOfferBox2 from "../../../public/images/what-we-offer-box2.webp";
import whatWeOfferBox3 from "../../../public/images/what-we-offer-box3.webp";
import whatWeOfferBox4 from "../../../public/images/what-we-offer-box4.webp";
import whatWeOfferBox5 from "../../../public/images/what-we-offer-box5.webp";
import whatWeOfferBox6 from "../../../public/images/what-we-offer-box6.webp";

import websitePortSlide1 from "../../../public/images/website-port-slide1.webp";
import websitePortSlide2 from "../../../public/images/website-port-slide2.webp";
import websitePortSlide3 from "../../../public/images/website-port-slide3.webp";
import websitePortSlide4 from "../../../public/images/website-port-slide4.webp";
import websitePortSlide5 from "../../../public/images/website-port-slide5.webp";
import webDevServiceBefore from "../../../public/images/web-dev-service-before.webp";
import webDevServiceAfter from "../../../public/images/web-dev-service-after.webp";
import axiosInstance from "@/utils/axiosInstance";
// import whySecVideo from "../../../public/images/whySecVideo.mp4"

const whySecData = {
  heading3: "Why Choose HadzTech?",
  heading2: (
    <h2 className="same-heading">
      We Don’t <span>Just Design Websites</span> We <span>Design</span> Success
    </h2>
  ),
  para: "Your website is your digital first impression we make it unforgettable. Our expert team blends design and performance to craft impactful, high-standard websites that drive success and build lasting trust.",
  points: [
    "Create a remarkable first impression that defines a brand.",
    "Deliver premium, high-impact website designs that fascinate users.",
    "Build unified, intelligent functionality that keeps visitors engaged.",
    "Optimize performance, reliability, and influential results.",
    "Drive measurable business growth through strategic solutions.",
  ],
  video: "/images/whySecVideo.mp4",
  image: whySecWebdev,
  attachmentAlt: "whySecWebdev",
};

const whatWeOfferData = {
  heading3: "WEBSITE DEVELOPMENT SERVICES",
  heading2: (
    <h2 className="same-heading">
      INNOVATIVE<span> WEB DEVELOPMENT</span> SERVICES
    </h2>
  ),
  whatWeOfferBox: [
    {
      image: whatWeOfferBox1,
      heading3: 'Custom-Built Solutions',
      para: 'Every website we create is modified to a unique brand, industry, and objectives, no templates, no shortcuts.',
      imageAlt: 'whatWeOfferBox1'
    },
    {
      image: whatWeOfferBox2,
      heading3: 'High-Performance Development',
      para: 'We focus on speed, reliability, and seamless performance to enhance user experience and improve conversions.',
      imageAlt: 'whatWeOfferBox2'
    },
    {
      image: whatWeOfferBox3,
      heading3: 'Responsive Design',
      para: 'Our websites look and function flawlessly on all devices, delivering a consistent experience everywhere.',
      imageAlt: 'whatWeOfferBox3'
    },
    {
      image: whatWeOfferBox4,
      heading3: 'Secure & Scalable Platforms',
      para: 'We integrate top-level security and build scalable solutions that grow with business.',
      imageAlt: 'whatWeOfferBox4'
    },
    {
      image: whatWeOfferBox5,
      heading3: 'User-Centric Experience',
      para: 'Every design decision is made with audience in mind, ensuring intuitive navigation and meaningful engagement.',
      imageAlt: 'whatWeOfferBox5'
    },
    {
      image: whatWeOfferBox6,
      heading3: 'SEO & Growth Ready',
      para: 'Our development process is optimized for search engines and structured to support long-term digital success.',
      imageAlt: 'whatWeOfferBox6'
    },

  ]
};

const websiteDevCompBannerData = {
  imageBefore: webDevServiceBefore,
  imageAfter: webDevServiceAfter,
 h1Part1: (
  <h1 className="same-heading">Our Custom <span>Web <br /> Development</span> Services</h1>
 ),
  // spanPart2: "APP DEVELOPMENT",
  // spanPart3: "COMPANY",
  para: (
  <p className="para">Build your brand’s digital foundation with custom web development services <br /> designed to impress, perform, and accelerate business growth.</p>
 ), 
  swipperImages: [
    {
      image: websitePortSlide1,
      imageAlt: 'websitePortSlide1'
    },
    {
      image: websitePortSlide2,
      imageAlt: 'websitePortSlide2'
    },
    {
      image: websitePortSlide3,
      imageAlt: 'websitePortSlide3'
    },
    {
      image: websitePortSlide4,
      imageAlt: 'websitePortSlide4'
    },
    {
      image: websitePortSlide5,
      imageAlt: 'websitePortSlide5'
    },
    {
      image: websitePortSlide1,
      imageAlt: 'websitePortSlide1'
    }
  ]
}

const WebsiteDevelopmentComp = () => {
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
      <WebsiteDevCompBanner websiteDevCompBannerData={websiteDevCompBannerData}/>
      <FeaturedBrands heading={"Trusted by"} headingSpan={"Leading Brands"} />
      <IdeaTransformation />
      <WhySec whySecData={whySecData} />
      <WhatWeOffer whatWeOfferData={whatWeOfferData}/>
      <CategoryService />
      <OurWork />
      <Testimonials />
      <CtaSec />
      <OurBlogs isBlogs={isBlogs} />
    </PageLayout>
  );
};

export default WebsiteDevelopmentComp;
