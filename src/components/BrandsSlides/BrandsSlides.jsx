"use client";
import React from "react";
import "./BrandsSlides.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

import brand1 from "../../../public/images/brand1.webp";
import brand2 from "../../../public/images/brand2.webp";
import brand3 from "../../../public/images/brand3.webp";
import brand4 from "../../../public/images/brand4.webp";
import brand5 from "../../../public/images/brand5.webp";

const BrandsSlides = () => {
  return (
    <section className="brands-slides">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              slidesPerView={8}
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
                <Image src={brand1} width={164} height={58} alt="brand" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand2} width={164} height={58} alt="brand2" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand3} width={164} height={58} alt="brand3" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand4} width={164} height={58} alt="brand4" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand5} width={164} height={58} alt="brand5" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand1} width={164} height={58} alt="brand" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand2} width={164} height={58} alt="brand2" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand3} width={164} height={58} alt="brand3" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand4} width={164} height={58} alt="brand4" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={brand5} width={164} height={58} alt="brand5" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSlides;
