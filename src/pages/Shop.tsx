import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, Brand, Color } from '../types';
import { useCart } from '../contexts/CartContext';

const Shop: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 10, max: 1000 });
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: 'Modern Chair',
      price: 180,
      image: '/img/product-img/product1.jpg',
      hoverImage: '/img/product-img/product2.jpg',
      category: 'Chairs',
      brand: 'Amado',
      rating: 5,
      inStock: true,
    },
    {
      id: 2,
      name: 'Modern Chair',
      price: 180,
      image: '/img/product-img/product2.jpg',
      hoverImage: '/img/product-img/product3.jpg',
      category: 'Chairs',
      brand: 'Amado',
      rating: 5,
      inStock: true,
    },
    {
      id: 3,
      name: 'Modern Chair',
      price: 180,
      image: '/img/product-img/product3.jpg',
      hoverImage: '/img/product-img/product4.jpg',
      category: 'Chairs',
      brand: 'Amado',
      rating: 5,
      inStock: true,
    },
    {
      id: 4,
      name: 'Modern Chair',
      price: 180,
      image: '/img/product-img/product4.jpg',
      hoverImage: '/img/product-img/product5.jpg',
      category: 'Chairs',
      brand: 'Amado',
      rating: 5,
      inStock: true,
    },
    {
      id: 5,
      name: 'Modern Chair',
      price: 180,
      image: '/img/product-img/product5.jpg',
      hoverImage: '/img/product-img/product6.jpg',
      category: 'Chairs',
      brand: 'Amado',
      rating: 5,
      inStock: true,
    },
    {
      id: 6,
      name: 'Modern Chair',
      price: 180,
      image: '/img/product-img/product6.jpg',
      hoverImage: '/img/product-img/product1.jpg',
      category: 'Chairs',
      brand: 'Amado',
      rating: 5,
      inStock: true,
    },
  ];

  const brands: Brand[] = [
    { id: 'amado', name: 'Amado' },
    { id: 'ikea', name: 'Ikea' },
    { id: 'furniture', name: 'Furniture Inc' },
    { id: 'factory', name: 'The factory' },
    { id: 'artdeco', name: 'Artdeco' },
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

  const categories = ['Chairs', 'Beds', 'Accesories', 'Furniture', 'Home Deco', 'Dressings', 'Tables'];

  const handleBrandChange = (brandId: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  const handleColorChange = (colorId: string) => {
    setSelectedColors(prev => 
      prev.includes(colorId) 
        ? prev.filter(id => id !== colorId)
        : [...prev, colorId]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fa fa-star ${i < rating ? '' : 'text-muted'}`} aria-hidden="true"></i>
    ));
  };

  return (
    <>
      <div className="shop_sidebar_area">
        {/* Categories Widget */}
        <div className="widget catagory mb-50">
          <h6 className="widget-title mb-30">Catagories</h6>
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
          <h6 className="widget-title mb-30">Brands</h6>
          <div className="widget-desc">
            {brands.map((brand) => (
              <div key={brand.id} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={brand.id}
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => handleBrandChange(brand.id)}
                />
                <label className="form-check-label" htmlFor={brand.id}>
                  {brand.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Color Widget */}
        <div className="widget color mb-50">
          <h6 className="widget-title mb-30">Color</h6>
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
          <h6 className="widget-title mb-30">Price</h6>
          <div className="widget-desc">
            <div className="slider-range">
              <div 
                data-min="10" 
                data-max="1000" 
                data-unit="$" 
                className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" 
                data-value-min="10" 
                data-value-max="1000" 
                data-label-result=""
              >
                <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0}></span>
                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0}></span>
              </div>
              <div className="range-price">${priceRange.min} - ${priceRange.max}</div>
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
                  <p>Showing 1-8 of 25</p>
                  <div className="view d-flex">
                    <a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="product-sorting d-flex">
                  <div className="sort-by-date d-flex align-items-center mr-15">
                    <p>Sort by</p>
                    <form>
                      <select name="select" id="sortBydate">
                        <option value="value">Date</option>
                        <option value="value">Newest</option>
                        <option value="value">Popular</option>
                      </select>
                    </form>
                  </div>
                  <div className="view-product d-flex align-items-center">
                    <p>View</p>
                    <form>
                      <select name="select" id="viewProduct">
                        <option value="value">12</option>
                        <option value="value">24</option>
                        <option value="value">48</option>
                        <option value="value">96</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} />
                      {product.hoverImage && (
                        <img className="hover-img" src={product.hoverImage} alt={product.name} />
                      )}
                    </Link>
                    <button 
                      className="quick-cart-btn"
                      onClick={() => addToCart(product, 1)}
                      title="Add to Cart"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </div>
                  <div className="product-description d-flex align-items-center justify-content-between">
                    <div className="product-meta-data">
                      <div className="line"></div>
                      <p className="product-price">${product.price}</p>
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
