export const metadata = {
  title: "Custom Backend Development Service for Robust Digital Growth",
  description:
    "Our custom backend development services deliver speed flexibility, and security crafted to support complex systems seamless performance, and future scalability.",
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

import vector from "../../../../public/images/backend-vector.webp";

import service1 from "../../../../public/images/website-services/backend-development/1.webp";
import service2 from "../../../../public/images/website-services/backend-development/2.webp";
import service3 from "../../../../public/images/website-services/backend-development/3.webp";
import service4 from "../../../../public/images/website-services/backend-development/4.webp";
import service5 from "../../../../public/images/website-services/backend-development/5.webp";
import service6 from "../../../../public/images/website-services/backend-development/6.webp";

import discussCtaImage from "../../../../public/images/discuss-cta-image-back-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.webp";

const bannerData = {
  bgImage: "/images/backend-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Seamless <span> Back-End</span> Performance
    </h1>
  ),
  para: (
    <p className="para">
      HadzTech’s custom backend development services deliver fast, secure, and scalable server-side solutions, powering robust web applications with seamless performance.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building the Digital Engine <br /> <span>That Powers Platform</span>
    </h2>
  ),
  para: "Our server-side programming ensures high-performance operations, seamless integrations, and secure, scalable infrastructure, handling complex data while evolving with your business and product growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Server-Side <br />
          Architecture
        </h4>
      ),
      para: "We design highly efficient architectures that manage heavy workloads and deliver consistent performance. Every build is structured to support dynamic functionality and future system expansion.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          API and Database <br />
          Integration
        </h4>
      ),
      para: "Our back-end frameworks ensure flawless communication between systems, applications, and databases. Smooth data flow enhances functionality and provides a unified digital ecosystem.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          High-Speed <br />
          Processing
        </h4>
      ),
      para: "We implement optimized server logic, efficient data queries, and advanced caching strategies. The result is lightning-fast response times and uninterrupted system uptime.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Enterprise Security<br />
          Controls
        </h4>
      ),
      para: "Security is fundamental to our development process. With encryption, access control, and vulnerability monitoring, we protect critical data and ensure secure transactions.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Scalable<br />
          Solutions
        </h4>
      ),
      para: "Our back-end foundations are designed to scale with user growth and evolving technology demands. Flexible systems allow for feature expansion without downtime or instability.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Result-Oriented <br />
          Performance
        </h4>
      ),
      para: "Every component is designed to support measurable outcomes from faster operations and improved automation to stronger user engagement and higher revenue potential.",
    }
  ],
  btnText: "Start Backend Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Powering Business Growth Through</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Strong Server-Side Solutions</span>
      </h3>
    ),
  para: "Partner with HadzTech for a powerful back-end that drives scalability, performance, and innovation, supporting business goals and enabling applications to grow seamlessly.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Back-End<span> Solutions Engineered</span> for Reliability and Future Expansion
    </h2>
  ),
  para: 'Our custom backend development services provide secure, scalable, and flexible solutions for digital success. A skilled backend developer at HadzTech crafts robust infrastructure and advanced server-side functionalities, ensuring platforms perform reliably under real-world demands while supporting growth, innovation, and seamless user experiences across all applications.',
  demandBox: [
    {
      heading4: (
        <h4>Scalable <br /> Architecture</h4>
      ),
      para: 'Build flexible backend systems that adapt to user growth, traffic spikes, and evolving business needs.',
      image: signVector
    },
    {
      heading4: (
        <h4>API  <br /> Integration</h4>
      ),
      para: 'Seamlessly connect services and data with secure, efficient, and scalable third-party API integrations.',
      image: signVector
    },
    {
      heading4: (
        <h4>Database <br />Optimization</h4>
      ),
      para: 'Ensure high performance with structured, secure, and responsive database systems tailored to your application.',
      image: signVector
    },
    {
      heading4: (
        <h4>Cloud <br /> Deployment</h4>
      ),
      para: 'Deploy backend infrastructure in the cloud for better availability, cost-efficiency, and development speed.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is back-end development?",
    answer:
      "Back-end development involves building the server-side systems that power websites and applications handling data, logic, security, and integrations behind the scenes.",
  },
  {
    question: "Why is a strong back-end important?",
    answer:
      "It ensures speed, scalability, and reliability. A well-built back-end supports front-end functionality, manages data efficiently, and keeps the platform secure.",
  },
  {
    question: "What technologies do you use for back-end development?",
    answer:
      "We work with technologies like Node.js, Python, PHP, Java, and .NET, along with modern database solutions such as MySQL, MongoDB, and PostgreSQL.",
  },
  {
    question: "Can you integrate third-party services into my system?",
    answer:
      "Yes. We can connect applications with CRMs, payment gateways, analytics platforms, and other third-party tools to extend functionality.",
  },
  {
    question: "Will the back-end support future feature upgrades?",
    answer:
      "Absolutely. Our scalable and modular architectures make it easy to add new features or expand capacity without disrupting operations.",
  },
  {
    question: "Do you provide ongoing server-side support?",
    answer:
      "Yes. We offer continuous monitoring, performance optimization, and maintenance services to ensure the back-end remains stable, secure, and efficient.",
  }
];

const BackendDevelopment = () => {
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

export default BackendDevelopment;
