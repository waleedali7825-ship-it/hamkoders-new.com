"use client";
import React, { useEffect, useState } from "react";
import "./HomeBanner.css";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeBanner = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`home-banner-content ${showVideo ? "active" : ""}`}>
              <h3>
                We are <span>Hamkoders.</span>
              </h3>
              <h1>
                <span>Build</span>
                {showVideo && (
                  <motion.div
                    className="home-banner-video"
                    initial={{ width: 0, height: 150, opacity: 0 }}
                    animate={{ width: 618, height: 150, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <motion.video
                      autoPlay
                      loop
                      muted
                      playsInline
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <source src="https://res.cloudinary.com/dfx2k65zc/video/upload/v1761350940/portfolio_cys55j.mp4" type="video/mp4" />
                    </motion.video>
                  </motion.div>
                )}
                Brands
              </h1>
              <h1>
                Of
                {showVideo && (
                  <motion.div
                    className="home-banner-video1"
                    initial={{ width: 0, height: 150, opacity: 0 }}
                    animate={{ width: 518, height: 150, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  >
                    <motion.video
                      autoPlay
                      loop
                      muted
                      playsInline
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                      <source src="https://res.cloudinary.com/dfx2k65zc/video/upload/v1762813711/Final_compressed_wq9aee.mp4" type="video/mp4" />
                    </motion.video>
                  </motion.div>
                )}
                <span>Excellence</span>
              </h1>

              <p>
                We don’t create digital solutions.We design meaningful experiences that inspire growth and deliver results. With proven technologies and strong focus on quality, we help businesses grow, scale, and succeed with confidence.
              </p>
            </div>
            <div className="home-banner-links">
              <Link href={"#"} onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#exampleModal">Get Started</Link>
              <Link href={"#"} className="open-chat">Start a Conversation</Link>
            </div>

            <div className="home-banner-span">
              <span>
                A results-driven digital agency turning ideas into impactful digital experiences.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;