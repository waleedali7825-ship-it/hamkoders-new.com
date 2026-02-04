"use client";
import React, { useEffect, useState } from "react";
import "./Footer.css";
import Link from "next/link";
import Image from "next/image";

import usFlag from "../../../public/images/us-flag.webp";
import FooterLOGO from "../../../public/images/footer-logo.webp";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    pageLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setStatus("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    const currentPageLink =
      typeof window !== "undefined" ? window.location.href : "";

    const updatedFormData = { ...formData, pageLink: currentPageLink };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
          pageLink: "",
        });
      } else {
        setStatus(`${data.message || "Something went wrong."}`);
      }

      setTimeout(() => setStatus(""), 3000);
      setShowModal(false);
    } catch (error) {
      setStatus("Failed to send email. Please try again later.");
      setTimeout(() => setStatus(""), 3000);
    } finally {
      setLoading(false);
    }
  };

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-main-content">
                <div className="row footer-border">
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-navigation">
                      <h3>Company</h3>
                      <ul>
                        <li>
                          <Link href={"/about"}>About us</Link>
                        </li>
                        <li>
                          <Link href={"/portfolio"}>Portfolio</Link>
                        </li>
                        <li>
                          <Link href={"/industries"}>Industries</Link>
                        </li>
                        <li>
                          <Link href={"/portfolio"}>Portfolio</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-navigation">
                      <h3>Services</h3>
                      <ul>
                        <li>
                          <Link href={"/website-development"}>
                            Website Development
                          </Link>
                        </li>
                        <li>
                          <Link href={"/app-development"}>App Development</Link>
                        </li>
                        <li>
                          <Link href={"/game-development"}>
                            Game Development
                          </Link>
                        </li>
                        <li>
                          <Link href={"/store-development"}>
                            Store Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-navigation">
                      <h3>Software Dev</h3>
                      <ul>
                        <li>
                          <Link href={"/software-development/erm-development"}>
                            ERM Development
                          </Link>
                        </li>
                        <li>
                          <Link href={"/software-development/crm-development"}>
                            CRM Development
                          </Link>
                        </li>
                        <li>
                          <Link href={"/software-development/erp-development"}>
                            ERP Development
                          </Link>
                        </li>
                        <li>
                          <Link href={"/software-development/cms-development"}>
                            CMS Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-navigation">
                      <h3>Quick Links</h3>
                      <ul>
                        <li>
                          <Link href={"/terms-conditions"}>
                            Terms & Condition
                          </Link>
                        </li>
                        <li>
                          <Link href={"/privacy-policy"}>Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-3">
                    <div className="footer-content">
                      <h3>Contact</h3>
                      <ul>
                        <li>
                          <Link href={"tel:8327890702"}>
                            <Image
                              src={usFlag}
                              alt="us-flag"
                              className="me-2"
                            />{" "}
                            (832) 789-0702
                          </Link>
                        </li>
                        <li>
                          <Link href={"mailto:info@hadztech.com"}>
                            info@hadztech.com
                          </Link>
                        </li>
                        <li>
                          <Link href={"https://maps.app.goo.gl/279DTuhCJFtJ5rSFA"} target="_blank">
                            12828 Willow Centre Dr Ste D #81 Houston, TX 77066
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="footer-content text-center">
                      <Link  className="text-center" href={"/"}>
                        <Image src={FooterLOGO} alt="footer-logo" />
                      </Link>
                      <p className="para">
                        Brand sets the standard for excellence in digital <br />
                        marketing & web development in the USA.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="footer-content footer-social">
                      <h3>Links</h3>
                      <ul>
                        <li>
                          <Link
                            href={"https://www.facebook.com/hadztechofficial"}
                            target="_blank"
                          >
                            <FaFacebook size={25} color="#a0d815" /> Facebook
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"https://www.instagram.com/hadztech/"}
                            target="_blank"
                          >
                            <FaInstagram size={25} color="#a0d815" /> Instagram
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={
                              "https://www.linkedin.com/company/hadztech/about/"
                            }
                            target="_blank"
                          >
                            <FaLinkedinIn size={25} color="#a0d815" /> LinkedIn
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <p className="para text-center" style={{color: "#000"}}>Ⓒ All Rights Reserved {currentYear} - Hadztech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content discount-modal">
            <div className="modal-body">
              <div className="close-modal">
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <IoMdClose size={20} color="#000" />
                </button>
              </div>
              <div className="discount-container">
                <Image src={FooterLOGO} alt="hadztech" className="logo" />
                <h2 className="title">
                  Transform Your Brand <br /> Get 50% Off Now!
                </h2>
                <br />
                <form className="form" onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="pageLink"
                    value={formData.pageLink}
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="^[+]?[0-9]{10,15}$"
                    title="Enter a valid phone number (10–15 digits)"
                    required
                  />
                  <textarea
                    placeholder="Describe Your Project Need"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button type="submit" className="submit-btn">
                    Schedule Expert Consultation
                  </button>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop fade show" onClick={handleClose}></div>
      )}
    </>
  );
};

export default Footer;
