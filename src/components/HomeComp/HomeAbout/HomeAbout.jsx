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
                     We are a digital agency delivering smart solutions for growing businesses worldwide with clarity, consistency, and measurable results today.
                </p>
              </div>
              <div className="home-about-right">
                <p className="para">
                  Our team helps brands plan, build, and scale online using proven strategies, reliable technology, and experience across global markets successfully.                </p>
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
