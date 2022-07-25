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
      <div className="productCard">
        { products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="image">
                <img className="image" src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{ product.title }</div>
                <div className="price">
                  $
                  { product.price }
                </div>
                <div className="meta">{ product.category }</div>
              </div>
            </Link>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default ProductComponent;
