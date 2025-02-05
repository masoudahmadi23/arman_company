import styles from "./Facilities.module.css";
import { TbDeviceDesktopDollar } from "react-icons/tb";
import { BsBoxSeamFill } from "react-icons/bs";

function Facilities() {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <h3>
          ویژگی ها و <span>امکانات</span> آرمان کمپانی
        </h3>
        <p>
          برای عضویت در سیستم همکاری در فروش بهین افیلیت و کسب درآمد میلیونی از
          آن، نیاز به سرمایه نیست، حتی نیاز به داشتن یک شبکه اجتماعی پر مخاطب هم
          نیست و تنها کافیست که یک وب سایت، کانال تلگرام و یا صفحه اینستاگرام
          داشته باشید و با ترغیب هر تعداد کاربر به خرید از فروشگاه، کمیسیون
          دریافت کنید.
        </p>
        <div className={styles.entery}>
          <div className={styles.sotoon}>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.one}>
                <TbDeviceDesktopDollar />
              </div>
              <p>فروشگاه اختصاصی</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.two}>
                <BsBoxSeamFill />
              </div>
              <p>محصولات متنوع</p>
            </div>
          </div>
          <div className={styles.sotoon}>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.three}>
                <TbDeviceDesktopDollar />
              </div>
              <p>فروشگاه اختصاصی</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.four}>
                <BsBoxSeamFill />
              </div>
              <p>محصولات متنوع</p>
            </div>
          </div>
          <div className={styles.sotoon}>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.five}>
                <TbDeviceDesktopDollar />
              </div>
              <p>فروشگاه اختصاصی</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.six}>
                <BsBoxSeamFill />
              </div>
              <p>محصولات متنوع</p>
            </div>
          </div>
          <div className={styles.sotoon}>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.seven}>
                <TbDeviceDesktopDollar />
              </div>
              <p>فروشگاه اختصاصی</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.eight}>
                <BsBoxSeamFill />
              </div>
              <p>محصولات متنوع</p>
            </div>
          </div>
          <div className={styles.sotoon}>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.nine}>
                <TbDeviceDesktopDollar />
              </div>
              <p>فروشگاه اختصاصی</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon} id={styles.ten}>
                <BsBoxSeamFill />
              </div>
              <p>محصولات متنوع</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
