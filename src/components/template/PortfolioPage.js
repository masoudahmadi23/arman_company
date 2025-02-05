"use client";

import styles from "./PortfolioPage.module.css";
import Loader from "@/components/element/Loader";
import CategoriesCard from "@/components/module/Homepage/module/CategoriesCard";
import { useEffect, useState } from "react";

function OurServices() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("دسته‌بندی‌ها یافت نشد.");
          } else {
            throw new Error("خطا در ارتباط با سرور.");
          }
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) return <Loader />;

  return (
    <section className={styles.container}>
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : categories.length > 0 ? (
        categories.map((category) => (
          <CategoriesCard key={category.id} categori={category} />
        ))
      ) : (
        <p className={styles.message}>دسته‌بندی‌ای یافت نشد.</p>
      )}
    </section>
  );
}

export default OurServices;
