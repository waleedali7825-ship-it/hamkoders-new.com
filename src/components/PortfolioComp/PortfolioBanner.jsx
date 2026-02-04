"use client";
import Link from "next/link";
import "./PortfolioBanner.css";
import React, { useState } from "react";

const PortfolioBanner = () => {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  //   pageLink: "",
  // });

  // const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setStatus("");

  //   const phoneRegex = /^[+]?[0-9]{10,15}$/;
  //   if (formData.phone && !phoneRegex.test(formData.phone)) {
  //     setStatus("Please enter a valid phone number.");
  //     setLoading(false);
  //     return;
  //   }

  //   const currentPageLink =
  //     typeof window !== "undefined" ? window.location.href : "";

  //   const updatedFormData = { ...formData, pageLink: currentPageLink };

  //   try {
  //     const res = await fetch("/api/sendEmail", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(updatedFormData),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       setStatus("Your message has been sent successfully!");
  //       setFormData({
  //         fullName: "",
  //         email: "",
  //         phone: "",
  //         budget: "",
  //         message: "",
  //         pageLink: "",
  //       });
  //     } else {
  //       setStatus(`${data.message || "Something went wrong."}`);
  //     }

  //     setTimeout(() => setStatus(""), 3000);
  //   } catch (error) {
  //     setStatus("Failed to send email. Please try again later.");
  //     setTimeout(() => setStatus(""), 3000);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section className="portfolio-banner-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="portfolio-banner-content">
              <h1 className="same-heading">
                <span>Showcasing Excellence in</span> Every Digital Project:{" "}
              </h1>
              <h4>Creative Technology Solutions</h4>

              <p className="para">
                Explore our portfolio of innovative web, app, and digital
                solutions. That further reflects our passion and performance
                across industries. Each project showcases our commitment to
                impactful digital experiences. Explore our recent portfolio
                speaks up everything to deliver the message about the expertise
                we have.
              </p>

              <div className="portfolio-banner-btn">
                <Link href={"#"} className="global-btn-outline open-chat">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5">
            <div className="portfolio-banner-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="pageLink"
                  value={formData.pageLink}
                />
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="same-heading">
                      Book a <span>Free Consultation</span>
                    </h4>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="xxx xxx xxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="^[+]?[0-9]{10,15}$"
                      title="Enter a valid phone number (10–15 digits)"
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="Describe Your Project Need"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <p className="para">
                      By submitting this form, you agree to our{" "}
                      <Link href={"/privacy-policy"}>Privacy Policy</Link>
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit">Schedule Expert Consultation</button>
                  </div>
                  {loading && (
                    <div className="col-lg-12">
                      <div className="loader"></div>
                    </div>
                  )}

                  {status && (
                    <div className="col-lg-12">
                      <p
                        className={`status-message ${!status ? "hidden" : ""}`}
                      >
                        {status}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;
