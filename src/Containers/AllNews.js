import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import NewsComponent from './NewsComponents';

const AllNews = () => {
  const allnews = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchNews = async () => {
    const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_95321f99baef7d04ae3a33bc6518f0ac6fcc&country=us&language=en').catch((err) => {
      console.log('Err', err);
    });
    dispatch(response.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(allnews);
  return (
    <div>
      <NewsComponent />
    </div>
  );
};

export default AllNews;
