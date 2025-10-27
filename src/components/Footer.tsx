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
                <h2>Đăng ký nhận <span>ưu đãi 25%</span></h2>
                <p>Nhận thông tin về các sản phẩm nail box mới nhất và ưu đãi đặc biệt từ Mơ Nails.</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="newsletter-form mb-100">
                <form>
                  <input type="email" name="email" className="nl-email" placeholder="Email của bạn" />
                  <input type="submit" value="Đăng ký" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer className="footer_area clearfix">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-12 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo mb-30">
                  <Link to="/">
                    <img src="/img/core-img/logo2.png" alt="Mơ Nails Logo" />
                  </Link>
                </div>
                <p className="footer-description">
                  Mơ Nails - Thế giới nails box cao cấp với thiết kế đẹp mắt và chất lượng tốt nhất. 
                  Chúng tôi mang đến cho bạn những bộ nail box sang trọng và đa dạng màu sắc.
                </p>
                <div className="footer-contact-info">
                  <div className="contact-item">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>89, Đường Số 1, Phường Thông Tây Hội, Gò Vấp, TP.HCM</span>
                  </div>
                  <div className="contact-item">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>0522.032.523</span>
                  </div>
                  <div className="contact-item">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>070.248.1111</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-lg-2 mb-50">
              <div className="footer-widget">
                <h6 className="widget-title">Liên kết nhanh</h6>
                <ul className="footer-links">
                  <li><Link to="/">Trang chủ</Link></li>
                  <li><Link to="/shop">Cửa hàng</Link></li>
                  <li><Link to="/cart">Giỏ hàng</Link></li>
                  <li><Link to="/checkout">Thanh toán</Link></li>
                </ul>
              </div>
            </div>

            {/* Categories */}
            <div className="col-12 col-lg-2 mb-50">
              <div className="footer-widget">
                <h6 className="widget-title">Danh mục</h6>
                <ul className="footer-links">
                  <li><Link to="/shop">Nail Box</Link></li>
                  <li><Link to="/shop">Sản phẩm mới</Link></li>
                  <li><Link to="/shop">Bán chạy</Link></li>
                  <li><Link to="/shop">Ưu đãi</Link></li>
                </ul>
              </div>
            </div>

            {/* Social & Support */}
            <div className="col-12 col-lg-4 mb-50">
              <div className="footer-widget">
                <h6 className="widget-title">Kết nối với chúng tôi</h6>
                <div className="social-links mb-30">
                  <a href="#" className="social-link facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#" className="social-link instagram">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#" className="social-link tiktok">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-label="TikTok" role="img" viewBox="0 0 512 512" width="20" height="20">
                      <rect rx="15%" height="512" width="512" fill="#ffffff"/>
                      <defs>
                        <path id="t" d="M219 200a117 117 0 1 0 101 115v-128a150 150 0 0 0 88 28v-63a88 88 0 0 1-88-88h-64v252a54 54 0 1 1-37-51z" style={{mixBlendMode:"multiply"}}/>
                      </defs>
                      <use href="#t" fill="#f05" x="18" y="15"/>
                      <use href="#t" fill="#0ee"/>
                    </svg>
                  </a>
                </div>
                <div className="support-info">
                  <h6 className="widget-title">Hỗ trợ khách hàng</h6>
                  <p className="support-text">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    Giờ làm việc: 9:00 - 21:00 (T2 - CN)
                  </p>
                  <p className="support-text">
                    <i className="fa fa-truck" aria-hidden="true"></i>
                    Miễn phí vận chuyển đơn hàng từ 200.000đ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <p className="copywrite">
                      Copyright &copy;{currentYear} Mơ Nails. All rights reserved.
                    </p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="payment-methods">
                      <span className="payment-text">Phương thức thanh toán:</span>
                      <div className="payment-icons">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                        <i className="fa fa-cc-visa" aria-hidden="true"></i>
                        <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
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
