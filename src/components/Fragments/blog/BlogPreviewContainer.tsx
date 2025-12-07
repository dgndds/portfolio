import { Link } from "react-router-dom";
import placeholder from "../../../assets/images/placeholder.jpg";

const BlogPreviewContainer = () => {
  return (
    <Link to="/blog/123" className="text-white gap-2 md:gap-4 grow-0 p-2 md:p-4 bg-[#151515] h-[350px] md:h-[250px] flex flex-col md:flex-row border border-primary-border hover:cursor-pointer">
      <img
        src={placeholder}
        alt=""
        className="h-[45%] w-full md:h-full md:w-1/3 border border-primary-border-dark object-cover"
      />

      <div className="flex gap-2 flex-1 h-full flex-col">
        <p className="leading-4 line-clamp-2 font-bold text-token-neon">
          Introduction to something something for very very very very beginners 101
        </p>
        <div className="flex-1 min-w-0">
          <p className="text-sm line-clamp-4 md:line-clamp-6 lg:line-clamp-8 overflow-hidden text-primary-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsa est corporis velit debitis laboriosam. Minima porro a
            nam quaerat, dolor expedita temporibus laudantium officia earum illo
            libero obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempora officia ipsa est corporis velit debitis laboriosam.
            Minima porro a nam quaerat, dolor expedita temporibus laudantium
            officia earum illo libero obcaecati?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsa est corporis velit debitis laboriosam. Minima porro a
            nam quaerat, dolor expedita temporibus laudantium officia earum illo
            libero obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempora officia ipsa est corporis velit debitis laboriosam.
            Minima porro a nam quaerat, dolor expedita temporibus laudantium
            officia earum illo libero obcaecati?
          </p>
        </div>
        <p className="text-[12px] text-end text-primary">02/02/2025</p>
      </div>
    </Link>
  );
};

export default BlogPreviewContainer;
