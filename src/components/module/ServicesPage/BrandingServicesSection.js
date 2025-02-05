"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./BrandingServicesSection.module.css";
import n4 from "../../../../public/images/n4.png";
import branding from "../../../../public/images/branding.png";
import host from "../../../../public/images/host.png";
import domain from "../../../../public/images/domain.png";
import webdesign from "../../../../public/images/web-design.png";
import seo from "../../../../public/images/seo.png";
import armanseo from "../../../../public/images/armanseo.png";
import socialmedia from "../../../../public/images/socialmedia.png";
import graphic from "../../../../public/images/graphic.png";

const services = [
  {
    src: branding,
    alt: "Branding",
    label: "برندینگ",
    details: "اطلاعات بیشتر درباره برندینگ",
  },
  {
    src: host,
    alt: "Hosting",
    label: "هاستینگ",
    details: "اطلاعات بیشتر درباره هاستینگ",
  },
  {
    src: domain,
    alt: "Domain",
    label: "دامنه",
    details: "اطلاعات بیشتر درباره دامنه",
  },
  {
    src: webdesign,
    alt: "Web Design",
    label: "طراحی وب سایت",
    details: "اطلاعات بیشتر درباره طراحی وب سایت",
  },
  { src: seo, alt: "SEO", label: "سئو", details: "اطلاعات بیشتر درباره سئو" },
  {
    src: armanseo,
    alt: "Arman SEO",
    label: "محصول روی بازار آرمان",
    details: "اطلاعات بیشتر درباره بازار آرمان",
  },
  {
    src: socialmedia,
    alt: "Social Media",
    label: "شبکه های اجتماعی",
    details: "اطلاعات بیشتر درباره شبکه های اجتماعی",
  },
  {
    src: graphic,
    alt: "Graphic",
    label: "گرافیک",
    details: "اطلاعات بیشتر درباره گرافیک",
  },
];

function BrandingServicesSection() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (label) => {
    setActiveModal(label);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.up_sec}>
        <div className={styles.paragraph_sec}>
          <h2>خدمات برندینگ</h2>
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
          <Image src={n4} alt="Service Image" />
        </div>
      </div>

      {/* First group of services */}
      <div className={styles.servc}>
        {services.slice(0, 4).map((service) => (
          <div key={service.label} className={styles.crdsrvc}>
            <Image
              width={100}
              height={100}
              src={service.src}
              alt={service.alt}
            />
            <p>{service.label}</p>
            <button
              id={styles.bttn_detail}
              onClick={() => openModal(service.label)}
            >
              جزئیات بیشتر
            </button>
          </div>
        ))}
      </div>

      {/* Second group of services */}
      <div className={styles.servc}>
        {services.slice(4).map((service) => (
          <div key={service.label} className={styles.crdsrvc}>
            <Image
              width={100}
              height={100}
              src={service.src}
              alt={service.alt}
            />
            <p>{service.label}</p>
            <button
              id={styles.bttn_detail}
              onClick={() => openModal(service.label)}
            >
              جزئیات بیشتر
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal && (
        <>
          <div
            className={`${styles.modaloverlay} ${
              activeModal ? styles.active : ""
            }`}
            onClick={closeModal}
          ></div>
          <div
            className={`${styles.modal} ${activeModal ? styles.active : ""}`}
          >
            <h2>
              {services.find((service) => service.label === activeModal).label}
            </h2>
            <p>
              {
                services.find((service) => service.label === activeModal)
                  .details
              }
            </p>
            <button onClick={closeModal}>بستن</button>
          </div>
        </>
      )}
    </div>
  );
}

export default BrandingServicesSection;
