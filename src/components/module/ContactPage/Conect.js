import Link from "next/link";
import styles from "./Conect.module.css";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

function Conect() {
  return (
    <article className={styles.main}>
      <div className={styles.item}>
        <Link href="tel:09122522739">
          <div className={styles.icon} id={styles.phone}>
            <PiPhoneCallThin />
          </div>
          <h3>شماره پشتیبانی فروش</h3>
          <p>09122522739</p>
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="tel:09122521847">
          <div className={styles.icon} id={styles.phone}>
            <PiPhoneCallThin />
          </div>
          <h3>شماره واحد فروش</h3>
          <p>09122521847</p>
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="tel:02191030870">
          <div className={styles.icon} id={styles.phone}>
            <PiPhoneCallThin />
          </div>
          <h3>شماره دفتر مرکزی</h3>
          <p>02191030870</p>
        </Link>
      </div>
      <div className={styles.item}>
        <div className={styles.icon} id={styles.location}>
          <CiLocationOn />
        </div>
        <h3> شعبه 1 (دفتر مرکزی): </h3>
        <p>تهران، بلوار نلسون ماندلا (جردن)، خیابان مهراد، کوچه زاور، پلاک ٢</p>
      </div>
      <div className={styles.item}>
        <div className={styles.icon} id={styles.location}>
          <CiLocationOn />
        </div>
        <h3> شعبه 2: </h3>
        <p>
          تهران، خيابان سهروردی شمالی، بالاتر از چهار راه مطهری، نبش کوچه
          خوشنودی، برج نیلی، طبقه 3
        </p>
      </div>
      <div className={styles.item}>
        <div className={styles.icon} id={styles.location}>
          <CiLocationOn />
        </div>
        <h3>شعبه 3: </h3>
        <p>
          تهران، نیروی هوایی، مسیل جاجرود، خیابان شورا، تقاطع طلا تیموری، پلاک
          367
        </p>
      </div>
    </article>
  );
}

export default Conect;
