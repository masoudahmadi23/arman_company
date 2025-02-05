"use client";
import React, { useRef, useState } from "react";
import styles from "./SearchBox.module.css";
import { useBlog } from "@/context/BlogContext";
import Link from "next/link";

const SearchBox = () => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const { blogs } = useBlog();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const filterBlogs = blogs.filter((blog) =>
    blog.title.rendered.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper} onClick={handleFocus}>
        <input
          ref={inputRef}
          onChange={(e) => setSearch(e.target.value.trim())}
          type="text"
          className={styles.inputSearch}
          placeholder="جستجو..."
        />
        <button className={styles.searchButton}>
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
      </div>
      {search && (
        <div className={styles.results}>
          <ul>
            {filterBlogs.length > 0 ? (
              filterBlogs.map((item) => (
                <li key={item.id}>
                  <Link href={`/blog/${item.slug}`}>
                    <p>{item.title.rendered}</p>
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <p>موردی پیدا نشد.</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
