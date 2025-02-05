import Image from "next/image";
import styles from "./CategoriesCard.module.css";
import Link from "next/link";
import { formatTitle } from "@/utils/function";
import { RxInstagramLogo } from "react-icons/rx";
import { MdWhatsapp } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

function CategoriesCard({ categori }) {
  const uri = formatTitle(categori.name);

  return (
    <article className={styles.contain}>
      <Link href={`/portfolio/${uri}`}>
        <Image
          src={categori.image.src}
          width={300}
          height={280}
          alt="portfolio"
        />
      </Link>
      <div className={styles.desc}>
        <h2>{categori.name}</h2>
        <p>{categori.description}</p>
      </div>
      <div className={styles.social_bttn}>
        <Link href={`/portfolio/${uri}`}>
          <button className={styles.button85} role="button">
            مشاهده خدمات
          </button>
        </Link>
        <div>
          <RxInstagramLogo id={styles.insta} aria-label="instagram" />
          <MdWhatsapp id={styles.whats} aria-label="whatsapp" />
          <FaPhoneVolume id={styles.phone} aria-label="phone" />
        </div>
      </div>
    </article>
  );
}

export default CategoriesCard;
