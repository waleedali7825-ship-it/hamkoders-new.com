"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import ContactBanner from "@/components/ContactUsComp/ContactBanner";
import ContactUsForm from "@/components/PortfolioComp/ContactUsForm/ContactUsForm";
import FeaturedBrands from "@/components/PortfolioComp/FeaturedBrands/FeaturedBrands";
import Testimonials from "@/components/Testimonials/Testimonials";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import axiosInstance from "@/utils/axiosInstance";

const ContactUs = () => {
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
      <ContactBanner />
      <ContactUsForm />
      <FeaturedBrands />
      <Testimonials />
      <OurBlogs isBlogs={isBlogs} />
    </PageLayout>
  );
};

export default ContactUs;
