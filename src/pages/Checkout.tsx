import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutForm, PaymentMethod } from '../types';

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'usa',
    address: '',
    city: '',
    zipCode: '',
    phoneNumber: '',
    comment: '',
    createAccount: false,
    shipToDifferentAddress: false,
  });

  const [paymentMethod, setPaymentMethod] = useState<string>('cod');

  const paymentMethods: PaymentMethod[] = [
    { type: 'cod', label: 'Cash on Delivery' },
    { type: 'paypal', label: 'Paypal' },
  ];

  const countries = [
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ger', label: 'Germany' },
    { value: 'fra', label: 'France' },
    { value: 'ind', label: 'India' },
    { value: 'aus', label: 'Australia' },
    { value: 'bra', label: 'Brazil' },
    { value: 'cana', label: 'Canada' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout form submitted:', formData);
    console.log('Payment method:', paymentMethod);
    // Handle checkout logic here
  };

  const subtotal = 140.00;
  const delivery = 0;
  const total = subtotal + delivery;

  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">
              <div className="cart-title">
                <h2>Checkout</h2>
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
                      placeholder="First Name"
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
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
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
                    <select
                      className="w-100"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                    >
                      {countries.map(country => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Town"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Phone No"
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
                      placeholder="Leave a comment about your order"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <div className="custom-control custom-checkbox d-block mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="createAccount"
                        name="createAccount"
                        checked={formData.createAccount}
                        onChange={handleInputChange}
                      />
                      <label className="custom-control-label" htmlFor="createAccount">
                        Create an account
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox d-block">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="shipToDifferentAddress"
                        name="shipToDifferentAddress"
                        checked={formData.shipToDifferentAddress}
                        onChange={handleInputChange}
                      />
                      <label className="custom-control-label" htmlFor="shipToDifferentAddress">
                        Ship to a different address
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h5>Cart Total</h5>
              <ul className="summary-table">
                <li><span>subtotal:</span> <span>${subtotal.toFixed(2)}</span></li>
                <li><span>delivery:</span> <span>{delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`}</span></li>
                <li><span>total:</span> <span>${total.toFixed(2)}</span></li>
              </ul>

              <div className="payment-method">
                {paymentMethods.map((method) => (
                  <div key={method.type} className="custom-control custom-checkbox mr-sm-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id={method.type}
                      name="paymentMethod"
                      value={method.type}
                      checked={paymentMethod === method.type}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="custom-control-label" htmlFor={method.type}>
                      {method.label}
                      {method.type === 'paypal' && (
                        <img className="ml-15" src="/img/core-img/paypal.png" alt="PayPal" />
                      )}
                    </label>
                  </div>
                ))}
              </div>

              <div className="cart-btn mt-100">
                <button 
                  type="submit" 
                  className="btn amado-btn w-100"
                  onClick={handleSubmit}
                >
                  Complete Checkout
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
