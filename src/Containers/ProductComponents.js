import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Styles/Products.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <div>
        <h2 className="Home-header">
          Number of Products:
          {products.length}
        </h2>
      </div>
      <div className="Home-search">
        <form>
          <input type="search" placeholder="Search Product" />
        </form>
      </div>
      <div className="productPage">
        { products.map((product) => (
          <div key={product.id} className="productCard">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <div className="productTitle">{ product.title }</div>
            </Link>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default ProductComponent;
