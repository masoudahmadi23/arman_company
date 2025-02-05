"use client";
import React, { useState } from "react";
import styles from "./BlogPage.module.css";
import CardBlog from "../module/Blog/CardBlog";
import Loader from "../element/Loader";
import { useBlog } from "@/context/BlogContext";

function BlogPage() {
  const { blogs, loading, error } = useBlog();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.container}>
      {currentPosts.map((blog) => (
        <CardBlog key={blog.id} blog={blog} />
      ))}
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          نخست
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          قبلی
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          بعدی
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          آخر
        </button>
      </div>
    </div>
  );
}

export default BlogPage;
