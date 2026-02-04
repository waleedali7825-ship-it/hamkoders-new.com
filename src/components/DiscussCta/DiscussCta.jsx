import React from "react";
import "./DiscussCta.css";
import Image from "next/image";
import Link from "next/link";

const DiscussCta = ({discussCtaData}) => {
  
  return (
    <section className="discuss-cta-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="discuss-cta-main">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="discuss-cta-main-content">
                    {discussCtaData.heading1}
                    {discussCtaData.heading2}

                    <p className="para">{discussCtaData.para}</p>

                    <div className="discuss-cta-main-link"><Link className="global-btn-outline open-chat" href={"#"}>Start a Conversation</Link></div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="discuss-cta-image">
                    <Image 
                      src={discussCtaData.image.src} 
                      alt="discussCtaImage"
                      width={discussCtaData.image.width}
                      height={discussCtaData.image.height}
                    />
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

export default DiscussCta;
