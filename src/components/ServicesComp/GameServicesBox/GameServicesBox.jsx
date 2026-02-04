"use client";
import React, { useEffect, useRef, useState } from "react";
import "./GameServicesBox.css";
import Image from "next/image";
import gamedevPortfolio from "../../../../public/images/gamedev-portfolio.webp";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const GameServicesBox = () => {
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
    <section ref={sectionRef} className="gamedev-servicesBox-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="gamedev-servicesBox">
              <div className="gamedev-servicesBox-bg">
                <div
                  className={`gamedev-servicesBox-bg-img ${
                    reveal ? "reveal" : ""
                  }`}
                >
                  <Image
                    src={gamedevPortfolio}
                    alt="gamedev-portfolio"
                    priority
                  />
                </div>
              </div>
              <div className="gamedev-servicesBox-content">
                <div className="gamedev-servicesBox-contentTop">
                  <h2 className="same-heading">
                    Game <span>Development</span>
                  </h2>
                  <div className="gamedev-servicesBox-contentTop-btn">
                    <Link className="global-btn-outline-black" href={"/game-development"}>
                      Explore Now
                    </Link>
                  </div>
                </div>
                <p className="para">
                  Our skilled team specializes in game design and development, producing entertaining, visually attractive, and performance-driven games that connect with audiences and raise your brand's profile in the gaming industry.
                </p>

                <div className="gamedev-servicesBox-content-box">
                  <div className="row">
                    <div className="col-lg-6 pe-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/mobile-app-development"}>
                          Mobile app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/cross-platform-game-development"}>
                          Cross-platform app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/blockchain-and-nft-game-app"}>
                          Blockchain & NFT game app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/console-game-app"}>
                          Console game app development
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/concept-design"}>
                          Concept design
                          <HiMiniArrowUpRight size={30} color={"#000"} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-0">
                      <div className="gamedev-servicesBox-content-box-link">
                        <Link href={"/game-development/testing-and-maintenance"}>
                          Testing & maintenance
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

export default GameServicesBox;
