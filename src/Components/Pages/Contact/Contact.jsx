import addres from "../../Assets/Images/adress.jpg";
import location from "../../Assets/Images/location.svg";
import telephone from "../../Assets/Images/telephone.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container contact-box">
        <div className="adress-box">
          <h2 className="adrees-heading">Наш офис</h2>
          <img className="location-img" src={addres} alt="" />
          <div className="location-wrapper">
            <div>
              <img className="location-image" src={location} alt="" />
            </div>
            <div className="location-adress">
              <p className="location-desc">Аксай-3а, 62ф, Алматы, Казахстан</p>
              <p className="location-home">3 этаж 35 кабинет</p>
            </div>
          </div>
        </div>
        <div className="telephone-wrapper">
          <img src={telephone} alt="" />
          <p className="telephone">+7 777 777 77 77</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
