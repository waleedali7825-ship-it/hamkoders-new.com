"use client";
import React from "react";
import "./CtaSec.css";
import Link from "next/link";

const CtaSec = () => {
  return (
    <section className="cta-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-sec-content">
              <h2 className="same-heading">
                REACH BUSINESS GOALS <span>RAPIDLY WITH US</span>
              </h2>

              <div className="cta-sec-btn d-flex">
                <Link href={"#"} onClick={(e) => e.preventDefault()} className="global-btn-outline" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSec;
