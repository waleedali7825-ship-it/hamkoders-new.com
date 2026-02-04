import React from "react";
import "./IdeaTransformation.css";
import Image from "next/image";

import creativeMind1 from "../../../public/images/creative-mind-1.webp";
import creativeMind2 from "../../../public/images/creative-mind-2.webp";
import creativeMind3 from "../../../public/images/creative-mind-3.webp";
import globeImg from "../../../public/images/globe.gif";
import globalClientBefore from "../../../public/images/global-client-before.webp";
// import globe from '../../../public/images/globe.mp4'


// const ideaTransformationData = {
//   heading3: "How We Build Impacts",
//   h1Part1: "WE ARE THE",
//   spanPart1: "MOST LEADING",
//   h1part2: "CUSTOM",
//   spanPart2: "APP DEVELOPMENT",
//   spanPart3: "COMPANY",
// }

const IdeaTransformation = () => {
  return (
    <section className="idea-transformation-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="idea-transformation-content">
              <h3>How We Build Impacts</h3>
              <h2 className="same-heading">
                Our <span>Expertise,</span> with <span>Creativity</span> <br /> Provides
                Impactful <span>Outcomes</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="creative-minds">
              <div className="creative-minds-images">
                <Image src={creativeMind1} alt="creative-minds-image" />
                <Image src={creativeMind2} alt="creative-minds-image" />
                <Image src={creativeMind3} alt="creative-minds-image" />
                <div className="more-creative-mind">40+</div>
              </div>

              <div className="creative-minds-content">
                <h4 className="same-heading">
                  <span>40+ </span> Creative Minds
                </h4>
                <p className="para">United minds turn ideas into stories.</p>
              </div>
            </div>
            <div className="client-satisfy-rate">
              <h4 className="same-heading">
                <span>Client </span> Satisfaction Rate
              </h4>
              <h3>98%</h3>
              <p className="para">
                Partner with us to build a path from lead to sale
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="carvalho-box">
              <p className="para">
                <span>Hadztech</span> were great, flexible and communicative.
                Excellent designs and quick turnaround!
              </p>

              <div className="carvalho-box2">
                <h4>Jenna Carvalho</h4>
                <p className="para">Principal @ Guardian Estate Company</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="real-time-main">
              <div className="real-time-content">
                <h3>
                  <span>Real-time</span> global collaboration
                </h3>
                <p className="para">
                  Collaborate Seamlessly with teams across the globe.
                </p>

                <div className="text-center">
                  <Image src={globeImg} alt="globe" unoptimized={true} />
                </div>
              </div>
            </div>

            <div className="global-clients">
              <div className="global-clients-content">
                <h3>
                  <span>150+</span> Global Clients
                </h3>
                <p className="para">Worldwide Trust. Proven Results.</p>

                <div className="global-clients-before">
                  <Image src={globalClientBefore} alt="global-clients-before" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaTransformation;
