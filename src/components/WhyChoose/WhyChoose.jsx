import React from "react";
import "./WhyChoose.css";
import Image from "next/image";
import dataDriven from "../../../public/images/data-driven.png";
import creativeVector from "../../../public/images/creative-vector.png";
import transparentVector from "../../../public/images/transparent-vector.png";
import whyChooseUsRight from "../../../public/images/why-choose-us-right.webp";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

const WhyChoose = () => {
  return (
    <section className="why-choose-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="why-choose-box-left">
              <div className="why-choose-box-vector">
                <Image
                  src={dataDriven}
                  width={75}
                  height={75}
                  alt="data-driven"
                />
              </div>
              <div className="why-choose-box-left-content">
                <h3 className="same-heading">
                  <span>Data-Driven Approach,</span> Our Mission
                </h3>
                <p className="para">
                  Partner with a design agency for startups that crafts personalized digital strategies to achieve success.
                </p>
                <div className="why-choose-box-readMore">
                  <Link href={"#"} onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Read More <BiSolidRightArrow color="#ffff " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="why-choose-box-left">
              <div className="why-choose-box-vector">
                <Image
                  src={creativeVector}
                  width={75}
                  height={75}
                  alt="data-driven"
                />
              </div>
              <div className="why-choose-box-left-content">
                <h3 className="same-heading">
                  <span>Engagement</span> That Matters
                </h3>
                <p className="para">
                  We help startups connect authentically with their audience through thoughtful and intuitive digital experiences.
                </p>
                <div className="why-choose-box-readMore">
                  <Link href={"#"} onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Read More <BiSolidRightArrow color="#ffff" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="why-choose-box-left">
              <div className="why-choose-box-vector">
                <Image
                  src={transparentVector}
                  width={75}
                  height={75}
                  alt="data-driven"
                />
              </div>
              <div className="why-choose-box-left-content">
                <h3 className="same-heading">
                  <span>Innovative</span> Brand Experiences
                </h3>
                <p className="para">
                  We bring creativity and strategy together to build strong brand presence and lasting trust.
                </p>
                <div className="why-choose-box-readMore">
                  <Link href={"#"} onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Read More <BiSolidRightArrow color="#ffff" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-right">
              <h3>
                Why Choose <span>US</span>
              </h3>
              <h2>
                <span>Your Success</span> is <br /> Our Mission
              </h2>
              <p className="para">
                Committed to providing dependable, high-quality solutions that drive business forward with clarity and purpose.
              </p>

              <div className="why-choose-image">
                <Image src={whyChooseUsRight} alt="why-choose-us-right" />

                <div className="why-choose-image-box">
                  <p>
                    Partner with Hadztech & take your brand to the next level.
                  </p>
                  <div className="why-choose-image-box-btn">
                    <Link href={"#"} className="open-chat">
                      Let's Talk Strategy <BiSolidRightArrow color="#D41423 " />
                    </Link>
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

export default WhyChoose;
