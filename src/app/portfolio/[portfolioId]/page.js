import PortfolioSinglePage from "@/components/template/PortfolioSinglePage";
import { formatUri } from "@/utils/function";

function page({ params }) {
  return <PortfolioSinglePage params={params} />;
}

export default page;

export const generateMetadata = ({ params }) => {
  const title = params.portfolioId
    ? decodeURIComponent(params.portfolioId)
    : "";
  const PageTitle = formatUri(title);
  return {
    title: `${PageTitle} - آرمان کمپانی`,
  };
};
