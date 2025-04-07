import React, { useState } from "react";
import NewsCard from "../components/Fragments/cards/NewsCard";
import { NEWS_ARTICLES } from "../db/news";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const StyledPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    color: "#ffffff",
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#000000",
  },
});

const News: React.FC = () => {
  const [page, setPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(NEWS_ARTICLES.length / articlesPerPage);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedArticles = NEWS_ARTICLES.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage
  );

  return (
    <div className="flex flex-col gap-4 px-4">
      <h1 className="font-tech-mono text-white text-3xl">
        News <span className="text-class">{`(${NEWS_ARTICLES.length})`}</span>
      </h1>
      <ul className="grid grid-cols-3 gap-6">
        {paginatedArticles.map((article) => (
          <NewsCard
            title={article.title}
            description={article.content}
            id={article.id}
            date={article.date}
            type={article.type}
            subtype={article.subtype}
          />
        ))}
      </ul>
      <StyledPagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        className="self-center mt-4"
      />
    </div>
  );
};

export default News;
