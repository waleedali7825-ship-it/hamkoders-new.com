"use client";
import React from "react";
import "./AndroidServices.css";
import Image from "next/image";
import Link from "next/link";

const AndroidServices = ({serviceData}) => {
  return (
    <section className="android-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="android-service-content">
              {serviceData.heading1}
              <p className="para">
                {serviceData.para}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {serviceData.serviceBox.map((box, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="android-service-box">
                <Image src={box.image} alt={`androidService${index + 1}`} />
                {box.heading4}
                <p className="para">{box.para}</p>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="android-service-box-link">
              <Link href="#" onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#exampleModal" className="global-btn-outline-black">
                {serviceData.btnText}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AndroidServices;
