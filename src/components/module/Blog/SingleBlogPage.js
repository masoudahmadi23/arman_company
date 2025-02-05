"use client";
import Loader from "@/components/element/Loader";
import { useBlog } from "@/context/BlogContext";
import { useEffect, useState } from "react";
import styles from "./SingleBlogPage.module.css";

function SingleBlogPage({ params }) {
  const { blogs, loading } = useBlog();
  const [singleBlog, setSingleBlog] = useState(null);
  useEffect(() => {
    if (blogs && params?.blogId) {
      const decodedBlogId = decodeURIComponent(params.blogId);
      const foundBlog = blogs.find(
        (blog) => decodeURIComponent(blog.title.rendered) === decodedBlogId
      );

      setSingleBlog(foundBlog);
    }
  }, [blogs, params]);

  if (loading) {
    return <Loader />;
  }

  if (!singleBlog) {
    return <div>محتوا یافت نشد</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{singleBlog.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: singleBlog.content.rendered }} />
    </div>
  );
}

export default SingleBlogPage;
