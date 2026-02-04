"use client";
import React, { useEffect, useRef, useState } from "react";
import "./AppServicesBox.css";
import Image from "next/image";
import appdevPortfolio from "../../../../public/images/appdev-portfolio.webp";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const AppServicesBox = () => {
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
    <section ref={sectionRef} className="appdev-servicesBox-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="appdev-servicesBox">
              <div className="appdev-servicesBox-bg">
                <div
                  className={`appdev-servicesBox-bg-img ${
                    reveal ? "reveal" : ""
                  }`}
                >
                  <Image
                    src={appdevPortfolio}
                    alt="appdev-portfolio"
                    priority
                  />
                </div>
              </div>
              <div className="appdev-servicesBox-content">
                <div className="appdev-servicesBox-contentTop">
                  <h2 className="same-heading">
                    App <span>Development</span>
                  </h2>
                  <div className="appdev-servicesBox-contentTop-btn">
                    <Link className="global-btn-outline-black" href={"/app-development"}>
                      Explore Now
                    </Link>
                  </div>
                </div>
                <p className="para">
                  We build powerful mobile apps and deliver solutions that improve user experience, boost engagement, and help your business grow in the digital world.
                </p>

                <div className="appdev-servicesBox-content-box">
                  <div className="row">
                    <div className="col-lg-6 pe-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/ios-app-development"}>
                          iOS app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/android-app-development"}>
                          Android app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/cross-platform-app-development"}>
                          Cross-platform app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/hybrid-app-development"}>
                          Hybrid app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/saas-app-development"}>
                          Saas app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/mvp-app-development"}>
                          MVP app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/concept-design"}>
                          Concept design
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/wearable-app-development"}>
                          Wearable app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="appdev-servicesBox-content-box-link">
                        <Link href={"/app-development/app-maintenance"}>
                          App maintenance
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

export default AppServicesBox;
