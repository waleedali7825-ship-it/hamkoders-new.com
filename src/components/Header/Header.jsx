"use client";
import React from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import LOGO_IMAGE from "../../../public/images/logo.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                  <Image
                    src={LOGO_IMAGE}
                    width={93}
                    height={76}
                    alt="LOGO_IMAGE"
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mobile-service-item">
                      <Link className="nav-link" href="/services">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item lap-service-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="/services"
                        id="navbarDropdown"
                        // role="button"
                        // data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="services-drop">
                                  <h3>
                                    <Link href={"/website-development"}>
                                      Web Development
                                    </Link>
                                  </h3>
                                  <ul>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/custom-website-development"
                                        }
                                      >
                                        Custom website development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/enterprise-web-development"
                                        }
                                      >
                                        Enterprise web development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/web-app-development"
                                        }
                                      >
                                        Web app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/frontend-development"
                                        }
                                      >
                                        Front-end development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/backend-development"
                                        }
                                      >
                                        Backend development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/fullstack-development"
                                        }
                                      >
                                        Full-Stack development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/landing-page-development"
                                        }
                                      >
                                        Landing Page development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/web3.0-development"
                                        }
                                      >
                                        Web 3.0 Development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/website-development/website-maintenance"
                                        }
                                      >
                                        Website maintenance
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="services-drop">
                                  <h3>
                                    <Link href={"/app-development"}>
                                      App development
                                    </Link>
                                  </h3>
                                  <ul>
                                    <li>
                                      <Link
                                        href={
                                          "/app-development/ios-app-development"
                                        }
                                      >
                                        iOS app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/app-development/android-app-development"
                                        }
                                      >
                                        Android app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/app-development/cross-platform-app-development"
                                        }
                                      >
                                        Cross-platform app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/app-development/hybrid-app-development"
                                        }
                                      >
                                        Hybrid app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/app-development/saas-app-development"
                                        }
                                      >
                                        Saas app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/app-development/mvp-app-development"
                                        }
                                      >
                                        MVP app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={"/app-development/concept-design"}
                                      >
                                        Concept design
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/app-development/wearable-app-development"
                                        }
                                      >
                                        Wearable app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/app-development/app-maintenance"
                                        }
                                      >
                                        App maintenance
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="services-drop">
                                  <h3>
                                    <Link href={"/store-development"}>
                                      Store Development
                                    </Link>
                                  </h3>
                                  <ul>
                                    <li>
                                      <Link
                                        href={
                                          "/store-development/shopify-development"
                                        }
                                      >
                                        Shopify development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/store-development/magento-development"
                                        }
                                      >
                                        Magento development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/store-development/woocommerce-development"
                                        }
                                      >
                                        Woocommerce development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/store-development/wordpress-development"
                                        }
                                      >
                                        Wordpress development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/store-development/drupal-development"
                                        }
                                      >
                                        Drupal development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/store-development/store-maintenance"
                                        }
                                      >
                                        Store maintenance
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="services-drop">
                                  <h3>
                                    <Link href={"/game-development"}>
                                      Game development
                                    </Link>
                                  </h3>
                                  <ul>
                                    <li>
                                      <Link
                                        href={
                                          "/game-development/mobile-app-development"
                                        }
                                      >
                                        Mobile app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/game-development/cross-platform-game-development"
                                        }
                                      >
                                        Cross-platform game development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/game-development/blockchain-and-nft-game-app"
                                        }
                                      >
                                        Blockchain & NFT game app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/game-development/console-game-app"
                                        }
                                      >
                                        Console game app development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/game-development/concept-design"
                                        }
                                      >
                                        Concept design
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={
                                          "/game-development/testing-and-maintenance"
                                        }
                                      >
                                        Testing & maintenance
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="services-drop-cta1">
                              <h3>
                                <Link href={"/software-development"}>
                                  Software <span>Development</span>
                                </Link>
                              </h3>
                              <div className="services-drop-flex">
                                <ul>
                                  <li>
                                    <Link
                                      href={
                                        "/software-development/erp-development"
                                      }
                                      className="global-btn-outline"
                                    >
                                      ERP Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href={
                                        "/software-development/erm-development"
                                      }
                                      className="global-btn-outline"
                                    >
                                      ERM Development
                                    </Link>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <Link
                                      href={
                                        "/software-development/crm-development"
                                      }
                                      className="global-btn-outline"
                                    >
                                      CRM Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href={
                                        "/software-development/cms-development"
                                      }
                                      className="global-btn-outline"
                                    >
                                      CMS Development
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            {/* <div className="services-drop-cta1">
                              <h3>
                                <Link href={"/software-development"}>
                                  Software <span>Development</span>
                                </Link>
                              </h3>
                              <div className="services-drop-flex">
                                <ul>
                                  <li>
                                    <Link
                                      href={
                                        "/software-development/erp-development"
                                      }
                                      className="global-btn-outline"
                                    >
                                      ERP Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href={
                                        "/software-development/erm-development"
                                      }
                                      className="global-btn-outline"
                                    >
                                      ERM Development
                                    </Link>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <Link
                                      href={
                                        "/software-development/crm-development"
                                      }
                                      className="global-btn-outline"
                                    >
                                      CRM Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href={
                                        "/software-development/cms-development"
                                      }
                                      className="global-btn-outline"
                                    >
                                      CMS Development
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div> */}
                            {/* <div className="services-drop">
                              <h3>
                                <Link href={"/software-development"}>
                                  Software <span>Development</span>
                                </Link>
                              </h3>
                              <ul>
                                <li>
                                  <Link
                                    href={
                                      "/software-development/erp-development"
                                    }
                                  >
                                    ERP Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href={
                                      "/software-development/erm-development"
                                    }
                                  >
                                    ERM Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href={
                                      "/software-development/crm-development"
                                    }
                                  >
                                    CRM Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href={
                                      "/software-development/cms-development"
                                    }
                                  >
                                    CMS Development
                                  </Link>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/industries">
                        Industries
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blogs">
                        Blogs
                      </Link>
                    </li>
                  </ul>
                  <div className="header-right-btn">
                    <Link href={"/contact-us"}>Contact Us</Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
