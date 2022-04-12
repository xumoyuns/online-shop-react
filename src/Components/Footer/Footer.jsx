import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo.svg";
import vk from "../Assets/Images/vk.svg";
import instagram from "../Assets/Images/instagram.svg";
import whatsapp from "../Assets/Images/whatsapp.svg";
import telegram from "../Assets/Images/telegram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer container">
        <div className="footer-wrapper">
          <Link to="/">
            <img src={logo} alt="footer logo" />
          </Link>
          <div className="footer-link-wrapper">
            <div className="footer-item">
              <Link className="footer-link" to="/selected">
                Избранное
              </Link>
              <Link className="footer-link" to="/card">
                Корзина
              </Link>
              <NavLink className="footer-link" to="/contact">
                Контакты
              </NavLink>
            </div>
            <div className="footer-item">
              <Link className="footer-link" to="/service-requirements">
                Условия сервиса
              </Link>
              <select className="footer-select">
                <option value="none">Til</option>
                <option value="1">UZ</option>
                <option value="2">Eng</option>
                <option value="3">Ru</option>
              </select>
            </div>
          </div>
          <div className="social-network">
            <img className="footer-icon" src={vk} alt="" />
            <img className="footer-icon" src={instagram} alt="" />
            <img className="footer-icon" src={telegram} alt="" />
            <img className="footer-icon" src={whatsapp} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
