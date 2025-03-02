import React, { useState } from "react";
import { FaEnvelope, FaLock, FaFacebook, FaPhoneSquare } from "react-icons/fa";
import './acc.scss';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Carousel from "./Carousel";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "123456") {
      const userData = { name: "Admin" };
      login(userData);
      navigate("/");
    } else {
      setErrorMessage("Email hoặc mật khẩu không chính xác.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="wrapper d-flex">
        <div className="slide_login">
          <Carousel />
        </div>
        <form className="form-login" onSubmit={handleLogin}>
          <h1>ĐĂNG NHẬP</h1>
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
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Ghi nhớ tôi
            </label>
            <a href="#">Quên mật khẩu?</a>
          </div>
          <button className="sub-log" type="submit">Đăng nhập</button>
          <div className="diff-login">
            <p>Hoặc đăng nhập bằng:</p>
            <ul>
              <li><a href="#"><FaFacebook className="icon-fb icon-login" /></a></li>
              <li><a href="#"><FaEnvelope className="icon-gmail icon-login" /></a></li>
              <li><a href="#"><FaPhoneSquare className="icon-phone icon-login" /></a></li>
            </ul>
          </div>
          <div className="register-link">
            <p>
              Chưa có tài khoản? <Link to="/dang-ky">Đăng ký ngay</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;