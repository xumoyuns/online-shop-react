import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import star from "../Assets/Images/star.svg";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/phone")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [airphone, setAirphone] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/airphone")
      .then((res) => res.json())
      .then((airphone) => setAirphone(airphone));
  }, []);
  const [wireless, setWireless] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/wireless")
      .then((res) => res.json())
      .then((wireless) => setWireless(wireless));
  }, []);
  // console.log(data);
  return (
    <>
      <div className="products-wrapper container">
        <h2 className="product-heading">Tелефоны</h2>

        <ul className="phone-list">
          {data?.map((item) => {
            return (
              <li className="phone-list-items" key={item.id}>
                <Link className="phone-link" to="/singleproduct">
                  <img
                    className="phone-img"
                    src={item.productImage}
                    alt=""
                    width={330}
                    height={330}
                  />
                  <p className="phone-title">{item.productTitle}</p>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="airphone container">
          <h2 className="product-heading">Наушники</h2>
          <ul className="airphone-list">
            {airphone?.map((item) => {
              return (
                <li className="airphone-list-items" key={item.id}>
                  <Link className="airphone-link" to="/singleproduct">
                    <img
                      className="airphone-img"
                      src={item.productImage}
                      alt=""
                      width={220}
                      height={180}
                    />
                    <div className="airphone-text-box">
                      <p className="airphone-title">{item.title}</p>
                      <p className="price">{item.price}$</p>
                    </div>
                    <p className="raiting">
                      <img className="star" src={star} alt="star" />
                      {item.rating}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="airphone container">
          <h2 className="product-heading">Проводной Наушники</h2>
          <ul className="airphone-list">
            {wireless?.map((item) => {
              return (
                <li className="airphone-list-items" key={item.id}>
                  <Link className="airphone-link" to="/singleproduct">
                    <img
                      className="airphone-img"
                      src={item.productImage}
                      alt=""
                      width={220}
                      height={180}
                    />
                    <div className="airphone-text-box">
                      <p className="airphone-title">{item.title}</p>
                      <p className="price">{item.price}$</p>
                    </div>
                    <p className="raiting">
                      <img className="star" src={star} alt="star" />
                      {item.rating}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
