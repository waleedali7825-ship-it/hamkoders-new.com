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
                  WHO <span>WE </span>ARE
                </h3>
                <p className="para">
                  A skilled team of developers, designers, and strategists driven by innovation and technology. We create modern digital solutions that are high-performing, scalable, and ready for future growth.
                </p>
              </div>
              <div className="home-about-right home-about-rightXtra">
                <h3 className="same-heading">
                  Our <span>Vision</span>
                </h3>
                <p className="para">
                  We aim to deliver reliable, innovative, and scalable digital solutions that empower businesses to grow faster and lead in today’s competitive digital world
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
