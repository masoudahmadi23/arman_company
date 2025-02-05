import Image from "next/image";
import styles from "./Banner.module.css";
import banner from "../../../../public/images/MainArman.jpg";
function Banner() {
  return (
    <div className={styles.container}>
      <Image src={banner} alt="banner-services" width={1000} height={500} />
    </div>
  );
}

export default Banner;
