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
                Welcome to <span>Hadztech</span>
              </h4>
              <h1 className="same-heading">
                We Build <span>Digital Experiences</span>
              </h1>
              <h1 className="same-heading">
                <span>That</span> Customers Trust
              </h1>

              <p className="para">
                We design and develop Website experiences that fascinate users
                and deliver tremendous business growth. Our goal is to create
                high quality impression, user-friendly solutions that repeat our
                clients for work.
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
