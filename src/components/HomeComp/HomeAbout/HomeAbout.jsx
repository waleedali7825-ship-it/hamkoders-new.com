import React from "react";
import "./HomeAbout.css";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <section className="home-about-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-about-content home-about-bg-mobile">
              <div className="home-about-left">
                <h3 className="same-heading">
                  About <span>us</span>
                </h3>
                <p className="para">
                    We assist businesses in achieving online success by crafting
                  innovative website designs and implementing digital marketing
                  solutions that combine creativity, strategy, and measurable
                  growth.
                </p>
              </div>
              <div className="home-about-right">
                <p className="para">
                  We prioritize clean design, efficient coding, and strong partnerships to create user-friendly experiences that build trust and drive long-term success.
                </p>
                <div className="home-about-btn">
                  <Link href={"/about"} className="global-btn-outline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
