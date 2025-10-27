import React, { useState } from 'react';
import { CheckoutForm } from '../types';

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    comment: '',
  });

  const [paymentMethod] = useState<string>('cod');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout form submitted:', formData);
    console.log('Payment method:', paymentMethod);
    // Handle checkout logic here
  };

  const subtotal = 140.00;
  const delivery: number = 0;
  const total = subtotal + delivery;

  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">
              <div className="cart-title">
                <h2>Thanh toán</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Tên"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Họ"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Địa chỉ"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Số điện thoại"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name="comment"
                      className="form-control w-100"
                      id="comment"
                      cols={30}
                      rows={10}
                      value={formData.comment}
                      onChange={handleInputChange}
                      placeholder="Ghi chú về đơn hàng"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h5>Tổng giỏ hàng</h5>
              <ul className="summary-table">
                <li><span>Tạm tính:</span> <span>{subtotal.toLocaleString('vi-VN')} đ</span></li>
                <li><span>Phí vận chuyển:</span> <span>{delivery === 0 ? 'Miễn phí' : `${delivery.toLocaleString('vi-VN')} đ`}</span></li>
                <li><span>Tổng cộng:</span> <span>{total.toLocaleString('vi-VN')} đ</span></li>
              </ul>

              <div className="payment-method">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={true}
                    disabled={true}
                  />
                  <label className="custom-control-label" htmlFor="cod">
                    Thanh toán khi nhận hàng
                  </label>
                </div>
              </div>

              <div className="cart-btn mt-100">
                <button 
                  type="submit" 
                  className="btn amado-btn w-100"
                  onClick={handleSubmit}
                >
                  Hoàn thành thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
