import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`fa fa-star ${i < rating ? '' : 'text-muted'}`} 
        aria-hidden="true"
      ></i>
    ));
  };

  return (
    <div className="single-product-wrapper">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
        {product.hoverImage && (
          <img className="hover-img" src={product.hoverImage} alt={product.name} />
        )}
      </div>
      <div className="product-description d-flex align-items-center justify-content-between">
        <div className="product-meta-data">
          <div className="line"></div>
          <p className="product-price">${product.price}</p>
          <a href={`/product/${product.id}`}>
            <h6>{product.name}</h6>
          </a>
        </div>
        <div className="ratings-cart text-right">
          <div className="ratings">
            {renderStars(product.rating)}
          </div>
          <div className="cart">
            <button 
              onClick={handleAddToCart}
              data-toggle="tooltip" 
              data-placement="left" 
              title="Add to Cart"
            >
              <img src="/img/core-img/cart.png" alt="Add to Cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
