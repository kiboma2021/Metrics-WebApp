import React from 'react';
import { useSelector } from 'react-redux';
import NewsComponent from './NewsComponents';

const AllNews = () => {
  const allnews = useSelector((state) => state);
  console.log(allnews);
  return (
    <div>
      <NewsComponent />
    </div>
  );
};

export default AllNews;
