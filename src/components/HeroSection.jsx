"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section position-relative">
      {/* Top Tag */}
      <div className="tag tag-left">Branding</div>

      <div className="hero-scroll">
        {/* Top text */}
        <div className="hero-line">
          <span className="highlight-text">Build</span>
          <span className="spacer" />
          <span className="text-dark">Brands</span>
        </div>

        {/* Sticky video */}
        <div className="sticky-video-container">
          <div className="video-wrapper">
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="https://res.cloudinary.com/dfx2k65zc/video/upload/v1761350940/portfolio_cys55j.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Bottom text */}
        <div className="hero-line">
          <span className="text-dark">Of</span>
          <span className="spacer" />
          <span className="highlight-text">Excellence</span>
        </div>
      </div>

      {/* Bottom tag */}
      <div className="tag tag-right">Digital</div>
    </section>
  );
}
