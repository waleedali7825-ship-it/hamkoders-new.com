"use client";
import React, { useEffect, useRef, useState } from "react";
import "./WebServicesBox.css";
import Image from "next/image";
import webdevPortfolio from "../../../../public/images/webdev-portfolio.webp";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const WebServicesBox = () => {
  const [reveal, setReveal] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="webdev-servicesBox-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="webdev-servicesBox">
              <div className="webdev-servicesBox-bg">
                <div
                  className={`webdev-servicesBox-bg-img ${
                    reveal ? "reveal" : ""
                  }`}
                >
                  <Image
                    src={webdevPortfolio}
                    alt="webdev-portfolio"
                    priority
                  />
                </div>
              </div>
              <div className="webdev-servicesBox-content">
                <div className="webdev-servicesBox-contentTop">
                  <h2 className="same-heading">
                    Web <span>Development</span>
                  </h2>
                  <div className="webdev-servicesBox-contentTop-btn">
                    <Link className="global-btn-outline-black" href={"/website-development"}>
                      Explore Now
                    </Link>
                  </div>
                </div>
                <p className="para">
                  Through our custom web development expertise, we create responsive, scalable, and visually stunning websites that reflect your brand’s identity and deliver meaningful results for your business.
                </p>

                <div className="webdev-servicesBox-content-box">
                  <div className="row">
                    <div className="col-lg-6 pe-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/custom-website-development"}>
                          Custom website development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/enterprise-web-development"}>
                          Enterprise web development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/web-app-development"}>
                          Web app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/frontend-development"}>
                          Front-end development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/backend-development"}>
                          Backend development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/fullstack-development"}>
                          Full-stack development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/landing-page-development"}>
                          Landing Page Development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/web3.0-development"}>
                          Web 3.0 Development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="webdev-servicesBox-content-box-link">
                        <Link href={"/website-development/website-maintenance"}>
                          Website maintenance
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServicesBox;
