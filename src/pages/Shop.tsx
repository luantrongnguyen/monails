import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, Brand, Color } from '../types';
import { useCart } from '../contexts/CartContext';

const Shop: React.FC = () => {
  const [selectedBrands] = useState<string[]>(['monails']);
  const [priceRange, setPriceRange] = useState({ min: 50000, max: 100000 });
  const [addingToCart, setAddingToCart] = useState<number | null>(null);
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: 'Nail Box 1',
      price: 69000,
      image: '/img/product-img/z7159612792004_ff71b03a9c8bf65ed7167286319f3d8d.jpg',
      hoverImage: '/img/product-img/z7159612794262_2380dfa3223fefa4c9a1407d37bace9e.jpg',
      category: 'Nail Box',
      brand: 'Mơ Nails',
      rating: 5,
      inStock: true,
    },
    {
      id: 2,
      name: 'Nail Box 2',
      price: 79000,
      image: '/img/product-img/z7159612805680_a58703fa58442c47920074e37394a7b8.jpg',
      hoverImage: '/img/product-img/z7159612808415_0a370ffaba7d1f90011f91ce54f743de.jpg',
      category: 'Nail Box',
      brand: 'Mơ Nails',
      rating: 5,
      inStock: true,
    },
    {
      id: 3,
      name: 'Nail Box 3',
      price: 59000,
      image: '/img/product-img/z7159612822258_cf8b4352f471689c52a9fc3a2f9d0eac.jpg',
      hoverImage: '/img/product-img/z7159612826644_6d3dd1b4b3393a16f3d3e35d1a642dd8.jpg',
      category: 'Nail Box',
      brand: 'Mơ Nails',
      rating: 5,
      inStock: true,
    },
    {
      id: 4,
      name: 'Nail Box 4',
      price: 69000,
      image: '/img/product-img/z7159612833753_a1139047b43deee66a16e46647d2b4e8.jpg',
      hoverImage: '/img/product-img/z7159612844937_c6b50e9875cca725a7d171148eae3d3c.jpg',
      category: 'Nail Box',
      brand: 'Mơ Nails',
      rating: 5,
      inStock: true,
    },
    {
      id: 5,
      name: 'Nail Box 5',
      price: 79000,
      image: '/img/product-img/z7159612848482_70f83796011d1bf38de13b8def02f157.jpg',
      hoverImage: '/img/product-img/z7159612851370_f2a5c16e47034bf31bed281c7f938638.jpg',
      category: 'Nail Box',
      brand: 'Mơ Nails',
      rating: 5,
      inStock: true,
    },
    {
      id: 6,
      name: 'Nail Box 6',
      price: 59000,
      image: '/img/product-img/z7159612862218_5b05292c63f1e58c1b2d1882cb735c4c.jpg',
      hoverImage: '/img/product-img/z7159612871440_294cc9054c5d4a827706afe431758e01.jpg',
      category: 'Nail Box',
      brand: 'Mơ Nails',
      rating: 5,
      inStock: true,
    },
    {
      id: 7,
      name: 'Nail Box 7',
      price: 69000,
      image: '/img/product-img/z7159612874839_9da0136a3cba3217dda731f670f95d6d.jpg',
      hoverImage: '/img/product-img/z7159612882359_f0c85bd3843d40f6c5de9a196c1892bd.jpg',
      category: 'Nail Box',
      brand: 'Mơ Nails',
      rating: 5,
      inStock: true,
    },
    {
      id: 8,
      name: 'Nail Box 8',
      price: 79000,
      image: '/img/product-img/z7159612886036_c81b168e2b198cc54225831cddee5c12.jpg',
      hoverImage: '/img/product-img/z7159612900641_4530baef02d721bbb4e7cfb33d5f211c.jpg',
      category: 'Nail Box',
      brand: 'Mơ Nails',
      rating: 5,
      inStock: true,
    },
  ];

  const brands: Brand[] = [
    { id: 'monails', name: 'Mơ Nails' },
  ];

  const colors: Color[] = [
    { id: 'color1', name: 'Color 1', value: '#color1' },
    { id: 'color2', name: 'Color 2', value: '#color2' },
    { id: 'color3', name: 'Color 3', value: '#color3' },
    { id: 'color4', name: 'Color 4', value: '#color4' },
    { id: 'color5', name: 'Color 5', value: '#color5' },
    { id: 'color6', name: 'Color 6', value: '#color6' },
    { id: 'color7', name: 'Color 7', value: '#color7' },
    { id: 'color8', name: 'Color 8', value: '#color8' },
  ];

  const categories = ['Nails Box'];

  const handleAddToCart = (product: Product) => {
    setAddingToCart(product.id);
    addToCart(product, 1);
    
    // Reset animation after 600ms
    setTimeout(() => {
      setAddingToCart(null);
    }, 600);
  };

  const handleColorChange = (colorId: string) => {
    // Color filtering logic can be implemented here if needed
    console.log('Color changed:', colorId);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fa fa-star ${i < rating ? '' : 'text-muted'}`} aria-hidden="true"></i>
    ));
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Filter by price range
    const priceInRange = product.price >= priceRange.min && product.price <= priceRange.max;
    
    // Filter by brands - since all products are "Mơ Nails" and selectedBrands contains "monails"
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes('monails');
    
    return priceInRange && brandMatch;
  });

  return (
    <>
      <div className="shop_sidebar_area">
        {/* Categories Widget */}
        <div className="widget catagory mb-50">
          <h6 className="widget-title mb-30">Danh mục</h6>
          <div className="catagories-menu">
            <ul>
              {categories.map((category, index) => (
                <li key={index} className={index === 0 ? 'active' : ''}>
                  <a href="#">{category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brands Widget */}
        <div className="widget brands mb-50">
          <h6 className="widget-title mb-30">Thương hiệu</h6>
          <div className="widget-desc">
            {brands.map((brand) => (
              <div key={brand.id} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={brand.id}
                  checked={true}
                  disabled={true}
                />
                <label className="form-check-label" htmlFor={brand.id} style={{ color: '#F4D03F', fontWeight: 'bold' }}>
                  {brand.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Color Widget */}
        <div className="widget color mb-50">
          <h6 className="widget-title mb-30">Màu sắc</h6>
          <div className="widget-desc">
            <ul className="d-flex">
              {colors.map((color) => (
                <li key={color.id}>
                  <a 
                    href="#" 
                    className={color.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorChange(color.id);
                    }}
                  ></a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Widget */}
        <div className="widget price mb-50">
          <h6 className="widget-title mb-30">Giá</h6>
          <div className="widget-desc">
            <div className="slider-range">
              <div className="range-slider-container">
                <input 
                  type="range" 
                  min="50000" 
                  max="100000" 
                  step="1000"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) }))}
                  className="range-slider range-slider-min"
                />
                <input 
                  type="range" 
                  min="50000" 
                  max="100000" 
                  step="1000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
                  className="range-slider range-slider-max"
                />
                <div className="range-track"></div>
              </div>
              <div className="range-price">
                {priceRange.min.toLocaleString('vi-VN')} đ - {priceRange.max.toLocaleString('vi-VN')} đ
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="amado_product_area section-padding-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                <div className="total-products">
                  <p>Showing 1-{filteredProducts.length} of {filteredProducts.length}</p>
                  <div className="view d-flex">
                    <a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="product-sorting d-flex">
                  {/* Filters removed */}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-6 col-sm-6 col-md-4 col-xl-4">
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} />
                      {product.hoverImage && (
                        <img className="hover-img" src={product.hoverImage} alt={product.name} />
                      )}
                    </Link>
                    <button 
                      className={`quick-cart-btn ${addingToCart === product.id ? 'cart-success-animation' : ''}`}
                      onClick={() => handleAddToCart(product)}
                      title="Add to Cart"
                      disabled={addingToCart === product.id}
                    >
                      <i className={`fa fa-shopping-cart ${addingToCart === product.id ? 'cart-icon-bounce' : ''}`}></i>
                    </button>
                  </div>
                  <div className="product-description d-flex align-items-center justify-content-between">
                    <div className="product-meta-data">
                      <div className="line"></div>
                      <p className="product-price">{product.price.toLocaleString('vi-VN')} đ</p>
                      <Link to={`/product/${product.id}`}>
                        <h6>{product.name}</h6>
                      </Link>
                    </div>
                    <div className="ratings-cart text-right">
                      <div className="ratings">
                        {renderStars(product.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12">
              <nav aria-label="navigation">
                <ul className="pagination justify-content-end mt-50">
                  <li className="page-item active"><a className="page-link" href="#">01.</a></li>
                  <li className="page-item"><a className="page-link" href="#">02.</a></li>
                  <li className="page-item"><a className="page-link" href="#">03.</a></li>
                  <li className="page-item"><a className="page-link" href="#">04.</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
