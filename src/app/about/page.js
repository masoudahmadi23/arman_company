import AboutPage from "@/components/template/AboutPage";
import React from "react";

function page() {
  return <AboutPage />;
}

export default page;

export const generateMetadata = () => {
  return {
    title: "درباره ما - آرمان کمپانی",
  };
};
