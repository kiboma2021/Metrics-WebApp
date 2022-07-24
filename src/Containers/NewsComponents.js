import React from 'react';
import { useSelector } from 'react-redux';

const NewsComponent = () => {
  const news = useSelector((state) => state.allnews.news.results);
  const renderList = news.map((n) => {
    const { id, title, description } = n;
    return (
      <div key={id}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    );
  });
  return (
    <>{renderList}</>
  );
};

export default NewsComponent;
