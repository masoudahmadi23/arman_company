"use client";
import styles from "./PortfolioSinglePage.module.css";
import { usePortfolio } from "@/context/PortfolioContext";
import PortfolioGraphic from "@/components/module/portfolio/PortfolioGraphic";
import PortfolioSeo from "@/components/module/portfolio/PortfolioSeo";
import PortfolioSite from "@/components/module/portfolio/PortfolioSite";
import { formatUri } from "@/utils/function";
import Loader from "@/components/element/Loader";
import Link from "next/link";

function categorizePortfolio(portfolio) {
  return portfolio.reduce((acc, item) => {
    item.categories.forEach((category) => {
      const categoryKey = category.name;
      if (!acc[categoryKey]) acc[categoryKey] = [];
      acc[categoryKey].push(item);
    });
    return acc;
  }, {});
}

function PortfolioSinglePage({ params }) {
  const { portfolio, loading, error } = usePortfolio() || {};
  const categoryName = params.portfolioId
    ? decodeURIComponent(params.portfolioId)
    : "";
  const title = formatUri(categoryName);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  const categorizedProjects = categorizePortfolio(portfolio);

  const hasProjects = categorizedProjects[title]?.length > 0;

  const renderPortfolioComponent = (categoryKey, portfolios) => {
    switch (categoryKey) {
      case "طراحی سایت":
        return <PortfolioSite portfolios={portfolios} />;
      case "پروژه سئو":
        return <PortfolioSeo portfolios={portfolios} />;
      case "طراحی گرافیک":
        return <PortfolioGraphic portfolios={portfolios} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumbs__item}>
          صفحه اصلی
        </Link>
        <span className={styles.breadcrumbs__separator}> / </span>
        <Link href="/portfolio" className={styles.breadcrumbs__item}>
          نمونه کارها
        </Link>
        <span className={styles.breadcrumbs__separator}> / </span>
        <p className={styles.breadcrumbs__item}>{title}</p>
      </div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div
        style={{ border: "1px solid blue", width: "10%", margin: "auto" }}
      ></div>
      {!hasProjects ? (
        <p>هیچ موردی برای این دسته‌بندی پیدا نشد.</p>
      ) : (
        renderPortfolioComponent(title, categorizedProjects[title])
      )}
    </div>
  );
}

export default PortfolioSinglePage;
