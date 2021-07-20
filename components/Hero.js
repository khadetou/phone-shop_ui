import styles from "../styles/style.module.scss";
import { useEffect } from "react";
import Glide from "@glidejs/glide";

import HeroItems from "./subcomponents/HeroItems";

const Hero = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      //   autoplay: 3000,
      hoverpause: true,
      rewind: true,
      preView: 1,
      animationDuration: 800,
      animationTimingFunc: "linear",
    }).mount();
  });
  const {
    hero,
    hero__slides,
    hero__bullet,
    hero__arrow,
    hero__arrows,
    hero__arrowLeft,
    hero__arrowRight,
  } = styles;
  const banners = ["/images/banner_01.png", "/images/banner_02.png"];

  return (
    <div className={hero}>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className={`glide__slides ${hero__slides}`}>
            {banners.map((banner, idx) => (
              <HeroItems key={idx} glideSlide="glide__slide" banner={banner} />
            ))}
          </ul>
        </div>

        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button
            className={`glide__bullet ${hero__bullet}`}
            data-glide-dir="=0"
          ></button>
          <button
            className={`glide__bullet ${hero__bullet}`}
            data-glide-dir="=1"
          ></button>
        </div>

        <div
          className={`glide__arrows ${hero__arrows}`}
          data-glide-el="controls"
        >
          <button
            className={`glide__arrow glide__arrow--left ${hero__arrow} ${hero__arrowLeft}`}
            data-glide-dir="<"
          >
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-arrow-left2"></use>
            </svg>
          </button>
          <button
            className={`glide__arrow glide__arrow--right ${hero__arrow} ${hero__arrowRight}`}
            data-glide-dir=">"
          >
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-arrow-right2"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
