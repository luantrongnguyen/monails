import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  // Mock product data - in real app, this would come from API
  const products: Product[] = [
    { id: 1, name: 'Modern Chair', image: '/img/bg-img/1.jpg', price: 180, hoverImage: '/img/bg-img/1.jpg', rating: 4.5, description: 'A beautiful modern chair perfect for any living space.' },
    { id: 2, name: 'Minimalistic Plant Pot', image: '/img/bg-img/2.jpg', price: 180, hoverImage: '/img/bg-img/2.jpg', rating: 4.2, description: 'Elegant plant pot with minimalistic design.' },
    { id: 3, name: 'Modern Chair', image: '/img/bg-img/3.jpg', price: 180, hoverImage: '/img/bg-img/3.jpg', rating: 4.3, description: 'Comfortable modern chair with sleek design.' },
    { id: 4, name: 'Night Stand', image: '/img/bg-img/4.jpg', price: 180, hoverImage: '/img/bg-img/4.jpg', rating: 4.1, description: 'Perfect night stand for your bedroom.' },
    { id: 5, name: 'Plant Pot', image: '/img/bg-img/5.jpg', price: 18, hoverImage: '/img/bg-img/5.jpg', rating: 4.0, description: 'Small plant pot for indoor plants.' },
    { id: 6, name: 'Small Table', image: '/img/bg-img/6.jpg', price: 320, hoverImage: '/img/bg-img/6.jpg', rating: 4.4, description: 'Compact table ideal for small spaces.' },
    { id: 7, name: 'Metallic Chair', image: '/img/bg-img/7.jpg', price: 318, hoverImage: '/img/bg-img/7.jpg', rating: 4.6, description: 'Stylish metallic chair with modern appeal.' },
    { id: 8, name: 'Modern Rocking Chair', image: '/img/bg-img/8.jpg', price: 318, hoverImage: '/img/bg-img/8.jpg', rating: 4.7, description: 'Comfortable rocking chair for relaxation.' },
    { id: 9, name: 'Home Deco', image: '/img/bg-img/9.jpg', price: 318, hoverImage: '/img/bg-img/9.jpg', rating: 4.2, description: 'Beautiful home decoration piece.' },
  ];

  const product = products.find(p => p.id === parseInt(id || '1')) || products[0];

  const productImages = [
    product.image,
    product.hoverImage || product.image,
    '/img/product-img/pro-big-3.jpg',
    '/img/product-img/pro-big-4.jpg',
  ];

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 300) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
    console.log('Added to cart:', { product, quantity });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fa fa-star ${i < Math.floor(rating) ? '' : 'text-muted'}`} aria-hidden="true"></i>
    ));
  };

  return (
    <div className="single-product-area section-padding-100 clearfix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-50">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="single_product_thumb">
              <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  {productImages.map((image, index) => (
                    <li
                      key={index}
                      className={index === currentImageIndex ? 'active' : ''}
                      data-target="#product_details_slider"
                      data-slide-to={index}
                      style={{ backgroundImage: `url(${image})` }}
                      onClick={() => setCurrentImageIndex(index)}
                    ></li>
                  ))}
                </ol>
                <div className="carousel-inner">
                  {productImages.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}>
                      <a className="gallery_img" href={image}>
                        <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-lg-5">
            <div className="single_product_desc">
              <div className="product-meta-data">
                <div className="line"></div>
                <p className="product-price">${product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <h6>{product.name}</h6>
                </Link>
                <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                  <div className="ratings">
                    {renderStars(product.rating)}
                  </div>
                  <div className="review">
                    <a href="#">Write A Review</a>
                  </div>
                </div>
                <p className="avaibility">
                  <i className="fa fa-circle"></i> In Stock
                </p>
              </div>

              <div className="short_overview my-5">
                <p>{product.description}</p>
              </div>

              <form className="cart clearfix" onSubmit={handleAddToCart}>
                <div className="cart-btn d-flex mb-50">
                  <p>Qty</p>
                  <div className="quantity">
                    <span 
                      className="qty-minus" 
                      onClick={() => handleQuantityChange(-1)}
                    >
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                    <input 
                      type="number" 
                      className="qty-text" 
                      id="qty" 
                      step="1" 
                      min="1" 
                      max="300" 
                      name="quantity" 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    />
                    <span 
                      className="qty-plus" 
                      onClick={() => handleQuantityChange(1)}
                    >
                      <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <button type="submit" name="addtocart" value="5" className="btn amado-btn">
                  Add to cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
