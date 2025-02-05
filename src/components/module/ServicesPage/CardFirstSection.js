"use client";
import Image from "next/image";
import styles from "./CardFirstSection.module.css";
import Link from "next/link";
import { useState } from "react";

function CardFirstSection({ service }) {
  const isEven = service.id % 2 === 0;

  const [selectedCategory, setSelectedCategory] = useState(
    service.categories[0]?.id || null
  );

  return (
    <div className={styles.container}>
      <div>
        <div className={`${isEven ? styles.even : styles.odd}`}>
          <div className={styles.up_sec}>
            <div className={styles.image_sec}>
              <Image src={service.image_number} alt="Service Image" />
            </div>
            <div className={styles.paragraph_sec}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
        <div>
          <ul className={styles.list}>
            {service.categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? styles.activeButton
                      : styles.notActiveButton
                  }
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {service.categories.map((category) =>
          selectedCategory === category.id ? (
            <div
              key={category.id}
              className={`${styles.down_sec} ${styles.down_sec_elemnt}`}
            >
              <div className={styles.paragraph_sec}>
                <p>{category.paragraph}</p>
                <div className={styles.bttns}>
                  <Link href="/" className={styles.bttn_cg}>
                    دریافت مشاوره
                  </Link>
                  <Link href="/" className={styles.bttn_srv}>
                    سفارش خدمات
                  </Link>
                </div>
              </div>
              <div className={styles.image_sec}>
                <Image src={category.image} alt="Category Image" />
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default CardFirstSection;
