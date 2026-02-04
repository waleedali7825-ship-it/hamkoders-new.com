import React from "react";
import "./AndroidAppBanner.css";
import Image from "next/image";
import Link from "next/link";

const AndroidAppBanner = ({ bannerData }) => {
  return (
    <section
      className="android-app-banner"
      style={{  backgroundImage: `url(${bannerData.bgImage})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="android-app-vector-content">
              {bannerData.heading1}

              {bannerData.para}

              <div className="android-app-banner-link">
                <Link href={"#"} className="global-btn-outline open-chat">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="android-app-vector-image">
              <Image
                src={bannerData.image.src}
                alt={bannerData.imageAlt}
                width={bannerData.image.width}
                height={bannerData.image.height}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidAppBanner;
