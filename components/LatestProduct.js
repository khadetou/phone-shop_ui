import { useEffect, useRef } from "react";
import styles from "../styles/style.module.scss";
import LatestProductItem from "./subcomponents/LatestProductItem";
import Glide from "@glidejs/glide";

const LatestProduct = () => {
  const glide1 = useRef();
  console.log(glide1.current);
  useEffect(() => {
    new Glide(glide1.current, {
      type: "carousel",
      startAt: 0,
      hoverpause: true,
      rewind: true,
      perView: 4,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
      breakpoints: {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
    }).mount();
  });
  const {
    sectionTitles,
    titleContainer,
    titleContainer__primaryTitle,
    sectionActive,
    sectionDot,
    container,
    latest,
    latest__center,
    latest__arrows,
    latest__arrow,
    latest__arrowLeft,
    latest__arrowRight,
  } = styles;
  const images = [
    { img: "/images/products/iPhone/iphone1.jpeg" },
    { img: "/images/products/headphone/headphone10.jpeg" },
    { img: "/images/products/iPhone/iphone3.jpeg" },
    { img: "/images/products/sumsung/samsung2.jpeg" },
    { img: "/images/products/headphone/headphone4.jpeg" },
    { img: "/images/products/sumsung/samsung5.jpeg" },
    { img: "/images/products/headphone/headphone5.jpeg" },
    { img: "/images/products/sumsung/samsung2.jpeg" },
    { img: "/images/products/iPhone/iphone2.jpeg" },
  ];
  return (
    <section className={latest}>
      <div className={titleContainer}>
        <div
          className={`${sectionTitles} ${sectionActive}`}
          data-id="Latest Product"
        >
          <span className={sectionDot}></span>
          <h1 className={titleContainer__primaryTitle}>Latest Products</h1>
        </div>
      </div>

      <div className={container}>
        <div className="glide" ref={glide1}>
          <div className="glide__track" data-glide-el="track">
            <ul className={`glide__slides ${latest__center}`}>
              {images.map((image, idx) => (
                <LatestProductItem image={image} key={idx} />
              ))}
            </ul>
          </div>

          <div
            className={`glide__arrows ${latest__arrows}`}
            data-glide-el="controls"
          >
            <button
              className={`glide__arrow glide__arrow--left ${latest__arrow} ${latest__arrowLeft}`}
              data-glide-dir="<"
            >
              <svg>
                <use xlinkHref="/images/sprite.svg#icon-arrow-left2"></use>
              </svg>
            </button>
            <button
              className={`glide__arrow glide__arrow--right ${latest__arrow} ${latest__arrowRight}`}
              data-glide-dir=">"
            >
              <svg>
                <use xlinkHref="/images/sprite.svg#icon-arrow-right2"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
