"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import styles from "./Header.module.css";

import HamberMenu from "../element/HamberMenu";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.content}>
        <div>
          <Link href="/">
            <Image src={logo} width={230} alt="لوگو آرمان کمپانی" />
          </Link>
        </div>
        <nav>
          <ul className={styles.nav_menu}>
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
        </nav>
        <div>
          <Link href="tel:09122522739" className={styles.bttn_cntct}>
            تماس سریع
            <LiaPhoneVolumeSolid />
          </Link>
        </div>
        <div className={styles.HamberMenu}>
          <HamberMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
