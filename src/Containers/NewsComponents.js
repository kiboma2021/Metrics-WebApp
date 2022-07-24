import React from 'react';
import { useSelector } from 'react-redux';

const NewsComponent = () => {
  const news = useSelector((state) => state.allnews.news);
  const { id, title, description } = news[0];
  return (
    <div key={id}>
      <h1>News Category</h1>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default NewsComponent;
