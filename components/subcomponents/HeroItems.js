import Image from "next/image";
import styles from "../../styles/style.module.scss";
const HeroItems = ({ glideSlide, banner }) => {
  const { hero__center, hero__left, hero__right, hero__button } = styles;
  return (
    <li className={glideSlide}>
      <div className={hero__center}>
        <div className={hero__left}>
          <span>New Inspiration 2020</span>
          <h1>PHONE MADE FOR YOU!</h1>
          <p>Trending from mobile and headphone style collection</p>
          <a href="#">
            <button className={hero__button}>SHOP NOW</button>
          </a>
        </div>
        <div className={hero__right}>
          <Image src={banner} width={485} height={651} />
        </div>
      </div>
    </li>
  );
};

export default HeroItems;
