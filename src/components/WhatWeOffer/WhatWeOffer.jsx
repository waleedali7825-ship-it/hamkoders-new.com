import React from "react";
import "./WhatWeOffer.css";
import Image from "next/image";

const WhatWeOffer = ({ whatWeOfferData }) => {

  return (
    <section className="what-we-offer">
      <div className="container">
        <div className="row">
          <div className="what-we-offer-main">
            <div className="row">
              <div className="col-lg-12">
                <div className="what-we-offer-content">
                  <h3>{whatWeOfferData.heading3}</h3>
                  {whatWeOfferData.heading2}
                </div>
              </div>
            </div>

            <div className="row">
              {whatWeOfferData.whatWeOfferBox.map((box, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="what-we-offer-box">
                    <Image
                      src={box.image.src}
                      alt={box.imageAlt}
                      width={box.image.width}
                      height={box.image.height}
                    />
                    <div className="what-we-offer-box-content">
                      <h3>{box.heading3}</h3>
                      <p className="para">{box.para}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
