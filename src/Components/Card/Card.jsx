import "./index.css";
import Button from "../Button/Button.jsx";
import ImageMob from "../../images/image-product-mobile.jpg";
import ImageDesk from "../../images/image-product-desktop.jpg";

const Card = () => {
  return (
    <div className="Card">
      <div>
        <picture>
          <source media="(min-width: 1440px)" srcSet={ImageDesk} />
          <img
            src={ImageMob}
            alt="Photo of a bottle of Gabrielle Parfum"
            style={{ width: "100%" }}
          />
        </picture>
      </div>
      <div className="Card__body">
        <p className="Card__body-subtitle">PERFUME</p>
        <h1 className="Card__body-title">Gabrielle Essence Eau De Parfum</h1>
        <p className="Card__body-description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer Creator for the house of CHANEL.
        </p>
        <div className="Card__body-price">
          <p className="Card__body-new-price">$149.99</p>
          <del>
            <p className="Card__body-old-price">$169.99</p>
          </del>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Card;
