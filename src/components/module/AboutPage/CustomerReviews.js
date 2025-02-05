"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import styles from "./CustomerReviews.module.css";
import qt from "../../../../public/images/q21.jpg";

function CustomerReviews() {
  return (
    <div className={styles.container}>
      <h3>نظرات مشتریان</h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={styles.swiper}
      >
        {[1, 2, 3].map((_, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <p className={styles.reviewText}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className={styles.reviewFooter}>
              <Image src={qt} alt="Customer Avatar" width={50} height={50} />
              <div>
                <p className={styles.name}>صادق مددی</p>
                <p className={styles.position}>مدیر کسب و کار</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomerReviews;
