"use client";
import { useState, useEffect } from "react";

import styles from "./Example.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import banner from "../../../../public/images/pic-4.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Example() {
  const [slideWidth, setSlideWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => {
      setSlideWidth(window.innerWidth < 500 ? 300 : 500);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth); 
  }, []);

  return (
    <section className={styles.container}>
      <h3>
        برخی از <span>نمونه کار های</span> ما
      </h3>
      <div className={styles.slider}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swip}
            style={{ width: `${slideWidth}px` }}
          >
            <Image src={banner} alt="Banner" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Example;
