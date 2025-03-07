import "./Header.scss";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menus = [
    { name: "Trang chủ", path: "/", layout: "MasterLayout" },
    { name: "Giới Thiệu", path: "/about", layout: "MasterLayout" },
    { name: "Thông báo", path: "/notification", layout: "MasterLayout" },
    { name: "Tin tức", path: "/new" },
    {
      name: "Danh Sách Môn Học",
      path: "#",
      isDropdown: true,
      submenus: [
        {
          name: "Lớp 1",
          path: "#",
          isDropdown: true,
          submenus: [
            { name: "Tiếng việt 1", path: "/deep-dropdown1" },
            { name: "Toán 1", path: "/deep-dropdown2" },
            { name: "Tiếng Anh 1", path: "/deep-dropdown2" },
          ],
        },
      ],
    },
    { name: "Liên Hệ", path: "/lien-he" },
  ];

  const renderMenu = (menu) => {
    if (menu.isDropdown) {
      return (
        <li key={menu.name} className="dropdown">
          <a href={menu.path} onClick={(e) => e.preventDefault()}>
            <span>{menu.name}</span>
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            {menu.submenus?.map((submenu) => renderMenu(submenu))}
          </ul>
        </li>
      );
    }
    return (
      <li
        key={menu.name}
        className={`menu-item ${activeMenu === menu.name ? "active" : ""}`}
        onClick={() => setActiveMenu(menu.name)}
      >
        <Link to={menu.path}>{menu.name}</Link>
      </li>
    );
  };

  return (
    <header id="header" className="header container-fluid flex-column sticky-top">
      <div className="d-flex flex-column align-items-center justify-between">
        {/* Top Section */}
        <div className="top-section d-flex justify-content-end">
          <ul className="d-flex list-unstyled align-items-center">
            {user ? (
              <li className="dropdown">
                <span className="nav-link">
                  <i className="bi bi-person-bounding-box"></i> {user.name}
                </span>
                <span className="dropdown-bridge"></span> {/* Phần tử cầu nối */}
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Cài đặt
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
            <>
        <li>
          <Link to="/dang-nhap" className="nav-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/dang-ky" className="nav-link">
            Register
          </Link>
        </li>
      </>
    )}
  </ul>
        </div>

        {/* Middle Section */}
        <div className="middle-section">
          <Link to="/" className="logo d-flex align-items-center">
            <h1 className="sitename">
              <span>HI</span>QuanNe
            </h1>
          </Link>
          <div className="search-bar d-flex align-items-center">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Tìm kiếm ..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="bi bi-search search-icon"></i>
          </div>
          <div className="shopping-cart" onClick={() => navigate("/shoppingCart")}>
            <i className="bi bi-robot cart-icon"></i>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>{menus?.map((menu) => renderMenu(menu))}</ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;