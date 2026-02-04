"use client";
import React, { useState } from "react";
import "./ContactUsForm.css";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { useSearchParams } from "next/navigation";

const ContactUsForm = () => {
  const budgets = [
    { id: "1", label: "Less than $5K" },
    { id: "2", label: "$5K - $10K" },
    { id: "3", label: "$10K - $20K" },
    { id: "4", label: "$20K - $50K" },
    { id: "5", label: "More than $50K" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
    pageLink: "",
  });

  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (id, label) => {
    setSelected(id);
    setFormData((prev) => ({ ...prev, budget: label }));
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
        setSelected("");
      } else {
        setStatus(data.message || "Something went wrong.");
      }

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      setStatus("Failed to send email. Please try again later.");
      setTimeout(() => setStatus(""), 3000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="contactUs-form-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contactUs-form-bg">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contactUs-form-content">
                    <h2 className="same-heading">
                      <span>Tell Us</span>
                    </h2>
                    <h3 className="same-heading">Your Amazing</h3>
                    <h3 className="same-heading">
                      <span>Project Here</span>
                    </h3>
                  </div>

                  <div className="contactUs-form-points">
                    <div className="contactUs-form-points-contact">
                      <p className="para">
                        Expect a response from us within 60 Minutes
                      </p>
                    </div>
                    <div className="contactUs-form-points-contact">
                      <p className="para">
                        We’re happy to sign an NDA upon request.
                      </p>
                    </div>
                    <div className="contactUs-form-points-contact">
                      <p className="para">
                        Get access to a team of dedicated product specialists.
                      </p>
                    </div>
                  </div>

                  <div className="contactUs-form-video">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="https://res.cloudinary.com/dfx2k65zc/video/upload/v1761350940/portfolio_cys55j.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contactUs-form-div">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="hidden"
                        name="pageLink"
                        value={formData.pageLink}
                      />

                      <div className="row">
                        <div className="col-lg-12">
                          <label>
                            Full Name
                            <input
                              type="text"
                              name="fullName"
                              placeholder="John Doe"
                              value={formData.fullName}
                              onChange={handleChange}
                              required
                            />
                          </label>
                        </div>

                        <div className="col-lg-6">
                          <label>
                            Your Email
                            <input
                              type="email"
                              name="email"
                              placeholder="yourmail@gmail.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </label>
                        </div>

                        <div className="col-lg-6">
                          <label>
                            Phone no
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
                          </label>
                        </div>

                        <div className="col-lg-12">
                          <label>Project Budget</label>
                          <div className="budget-options">
                            {budgets.map((budget) => (
                              <label
                                key={budget.id}
                                className={`budget-option ${
                                  selected === budget.id ? "selected" : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="budget"
                                  value={budget.label}
                                  checked={selected === budget.id}
                                  onChange={() =>
                                    handleBudgetSelect(budget.id, budget.label)
                                  }
                                />
                                {budget.label}
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <label className="text-area-margin">
                            Project Details
                            <textarea
                              name="message"
                              placeholder="Write Message....."
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </label>
                        </div>

                        <div className="col-lg-12">
                          <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Let's Connect!"}{" "}
                            <HiMiniArrowUpRight size={24} color={"#000"} />
                          </button>
                        </div>
                        {loading && (
                          <div className="col-lg-12">
                            <div className="loader"></div>
                          </div>
                        )}
                        {status && (
                          <div className="col-lg-12">
                            <p
                              className={`status-message ${
                                !status ? "hidden" : ""
                              }`}
                            >
                              {status}
                            </p>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
