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
import whySecGameDev from "../../../public/images/whySecGameDev.webp";

import whatWeOfferBox1 from "../../../public/images/game-dev-solution/1.webp";
import whatWeOfferBox2 from "../../../public/images/game-dev-solution/2.webp";
import whatWeOfferBox3 from "../../../public/images/game-dev-solution/3.webp";
import whatWeOfferBox4 from "../../../public/images/game-dev-solution/4.webp";
import whatWeOfferBox5 from "../../../public/images/game-dev-solution/5.webp";
import whatWeOfferBox6 from "../../../public/images/game-dev-solution/6.webp";

import websitePortSlide1 from "../../../public/images/game-banner/1.webp";
import websitePortSlide2 from "../../../public/images/game-banner/2.webp";
import websitePortSlide3 from "../../../public/images/game-banner/3.webp";
import websitePortSlide4 from "../../../public/images/game-banner/4.webp";
import websitePortSlide5 from "../../../public/images/game-banner/5.webp";
import websitePortSlide6 from "../../../public/images/game-banner/6.webp";
import websitePortSlide7 from "../../../public/images/game-banner/7.webp";
import websitePortSlide8 from "../../../public/images/game-banner/8.webp";
import webDevServiceBefore from "../../../public/images/game-dev-before.webp";
import webDevServiceAfter from "../../../public/images/game-dev-after.webp";
import axiosInstance from "@/utils/axiosInstance";

const whySecData = {
  heading3: "EXPERT IN GAMES",
  heading2: (
    <h2 className="same-heading">
      AN OUTSTANDING <span> GAME DEVELOPMENT</span> COMPANY
    </h2>
  ),
  para: "We design top-quality mobile games with impressive visuals and seamless gameplay. Our skilled designers deliver modern, engaging experiences that feel premium and exciting. Partner with us to bring your game ideas to life.",
  points: [
    "High-quality mobile games with exceptional graphical interfaces.",
    "Professional, luxurious gameplay experiences crafted by experts.",
    "Stunning designs that fascinate and engage players instantly.",
    "Modern, high-class game solutions built for today’s market.",
    "Expert game developers ready to bring fun like addiction.",
  ],
  image: whySecGameDev,
  attachmentAlt: "whySecWebdev",
};

const whatWeOfferData = {
  heading3: "MOBILE GAME SOLUTION",
  heading2: (
    <h2 className="same-heading">
      NATIVE<span> MOBILE GAMES </span>DEVELOPERS <span>IN HOUSTON</span>
    </h2>
  ),
  whatWeOfferBox: [
    {
      image: whatWeOfferBox1,
      heading3: "Custom Games",
      para: "We design and develop fully tailored mobile games that align with vision, deliver engaging experiences, and stand out in a competitive market.",
      imageAlt: "whatWeOfferBox1",
    },
    {
      image: whatWeOfferBox2,
      heading3: "Houston Experts",
      para: "Our native mobile games developers in Houston bring deep technical expertise and creativity to deliver world-class gaming solutions that attract users.",
      imageAlt: "whatWeOfferBox2",
    },
    {
      image: whatWeOfferBox3,
      heading3: "Creative Design",
      para: "From concept to interface, we focus on stunning visuals, smooth mechanics, and brilliant gameplay that keep players engaged and entertained.",
      imageAlt: "whatWeOfferBox3",
    },
    {
      image: whatWeOfferBox4,
      heading3: "VR Innovation",
      para: "We specialize in VR game development, creating 3D environment, interactive experiences that redefine the way players connect with games.",
      imageAlt: "whatWeOfferBox4",
    },
    {
      image: whatWeOfferBox5,
      heading3: "Multi-Platform",
      para: "Our games are optimized for seamless performance across mobile devices, ensuring consistent quality, speed, and user satisfaction.",
      imageAlt: "whatWeOfferBox5",
    },
    {
      image: whatWeOfferBox6,
      heading3: "Complete Support",
      para: "From strategy and design to development, launch, and post-release updates, we manage the entire process to ensure long-term success.",
      imageAlt: "whatWeOfferBox6",
    },
  ],
};

const websiteDevCompBannerData = {
  imageBefore: webDevServiceBefore,
  imageAfter: webDevServiceAfter,
  h1Part1: (
    <h1 className="same-heading">
      LEADING <span>MOBILE GAME</span> <br /> DEVELOPMENT <span>COMPANY</span>
    </h1>
  ),
  para: (
    <p className="para">
      Hadztech, a mobile game development company, is passionate <br /> about creating
      fun, fast, and visually appealing games for every gamer.
    </p>
  ),
  swipperImages: [
    // {
    //   image: websitePortSlide1,
    //   imageAlt: "websitePortSlide1",
    // },
    {
      image: websitePortSlide2,
      imageAlt: "websitePortSlide2",
    },
    // {
    //   image: websitePortSlide3,
    //   imageAlt: "websitePortSlide3",
    // },
    {
      image: websitePortSlide4,
      imageAlt: "websitePortSlide4",
    },
    // {
    //   image: websitePortSlide5,
    //   imageAlt: "websitePortSlide5",
    // },
    {
      image: websitePortSlide6,
      imageAlt: "websitePortSlide6",
    },
    // {
    //   image: websitePortSlide7,
    //   imageAlt: "websitePortSlide7",
    // },
    {
      image: websitePortSlide8,
      imageAlt: "websitePortSlide8",
    },
    // {
    //   image: websitePortSlide1,
    //   imageAlt: "websitePortSlide1",
    // },
    {
      image: websitePortSlide2,
      imageAlt: "websitePortSlide2",
    },
    // {
    //   image: websitePortSlide3,
    //   imageAlt: "websitePortSlide3",
    // },
    {
      image: websitePortSlide4,
      imageAlt: "websitePortSlide4",
    },
    // {
    //   image: websitePortSlide5,
    //   imageAlt: "websitePortSlide5",
    // },
    {
      image: websitePortSlide6,
      imageAlt: "websitePortSlide6",
    },
    // {
    //   image: websitePortSlide7,
    //   imageAlt: "websitePortSlide7",
    // },
    {
      image: websitePortSlide8,
      imageAlt: "websitePortSlide8",
    },
  ],
};

const GameDevelopmentComp = () => {
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

export default GameDevelopmentComp;
