import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo.svg";
import phone from "../Assets/Images/phone.svg";
import heart from "../Assets/Images/heart.svg";
import basket from "../Assets/Images/basket.svg";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="container">
        <nav className="site-nav">
          <Link to="/">
            <img className="site-logo" src={logo} alt="site-logo" />
          </Link>

          <div className="site-nav-box">
            <div className="nav-left-box">
              <img className="phone-icon" src={phone} alt="phone icon" />
              <select className="nav-select">
                <option value="none">Выбрать модель телефона</option>
                <option value="1">Iphone</option>
                <option value="2">Samsung</option>
                <option value="3">Huawei</option>
              </select>
            </div>
            <div className="icon-box">
              <Link className="icon" to="/selected">
                <img src={heart} alt="icon heart" />
              </Link>
              <Link className="icon" to="/card">
                <img src={basket} alt="basket icon" widt={20} height={20} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
