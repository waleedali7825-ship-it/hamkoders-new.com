import React from "react";
import "./AboutProgress.css";

const AboutProgress = () => {
  return (
    <section className="about-progress-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="about-progress-box">
              <h3>100%</h3>
              <h4>5 star reviews</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="about-progress-box">
              <h3>150+</h3>
              <h4>Projects delivered</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="about-progress-box">
              <h3>10+</h3>
              <h4>years of experience</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgress;
