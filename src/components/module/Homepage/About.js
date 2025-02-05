import Image from "next/image";
import styles from "./About.module.css";
import door from "../../../../public/images/door.png";
import ax_1 from "../../../../public/images/ax_1.jpg";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import box from "../../../../public/images/box_2.png";

function About() {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h2>
            آرمان کمپانی برای <span>چه کسانی</span> مناسب است؟
          </h2>
          <p className={styles.prgrph}>
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
            <Link href="/contactus" className={styles.btnzxcas}>
              همین حالا تماس بگیرید <FaAngleLeft />
            </Link>
            <div className={styles.membersasd}>
              <p>
                <span>105646</span> نفر
              </p>
              <p>تا کنون مشاوره گرفتند</p>
            </div>
          </div>
          <Image src={ax_1} alt="رضایت"  />
        </div>
        <div className={styles.right}>
          <Image
            src={door}
        
            alt="Door"
            className={styles.door}
          />
          <Image
            src={box}
            alt="Box"
            className={styles.box_animation}
            width={300}
            height="auto"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
