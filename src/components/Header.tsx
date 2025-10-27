import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Mobile Nav */}
      <div className="mobile-nav">
        <div className="amado-navbar-brand">
          <Link to="/">
            <img src="/img/core-img/logo.png" alt="Amado Logo" />
          </Link>
        </div>
        <div className="amado-navbar-toggler" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>

      {/* Header Area */}
      <header className={`header-area clearfix ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-close" onClick={closeMenu}>
          <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        
        <div className="logo">
          <Link to="/">
            <img src="/img/core-img/logo.png" alt="Amado Logo" />
          </Link>
        </div>
        
        <nav className="amado-nav">
          <ul>
            <li className={isActive('/')}>
              <Link to="/">Home</Link>
            </li>
            {/* <li className={isActive('/shop')}>
              <Link to="/shop">Shop</Link>
            </li> */}
            {/* <li className={isActive('/product')}>
              <Link to="/product/1">Product</Link>
            </li> */}
            <li className={isActive('/cart')}>
              <Link to="/cart">Cart</Link>
            </li>
            <li className={isActive('/checkout')}>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
        
        <div className="amado-btn-group mt-30 mb-100">
          <a href="#" className="btn amado-btn mb-15">%Discount%</a>
          <a href="#" className="btn amado-btn active">New this week</a>
        </div>
        
        <div className="cart-fav-search mb-100">
          <Link to="/cart" className="cart-nav">
            <img src="/img/core-img/cart.png" alt="Cart" /> Cart <span>({state.totalItems})</span>
          </Link>
          <a href="#" className="fav-nav">
            <img src="/img/core-img/favorites.png" alt="Favorites" /> Favourite
          </a>
          <a href="#" className="search-nav">
            <img src="/img/core-img/search.png" alt="Search" /> Search
          </a>
        </div>
        
        <div className="social-info d-flex justify-content-between">
          <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
      </header>
    </>
  );
};

export default Header;
