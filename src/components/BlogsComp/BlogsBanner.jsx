"use client";
import React, { useEffect, useState } from "react";
import "./BlogsBanner.css";
import { FiSearch } from "react-icons/fi";
import axiosInstance from "@/utils/axiosInstance";

const BlogsBanner = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/api/category/list");
        if (res.status) {
          setCategories(res.data.data);
        } else if (res.status === 404) {
          console.log("api error");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    onFilter(search);
  };

  const handleCategoryClick = (cat) => {
    if (cat === "All") {
      onFilter("", "all");
    } else {
      onFilter("", cat);
    }
  };

  return (
    <section className="blogs-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blogs-banner-content">
              <h1 className="same-heading">
                <span>ACCELERATING INNOVATION</span> <br /> FOR THE DIGITAL AGE
              </h1>
              <p className="para">
                Explore insights, innovations, and creative strategies
                redefining industries across the globe. <br />
                New possibilities through creativity, collaboration, and
                technology that drive real-world growth.
              </p>

              <div className="blogs-keywords">
                <ul>
                  <li>
                    <button onClick={() => handleCategoryClick("all")}>
                      All
                    </button>
                  </li>
                  {categories?.map((data) => {
                    return (
                      <li key={data?._id}>
                        <button onClick={() => handleCategoryClick(data?.name)}>
                          {data?.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="blogs-search">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit">
                    <FiSearch size={20} color="#000" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsBanner;
