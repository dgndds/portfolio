import BlogPreviewContainer from "../../components/Fragments/blog/BlogPreviewContainer";
import { StyledPagination } from "../News";

const BlogList = () => {
  return (
    <div className="flex flex-col gap-2 items-center px-4">
      <div className="w-full">
        <h1 className="font-tech-mono text-white text-3xl">
          Blogs <span className="text-class">(7)</span>
        </h1>
      </div>

      <hr className="bg-primary-border-dark mb-2 h-0.5 border-0 w-full"/>
      
      <div className="flex flex-col gap-4">
        <BlogPreviewContainer />
        <BlogPreviewContainer />
        <BlogPreviewContainer />
        <BlogPreviewContainer />
        <BlogPreviewContainer />
        <BlogPreviewContainer />
        <BlogPreviewContainer />
      </div>

      {/* TODO: Abstract to own component from news */}
      <StyledPagination
        count={10}
        page={1}
        onChange={() => {}}
        className="self-center mt-4 my-8"
      />
    </div>
  );
};

export default BlogList;
