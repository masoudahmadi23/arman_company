import Image from "next/image";
import styles from "./Superiority.module.css";
import pic_4 from "../../../../public/images/pic-4.png";

function Superiority() {
  return (
    <section className={styles.feature}>
      <div className={styles.container}>
        <div className={styles.right}>
          <Image src={pic_4} alt="pic_4" />
        </div>
        <div className={styles.left}>
          <h3>
            برتری های <span>آرمان کمپانی</span>
          </h3>
          <ul>
            <li>
              امکانات متنوع برای تنوع در نوع تبلیغات ( فروشگاهی - تصویری - تگرام
              و اینستاگرام و ...)
            </li>
            <li>
            امکانات متنوع برای تنوع در نوع تبلیغات ( فروشگاهی - تصویری - تگرام و اینستاگرام و ...)
            </li>
            <li>
            امکانات متنوع برای تنوع در نوع تبلیغات ( فروشگاهی - تصویری - تگرام و اینستاگرام و ...)
            </li>
            <li>
              طراحی اختصاصی بنر و تصاویر تبلیغاتی برای همکاران ویژه و فعال
            </li>
            <li>
              طراحی اختصاصی بنر و تصاویر تبلیغاتی برای همکاران ویژه و فعال
            </li>
            <li>
              طراحی اختصاصی بنر و تصاویر تبلیغاتی برای همکاران ویژه و فعال
            </li>
            <li>
              طراحی اختصاصی بنر و تصاویر تبلیغاتی برای همکاران ویژه و فعال
            </li>
            <li>
              طراحی اختصاصی بنر و تصاویر تبلیغاتی برای همکاران ویژه و فعال
            </li>
            <li>
              طراحی اختصاصی بنر و تصاویر تبلیغاتی برای همکاران ویژه و فعال
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Superiority;
