import styles from "../styles/style.module.scss";
import CollectionBox from "./subcomponents/CollectionBox";
const Main = () => {
  const {
    container,
    collection,
    collection__container,
    collection__img1,
    collection__img2,
  } = styles;
  const images = [
    {
      img: "/images/collection_01.png",
      w: 551,
      h: 958,
      desc: "Phone Device Presset",
      name: "SMARTPHONES",
      cln: collection__img1,
    },
    {
      img: "/images/collection_02.png",
      w: 800,
      h: 1142,
      desc: "New colors introduced",
      name: "HEADPHONES",
      cln: collection__img2,
    },
  ];
  return (
    <section className={collection}>
      <div className={container}>
        <div className={collection__container}>
          {images.map((img, idx) => (
            <CollectionBox image={img} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
