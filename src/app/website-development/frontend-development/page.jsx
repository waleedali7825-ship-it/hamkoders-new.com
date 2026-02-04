export const metadata = {
  title: "Front End Web Development Services for Exceptional UX Design",
  description:
    "We offer front end web development services that blend speed, UX, and design—building responsive, high-performing interfaces tailored for all users and devices.",
};
import React from "react";
import PageLayout from "@/components/PageLayout";
import AndroidAppBanner from "@/components/AndroidAppBanner/AndroidAppBanner";
import FeaturedBrands from "@/components/PortfolioComp/FeaturedBrands/FeaturedBrands";
import AndroidServices from "@/components/AndroidServices/AndroidServices";
import AndroidProgress from "@/components/AndroidProgress/AndroidProgress";
import AwardsSec from "@/components/AwardsSec/AwardsSec";
import DiscussCta from "@/components/DiscussCta/DiscussCta";
import Testimonials from "@/components/Testimonials/Testimonials";
import CategoryService from "@/components/CategoryService/CategoryService";
import FAQSection from "@/components/AboutComp/FaqSec/FaqSec";
import DemandComp from "@/components/DemandComp/DemandComp";

import vector from "../../../../public/images/frontend-vector.webp";

import service1 from "../../../../public/images/website-services/frontend-development/1.webp";
import service2 from "../../../../public/images/website-services/frontend-development/2.webp";
import service3 from "../../../../public/images/website-services/frontend-development/3.webp";
import service4 from "../../../../public/images/website-services/frontend-development/4.webp";
import service5 from "../../../../public/images/website-services/frontend-development/5.webp";
import service6 from "../../../../public/images/website-services/frontend-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-front-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Exceptional<span> Front-End</span> Development
    </h1>
  ),
  para: (
    <p className="para">
      We offer front end web development services that create fast, responsive, and visually engaging interfaces designed to enhance user experience and boost engagement.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Crafting In-built Interfaces <br /> <span>That Drive Engagement</span>
    </h2>
  ),
  para: "Our front-end solutions blend design and precision, using modern frameworks and user-focused development to create high-performing, responsive interfaces that strengthen brand presence across all devices.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Dynamic <br />
          Architecture
        </h4>
      ),
      para: "We build interfaces structured around user behavior, ensuring smooth navigation, logical flow, and intuitive interaction. Every detail is crafted to enhance usability and accessibility.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Responsive <br />
          Design
        </h4>
      ),
      para: "Our front-end builds are optimized for every screen size and device. Adaptive layouts and responsive elements guarantee a consistent, engaging experience anywhere users connect.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Performance-Driven <br />
          Development
        </h4>
      ),
      para: "Speed is at the core of everything we create. We optimize load times, minimize code weight, and implement best practices to ensure high performance without compromising quality.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Reliable Front-End<br />
          Code
        </h4>
      ),
      para: "Security is embedded at every layer, from input validation to front-end data handling. This ensures the platform remains safe, stable, and resistant to vulnerabilities.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO-Enhanced<br />
          Structure
        </h4>
      ),
      para: "We structure interfaces with semantic markup, proper metadata, and indexing best practices helping digital products gain visibility and perform better in search rankings.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Business-Focused <br />
          Outcomes
        </h4>
      ),
      para: "Every element is developed with a clear business goal in min whether it’s improving conversions, boosting retention, or creating a smoother buyer journey.",
    }
  ],
  btnText: "Start Frontend Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empowering Brands Through</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Unified User Interaction</span>
      </h3>
    ),
  para: "Our front-end solutions blend design and precision, using modern frameworks and user-focused development to create high-performing, responsive interfaces that strengthen brand presence across all devices.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Front-End<span> Development Solutions</span> Built for Impact and Growth
    </h2>
  ),
  para: 'Our front end web development services focus on creating seamless, high-performance digital experiences. With a skilled front end developer team, we combine creativity, functionality, and responsive design to engage users, boost conversions, and strengthen brand presence through visually stunning, user-centric, and performance-optimized interfaces across all devices and platforms.',
  demandBox: [
    {
      heading4: (
        <h4>Tailored UI/UX <br /> Strategy</h4>
      ),
      para: 'We analyze audience and brand to create interfaces that align with goals and engage users effectively.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized Front-End <br /> Architecture</h4>
      ),
      para: 'Our solutions ensure fast performance, smooth interactivity, and flawless rendering for optimal real-world user experiences.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable, Future-Ready <br />Interfaces</h4>
      ),
      para: 'We create scalable front-end foundations that adapt seamlessly to new features and design changes.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated Security<br /> Practices</h4>
      ),
      para: 'We enforce strict testing and coding standards to prevent vulnerabilities, protecting user interactions and ensuring secure front-ends.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is front-end development?",
    answer:
      "Front-end development focuses on building the user-facing part of websites and applications the layout, design, and interactivity users engage with directly.",
  },
  {
    question: "Why is front-end development important?",
    answer:
      "It determines how users experience a product. Well-built front-end code improves usability, engagement, SEO performance, and overall conversion rates.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with modern frameworks like React, Vue.js, and Angular, along with HTML5, CSS3, and JavaScript to deliver fast, responsive, and scalable interfaces.",
  },
  {
    question: "Can you optimize existing front-end code?",
    answer:
      "Yes. We audit, refactor, and enhance existing front-end structures to improve performance, accessibility, and user experience.",
  },
  {
    question: "Will the interface be responsive on all devices?",
    answer:
      "Absolutely. Every solution we build is fully responsive and optimized for seamless performance on desktops, tablets, and mobile devices.",
  },
  {
    question: "Do you offer ongoing front-end support?",
    answer:
      "Yes. We provide continuous maintenance, UI updates, and performance optimization to keep front-end experience modern and effective.",
  }
];

const FrontendDevelopment = () => {
  return (
    <PageLayout>
      <AndroidAppBanner bannerData={bannerData} />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"Leading Brands"} />
      <AndroidServices serviceData={serviceData} />
      <AndroidProgress />
      <AwardsSec />
      <DiscussCta discussCtaData={discussCtaData} />
      <Testimonials />
      <div className="CategoryService_padding">
        <CategoryService />
      </div>
      <DemandComp demandCompData={demandCompData}/>
      <FAQSection faqs={faqs} />
    </PageLayout>
  );
};

export default FrontendDevelopment;
