"use client";

import styles from "./Steps.module.css";
import pic_3 from "../../../../public/images/pic-3.png";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import Image from "next/image";

function Steps() {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <div className={styles.right}>
          <ul>
            <div className={styles.one}>
              <IoArrowDownOutline id={styles.down} />
              <li>
                <div className={styles.icon_web}>
                  <TbDeviceDesktopCode />
                </div>
                <div className={styles.des}>
                  <h3>
                    <span>1</span>
                    ثبت‌نام و ساخت فروشگاه
                  </h3>
                  <p>
                    به راحتی و به سادگی می توانید در بهین افیلیت عضو شوید و
                    فروشگاه اختصاصیتان را ایجاد کنید
                  </p>
                </div>
              </li>
            </div>
            <div className={styles.one}>
              <li>
                <div className={styles.icon_web} id={styles.web_two}>
                  <CiBadgeDollar />
                </div>
                <div className={styles.des}>
                  <h3>
                    <span id={styles.two}>2</span>
                    فروش محصولات
                  </h3>
                  <p>
                    پس از ایجاد فروشگاه، محصولات را به مشتریان خود معرفی کرده و
                    بفروشید
                  </p>
                </div>
              </li>
              <IoArrowDownOutline id={styles.down} />
            </div>
            <div className={styles.one}>
              <IoArrowBack id={styles.down} />
              <li>
                <div className={styles.icon_web} id={styles.web_thre}>
                  <FaSackDollar />
                </div>
                <div className={styles.des}>
                  <h3>
                    <span id={styles.thre}>3</span>
                    دریافت کمیسیون
                  </h3>
                  <p>
                    با ازای فروش هر محصول از فروشگاه اختصاصیتان کمیسیون قابل
                    توجهی دریافت خواهید کرد
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.left}>
          <Image src={pic_3} alt="pic_3" />
        </div>
      </div>
    </section>
  );
}

export default Steps;
