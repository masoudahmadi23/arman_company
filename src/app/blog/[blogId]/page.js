import SingleBlogPage from "@/components/module/Blog/SingleBlogPage";

function page({ params }) {
  return <SingleBlogPage params={params} />;
}

export default page;

export const generateMetadata = ({ params }) => {
  const decodedBlogId = decodeURIComponent(params.blogId);

  return {
    title: `${decodedBlogId}`,
  };
};
