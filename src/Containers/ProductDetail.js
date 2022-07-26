import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../Redux/Actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productid } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch((err) => {
      console.log('Err', err);
    });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productid && productid !== '') fetchProductDetail();
  }, [productid]);

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
