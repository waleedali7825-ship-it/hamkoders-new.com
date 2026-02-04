"use client";
import React from "react";
import "./FeaturedBrands.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

import featured1 from "../../../../public/images/featured-brands/featured1.webp";
import featured2 from "../../../../public/images/featured-brands/featured2.webp";
import featured3 from "../../../../public/images/featured-brands/featured3.webp";
import featured4 from "../../../../public/images/featured-brands/featured4.webp";
import featured5 from "../../../../public/images/featured-brands/featured5.webp";
import featured6 from "../../../../public/images/featured-brands/featured6.webp";
import featured7 from "../../../../public/images/featured-brands/featured7.webp";

const FeaturedBrands = ({ heading, headingSpan }) => {
  return (
    <section className="featured-slides">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="featured-slides-content">
              {!heading && !headingSpan ? (
                <h2 className="same-heading">
                  We’re <span>Featured</span> In
                </h2>
              ) : (
                <h2 className="same-heading">
                  {heading} <span>{headingSpan}</span>
                </h2>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="featured1-brands">
              <Swiper
                slidesPerView={8}
                spaceBetween={50}
                freeMode={true}
                loop={true}
                modules={[FreeMode, Autoplay]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
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
                    slidesPerView: 8,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <Image
                    src={featured1}
                    width={164}
                    height={58}
                    alt="featured"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured2}
                    width={164}
                    height={58}
                    alt="featured2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured3}
                    width={164}
                    height={58}
                    alt="featured3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured4}
                    width={164}
                    height={58}
                    alt="featured4"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured5}
                    width={164}
                    height={58}
                    alt="featured5"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured6}
                    width={164}
                    height={58}
                    alt="featured6"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured7}
                    width={164}
                    height={58}
                    alt="featured7"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured1}
                    width={164}
                    height={58}
                    alt="featured"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured2}
                    width={164}
                    height={58}
                    alt="featured2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured3}
                    width={164}
                    height={58}
                    alt="featured3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured4}
                    width={164}
                    height={58}
                    alt="featured4"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured5}
                    width={164}
                    height={58}
                    alt="featured5"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured6}
                    width={164}
                    height={58}
                    alt="featured6"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured7}
                    width={164}
                    height={58}
                    alt="featured7"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="featured1-brands featured2-brands">
              <Swiper
                slidesPerView={8}
                spaceBetween={50}
                freeMode={true}
                loop={true}
                modules={[FreeMode, Autoplay]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  reverseDirection: true, 
                }}
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
                    slidesPerView: 8,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <Image
                    src={featured7}
                    width={164}
                    height={58}
                    alt="featured"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured6}
                    width={164}
                    height={58}
                    alt="featured2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured5}
                    width={164}
                    height={58}
                    alt="featured3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured4}
                    width={164}
                    height={58}
                    alt="featured4"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured3}
                    width={164}
                    height={58}
                    alt="featured5"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured2}
                    width={164}
                    height={58}
                    alt="featured6"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured1}
                    width={164}
                    height={58}
                    alt="featured7"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured7}
                    width={164}
                    height={58}
                    alt="featured"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured6}
                    width={164}
                    height={58}
                    alt="featured2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured5}
                    width={164}
                    height={58}
                    alt="featured3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured4}
                    width={164}
                    height={58}
                    alt="featured4"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured3}
                    width={164}
                    height={58}
                    alt="featured5"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured2}
                    width={164}
                    height={58}
                    alt="featured6"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={featured1}
                    width={164}
                    height={58}
                    alt="featured7"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
