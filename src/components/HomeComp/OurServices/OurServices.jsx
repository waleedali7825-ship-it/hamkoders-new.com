"use client";
import React from "react";
import "./OurServices.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import webDevVector from "../../../../public/images/web-development-vector.webp";
import appDevVector from "../../../../public/images/app-development-vector.webp";
import gameDevVector from "../../../../public/images/game-development-vector.webp";
import btnGreenHover from "../../../../public/images/btn-green-hover.webp";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

const OurServices = () => {
  return (
    <section className="our-services-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-services-content">
              <h2 className="same-heading">
                Core <span>Services</span>
              </h2>
              <div className="our-services-right">
                <p className="para">Strategic Services Driving Growth</p>
                <div className="our-services-btn">
                  <Link href={"/services"} className="global-btn-outline">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="our-services-slides">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
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
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                375: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                390: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                414: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                575: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="our-services-slidesBox our-services-slidesBox0">
                    <Image
                      src={webDevVector}
                      width={65}
                      height={65}
                      className="vector-image"
                      alt="web-development-vector"
                    />

                    <div className="our-services-slidesBox-content">
                      <h3 className="same-heading">
                        <span>Website</span> Development
                      </h3>
                      <p className="para">
                        We create responsive and scalable websites that deliver
                        seamless user experiences, helping businesses achieve
                        their goals.
                      </p>
                    </div>

                    <div className="our-services-slidesBox-btn">
                      <Link href={"/website-development"} className="simpleAnchor">
                        <BsArrowRight size={36} color="#000" />
                      </Link>
                      <Link href={"/website-development"} className="bgAnchor">
                        <Image
                          src={btnGreenHover}
                          width={130}
                          height={68}
                          alt="anchor-link"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="our-services-slidesBox our-services-slidesBox1">
                    <Image
                      src={appDevVector}
                      width={65}
                      height={65}
                      className="vector-image"
                      alt="app-development-vector"
                    />

                    <div className="our-services-slidesBox-content">
                      <h3 className="same-heading">
                        <span>App</span> Development
                      </h3>
                      <p className="para">
                        As a trusted app development agency, we design and build
                        intuitive mobile and web applications that drive user
                        engagement and growth.
                      </p>
                    </div>

                    <div className="our-services-slidesBox-btn">
                      <Link href={"/app-development"} className="simpleAnchor">
                        <BsArrowRight size={36} color="#000" />
                      </Link>
                      <Link href={"/app-development"} className="bgAnchor">
                        <Image
                          src={btnGreenHover}
                          width={130}
                          height={68}
                          alt="anchor-link"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="our-services-slidesBox our-services-slidesBox2">
                    <Image
                      src={gameDevVector}
                      width={65}
                      height={65}
                      className="vector-image"
                      alt="game-development-vector"
                    />

                    <div className="our-services-slidesBox-content">
                      <h3 className="same-heading">
                        <span>Digital</span> Marketing
                      </h3>
                      <p className="para">
                        We specialize in digital marketing for startups,
                        delivering tailored strategies that increase brand
                        visibility and accelerate customer acquisition.
                      </p>
                    </div>

                    <div className="our-services-slidesBox-btn">
                      <Link href={"#"} className="simpleAnchor">
                        <BsArrowRight size={36} color="#000" />
                      </Link>
                      <Link href={"#"} className="bgAnchor">
                        <Image
                          src={btnGreenHover}
                          width={130}
                          height={68}
                          alt="anchor-link"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="our-services-slidesBox our-services-slidesBox3">
                    <Image
                      src={webDevVector}
                      width={65}
                      height={65}
                      className="vector-image"
                      alt="web-development-vector"
                    />

                    <div className="our-services-slidesBox-content">
                      <h3 className="same-heading">
                        <span>Web App</span> Development
                      </h3>
                      <p className="para">
                        Our web app development services focus on building
                        powerful, user-friendly applications that enhance
                        productivity and customer satisfaction.
                      </p>
                    </div>

                    <div className="our-services-slidesBox-btn">
                      <Link href={"/website-development/web-app-development"} className="simpleAnchor">
                        <BsArrowRight size={36} color="#000" />
                      </Link>
                      <Link href={"/website-development/web-app-development"} className="bgAnchor">
                        <Image
                          src={btnGreenHover}
                          width={130}
                          height={68}
                          alt="anchor-link"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="our-services-slidesBox our-services-slidesBox4">
                    <Image
                      src={appDevVector}
                      width={65}
                      height={65}
                      className="vector-image"
                      alt="app-development-vector"
                    />

                    <div className="our-services-slidesBox-content">
                      <h3 className="same-heading">
                        <span>E-commerce</span> Development
                      </h3>
                      <p className="para">
                        As a leading ecommerce development company, we develop
                        secure and scalable online stores designed to maximize
                        sales and improve user journeys.
                      </p>
                    </div>

                    <div className="our-services-slidesBox-btn">
                      <Link href={"/store-development"} className="simpleAnchor">
                        <BsArrowRight size={36} color="#000" />
                      </Link>
                      <Link href={"/store-development"} className="bgAnchor">
                        <Image
                          src={btnGreenHover}
                          width={130}
                          height={68}
                          alt="anchor-link"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
