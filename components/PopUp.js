import styles from "../styles/style.module.scss";
import Image from "next/image";
import { useState } from "react";

const PopUp = () => {
  const [close, setClose] = useState(false);
  const {
    popup,
    hide__popup,
    popup__content,
    popup__close,
    popup__left,
    popup__imgContainer,
    popup__right,
    popup__rightContent,
    popup__form,
    popup__img,
  } = styles;
  return (
    <div className={close ? `${popup} ${hide__popup}` : `${popup}`}>
      <div className={popup__content}>
        <div className={popup__close} onClick={() => setClose(true)}>
          <svg>
            <use xlinkHref="/images/sprite.svg#icon-cross"></use>
          </svg>
        </div>
        <div className={popup__left}>
          <div className={popup__imgContainer}>
            <Image
              src="/images/popup.jpg"
              width={2052}
              height={1370}
              className={popup__img}
              objectFit="cover"
            />
          </div>
        </div>

        <div className={popup__right}>
          <div className={popup__rightContent}>
            <h1>
              Get Discount <span>30%</span> Off
            </h1>
            <p>
              Sign up to our newletter and save 30% for your next purchase. No
              spam, we promise!
            </p>
            <form action="#">
              <input
                type="email"
                className={popup__form}
                placeholder="Enter your email ..."
              />
              <a href="#">Subscribe</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
