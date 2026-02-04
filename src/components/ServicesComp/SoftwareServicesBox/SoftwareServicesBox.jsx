"use client";
import React, { useEffect, useRef, useState } from "react";
import "./SoftwareServicesBox.css";
import Image from "next/image";
import softwaredevPortfolio from "../../../../public/images/softwaredev-portfolio.webp";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const SoftwareServicesBox = () => {
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
    <section ref={sectionRef} className="softwaredev-servicesBox-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="softwaredev-servicesBox">
              <div className="softwaredev-servicesBox-bg">
                <div
                  className={`softwaredev-servicesBox-bg-img ${
                    reveal ? "reveal" : ""
                  }`}
                >
                  <Image
                    src={softwaredevPortfolio}
                    alt="softwaredev-portfolio"
                    priority
                  />
                </div>
              </div>
              <div className="softwaredev-servicesBox-content">
                <div className="softwaredev-servicesBox-contentTop">
                  <h2 className="same-heading">
                    Software <span>Development</span>
                  </h2>
                  <div className="softwaredev-servicesBox-contentTop-btn">
                    <Link className="global-btn-outline-black" href={"/software-development"}>
                      Explore Now
                    </Link>
                  </div>
                </div>
                <p className="para">
                  Our software development service focuses on building secure, high-performing solutions that simplify processes and empower your business to reach its full potential.
                </p>

                <div className="softwaredev-servicesBox-content-box">
                  <div className="row">
                    <div className="col-lg-6 pe-lg-0">
                      <div className="softwaredev-servicesBox-content-box-link">
                        <Link href={"/software-development/erm-development"}>
                          ERM Development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="softwaredev-servicesBox-content-box-link">
                        <Link href={"/software-development/crm-development"}>
                          CRM Development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="softwaredev-servicesBox-content-box-link">
                        <Link href={"/software-development/erp-development"}>
                          ERP Development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="softwaredev-servicesBox-content-box-link">
                        <Link href={"/software-development/cms-development"}>
                          CMS Development
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

export default SoftwareServicesBox;
