import React from "react";
import "./DemandComp.css";
import Image from "next/image";

const DemandComp = ({demandCompData}) => {
  return (
    <section className="demand-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="demand-sec-content">
              {demandCompData.heading1}
              <p className="para">
                {demandCompData.para}
              </p>
            </div>
          </div>
        </div>

        <div className="row row-bg">
          {demandCompData.demandBox.map((box, index) => (
            <div  className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="demand-box-sec demand-box-sec1">
                {box.heading4}
                <Image src={box.image} alt={`demandBox${index + 1}`} />
                <p className="para">
                  {box.para}
                </p>
              </div>
            </div>
          )
        )}
        </div>

        {/* <div className="row row-bg">
          <div className="col-lg-3">
            <div className="demand-box-sec demand-box-sec1">
              <h4>Hybrid <br /> Infrastructure</h4>
              <Image src={SignVector} alt="SignVector" />
              <p className="para">
                Leverage cloud tech for seamless data storage, app deployment,
                and collaboration for adaptability and scalability.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="demand-box-sec demand-box-sec2">
              <h4>AI & <br /> ML</h4>
              <Image src={SignVector} alt="SignVector" />
              <p className="para">
                Integrate AI/ML for personalized experiences, predictive
                analytics, & efficient decision-making, improving engagement and
                insights.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="demand-box-sec demand-box-sec3">
              <h4>5G & <br /> IoT</h4>
              <Image src={SignVector} alt="SignVector" />
              <p className="para">
                Use 5G and IoT for faster data, lower latency, and advanced
                features like AR/VR and smart automation.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="demand-box-sec demand-box-sec4">
              <h4>Robotic Process <br /> Automation</h4>
              <Image src={SignVector} alt="SignVector" />
              <p className="para">
                Implement RPA to automate tasks, boosting productivity and
                allowing focus on strategic growth initiatives.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DemandComp;
