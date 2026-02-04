"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import BlogsBanner from "@/components/BlogsComp/BlogsBanner";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import AllBlogsSec from "@/components/PortfolioComp/AllBlogsSec/AllBlogsSec";
import CtaSec from "@/components/CtaSec/CtaSec";
import axiosInstance from "@/utils/axiosInstance";

const BlogsComp = () => {
  const [isBlogs, setIsBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/api/blogs");
        if (res.status) {
          setIsBlogs(res.data.items);
          setFilteredBlogs(res.data.items);
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

  const handleFilter = (searchTerm, category = null) => {
    if (category === "all") {
      setFilteredBlogs(isBlogs);
      return;
    }

    if (!searchTerm && !category) {
      setFilteredBlogs(isBlogs);
      return;
    }

    let filtered = isBlogs;

    if (category) {
      filtered = filtered.filter((blog) =>
        blog.categories?.some(
          (cat) => cat.name?.toLowerCase() === category.toLowerCase()
        )
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.content?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  };

  return (
    <PageLayout>
      <BlogsBanner onFilter={handleFilter} />
      <AllBlogsSec isBlogs={filteredBlogs} />
      <OurBlogs
        isBlogs={isBlogs}
        mainHeading={"Recent"}
        mainHeadingSpan={"blog posts"}
      />
      <CtaSec />
    </PageLayout>
  );
};

export default BlogsComp;
