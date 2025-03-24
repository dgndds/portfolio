import React from "react";
import NewsCard from "../components/Fragments/cards/NewsCard";
import { NEWS_ARTICLES } from "../db/news";

const News: React.FC = () => {
  const newsArticles = NEWS_ARTICLES;

  return (
    <div className="flex flex-col gap-4 px-4">
      <h1 className="font-tech-mono text-white text-3xl">
        News <span className="text-class">{`(${newsArticles.length})`}</span>
      </h1>
      <ul className="grid grid-cols-3 gap-6">
        {newsArticles.map((article) => (
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
    </div>
  );
};

export default News;
