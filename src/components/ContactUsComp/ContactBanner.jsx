import React from "react";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-banner-content">
              <h1 className="same-heading">
                Have a Question or <br /> <span>Just Want to Chat?</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
