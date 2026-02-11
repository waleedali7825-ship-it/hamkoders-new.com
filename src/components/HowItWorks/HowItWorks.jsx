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
                  Our proven process supports your digital growth with smooth execution and smart planning. We deliver effective solutions that boost performance, engagement, and long-term online visibility.
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
                We analyze your business needs, audience insights, and market trends to create a strong base for successful digital growth.
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
                Our experts design effective digital strategies and structured planning to improve performance and build long-term brand success globally.
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
                We implement advanced solutions and continuously optimize campaigns to enhance performance, user experience, and overall business results.
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
                We focus on measurable results that strengthen your brand presence, increase conversions, and drive consistent digital business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
