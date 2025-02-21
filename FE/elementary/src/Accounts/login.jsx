import React, { useState } from "react";
import { FaEnvelope, FaLock, FaFacebook } from "react-icons/fa"; // Import icons

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
      <div className="wrapper">
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
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
            </ul>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
