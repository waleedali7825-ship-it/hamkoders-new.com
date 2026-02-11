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
                CORE <span> VALUES</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="our-values-1">
              <h2>01</h2>
              <div className="our-values-1-content">
                <h4>QUALITY:</h4>
                <p className="para">
                  Every project is delivered with precision and creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="our-values-2">
              <div className="our-values-2-content">
                <h4>TRUST:</h4>
                <p className="para">
                 We believe in transparency and building lasting partnerships.
                </p>
              </div>
              <h2>02</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="our-values-1">
              <h2>03</h2>
              <div className="our-values-1-content">
                <h4>TECHNOLOGY:</h4>
                <p className="para">
                  Using technology to create smarter digital solutions. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="our-values-2">
              <div className="our-values-2-content">
                <h4>COLLABORATION:</h4>
                <p className="para">Your growth drives our success.</p>
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
