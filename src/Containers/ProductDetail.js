/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
  const { productid } = useParams();
  const dispatch = useDispatch();
  console.log(productid);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch((err) => {
      console.log('Err', err);
    });
    dispatch();
  };
  return (
    <div>
      <h1>
        All news in Kenya
        {productid}
      </h1>
    </div>
  );
};

export default ProductDetail;
