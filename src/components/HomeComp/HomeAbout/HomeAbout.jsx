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
                  Pellentesque habitant morbi tristique senectus et netus et  fames ac turpis egestas. Suspendisse lobortis in orci . Maecenas porta hendrerit mattis. 
                   Duis a orci blandit, gravida nisi ut, mattis est. Praesent ut maximus tellus. Quisque tempor hendrerit felis ut rutrum.
                </p>
              </div>
              <div className="home-about-right">
                <p className="para">
                  Pellentesque habitant morbi tristique senectus et netus et  fames ac turpis egestas. Suspendisse lobortis in orci . Maecenas porta hendrerit mattis.                </p>
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
