import styles from "./Banner.module.css";
import banner from "../../../../public/images/banner.png";
import circle from "../../../../public/images/circle.png";
import plan from "../../../../public/images/plan.png";

import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";

function Banner() {
  return (
    <section className={styles.bg_hero}>
      <div className={styles.article_size}>
        <article className={styles.bnnr_right}>
          <h1>آرمان کمپانی چه میکند</h1>
          <p>
            آرمان کمپانی با بهره گیری از تخصص و تجربه متخصصین خود، قادر به انجام
            پروژه های بزرگ و پیچیده در زمینه های مختلف است. علاوه بر این، شرکت
            قابلیت انجام پروژه های سفارشی را نیز دارد و با توجه به نیاز های
            مشتریان، خدمات خود را به صورت شخصی سازی شده عرضه می کند. مهارت های
            خاص ما ما بهتر کار می کنیم، زیرا تیم ما از مردم تشکیل شده است با
            توجه به تخصص و تجارب حاصل شده، آرمان کمپانی قادر به انجام پروژه های
            بین المللی نیز است و در حال حاضر با شرکت های بزرگ و معتبر در سطح
            جهانی همکاری دارد. به طور کلی، تخصص و مهارت آرمان کمپانی در زمینه
            فناوری اطلاعات و خدمات دیجیتال، این شرکت را به یکی از پیشروان صنعت
            فناوری تبدیل کرده است.
          </p>
          <div className={styles.cntct}>
            <Link href="/contact" className={styles.btnzxcas}>
              همین حالا تماس بگیرید <FaAngleLeft />
            </Link>
            <div className={styles.membersasd}>
              <p>
                <span>105646</span> نفر
              </p>
              <p>تا کنون مشاوره گرفتند</p>
            </div>
          </div>
        </article>
        <div className={styles.bnnr_left}>
          <Image id={styles.img_b} src={banner} alt="img_b" />
          <Image className={styles.img_anim_r} src={circle} alt="circle_1" />
          <Image className={styles.img_anim_l} src={plan} alt="plan" />
          <Image className={styles.img_anim_s} src={circle} alt="circle" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
