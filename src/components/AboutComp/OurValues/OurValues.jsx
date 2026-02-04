import React from "react";
import "./OurValues.css";

const OurValues = () => {
  return (
    <section className="our-values-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-values-content">
              <h2 className="same-heading">
                What We<span> Offer?</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="our-values-1">
              <h2>01</h2>
              <div className="our-values-1-content">
                <h4>24/7 Support:</h4>
                <p className="para">
                  Continuous assistance to keep digital presence running perfectly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="our-values-2">
              <div className="our-values-2-content">
                <h4>Client Focused Approach:</h4>
                <p className="para">
                  We deliver impactful solutions that truly align with business.
                </p>
              </div>
              <h2>02</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="our-values-1">
              <h2>03</h2>
              <div className="our-values-1-content">
                <h4>Excellence Quality:</h4>
                <p className="para">
                  Quality and high standards are everything we serve to industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="our-values-2">
              <div className="our-values-2-content">
                <h4>Growth-Driven Solutions:</h4>
                <p className="para">Our goal is to help businesses grow and succeed in the digital industry.</p>
              </div>
              <h2>04</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
