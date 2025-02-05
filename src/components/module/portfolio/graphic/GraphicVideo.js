import styles from "./GraphicVideo.module.css";

function GraphicVideo({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{data.name}</h2>
        <p>{data.name} در آرمان کمپانی</p>
      </div>
      <div className={styles.border}></div>
      <div
        className={styles.videoContainer}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
}

export default GraphicVideo;
