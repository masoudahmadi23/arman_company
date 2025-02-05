import BlogPage from "@/components/template/BlogPage";

function Blog() {
  return <BlogPage />;
}

export default Blog;

export const generateMetadata = () => {
  return {
    title: "مقالات - آرمان کمپانی",
  };
};
