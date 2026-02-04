"use client";
import React from "react";
import "./LeadingIndusties.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Autoplay, Pagination } from "swiper/modules";

const LeadingIndusties = () => {
  return (
    <section className="leading-industies-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="leading-industries-content">
              <h2 className="same-heading">
                Innovating for Every Industry<span> We Partner With</span>
              </h2>
              <p className="para">
                We deliver innovative digital solutions, enhancing brand
                operations, improving user experiences, <br />
                and driving growth in the digital era.
              </p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="leading-industries-slides">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Autoplay, Pagination]}
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
                  <div className="leading-industrial-box leading-industrial-box1">
                    <h2>Automotive</h2>
                    <p className="para">
                      We design digital platforms that accelerate brand
                      performance, streamline operations, and drive customer
                      engagement across the automotive industry.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box2">
                    <h2>Ecommerce</h2>
                    <p className="para">
                      Our eCommerce expertise helps brands build scalable stores
                      that convert visitors into loyal customers.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box3">
                    <h2>Healthcare</h2>
                    <p className="para">
                      We create secure, user-friendly healthcare systems that
                      improve patient experiences and operational efficiency.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box4">
                    <h2>Agriculture</h2>
                    <p className="para">
                      Our digital platforms help agricultural businesses
                      innovate, connect markets, and boost productivity.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box5">
                    <h2>Education</h2>
                    <p className="para">
                      From e-learning platforms to institutional websites, we
                      empower educators with innovative digital tools for modern
                      learning.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box6">
                    <h2>Legal</h2>
                    <p className="para">
                      We empower law firms with professional websites and tools
                      that build credibility and attract clients.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box7">
                    <h2>b2b</h2>
                    <p className="para">
                      Our B2B solutions enhance collaboration, lead generation,
                      and growth through smart automation and data-driven
                      marketing.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box8">
                    <h2>food</h2>
                    <p className="para">
                      We help food businesses build appetizing digital
                      experiences that boost visibility, orders, and brand
                      loyalty.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box9">
                    <h2>Travel</h2>
                    <p className="para">
                      From travel portals to booking apps, we create seamless
                      user experiences that inspire exploration and easy
                      planning.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box10">
                    <h2>Crm</h2>
                    <p className="para">
                      Our CRM integrations streamline customer management,
                      enhance engagement, and strengthen business relationships.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box10X">
                    <h2>Manufacturing</h2>
                    <p className="para">
                      We digitize manufacturing workflows with custom software
                      and web solutions for efficiency and scalability.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box11">
                    <h2>Fashion</h2>
                    <p className="para">
                      We craft stunning online experiences that capture brand
                      identity, attract audiences, and drive sales in the
                      fashion world.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box12">
                    <h2>Logistic</h2>
                    <p className="para">
                      We develop logistics solutions that optimize tracking,
                      operations, and customer communication in real time.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box13">
                    <h2>Finance</h2>
                    <p className="para">
                      We deliver secure, compliant finance tech solutions that
                      simplify transactions and enhance customer trust.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-industrial-box leading-industrial-box14">
                    <h2>Real State</h2>
                    <p className="para">
                      We build powerful real estate platforms that showcase
                      properties, engage buyers, and drive conversions.
                    </p>
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

export default LeadingIndusties;
