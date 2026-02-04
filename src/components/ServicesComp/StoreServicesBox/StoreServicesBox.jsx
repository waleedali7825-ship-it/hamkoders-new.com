"use client";
import React, { useEffect, useRef, useState } from "react";
import "./StoreServicesBox.css";
import Image from "next/image";
import storedevPortfolio from "../../../../public/images/storedev-portfolio.webp";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const StoreServicesBox = () => {
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
    <section ref={sectionRef} className="storedev-servicesBox-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="storedev-servicesBox">
              <div className="storedev-servicesBox-bg">
                <div
                  className={`storedev-servicesBox-bg-img ${
                    reveal ? "reveal" : ""
                  }`}
                >
                  <Image
                    src={storedevPortfolio}
                    alt="storedev-portfolio"
                    priority
                  />
                </div>
              </div>
              <div className="storedev-servicesBox-content">
                <div className="storedev-servicesBox-contentTop">
                  <h2 className="same-heading">
                    Store <span>Development</span>
                  </h2>
                  <div className="storedev-servicesBox-contentTop-btn">
                    <Link className="global-btn-outline-black" href={"/store-development"}>
                      Explore Now
                    </Link>
                  </div>
                </div>
                <p className="para">
                  Our store development service creates user-friendly, visually appealing eCommerce websites that attract customers, increase conversions, and strengthen your brand’s online presence.
                </p>

                <div className="storedev-servicesBox-content-box">
                  <div className="row">
                    <div className="col-lg-6 pe-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/store-development/shopify-development"}>
                          Shopify development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/store-development/magento-development"}>
                          Magento development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/store-development/woocommerce-development"}>
                          Woo commerce development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/store-development/wordpress-development"}>
                          Wordpress development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/store-development/drupal-development"}>
                          Drupal development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="storedev-servicesBox-content-box-link">
                        <Link href={"/store-development/store-maintenance"}>
                          Store maintenance
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

export default StoreServicesBox;
