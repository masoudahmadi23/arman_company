import GraphicImage from "./graphic/GraphicImage";
import GraphicVideo from "./graphic/GraphicVideo";
import styles from "./PortfolioGraphic.module.css";

function PortfolioGraphic({ portfolios }) {
  const portfolioComponents = {
    "نمونه لوگو موشن": GraphicVideo,
    "نمونه طراحی بنر فروش": GraphicImage,
    "نمونه طراحی لوگو": GraphicImage,
    "نمونه طراحی کارت ویزیت": GraphicImage,
    "نمونه عکاسی محصول": GraphicImage,
    "نمونه تیزر معرفی محصول": GraphicVideo,
    "نمونه موشن گرافیک": GraphicVideo,
    "نمونه استوری اینستاگرام": GraphicVideo,
    "نمونه کاور ریلز و پست اینستاگرام": GraphicImage,
    "نمونه ریلز اینستاگرام": GraphicVideo,
    "نمونه ریلز اینستاگرام با فیلمبرداری اختصاصی + بلاگر": GraphicVideo,
    "نمونه تیزر با فیلمبرداری اختصاصی": GraphicVideo,
  };

  return (
    <div className={styles.container}>
      {portfolios.map((portfolio) => {
        const Component = portfolioComponents[portfolio.name] || null;
        return (
          <div key={portfolio.id}>
            {Component ? (
              <Component data={portfolio} />
            ) : (
              "چیزی برای نمایش وجود ندارد!"
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioGraphic;
