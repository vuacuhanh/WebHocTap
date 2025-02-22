import React, { useState } from "react";
import { FaEnvelope, FaLock, FaFacebook, FaPhoneSquare } from "react-icons/fa";
import './acc.scss';
import { Link } from "react-router-dom";

const Login = () => {
  // State quản lý email, password và lỗi
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Hàm xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "admin@example.com" && password === "123456") {
      alert("Đăng nhập thành công!");
    } else {
      setErrorMessage("Email hoặc mật khẩu không chính xác.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="wrapper d-flex">
        <div className="banner">
          <div id="carouselExampleIndicators" className="carousel slide d-flex" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://edux.edu.vn/wp-content/uploads/2022/06/ky-nang-hoc-tap-1.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoz9YpPdy51tWakyz0TjyAXp8wC6cjmrZibQ&s" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://media.licdn.com/dms/image/D5612AQGLLykl45TzYA/article-cover_image-shrink_720_1280/0/1685409842713?e=2147483647&v=beta&t=wdPBWpRSiETnfw6A0UaExjhdNsVKSHcOufWTK2FcL0Y" alt="Third slide" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
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
              <li>
                <a href="#">
                  <FaFacebook className="icon-fb icon-login" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaEnvelope className="icon-gmail icon-login" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaPhoneSquare className="icon-phone icon-login" />
                </a>
              </li>
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
