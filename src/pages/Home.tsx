import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

const Home: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Mơ nails', image: '/img/home-img/san_pham_cty_penviet.jpg', price: 180, hoverImage: '/img/home-img/san_pham_cty_penviet.jpg', rating: 4.5 },
    { id: 2, name: 'Mơ nails', image: '/img/home-img/thiet-ke-tiem-nail (7).jpg', price: 180, hoverImage: '/img/home-img/thiet-ke-tiem-nail (7).jpg', rating: 4.2 },
    { id: 3, name: 'Mơ nails', image: '/img/home-img/thiet-ke-tiem-nail-33.jpg', price: 180, hoverImage: '/img/home-img/thiet-ke-tiem-nail-33.jpg', rating: 4.3 },
    { id: 4, name: 'Mơ nails', image: '/img/home-img/thiet-ke-tiem-nail-nho-28.jpg', price: 180, hoverImage: '/img/home-img/thiet-ke-tiem-nail-nho-28.jpg', rating: 4.1 },
    { id: 5, name: 'Mơ nails', image: '/img/home-img/thiet-ke-tiem-nail-nho-dep.jpg', price: 18, hoverImage: '/img/home-img/thiet-ke-tiem-nail-nho-dep.jpg', rating: 4.0 },
    { id: 6, name: 'Mơ nails', image: '/img/home-img/z3223557731853_6c9fd5023c3676c6d41c901c076113de.jpg', price: 320, hoverImage: '/img/home-img/z3223557731853_6c9fd5023c3676c6d41c901c076113de.jpg', rating: 4.4 },
  ];

  return (
    <div className="products-catagories-area clearfix">
      <div className="amado-pro-catagory clearfix">
        {products.map((product) => (
          <div key={product.id} className="single-products-catagory clearfix">
            <Link to="/shop">
              <img src={product.image} alt={product.name} />
              <div className="hover-content">
                <div className="line"></div>
                <h4>{product.name}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
