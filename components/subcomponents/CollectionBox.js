import styles from "../../styles/style.module.scss";
import Image from "next/image";
const CollectionBox = ({ image: { img, w, h, desc, name, cln } }) => {
  const {
    collection__box,
    collection__imageContainer,
    collection__content,
    collection__data,
  } = styles;
  return (
    <div className={collection__box}>
      <div className={collection__imageContainer}>
        <div className={cln}>
          <Image src={img} width={w} height={h} />
        </div>
      </div>
      <div className={collection__content}>
        <div className={collection__data}>
          <span>{desc}</span>
          <h1>{name}</h1>
          <a href="#">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
};

export default CollectionBox;
