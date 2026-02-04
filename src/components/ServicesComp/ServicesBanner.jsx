import React from "react";
import "./ServicesBanner.css";
import Link from "next/link";

const ServicesBanner = () => {
  return (
    <section className="services-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="services-banner-content">
              <h1 className="same-heading">
                Your Partner in{" "}
                <span>
                   Crafting Impactful <br /> eCommerce
                </span>{" "}
                Website
              </h1>

              <h4>Development Solutions</h4>

              <p className="para">
                With intelligent, scalable digital solutions, we develop user-focused eCommerce websites and web applications that improve performance, increase sales, and support the expansion of your company.
              </p>

              <div className="services-banner-btn">
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

export default ServicesBanner;
