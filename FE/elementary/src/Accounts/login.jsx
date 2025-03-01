import React, { useState } from "react";
import { FaEnvelope, FaLock, FaFacebook, FaPhoneSquare } from "react-icons/fa";
import './acc.scss';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Lấy hàm login từ context

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "admin@example.com" && password === "123456") {
      // Giả lập thông tin người dùng sau khi đăng nhập thành công
      const userData = { name: "Admin" }; // Thay bằng thông tin thực tế nếu có API
      login(userData); // Lưu thông tin người dùng vào context
      navigate("/"); // Điều hướng đến trang chủ
    } else {
      setErrorMessage("Email hoặc mật khẩu không chính xác.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="wrapper d-flex">
        <div className="banner">
          {/* Giữ nguyên phần carousel */}
        </div>

        <form className="form-login" onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className="sub-log" type="submit">Login</button>
          <div className="diff-login">
            <ul>
              <li><a href="#"><FaFacebook className="icon-fb icon-login" /></a></li>
              <li><a href="#"><FaEnvelope className="icon-gmail icon-login" /></a></li>
              <li><a href="#"><FaPhoneSquare className="icon-phone icon-login" /></a></li>
            </ul>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/dang-ky">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;