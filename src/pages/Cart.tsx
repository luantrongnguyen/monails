import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeFromCart } = useCart();
  const { items: cartItems, totalPrice } = state;

  const delivery: number = 0; // Free delivery
  const total = totalPrice + delivery;

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="cart-title mt-50">
              <h2>Giỏ hàng</h2>
            </div>

            <div className="cart-table clearfix">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th></th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.product.id}>
                      <td className="cart_product_img">
                        <Link to={`/product/${item.product.id}`}>
                          <img src={item.product.image} alt={item.product.name} />
                        </Link>
                      </td>
                      <td className="cart_product_desc">
                        <h5>{item.product.name}</h5>
                      </td>
                      <td className="price">
                        <span>{item.product.price.toLocaleString('vi-VN')} đ</span>
                      </td>
                      <td className="qty">
                        <div className="quantity-controls d-flex align-items-center">
                          <button 
                            className="qty-btn-minus"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input 
                            type="number" 
                            className="qty-input" 
                            value={item.quantity}
                            min="1"
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value) || 1;
                              handleQuantityChange(item.product.id, newQuantity);
                            }}
                          />
                          <button 
                            className="qty-btn-plus"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h5>Tổng giỏ hàng</h5>
              <ul className="summary-table">
                <li><span>Tạm tính:</span> <span>{totalPrice.toLocaleString('vi-VN')} đ</span></li>
                <li><span>Phí vận chuyển:</span> <span>{delivery === 0 ? 'Miễn phí' : `${delivery.toLocaleString('vi-VN')} đ`}</span></li>
                <li><span>Tổng cộng:</span> <span>{total.toLocaleString('vi-VN')} đ</span></li>
              </ul>
              <div className="cart-btn mt-100">
                <Link to="/checkout" className="btn amado-btn w-100">
                  Thanh toán
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;