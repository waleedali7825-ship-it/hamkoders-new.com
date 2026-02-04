"use client";
import React, { useEffect, useState } from "react";
import "./AllBlogsSec.css";
import Link from "next/link";
import Image from "next/image";

const AllBlogsSec = ({ isBlogs }) => {
  console.log(isBlogs);
  const [visibleCount, setVisibleCount] = useState(6);

  if (!isBlogs?.length) {
    return (
      <p className="text-center text-gray-500 py-10">
        No blogs available at the moment.
      </p>
    );
  }

  const handleViewMore = (e) => {
    e.preventDefault();
    setVisibleCount((prev) => prev + 6);
  };

  const visibleBlogs = isBlogs.slice(0, visibleCount);
  
  return (
    <section className="all-blogs-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-blogs-content">
              <h2 className="same-heading">
                All <span>blog posts</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {visibleBlogs.map((data) => {
            const imageSrc =
              data?.blogImage?.startsWith("http") && data.blogImage
                ? data.blogImage
                : "/images/logo.webp";

            return (
              <div key={data?._id} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="all-blogs">
                  <Image
                    src={imageSrc}
                    width={506}
                    height={316}
                    alt={data?.title || "Blog image"}
                    className="rounded-xl object-cover"
                  />

                  <div className="all-bigBlogs-content">
                    <p className="blog-date">
                      {new Date(data.createdAt).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>

                    <h3>
                      <Link href={`/blogs/${data.slug}`}>
                        {data?.title}
                        {/* <HiMiniArrowUpRight
                          size={24}
                          color="#000"
                          className="inline-block ml-2"
                        /> */}
                      </Link>
                    </h3>

                    <p className="para line-clamp-2">
                      {data?.content
                        ? data.content.replace(/<[^>]+>/g, "").slice(0, 120) +
                          "..."
                        : data?.title}
                    </p>

                    <div className="all-bigBlogs-tags flex gap-2 flex-wrap">
                      {data?.categories?.map((cat) => {
                        return (
                          <Link key={cat._id} href={`/blogs/${data.slug}`}>
                            {cat.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="col-lg-12">
            {visibleCount < isBlogs.length && (
              <div className="all-blogs-btn">
                <Link
                  href={"#"}
                  onClick={handleViewMore}
                  className="global-btn-outline"
                >
                  View More
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlogsSec;
