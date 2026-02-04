import React from "react";
import "./WhySec.css";
import Image from "next/image";
import Link from "next/link";

// const whySecData = {
//   heading3: 'Why Choose HadzTech?',
//   para: 'Your website is your digital first impression we make it unforgettable. Our expert team blends design and performance to craft impactful, high-standard websites that drive success and build lasting trust.',
//   points: ['Customized Solutions', 'Responsive Performance', 'Scalable & Future-Ready', 'Secure Development', 'User-Centric Design'],
//   attachment: 'whySecWebdev'
// }

const WhySec = ({ whySecData }) => {

  return (
    <section className="why-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="why-sec-main">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="why-sec-image">
                    {whySecData.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="why-video-div"
                      >
                        <source src={whySecData.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={whySecData.image}
                        alt={whySecData.attachmentAlt}
                        className="why-image-div"
                      />
                    )}
                  </div>

                  {/* <div className="why-sec-image">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{width: "100%", height: '700px'}}
                    >
                      <source 
                        src={whySecData.video} 
                        type="video/mp4"
                      
                      />
                    </video>

                    <Image
                      src={whySecData.image.src}
                      alt={whySecData.attachmentAlt}
                      width={whySecData.image.width}
                      height={whySecData.image.height}
                    />
                  </div> */}
                </div>
                <div className="col-lg-6">
                  <div className="why-sec-main-content">
                    <h3>{whySecData.heading3}</h3>
                    {whySecData.heading2}
                    <p className="para">{whySecData.para}</p>

                    <ul>
                      {whySecData.points.map((point, index) => (
                        <li key={index}>
                          <span>{`0${index + 1}`}</span> {point}
                        </li>
                      ))}
                    </ul>

                    <div className="why-sec-main-content-link">
                      <Link href={"#"} onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#exampleModal" className="global-btn-outline-black">
                        Get Started
                      </Link>
                    </div>
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

export default WhySec;
