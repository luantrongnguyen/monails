import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Newsletter Area */}
      <section className="newsletter-area section-padding-100-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="newsletter-text mb-100">
                <h2>Subscribe for a <span>25% Discount</span></h2>
                <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="newsletter-form mb-100">
                <form>
                  <input type="email" name="email" className="nl-email" placeholder="Your E-mail" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer className="footer_area clearfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4">
              <div className="single_widget_area">
                <div className="footer-logo mr-50">
                  <Link to="/">
                    <img src="/img/core-img/logo2.png" alt="Amado Logo" />
                  </Link>
                </div>
                <p className="copywrite">
                  Copyright &copy;{currentYear} All rights reserved | This template is made with{' '}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{' '}
                  <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> & 
                  Re-distributed by{' '}
                  <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">Themewagon</a>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="single_widget_area">
                <div className="footer_menu">
                  <nav className="navbar navbar-expand-lg justify-content-end">
                    <button 
                      className="navbar-toggler" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#footerNavContent" 
                      aria-controls="footerNavContent" 
                      aria-expanded="false" 
                      aria-label="Toggle navigation"
                    >
                      <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="footerNavContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/product/1">Product</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/checkout">Checkout</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
