import React from "react";
import "./OurBlogs.css";
import Link from "next/link";
import Image from "next/image";

const OurBlogs = ({ mainHeading, mainHeadingSpan, isBlogs }) => {
  return (
    <section className="our-blogs-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-blogs-content">
              {!mainHeading && !mainHeadingSpan ? (
                <h2 className="same-heading">
                  Our <span>Blog</span>
                </h2>
              ) : (
                <h2 className="same-heading">
                  {mainHeading} <span>{mainHeadingSpan}</span>
                </h2>
              )}

              {!mainHeading && !mainHeadingSpan ? (
                <div className="our-blogs-right">
                  <div className="our-blogs-btn">
                    <Link href={"/blogs"} className="global-btn-outline">
                      View More
                    </Link>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            {isBlogs?.[0] && (
              <div className="our-blogs">
                <Image
                  src={isBlogs[0]?.blogImage || "/images/logo.webp"}
                  alt={isBlogs[0]?.title || "Blog image"}
                  width={600}
                  height={400}
                />

                <div className="our-bigBlogs-content">
                  <p className="blog-date">
                    {new Date(isBlogs[0]?.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                  <h3>
                    <Link href={`/blogs/${isBlogs[0]?.slug}`}>
                      {isBlogs[0]?.title}
                      {/* <HiMiniArrowUpRight size={30} color={"#000"} /> */}
                    </Link>
                  </h3>
                  <p className="para">
                    {isBlogs[0]?.content
                      ? isBlogs[0]?.content
                          .replace(/<[^>]+>/g, "")
                          .slice(0, 120) + "..."
                      : ""}
                  </p>

                  <div className="our-bigBlogs-tags">
                    {isBlogs[0]?.categories?.map((cat) => (
                      <Link key={cat._id} href={`/blogs/${isBlogs[0].slug}`}>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="col-lg-6">
            {isBlogs?.slice(1, 3).map((blog) => (
              <div className="our-blogs flex-blogs" key={blog._id}>
                <Image
                  src={blog?.blogImage || "/images/logo.webp"}
                  alt={blog?.title || "Blog image"}
                  width={300}
                  height={200}
                />

                <div className="our-bigBlogs-content">
                  <p className="blog-date">
                    {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <h3>
                    <Link href={`/blogs/${blog?.slug}`}>
                    {/* {blog?.title} */}
                    {blog?.title
                      ? blog?.title.replace(/<[^>]+>/g, "").slice(0, 25) +
                        "..."
                      : ""}
                    </Link>
                  </h3>
                  <p className="para">
                    {blog?.content
                      ? blog?.content.replace(/<[^>]+>/g, "").slice(0, 40) +
                        "..."
                      : ""}
                  </p>

                  <div className="our-bigBlogs-tags">
                    {blog?.categories?.map((cat) => (
                      <Link key={cat._id} href={`/blogs/${blog.slug}`}>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
