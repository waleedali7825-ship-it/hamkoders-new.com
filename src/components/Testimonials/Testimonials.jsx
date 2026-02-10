"use client";
import React from "react";
import "./Testimonials.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import client1 from "../../../public/images/client1.png";
import client2 from "../../../public/images/client2.png";
import client3 from "../../../public/images/client3.png";
import client4 from "../../../public/images/client4.png";

import review1 from "../../../public/images/review1.webp";
import review2 from "../../../public/images/review2.webp";
import review3 from "../../../public/images/review3.webp";
import review4 from "../../../public/images/review4.webp";
import review5 from "../../../public/images/review5.webp";
import review6 from "../../../public/images/review6.webp";
import review7 from "../../../public/images/review7.webp";
import review8 from "../../../public/images/review8.webp";
import review9 from "../../../public/images/review9.webp";
import review10 from "../../../public/images/review10.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testi-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testi-content">
              <h2 className="same-heading">Testimonials</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="testi-numbers-main">
              <div className="testi-numbers-main-top">
                <div className="testi-numbers-main-top-circles">
                  <Image src={client1} alt="client1" />
                  <Image src={client2} alt="client2" />
                  <Image src={client3} alt="client3" />
                  <Image src={client4} alt="client4" />
                </div>
                <div className="testi-numbers-main-top-content">
                  <p>
                    2.7k Positive <br /> Reviews
                  </p>
                </div>
              </div>
              <div className="testi-numbers-main-center">
                <div className="testi-numbers-main-center-content testi-numbers-main-center-contentBefore">
                  <h3>90%</h3>
                  <p className="para">Improved Project</p>
                </div>
                <div className="testi-numbers-main-center-content">
                  <h3>49%</h3>
                  <p className="para">New Project</p>
                </div>
              </div>

              <div className="testi-numbers-main-bottom">
                <div className="testi-numbers-main-bottom-content">
                  <p className="para">Social Media Growth</p>
                </div>
                <div className="testi-numbers-main-bottom-content">
                  <p className="para">Performance Marketing</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="what-our-clients-says">
              <h3>What Our Client Says</h3>
              <h2>
                Hear from Our <span>Satisfied Clients</span>, Real Success
                Stories
              </h2>
              <p className="para">
                Discover how businesses like yours achieved outstanding growth
                with Hadztech expert digital marketing solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="testi-slides">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}
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
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review2}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Robert</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      Hadztech turned our business idea into a smooth,
                      professional website. Clear communication, on-time
                      delivery, and excellent results.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review1}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Eli Carter</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      Their web development team built a fast, professional site
                      that improved our performance and engagement. Skilled,
                      responsive, and reliable experts.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review3}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Kathy Ross</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      Hadztech’s app development team, led byBiz Stone, built a
                      smooth, high-performing app and delivered excellent
                      results.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review4}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Joe</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      Mr. Miller, and Jennifer did great on my website and video
                      marketing. Easy, professional, and highly recommended.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review5}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Michael Jordon</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      They built our eCommerce store, improved visibility, ran
                      effective ads, and brought quality customers. Sales
                      increased quickly after launch.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review6}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Amelia</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      They developed a smooth, engaging game that ran flawlessly
                      and delivered the exciting experience we were hoping for.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review7}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Mike Scott</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      Our website performance improved greatly in two months.
                      Clean design, smooth functionality, and a quick,
                      professional, responsive team.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review8}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Evelyn Carter</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      HadzTech absolutely transformed our online presence! The
                      website is fantastic and beautiful, it’s fast in
                      performance and already boosting our sales. I couldn’t
                      have asked for a smoother experience!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review9}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Logan Whitmore</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      Wow, just wow! From start to finish, the team at HadzTech
                      was beyond impressive, responsive, creative, and truly
                      invested in our success. They turned our vision into
                      something even better than we imagined!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-box">
                    <span>
                      <BiSolidQuoteAltRight color="#262626" size={30} />
                    </span>
                    <div className="client-review-box-content">
                      <Image
                        src={review10}
                        width={80}
                        height={80}
                        alt="review1"
                      />
                      <div className="client-review-details">
                        <h3>Sienna Brooks</h3>
                        <div className="review-star">
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                          <FaStar color="#FFD029" size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="para">
                      Choosing HadzTech was the best decision we made for our
                      business! Their attention to detail and customer-first
                      approach made the entire process unified. Our digital
                      platform now stands out, and so do we!
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

export default Testimonials;
