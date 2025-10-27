import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

const Home: React.FC = () => {
  const { addToCart } = useCart();
  
  const products: Product[] = [
    { id: 1, name: 'Modern Chair', image: '/img/bg-img/1.jpg', price: 180, hoverImage: '/img/bg-img/1.jpg', rating: 4.5 },
    { id: 2, name: 'Minimalistic Plant Pot', image: '/img/bg-img/2.jpg', price: 180, hoverImage: '/img/bg-img/2.jpg', rating: 4.2 },
    { id: 3, name: 'Modern Chair', image: '/img/bg-img/3.jpg', price: 180, hoverImage: '/img/bg-img/3.jpg', rating: 4.3 },
    { id: 4, name: 'Night Stand', image: '/img/bg-img/4.jpg', price: 180, hoverImage: '/img/bg-img/4.jpg', rating: 4.1 },
    { id: 5, name: 'Plant Pot', image: '/img/bg-img/5.jpg', price: 18, hoverImage: '/img/bg-img/5.jpg', rating: 4.0 },
    { id: 6, name: 'Small Table', image: '/img/bg-img/6.jpg', price: 320, hoverImage: '/img/bg-img/6.jpg', rating: 4.4 },
    { id: 7, name: 'Metallic Chair', image: '/img/bg-img/7.jpg', price: 318, hoverImage: '/img/bg-img/7.jpg', rating: 4.6 },
    { id: 8, name: 'Modern Rocking Chair', image: '/img/bg-img/8.jpg', price: 318, hoverImage: '/img/bg-img/8.jpg', rating: 4.7 },
    { id: 9, name: 'Home Deco', image: '/img/bg-img/9.jpg', price: 318, hoverImage: '/img/bg-img/9.jpg', rating: 4.2 },
  ];

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="products-catagories-area clearfix">
      <div className="amado-pro-catagory clearfix">
        {products.map((product) => (
          <div key={product.id} className="single-products-catagory clearfix">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <div className="hover-content">
                <div className="line"></div>
                <p>${product.price}</p>
                <h4>{product.name}</h4>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fa fa-star ${i < Math.floor(product.rating || 0) ? 'active' : ''}`}
                    ></i>
                  ))}
                </div>
              </div>
              <button 
                className="quick-cart-btn"
                onClick={(e) => handleAddToCart(e, product)}
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
