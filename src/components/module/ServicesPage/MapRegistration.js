"use client";
import styles from "./MapRegistration.module.css";
import n6 from "../../../../public/images/n6.png";
import mapseo from "../../../../public/images/map-seo.png";
import commentmap from "../../../../public/images/commentmap.png";
import ratemap from "../../../../public/images/ratemap.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    image: mapseo,
    title: "سئو نقشه",
    details: [
      "جزئیات اول سرویس",
      "جزئیات دوم سرویس",
      "جزئیات سوم سرویس",
      "جزئیات چهارم سرویس",
    ],
  },
  {
    id: 2,
    image: commentmap,
    title: "ثبت کامنت",
    details: [
      "جزئیات اول سرویس",
      "جزئیات دوم سرویس",
      "جزئیات سوم سرویس",
      "جزئیات چهارم سرویس",
    ],
  },
  {
    id: 3,
    image: ratemap,
    title: "ریتینگ مثبت",
    details: [
      "جزئیات اول سرویس",
      "جزئیات دوم سرویس",
      "جزئیات سوم سرویس",
      "جزئیات چهارم سرویس",
    ],
  },
];

function ServiceBox({ image, title, details, show, toggleShow }) {
  return (
    <div className={styles.box}>
      <Image src={image} alt={title} width={100} height={100} />
      <h3>{title}</h3>
      {show ? (
        <ul>
          {details.map((detail, index) => (
            <li key={index}>
              <FaCheck />
              <p>{detail}</p>
            </li>
          ))}
          <Link id={styles.cntct} href="tel:09120000000">
            دریافت مشاوره تلفنی
          </Link>
        </ul>
      ) : (
        <button id={styles.bttn_detail} onClick={toggleShow}>
          مشاهده جزئیات
        </button>
      )}
    </div>
  );
}

function MapRegistration() {
  const [showStates, setShowStates] = useState([false, false, false]);

  const toggleShow = (index) => {
    setShowStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.up_sec}>
        <div className={styles.paragraph_sec}>
          <h2>ثبت نقشه در پلتفرم های گوگل مپ، ویز، نشان، بلد، اسنپ</h2>
          <p>
            خدمات صادرات و واردات شامل مجموعه‌ای از فعالیت‌ها است که به تسهیل
            انتقال کالا و خدمات بین کشورها کمک می‌کند. این خدمات شامل مشاوره
            تجاری برای ورود به بازارهای بین‌المللی، ترخیص کالا و مدیریت
            فرآیندهای گمرکی، حمل و نقل بین‌المللی و بیمه بار می‌باشد. همچنین،
            تأمین مالی تجارت و ارائه تحقیقات بازار برای شناسایی فرصت‌های تجاری
            نیز از بخش‌های کلیدی این خدمات هستند. هدف اصلی این خدمات، تسهیل در
            دسترسی به بازارهای جهانی و کاهش ریسک‌های مرتبط با تجارت بین‌المللی
            است.
          </p>
        </div>
        <div className={styles.image_sec}>
          <Image src={n6} alt="ثبت نقشه" />
        </div>
      </div>
      <div className={styles.main}>
        {services.map((service, index) => (
          <ServiceBox
            key={service.id}
            image={service.image}
            title={service.title}
            details={service.details}
            show={showStates[index]}
            toggleShow={() => toggleShow(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default MapRegistration;
