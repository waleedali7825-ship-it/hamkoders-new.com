"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import IndustryBanner from "@/components/IndustriesComp/IndustryBanner";
import BrandsSlides from "@/components/BrandsSlides/BrandsSlides";
import LeadingIndusties from "@/components/IndustriesComp/LeadingIndusties/LeadingIndusties";
import WhyChooseHadz from "@/components/AboutComp/WhyChooseHadz/WhyChooseHadz";
import CtaSec from "@/components/CtaSec/CtaSec";
import Testimonials from "@/components/Testimonials/Testimonials";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import axiosInstance from "@/utils/axiosInstance";

const IndustriesComp = () => {
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
      <IndustryBanner />
      <BrandsSlides />
      <LeadingIndusties />
      <WhyChooseHadz />
      <div className="cta_sec_margin">
        <CtaSec />
      </div>
      <Testimonials />
      <OurBlogs isBlogs={isBlogs} />
    </PageLayout>
  );
};

export default IndustriesComp;
