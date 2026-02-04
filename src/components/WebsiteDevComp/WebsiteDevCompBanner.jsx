"use client";
import React from "react";
import "./WebsiteDevCompBanner.css";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";

const WebsiteDevCompBanner = ({ websiteDevCompBannerData }) => {
  // console.log("websiteDevCompBannerData: ", websiteDevCompBannerData);

  return (
    <section className="website-dev-banner">
      <div className="website-dev-banner-vector1">
        <Image
          src={websiteDevCompBannerData.imageBefore}
          alt="webDevServiceBefore"
        />
      </div>
      <div className="website-dev-banner-vector2">
        <Image
          src={websiteDevCompBannerData.imageAfter}
          alt="webDevServiceAfter"
        />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="website-dev-banner-content">
              {websiteDevCompBannerData.h1Part1}

              {websiteDevCompBannerData.para}

              <div className="website-dev-banner-btn">
                <Link href={"#"} className="global-btn-outline-black open-chat">
                  Start a Conversation
                </Link>
              </div>

              <div className="website-dev-slider">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  freeMode={true}
                  loop={true}
                  // autoplay={{
                  //   delay: 1500,
                  // }}
                  modules={[FreeMode, Autoplay]}
                  className="mySwiper"
                  breakpoints={{
                    360: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    375: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    390: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    414: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    575: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {websiteDevCompBannerData.swipperImages.map(
                    (slide, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={slide.image.src}
                          alt={slide.imageAlt}
                          width={slide.image.width}
                          height={slide.image.height}
                        />
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevCompBanner;
