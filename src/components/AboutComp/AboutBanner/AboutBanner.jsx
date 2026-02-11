import React from "react";
import "./AboutBanner.css";
import Link from "next/link";

const AboutBanner = () => {
  return (
    <section className="about-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-banner-content">
              <h4>
                WITH<span>HAMKODERS</span>
              </h4>
              <h1 className="same-heading">
                WE DON’T JUST <span>CREATE SOFTWARE </span>
              </h1>
              <h1 className="same-heading">
                <span>WE CREATE</span> SUCCESS STORIES
              </h1>

              <p className="para">
                Our journey began with a clear mission to support businesses through innovative digital solutions that drive growth, scalability, and performance. We proudly work with startups, SMEs, and global brands to turn ideas into powerful digital experiences.
              </p>

              <div className="about-content-btn">
                <Link href={"#"} className="global-btn-outline-black open-chat">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
