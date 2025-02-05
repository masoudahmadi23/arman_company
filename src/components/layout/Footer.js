import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import nemad from "../../../public/images/namad-1.png";
import samandehi from "../../../public/images/samandehi.png";
import senf from "../../../public/images/senf.png";
import ISILogo from "../../../public/images/ISILogo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_widget}>
          <h3>راه های ارتباطی</h3>
          <div className={styles.border}></div>
          <div>
            <p>
              تیم پشتیبانی:&nbsp;&nbsp;&nbsp;
              <Link href={"tel:09122522739"}>09122522739</Link>
            </p>
            <p>
              تیم مشاوران:&nbsp;&nbsp;&nbsp;
              <Link href={"tel:09122521847"}>09122521847</Link>
            </p>
            <p>
              دفتر مرکزی:&nbsp;&nbsp;&nbsp;
              <Link href={"tel:02191030870"}>02191030870</Link>
            </p>
            <p>
              <strong>شعبه ۱ (دفتر مرکزی):</strong>
              <br />
              تهران، بلوار نلسون ماندلا (جردن)، خیابان مهراد، کوچه زاور، پلاک ٢
            </p>
            <p>
              <strong>شعبه ۲:</strong>
              <br />
              تهران، خيابان سهروردی شمالی، بالاتر از چهار راه مطهری، نبش کوچه
              خوشنودی، برج نیلی، طبقه ۳
            </p>
            <p>
              <strong>شعبه ۳:</strong>
              <br />
              تهران، نیروی هوایی، مسیل جاجرود، خیابان شورا، تقاطع طلا تیموری،
              پلاک ۳۶۷
            </p>
          </div>
        </div>
        <div className={styles.footer_widget}>
          <h3>دسترسی سریع</h3>
          <div className={styles.border}></div>
          <ul className={styles.access}>
            <li>
              <Link href={"/"}>صفحه اصلی</Link>
            </li>
            <li>
              <Link href={"/"}>نمونه کاره</Link>
            </li>
            <li>
              <Link href={"/"}>خدمات</Link>
            </li>
            <li>
              <Link href={"/"}>پروپوزال</Link>
            </li>
            <li>
              <Link href={"/"}>درباره ما</Link>
            </li>
            <li>
              <Link href={"/"}>تماس با ما</Link>
            </li>
            <li>
              <Link href={"/"}>مقالات</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_widget}>
          <h3>نمونه کارها</h3>
          <div className={styles.border}></div>
          <p>
            <Link href={"/"}>نمونه طراحی سایت</Link>
          </p>
          <p>
            <Link href={"/"}>نمـونه پروژه سئو</Link>
          </p>
          <p>
            <Link href={"/"}>نمونه طراحی گـرافیـک</Link>
          </p>
        </div>
        <div className={styles.footer_widget}>
          <ul className={styles.access}>
            <li>
              <Image src={nemad} width={150} height={150} alt="nemad" />
            </li>
            <li>
              <Image src={samandehi} width={150} height={150} alt="samandehi" />
            </li>
            <li>
              <Image src={senf} width={150} height={150} alt="senf" />
            </li>
            <li>
              <Image src={ISILogo} width={150} height={150} alt="ISILogo" />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          کلیه حقوق این سایت متعلق به آرمان کمپانی می باشد. می توانید با
          <Link href="https://armannews.com/">خبرگزاری آرمان نیوز</Link> همراه
          شوید.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
