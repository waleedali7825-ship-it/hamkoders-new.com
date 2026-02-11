import React from "react";
import "./WhyChoose.css";
import Image from "next/image";
import dataDriven from "../../../public/images/data-driven.png";
import creativeVector from "../../../public/images/creative-vector.png";
import transparentVector from "../../../public/images/transparent-vector.png";
import whyChooseUsRight from "../../../public/images/why-choose-us-right.png";
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
                  <span>Data-Driven </span>  Approach
                </h3>
                <p className="para">
                  Every decision is guided by real-time analytics and insights for maximum impact, helping brands grow faster and perform better.
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
                  <span> CREATIVE & </span> INNOVATIVE
                </h3>
                <p className="para">
                   Innovative digital marketing strategies and creative solutions keep your brand ahead of competitors in today’s global market
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
                  <span>TRANSPARENT</span> REPORTING
                </h3>
                <p className="para">
                   Clear performance tracking and detailed reporting ensure you always understand results, ROI, and consistent digital growth progress.
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
                In today’s fast-paced digital world, choosing the right digital partner creates real difference. At Hamkoders, we build strategies that deliver measurable growth, strong branding, and long-term success globally.
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
