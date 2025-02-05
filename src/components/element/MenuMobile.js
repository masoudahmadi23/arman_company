import Link from "next/link";
import styles from "./MenuMobile.module.css";

function MenuMobile({ open }) {
  return (
    <div className={`${styles.panel} ${open ? styles.showPanel : ""}`}>
      <ul>
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="https://armancompany.com/wp-content/uploads/2024/08/ArmanCompany-V0.3.pdf">
            پروپزال
          </Link>
        </li>
        <li>
          <Link href="/our-services">خدمات</Link>
        </li>
        <li>
          <Link href="/portfolio">نمونه کارها</Link>
        </li>
        <li>
          <Link href="/blog">وبلاگ</Link>
        </li>
        <li>
          <Link href="/contact">تماس با ما</Link>
        </li>
        <li>
          <Link href="/about">درباره ما</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;
