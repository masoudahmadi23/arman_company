"use client";
import styles from "./GraphicImage.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function GraphicImage({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{data.name}</h2>
        <p>{data.name} در آرمان کمپانی</p>
      </div>
      <div className={styles.border}></div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        effect="coverflow"
        modules={[EffectCoverflow, Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
      >
        {data.images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.src}
              alt={image.id}
              width={600}
              height={450}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GraphicImage;
