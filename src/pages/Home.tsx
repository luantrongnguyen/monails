import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

const Home: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Nail Art', image: '/img/home-img/z7161918827511_4f815384ec91774f9b6fc3b0829a2bd4.jpg', price: 180, hoverImage: '/img/home-img/z7161918827511_4f815384ec91774f9b6fc3b0829a2bd4.jpg', rating: 4.5, category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 2, name: 'Gel Polish', image: '/img/home-img/z7161918828324_8ac9ee83127b4ea720ca15cc5bf697d7.jpg', price: 180, hoverImage: '/img/home-img/z7161918828324_8ac9ee83127b4ea720ca15cc5bf697d7.jpg', rating: 4.2, category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 3, name: 'Manicure', image: '/img/home-img/z7161918834004_03713fabc2a46da4c4bd07e147f73124.jpg', price: 180, hoverImage: '/img/home-img/z7161918834004_03713fabc2a46da4c4bd07e147f73124.jpg', rating: 4.3, category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 5, name: 'Pedicure', image: '/img/home-img/demo.jpg', price: 18, hoverImage: '/img/home-img/02d077a2a946feb4d33903c39c5aeb3d.jpg', rating: 4.0, category: 'Nail Box', brand: 'Mơ Nails', inStock: true },

    { id: 6, name: 'Nail Extension', image: '/img/home-img/617kuZNFMTL.jpg', price: 320, hoverImage: '/img/home-img/617kuZNFMTL.jpg', rating: 4.4, category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 4, name: 'French Tips', image: '/img/home-img/z7161918839265_15ea4c3384183fec91fc0b6097ab5cd4.jpg', price: 180, hoverImage: '/img/home-img/z7161918839265_15ea4c3384183fec91fc0b6097ab5cd4.jpg', rating: 4.1, category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 7, name: 'Nail Care', image: '/img/home-img/obZlzVneq93P7gj71Fmp2UvNT8NB0qQDhFubBz7J.jpg', price: 250, hoverImage: '/img/home-img/obZlzVneq93P7gj71Fmp2UvNT8NB0qQDhFubBz7J.jpg', rating: 4.6, category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 8, name: 'Beauty Box', image: '/img/home-img/Sb8777dc006af4a7da26f00a653ca150aN.avif', price: 280, hoverImage: '/img/home-img/Sb8777dc006af4a7da26f00a653ca150aN.avif', rating: 4.7, category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
  ];

  return (
    <>
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

    </>
  );
};

export default Home;
