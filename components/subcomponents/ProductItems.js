import { useEffect } from "react";
import styles from "../../styles/style.module.scss";
import Image from "next/image";

const ProductItem = ({ product }) => {
  const { image, category, price, title } = product;

  useEffect(() => {
    let el = document.querySelectorAll("img");
    el.forEach((element) => {
      element.parentElement.style.padding = "inherit";
    });
  }, []);

  const {
    latest__product,
    latest__productHeader,
    latest__footer,
    latest__rating,
    latest__productPrice,
    latest__button,
  } = styles;

  return (
    <div className={latest__product}>
      <div className={latest__productHeader}>
        <Image
          className="img"
          src={`${image.slice(0, 0)}${image.slice(1, image.length)}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={latest__footer}>
        <h3>{title}</h3>
        <div className={latest__rating}>
          {[...Array(5).keys()].map((_, idx) => (
            <svg key={idx}>
              <use xlinkHref="/images/sprite.svg#icon-star-full"></use>
            </svg>
          ))}
        </div>
        <div className={latest__productPrice}>
          <h4>{price}</h4>
          <a href="#">
            <button className={latest__button}>Add To Cart</button>
          </a>
        </div>
        <ul>
          <a href="#">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-eye"></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-heart-o"></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-loop2"></use>
            </svg>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default ProductItem;
