import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../Redux/Actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description, rating,
  } = product;
  const { productid } = useParams();
  const dispatch = useDispatch();

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
      {Object.keys(product).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div>
          <div>
            <img src={image} alt={title} />
          </div>
          <div>{title}</div>
          <div>{price}</div>
          <div>{category}</div>
          <div>{description}</div>
          <div>{rating.count}</div>
          <div>{rating.rate}</div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
