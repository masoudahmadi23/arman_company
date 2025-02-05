import Image from "next/image";
import styles from "./CardEndsSections.module.css";
import Link from "next/link";

function CardEndsSections({ detail }) {
  const isEven = detail.id % 2 === 0; // بررسی زوج یا فرد بودن

  return (
    <div className={`${styles.container} ${isEven ? styles.even : styles.odd}`}>
      <div className={styles.up_sec}>
        <div className={styles.image_sec}>
          <Image src={detail.image_number} alt="Service Image" />
        </div>
        <div className={styles.paragraph_sec}>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
        </div>
      </div>
      <Link id={styles.bttn} href={`${detail.bttn_link}`} target="_blank">
        {detail.bttn_details}
      </Link>
    </div>
  );
}

export default CardEndsSections;
