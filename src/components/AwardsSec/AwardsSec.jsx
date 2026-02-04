import React from "react";
import "./AwardsSec.css";
import Image from "next/image";

import awards1 from "../../../public/images/awards1.webp";
import awards2 from "../../../public/images/awards2.webp";
import awards3 from "../../../public/images/awards3.webp";
import awards4 from "../../../public/images/awards4.webp";
import awards5 from "../../../public/images/awards5.webp";
import awards6 from "../../../public/images/awards6.webp";
import awards7 from "../../../public/images/awards7.webp";

const AwardsSec = () => {
  return (
    <section className="awards-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="awards-content">
              <h2 className="same-heading">Awards</h2>
              <p className="para">
                On a journey from aspiring to thriving, HadzTech, a leading web and app development company, has earned recognition for empowering brands with innovative digital solutions. We continue to push boundaries, delivering tech-driven growth and future-ready experiences worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="awards-image-box">
              <Image src={awards1} alt="awards1" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="awards-image-box">
              <Image src={awards2} alt="awards2" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="awards-image-box">
              <Image src={awards3} alt="awards3" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="awards-image-box">
              <Image src={awards4} alt="awards4" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="awards-image-box">
              <Image src={awards5} alt="awards5" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="awards-image-box">
              <Image src={awards6} alt="awards6" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="awards-image-box">
              <Image src={awards7} alt="awards7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSec;
