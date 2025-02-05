"use client";
import styles from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#204A7B"
        margin="auto"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
