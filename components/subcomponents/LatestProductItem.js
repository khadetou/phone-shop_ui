import { useEffect } from "react";
import styles from "../../styles/style.module.scss";
import Image from "next/image";
const LatestProductItem = ({ image: { img: img } }) => {
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
    <li className="glide__slide">
      <div className={latest__product}>
        <div className={latest__productHeader}>
          <Image className="img" src={img} layout="fill" objectFit="contain" />
        </div>
        <div className={latest__footer}>
          <h3>Apple Iphone 11</h3>
          <div className={latest__rating}>
            {[...Array(5).keys()].map((_, idx) => (
              <svg key={idx}>
                <use xlinkHref="/images/sprite.svg#icon-star-full"></use>
              </svg>
            ))}
          </div>
          <div className={latest__productPrice}>
            <h4>$750</h4>
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
    </li>
  );
};

export default LatestProductItem;
