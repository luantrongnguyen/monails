import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();

  // Mock product data - in real app, this would come from API
  const products: Product[] = [
    { id: 1, name: 'Nail Box 1', image: '/img/product-img/z7159612792004_ff71b03a9c8bf65ed7167286319f3d8d.jpg', price: 69000, hoverImage: '/img/product-img/z7159612794262_2380dfa3223fefa4c9a1407d37bace9e.jpg', rating: 4.5, description: 'Bộ nail box cao cấp với thiết kế đẹp mắt và chất lượng tốt.', category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 2, name: 'Nail Box 2', image: '/img/product-img/z7159612805680_a58703fa58442c47920074e37394a7b8.jpg', price: 79000, hoverImage: '/img/product-img/z7159612808415_0a370ffaba7d1f90011f91ce54f743de.jpg', rating: 4.2, description: 'Bộ nail box sang trọng với nhiều màu sắc đa dạng.', category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 3, name: 'Nail Box 3', image: '/img/product-img/z7159612822258_cf8b4352f471689c52a9fc3a2f9d0eac.jpg', price: 59000, hoverImage: '/img/product-img/z7159612826644_6d3dd1b4b3393a16f3d3e35d1a642dd8.jpg', rating: 4.3, description: 'Bộ nail box giá cả phải chăng với chất lượng tốt.', category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 4, name: 'Nail Box 4', image: '/img/product-img/z7159612833753_a1139047b43deee66a16e46647d2b4e8.jpg', price: 69000, hoverImage: '/img/product-img/z7159612844937_c6b50e9875cca725a7d171148eae3d3c.jpg', rating: 4.1, description: 'Bộ nail box hiện đại với thiết kế tinh tế.', category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 5, name: 'Nail Box 5', image: '/img/product-img/z7159612848482_70f83796011d1bf38de13b8def02f157.jpg', price: 79000, hoverImage: '/img/product-img/z7159612851370_f2a5c16e47034bf31bed281c7f938638.jpg', rating: 4.0, description: 'Bộ nail box cao cấp với nhiều phụ kiện đi kèm.', category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 6, name: 'Nail Box 6', image: '/img/product-img/z7159612862218_5b05292c63f1e58c1b2d1882cb735c4c.jpg', price: 59000, hoverImage: '/img/product-img/z7159612871440_294cc9054c5d4a827706afe431758e01.jpg', rating: 4.4, description: 'Bộ nail box tiện lợi với thiết kế gọn nhẹ.', category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 7, name: 'Nail Box 7', image: '/img/product-img/z7159612874839_9da0136a3cba3217dda731f670f95d6d.jpg', price: 69000, hoverImage: '/img/product-img/z7159612882359_f0c85bd3843d40f6c5de9a196c1892bd.jpg', rating: 4.6, description: 'Bộ nail box chuyên nghiệp với đầy đủ công cụ.', category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
    { id: 8, name: 'Nail Box 8', image: '/img/product-img/z7159612886036_c81b168e2b198cc54225831cddee5c12.jpg', price: 79000, hoverImage: '/img/product-img/z7159612900641_4530baef02d721bbb4e7cfb33d5f211c.jpg', rating: 4.7, description: 'Bộ nail box premium với chất lượng cao nhất.', category: 'Nail Box', brand: 'Mơ Nails', inStock: true },
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

  const handleAddToCart = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddingToCart(true);
    addToCart(product, quantity);
    console.log('Added to cart:', { product, quantity });
    
    // Reset animation after 600ms
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 600);
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
                {/* <ol className="carousel-indicators">
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
                </ol> */}
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
                <p className="product-price">{product.price.toLocaleString('vi-VN')} đ</p>
                <Link to={`/product/${product.id}`}>
                  <h6>{product.name}</h6>
                </Link>
                <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                  <div className="ratings">
                    {renderStars(product.rating)}
                  </div>
                  <div className="review">
                    <a href="#">Viết đánh giá</a>
                  </div>
                </div>
                <p className="avaibility">
                  <i className="fa fa-circle"></i> Còn hàng
                </p>
              </div>

              <div className="short_overview my-5">
                <p>{product.description}</p>
              </div>

              <form className="cart clearfix" onSubmit={handleAddToCart}>
                <div className="cart-btn d-flex mb-50">
                  <p>Số lượng</p>
                  <div className="quantity-controls d-flex align-items-center">
                    <button 
                      type="button"
                      className="qty-btn-minus"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <input 
                      type="number" 
                      className="qty-input" 
                      id="qty" 
                      step="1" 
                      min="1" 
                      max="300" 
                      name="quantity" 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    />
                    <button 
                      type="button"
                      className="qty-btn-plus"
                      onClick={() => handleQuantityChange(1)}
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <button 
                  type="submit" 
                  name="addtocart" 
                  value="5" 
                  className={`btn amado-btn ${isAddingToCart ? 'cart-success-animation' : ''}`}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? 'Đã thêm!' : 'Thêm vào giỏ hàng'}
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
