import React from "react";
import "./HowItWorks.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

import howWorks1 from "../../../public/images/how-works1.png";
import howWorks2 from "../../../public/images/how-works2.png";
import howWorks3 from "../../../public/images/how-works3.png";
import howWorks4 from "../../../public/images/how-works4.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-12">
            <div className="how-it-works-content">
              <div className="how-it-works-content-left">
                <h4>How it Work</h4>
                <h2 className="same-heading">
                  Simple Steps to <span>Digital Success</span>
                </h2>
              </div>
              <div className="how-it-works-content-right">
                <p className="para">
                  Our streamlined process ensures your digital growth is
                  seamless and effective. ipsum dolor sit amet, consectetur
                  adipiscing elit. In ex ligula, varius at rutrum et, finibus
                  sed felis.
                </p>
                <div className="how-it-works-btn">
                  <Link href={"/"}>
                    Get Started Now <GoArrowUpRight color="#D41423" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="how-it-works-box">
              <Image src={howWorks1} width={70} height={70} alt="how-works1" />

              <h4>
                Discovery & <br /> Consult
              </h4>
              <p className="para">
                Understanding your brand, goals, and challenges to craft a tailored digital strategy.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="how-it-works-box how-it-works-box2">
              <Image src={howWorks2} width={70} height={70} alt="how-works2" />

              <h4>
                Strategy & <br /> Planning
              </h4>
              <p className="para">
                Creating a clear roadmap with smart goals, timelines, and performance - focused direction.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="how-it-works-box">
              <Image src={howWorks3} width={70} height={70} alt="how-works3" />

              <h4>
                Execution & <br /> Optimize
              </h4>
              <p className="para">
                Launching with precision, testing performance, and refining for maximum impact and growth.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="how-it-works-box how-it-works-box2">
              <Image src={howWorks4} width={70} height={70} alt="how-works4" />

              <h4>
                Result & <br /> Growth
              </h4>
              <p className="para">
                Tracking real results, scaling success, and building long-term growth for your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
