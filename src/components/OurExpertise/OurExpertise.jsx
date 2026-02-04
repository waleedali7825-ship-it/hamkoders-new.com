"use client";
import React, { useState } from "react";
import "./OurExpertise.css";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

import expertise1 from "../../../public/images/expertise1.webp";
import expertise2 from "../../../public/images/expertise2.webp";
import expertise3 from "../../../public/images/expertise3.webp";
import expertise4 from "../../../public/images/expertise4.webp";
import expertise5 from "../../../public/images/expertise5.webp";

const OurExpertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const expertiseData = [
    { title: "Website Development", image: expertise1, alt: "expertise1" },
    { title: "App Development", image: expertise2, alt: "expertise2" },
    { title: "Game Development", image: expertise3, alt: "expertise3" },
    { title: "Store Development", image: expertise4, alt: "expertise4" },
    { title: "Software Development", image: expertise5, alt: "expertise5" },
  ];

  return (
    <section className="our-expertise-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-expertise-content">
              <h2 className="same-heading">
                Our <span>Expertise</span>
              </h2>
              <div className="our-expertise-right">
                <p className="para">
                  Specializing in bringing innovative <br /> ideas to life.
                </p>
                <div className="our-expertise-btn">
                  <Link href={"/services"} className="global-btn-outline">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7 col-md-6">
            <div className="our-expertise-boxes">
              {expertiseData.map((item, index) => (
                <div
                  key={index}
                  className={`our-expertise-box ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <h3>{item.title}</h3>
                  <GoArrowRight color="#000000" size={30} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className={`our-expertise-image-box ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <Image src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
