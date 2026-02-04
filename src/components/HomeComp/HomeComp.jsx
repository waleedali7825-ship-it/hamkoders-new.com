"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import HomeBanner from "@/components/HomeComp/HomeBanner/HomeBanner";
import BrandsSlides from "@/components/BrandsSlides/BrandsSlides";
import HomeAbout from "@/components/HomeComp/HomeAbout/HomeAbout";
import AboutProgress from "@/components/AboutProgress/AboutProgress";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import OurServices from "@/components/HomeComp/OurServices/OurServices";
import OurWork from "@/components/OurWork/OurWork";
import OurExpertise from "@/components/OurExpertise/OurExpertise";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";
import CtaSec from "@/components/CtaSec/CtaSec";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import axiosInstance from "@/utils/axiosInstance";

const HomeComp = () => {
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
      <HomeBanner />
      <BrandsSlides />
      <HomeAbout />
      <AboutProgress />
      <WhyChoose />
      <OurServices />
      <OurWork />
      <OurExpertise />
      <HowItWorks />
      <Testimonials />
      <CtaSec />
      <OurBlogs isBlogs={isBlogs} />
    </PageLayout>
  );
};

export default HomeComp;
