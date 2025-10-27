import React from 'react';
import { CartItem } from '../types';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (change: number) => {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
      onUpdateQuantity(item.product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    onRemove(item.product.id);
  };

  return (
    <tr>
      <td className="cart_product_img">
        <a href={`/product/${item.product.id}`}>
          <img src={item.product.image} alt={item.product.name} />
        </a>
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
              onClick={() => handleQuantityChange(-1)}
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </span>
            <input 
              type="number" 
              className="qty-text" 
              value={item.quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value) || 1;
                onUpdateQuantity(item.product.id, newQuantity);
              }}
            />
            <span 
              className="qty-plus" 
              onClick={() => handleQuantityChange(1)}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </td>
      <td>
        <button 
          className="btn btn-danger btn-sm"
          onClick={handleRemove}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItemRow;
