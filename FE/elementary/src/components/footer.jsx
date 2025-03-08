import React from 'react';
import './Header.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          {/* Cột 1: Thông tin công ty */}
          <div className="footer-col col-3">
            <h3>WebHocTap</h3>
            <p>
              Nền tảng học tập trực tuyến hàng đầu, cung cấp các khóa học đa dạng cho mọi lứa tuổi.
            </p>
            <p>© {new Date().getFullYear()} WebHocTap. All rights reserved.</p>
          </div>
          {/* Cột 2: Liên kết nhanh */}
          <div className="footer-col col-3">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><a href="/about">Về chúng tôi</a></li>
              <li><a href="/courses">Khóa học</a></li>
              <li><a href="/contact">Liên hệ</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          {/* Cột 3: Liên hệ */}
          <div className="footer-col col-3">
            <h3>Liên hệ</h3>
            <ul>
              <li>Email: <a href="mailto:support@webhoctap.com">support@webhoctap.com</a></li>
              <li>Điện thoại: <a href="tel:+84123456789">+84 123 456 789</a></li>
              <li>Địa chỉ: 123 Đường Học Tập, TP. HCM</li>
            </ul>
          </div>
          {/* Cột 4: Mạng xã hội */}
          <div className="footer-col col-3">
            <h3>Theo dõi chúng tôi</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Phần creater nằm ngoài container để luôn ở dưới cùng */}
      <div className="creater">
        <span className="creater_by_me">THÁI HOÀNG QUÂN</span>
      </div>
    </footer>
  );
};

export default Footer;