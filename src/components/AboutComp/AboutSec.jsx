import React from "react";
import "./AboutSec.css";

const AboutSec = () => {
  return (
    <section className="home-about-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-about-content home-about-contentXtra">
              <div className="home-about-left">
                <h3 className="same-heading">
                  Our <span>Mission</span>
                </h3>
                <p className="para">
                  HadzTech’s mission is to empower businesses through
                  innovative, user-focused digital solutions. We blend
                  functionality and creativity to deliver exceptional UI/UX
                  experiences that drive rapid growth.
                </p>
              </div>
              <div className="home-about-right home-about-rightXtra">
                <h3 className="same-heading">
                  Our <span>Vision</span>
                </h3>
                <p className="para">
                  Our vision is to become a leading global technology partner,
                  delivering impactful digital experiences and setting new
                  standards for creativity, performance, and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
