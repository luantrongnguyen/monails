import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeFromCart } = useCart();
  const { items: cartItems, totalPrice } = state;

  const delivery = 0; // Free delivery
  const total = totalPrice + delivery;

  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="cart-title mt-50">
              <h2>Shopping Cart</h2>
            </div>

            <div className="cart-table clearfix">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
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
                        <span>${item.product.price}</span>
                      </td>
                      <td className="qty">
                        <div className="qty-btn d-flex">
                          <p>Qty</p>
                          <div className="quantity">
                            <span 
                              className="qty-minus" 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            >
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            </span>
                            <input 
                              type="number" 
                              className="qty-text" 
                              value={item.quantity}
                              onChange={(e) => {
                                const newQuantity = parseInt(e.target.value) || 1;
                                updateQuantity(item.product.id, newQuantity);
                              }}
                            />
                            <span 
                              className="qty-plus" 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h5>Cart Total</h5>
              <ul className="summary-table">
                <li><span>subtotal:</span> <span>${totalPrice.toFixed(2)}</span></li>
                <li><span>delivery:</span> <span>{delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`}</span></li>
                <li><span>total:</span> <span>${total.toFixed(2)}</span></li>
              </ul>
              <div className="cart-btn mt-100">
                <Link to="/checkout" className="btn amado-btn w-100">
                  Checkout
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