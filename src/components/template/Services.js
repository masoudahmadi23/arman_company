import Banner from "../module/ServicesPage/Banner";
import BrandingServicesSection from "../module/ServicesPage/BrandingServicesSection";
import EndsSections from "../module/ServicesPage/EndsSections";
import FirstSection from "../module/ServicesPage/FirstSection";
import MapRegistration from "../module/ServicesPage/MapRegistration";
import RobotProgramming from "../module/ServicesPage/RobotProgramming";
import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <h1>
        خدمات <span>آرمان کمپانی</span>
      </h1>
      <Banner />
      <FirstSection />
      <BrandingServicesSection />
      <RobotProgramming />
      <MapRegistration />
      <EndsSections />
    </div>
  );
}

export default Services;
