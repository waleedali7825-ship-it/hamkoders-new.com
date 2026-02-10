import React from "react";
import "./OurWork.css";
import Link from "next/link";
import Image from "next/image";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

import useFancybox from "../FancyBoxComp";

const OurWork = () => {
   const [fancyboxRef] = useFancybox({
      // Your custom options
    });
  return (
    <section className="our-work-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-work-content">
              <h2 className="same-heading">
                Our <span>Work</span>
              </h2>
              <div className="our-work-right">
                <p className="para">
                  Specializing in bringing innovative <br /> ideas to life.
                </p>
                <div className="our-work-btn">
                  <Link href={"/portfolio"} className="global-btn-outline">
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" ref={fancyboxRef}>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/1.png"
              >
                <Image src="/images/new-portfolio/1.png" width={1170} height={4875} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>Edukidz</span> - school web
                </h4>
                <p className="para">
                  A modern school website with interactive learning, admissions info, and easy communication for students and parents.                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/2.png"
              >
                <Image src={"/images/new-portfolio/2.png"} width={1170} height={4936} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>Dreamix</span> - Property app
                </h4>
                <p className="para">
                 A smart real-estate app for property search, virtual tours, and smooth home-buying experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/4.png"
              >
                <Image src={"/images/new-portfolio/3.png"} width={1170} height={8166} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>caelora</span> - jewelry web
                </h4>
                <p className="para">
                  An elegant jewelry website showcasing premium collections with a smooth and luxury online shopping experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/4.png"
              >
                <Image src={"/images/new-portfolio/4.png"} width={1170} height={2657} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>wavix</span> - bank app
                </h4>
                <p className="para">
                  A secure banking app for seamless transactions, account management, and real-time financial tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/5.png"
              >
                <Image src={"/images/new-portfolio/5.png"} width={1170} height={4168} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>faura</span> - portal
                </h4>
                <p className="para">
                  A dynamic portal built for productivity, content management, and smooth digital collaboration.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/3.png"
              >
                <Image src={"/images/new-portfolio/3.png"} width={1170} height={5601} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>basic medic</span> - assistant
                </h4>
                <p className="para">
                  A healthcare assistant app for appointment tracking, patient support, and easy medical access.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/7.webp"
              >
                <Image src={"/images/new-portfolio/7.webp"} width={1170} height={3433} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>every fit</span> - fitness app
                </h4>
                <p className="para">
                  A feature-rich fitness app built to track workouts, set goals, and motivate users toward healthier, active lifestyles.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/8.webp"
              >
                <Image src={"/images/new-portfolio/8.webp"} width={1170} height={3153} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-12">
            <div className="our-work-box">
              <Link
                data-fancybox="gallery"
                href="/images/new-portfolio/9.webp"
              >
                <Image src={"/images/new-portfolio/9.webp"} width={1170} height={5188} alt="our-work-image" />
              </Link>
              <div className="our-work-box-content">
                <h4>
                  <span>superior streaming-</span>E-commerce Website
                </h4>
                <p className="para">
                  An advanced e-commerce platform designed for seamless shopping, optimized performance, and an engaging product browsing experience.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
