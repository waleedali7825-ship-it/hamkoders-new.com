export const metadata = {
  title: "E-commerce Website Development Solutions for Business Growth",
  description:
    "We offer e-commerce website development tailored to your brand — scalable, user-focused, and designed to convert online visitors into loyal, long-term customers",
};
import React from "react";
import PageLayout from "@/components/PageLayout";
import ServicesBanner from "@/components/ServicesComp/ServicesBanner";
import FeaturedBrands from "@/components/PortfolioComp/FeaturedBrands/FeaturedBrands";
import WebServicesBox from "@/components/ServicesComp/WebServicesBox/WebServicesBox";
import AppServicesBox from "@/components/ServicesComp/AppServicesBox/AppServicesBox";
import GameServicesBox from "@/components/ServicesComp/GameServicesBox/GameServicesBox";
import StoreServicesBox from "@/components/ServicesComp/StoreServicesBox/StoreServicesBox";
import SoftwareServicesBox from "@/components/ServicesComp/SoftwareServicesBox/SoftwareServicesBox";
import CtaSec from "@/components/CtaSec/CtaSec";
import Testimonials from "@/components/Testimonials/Testimonials";

const ServicesPage = () => {
  return (
    <PageLayout>
      <ServicesBanner />
      <FeaturedBrands heading={"Chosen by"} headingSpan={"Renowned Brands"} />
      <WebServicesBox />
      <AppServicesBox />
      <GameServicesBox />
      <StoreServicesBox />
      <SoftwareServicesBox />
      <div className="cta_sec_margin">
        <CtaSec />
      </div>
      <Testimonials />
    </PageLayout>
  );
};

export default ServicesPage;
