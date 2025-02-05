"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./PortfolioSeo.module.css";
import Image from "next/image";

function PortfolioSeo({ portfolios }) {
  return (
    <div className={styles.container}>
      {portfolios.map(({ id, name, short_description, images }) => (
        <div key={id} className={styles.card}>
          <h2 className={styles.title}>{name}</h2>
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{ delay: 4000 }}
            className={styles.innerSwiper}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={styles.imageSlide}>
                <Image
                  src={image.src}
                  width={400}
                  height={300}
                  alt={name}
                  className={styles.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: short_description }}
          />
        </div>
      ))}
    </div>
  );
}

export default PortfolioSeo;
