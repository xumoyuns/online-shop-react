import { Link } from "react-router-dom";
import basketCard from "../../Assets/Images/baskett.svg";

import "./Card.css";
const Card = () => {
  return (
    <>
      <div className="container card-box">
        <div className="card-wrapper">
          <img className="basket-img" src={basketCard} alt="" />
          <h1 className="card-heading"> Корзина пуста</h1>
          <p className="card-desc">Но это никогда не поздно исправить :)</p>
          <Link className="product-btn" to="/">
            В каталог товаров
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
