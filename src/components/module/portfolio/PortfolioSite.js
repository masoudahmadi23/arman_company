import styles from "./PortfolioSite.module.css";

function PortfolioSite({ portfolios }) {
  return (
    <div className={styles.gridContainer}>
      {portfolios.map((portfolio) => {
        const { id, name, short_description, images } = portfolio;
        const thumbnail = images[0]?.src;

        return (
          <div
            key={id}
            className={styles.card}
            style={{ backgroundImage: `url(${thumbnail})` }}
          >
            <div className={styles.overlay}>
              <p className={styles.title}>{name}</p>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: short_description }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioSite;
