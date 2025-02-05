"use client";

import Link from "next/link";
import CategoriesCard from "./module/CategoriesCard";
import styles from "./Services.module.css";
import { PiMonitor } from "react-icons/pi";
import Loader from "@/components/element/Loader";
import { useEffect, useState } from "react";

function Services() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();

        const filtered = data.filter((category) =>
          ["طراحی سایت", "طراحی گرافیک", "پروژه سئو"].includes(category.name)
        );

        setCategories(filtered);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("مشکلی در بارگذاری دسته‌بندی‌ها پیش آمده است.");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <section className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.main_left}>
          {categories.map((category) => (
            <CategoriesCard key={category.id} categori={category} />
          ))}
        </div>
      )}
      <div className={styles.main_right}>
        <h2>
          خدمات حرفه‌ای <span>آرمان کمپانی</span>
        </h2>
        <p>
          فروشگاه اختصاصی شما ظاهری فوق حرفه‌ای و شبیه به سایت‌های فروشگاهی بزرگ
          (فروشگاه، آمازون و ...) خواهد داشت. تنوع قالب‌های بهین افیلیت، هر نوع
          سلیقه‌ای را راضی می‌کند. فروشگاه اختصاصی شما ظاهری فوق حرفه‌ای و شبیه
          به سایت‌های فروشگاهی بزرگ (فروشگاه، آمازون و ...) خواهد داشت. تنوع
          قالب‌های بهین افیلیت، هر نوع سلیقه‌ای را راضی می‌کند.
        </p>
        <div className={styles.buttns}>
          <Link id={styles.right_bttn} href={"/contact"}>
            دریافت مشاوره
          </Link>
          <Link id={styles.leftt_bttn} href={"/portfolio/طراحی-سایت"}>
            <PiMonitor />
            نمونه کارهای طراحی سایت
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
