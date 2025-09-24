import Container from "./cards/Container";
import NewsEntry from "./cards/NewsEntry";
import { NEWS_ARTICLES } from "../../db/news";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <Container>
      <div className="flex items-center text-white border-b border-primary-border py-2">
        <div className="flex-1 font-tech-mono text-2xl">Latest News</div>
        <Link
          to="news"
          className="text-sm text-secondary underline underline-offset-4"
        >
          View all
        </Link>
      </div>

      <div className="flex gap-2 flex-col py-3 overflow-y-scroll scrollbar scrollbar-thumb-[#727272] scrollbar-track-[#181818]">
        {NEWS_ARTICLES.map((article, index) => (
          index <= 5 && <NewsEntry
            key={index}
            date={article.date}
            type={article.type}
            subtype={article.subtype}
            title={article.title}
            description={article.content}
            count={index + 1}
          />
        ))}
      </div>
    </Container>
  );
};

export default News;
