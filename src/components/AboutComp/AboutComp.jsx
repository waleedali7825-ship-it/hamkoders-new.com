"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import AboutBanner from "@/components/AboutComp/AboutBanner/AboutBanner";
import BrandsSlides from "@/components/BrandsSlides/BrandsSlides";
import AboutSec from "@/components/AboutComp/AboutSec";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Testimonials from "@/components/Testimonials/Testimonials";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import CtaSec from "@/components/CtaSec/CtaSec";
import OurValues from "@/components/AboutComp/OurValues/OurValues";
import FAQSection from "@/components/AboutComp/FaqSec/FaqSec";
import axiosInstance from "@/utils/axiosInstance";

const faqs = [
    {
      question: "What services does Hadztech offer for startups?",
      answer: "Hadztech is a design agency for startups, offering branding, website design services, and UI/UX design to help you launch with confidence.",
    },
    {
      question:
        "Can you develop websites and mobile apps?",
      answer:
        "Yes, we provide web development services and custom app development services tailored to business needs.",
    },
    {
      question: "Do you offer digital marketing and content creation?",
      answer: "We deliver complete digital marketing services including SEO, PPC, SMM, and creative content writing services like blogs and product descriptions.",
    },
    {
      question: "What makes design approach effective?",
      answer: "As a UI & UX design agency, we focus on user-friendly, responsive, and visually engaging solutions that improve customer experience.",
    },
    {
      question:
        "How does Hadztech support brand building?",
      answer: "Hadztech offers expert branding consultation services, logo design, and visual storytelling for startups to build strong, memorable brands.",
    },
  ];

const AboutComp = () => {
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
      <AboutBanner />
      <div className="mt-5">
        <BrandsSlides />
      </div>
      <AboutSec />
      <WhyChoose />
      <OurValues />
      <Testimonials />
      <CtaSec />
      <div className="faqsec">
        <FAQSection faqs={faqs}/>
      </div>
      <OurBlogs isBlogs={isBlogs} />
    </PageLayout>
  );
};

export default AboutComp;
