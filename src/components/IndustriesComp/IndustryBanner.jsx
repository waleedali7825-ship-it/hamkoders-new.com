import React from "react";
import "./IndustryBanner.css";
import Link from "next/link";
import Image from "next/image";

import topRated from "../../../public/images/top-rated.webp";

const IndustryBanner = () => {
  return (
    <section className="industries-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="industries-banner-content">
              <div className="text-center mb-1">
                <Image src={topRated} alt="top-rated" />
              </div>
              <h1 className="same-heading">Smart Solutions for</h1>
              <h1 className="same-heading">
                <span>Every Industry We Touch</span>
              </h1>

              <p className="para">
                HadzTech creates tailored digital solutions, blending technology and strategy{" "}
                <br />
                to boost business success.
              </p>

              <div className="industries-content-btn">
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

export default IndustryBanner;
