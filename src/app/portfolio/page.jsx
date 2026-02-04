export const metadata = {
  title: "Our Portfolio: Projects That Showcase Craft Code Creativity",
  description:
    "Take a look at our portfolio of websites, apps, and platforms—each built to solve real problems and deliver results through smart design and development.",
};
import React from "react";
import PageLayout from "@/components/PageLayout";
import PortfolioBanner from "@/components/PortfolioComp/PortfolioBanner";
import FeaturedBrands from "@/components/PortfolioComp/FeaturedBrands/FeaturedBrands";
import CaseStudy from "@/components/PortfolioComp/CaseStudy/CaseStudy";
import CtaSec from "@/components/CtaSec/CtaSec";
import Testimonials from "@/components/Testimonials/Testimonials";

const PortfolioPage = () => {
  return (
    <PageLayout>
      <PortfolioBanner />
      <FeaturedBrands />
      <CaseStudy />
      <div style={{ marginBottom: "100px" }}>
        <CtaSec />
      </div>
      <Testimonials />
    </PageLayout>
  );
};

export default PortfolioPage;
