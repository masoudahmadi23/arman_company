import Portfolio from "@/components/template/PortfolioPage";

function Page() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        نمونه کارهای <span style={{ color: "#A21A19" }}>آرمان کمپانی</span>
      </h1>
      <Portfolio />
    </div>
  );
}

export default Page;

export const generateMetadata = () => {
  return {
    title: " نمونه‌کار - آرمان کمپانی",
  };
};
