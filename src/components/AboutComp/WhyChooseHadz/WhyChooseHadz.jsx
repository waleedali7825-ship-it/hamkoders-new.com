import React from "react";
import "./WhyChooseHadz.css";
import Image from "next/image";

import WhyChoose1 from "../../../../public/images/why-1.webp";
import WhyChoose2 from "../../../../public/images/why-2.webp";
import WhyChoose3 from "../../../../public/images/why-3.webp";
import WhyChoose4 from "../../../../public/images/why-4.webp";
import WhyChoose5 from "../../../../public/images/why-5.webp";
import WhyChoose6 from "../../../../public/images/why-6.webp";

const WhyChooseHadz = () => {
  return (
    <section className="whyChoose-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="whyChoose-content">
              <h2 className="same-heading">
                Why Choose Us <span>for Partnering?</span>
              </h2>
              <p className="para">
                HadzTech means gaining a team that’s driven by innovation,
                strategy, and measurable success. We build relationships that
                help business grow, scale, and lead in its industry.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose1} alt="why-1" />

              <div className="whyChoose-box-content">
                <h4>Industries Expertise</h4>

                <p className="para">
                  With experience in multiple sectors, we understand the market challenges and deliver personalized solutions that work best for the industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose2} alt="why-2" />

              <div className="whyChoose-box-content">
                <h4>User-Centric Design</h4>

                <p className="para">
                  Every project starts with the audience in mind. We focus on clean design and in-built interfaces that improve user experience and engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose3} alt="why-3" />

              <div className="whyChoose-box-content">
                <h4>Innovative Solutions</h4>

                <p className="para">
                  We influence cutting-edge tools and frameworks to build fast, scalable, and future-ready digital platforms that drive performance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose4} alt="why-4" />

              <div className="whyChoose-box-content">
                <h4>Strategic Focus</h4>

                <p className="para">
                  Our team aligns every design and growth decision with business objectives, helping you achieve measurable progress and ROI.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose5} alt="why-5" />

              <div className="whyChoose-box-content">
                <h4>Reliable Partnership</h4>

                <p className="para">
                  We’re dedicated partners offering continuous support, updates, and developments to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="whyChoose-box">
              <Image src={WhyChoose6} alt="why-6" />

              <div className="whyChoose-box-content">
                <h4>Client Satisfaction</h4>

                <p className="para">
                  Our track record speaks for itself and delivers successful projects. Boost visibility, strengthen brand identity, and create real business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHadz;
