"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import {
  FiClock,
  FiTag,
  FiShare2,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiLink,
} from "react-icons/fi";
import CtaSec from "@/components/CtaSec/CtaSec";
import BlogFaq from "@/components/BlogsFaq/BlogFaq";
import Link from "next/link";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [headings, setHeadings] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axiosInstance.get(`/api/blog/${slug}`);
        if (res.status === 200 && res.data?.blog) {
          setBlog(res.data.blog);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (blog) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blog.content, "text/html");
      const h2Elements = doc.querySelectorAll("h2");
      const extractedHeadings = Array.from(h2Elements).map((h, index) => ({
        id: `heading-${index}`,
        text: h.textContent,
      }));
      setHeadings(extractedHeadings);

      setTimeout(() => {
        const contentHeadings = document.querySelectorAll(".blog-content h2");
        contentHeadings.forEach((h, index) => {
          h.id = `heading-${index}`;
        });
      }, 100);
    }
  }, [blog]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll(".blog-content h2");
      let current = "";

      headingElements.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150) {
          current = heading.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${blog?.title}`,
    facebook: `https://www.facebook.com/sharer/sharer.php`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/`,
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  if (loading)
    return (
      <div className="loading-wrapper">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading...</p>
      </div>
    );
  if (!blog)
    return (
      <div className="error-wrapper">
        <h4>Blog not found.</h4>
      </div>
    );
  return (
    <PageLayout>
      <section className="blog-details-modern py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {showAlert && (
                <div className="d-flex justify-content-center">
                  <div
                    className="alert alert-success alert-dismissible fade show position-fixed top-3 end-3 shadow-sm"
                    role="alert"
                    style={{ zIndex: 1055 }}
                  >
                    <strong>Copied!</strong> Blog link has been copied to
                    clipboard.
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowAlert(false)}
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="blog-header-modern mb-5">
                <h1 className="blog-title-modern">{blog.title}</h1>
                <div className="blog-meta-modern">
                  <span className="meta-item-modern">
                    <FiClock className="me-2" />
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  {blog.categories?.[0]?.name && (
                    <span className="meta-item-modern">
                      <FiTag className="me-2" />
                      {blog.categories[0].name}
                    </span>
                  )}

                </div>
                  <div className="mt-4 lg:d-flex justify-content-center align-items-center d-block">
                    <Link
                      href={"/blogs"}
                      style={{ color: "#000", textDecoration: "none" }}
                    >
                      Go to Blogs{" "}
                    </Link>
                    /{slug}
                  </div>
              </div>
              <div className="blog-image-modern mb-5">
                <Image
                  src={blog.blogImage || "/images/logo.webp"}
                  alt={blog.title}
                  width={1000}
                  height={500}
                  className="img-fluid rounded"
                />
              </div>
              <div
                className="blog-content mb-5"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
            </div>

            <div className="col-lg-4 d-none d-lg-block">
              <div className="sidebar-sticky">
                <div className="sidebar-scroll-wrapper">
                  {headings.length > 0 && (
                    <div className="sidebar-card-modern">
                      <h5 className="sidebar-title-modern">
                        Table of Contents
                      </h5>
                      <ul className="toc-list">
                        {headings.map((heading) => (
                          <li
                            key={heading.id}
                            className={`toc-item ${
                              activeSection === heading.id ? "active" : ""
                            }`}
                            onClick={() => scrollToSection(heading.id)}
                          >
                            {heading.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="sidebar-card-modern">
                    <h5 className="sidebar-title-modern">
                      <FiShare2 className="me-2" />
                      Share Article
                    </h5>
                    <div className="share-buttons">
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn twitter"
                        title="Share on Twitter"
                      >
                        <FiTwitter />
                      </a>
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn facebook"
                        title="Share on Facebook"
                      >
                        <FiFacebook />
                      </a>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn linkedin"
                        title="Share on LinkedIn"
                      >
                        <FiLinkedin />
                      </a>
                      <button
                        onClick={copyLink}
                        className="share-btn copy"
                        title="Copy link"
                      >
                        <FiLink />
                      </button>
                    </div>
                  </div>

                  {blog.categories?.length > 0 && (
                    <div className="sidebar-card-modern">
                      <h5 className="sidebar-title-modern">
                        <FiTag className="me-2" />
                        Categories
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {blog.categories.map((cat, index) => (
                          <span
                            key={index}
                            className="badge bg-light text-dark px-3 py-2"
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: "500",
                              border: "1px solid #e2e8f0",
                            }}
                          >
                            {cat.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogFaq data={blog.faqs} />
      <CtaSec />
    </PageLayout>
  );
};
export default BlogDetailsPage;
