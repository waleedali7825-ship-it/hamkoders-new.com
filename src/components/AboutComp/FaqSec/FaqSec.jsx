"use client";
import React, { useState } from "react";
import "./FaqSec.css";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? "faq-item-open" : "faq-item-closed"}`}>
      <button onClick={onToggle} className="faq-question-btn">
        <div className="faq-icon-container">
          <div
            className={`faq-toggle-icon ${
              isOpen ? "faq-toggle-open" : "faq-toggle-closed"
            }`}
          >
            {isOpen ? "−" : "+"}
          </div>
        </div>
        <h3
          className={`faq-question ${
            isOpen ? "faq-question-active" : "faq-question-inactive"
          }`}
        >
          {question}
        </h3>
      </button>
      {isOpen && answer && (
        <div className="faq-answer-container">
          <div className="row">
            <div className="col-xl-10 col-lg-11 col-md-12">
              <p className="faq-answer-text">{answer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(1);
  
  return (
    <>
      <section className="faq-section-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-11 col-md-12">
                  <div className="faq-header">
                    <h2 className="faq-title">FAQ's</h2>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="faq-container">
                    {faqs.map((faq, index) => (
                      <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() =>
                          setOpenIndex(openIndex === index ? -1 : index)
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
