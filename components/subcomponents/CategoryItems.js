import styles from "../../styles/style.module.scss";
import { useRef } from "react";
const CategoryItems = ({ title, active, index }) => {
  const idx = useRef();

  const setActive = () => {
    const list = document.querySelectorAll(`.${category__filterBtn}`);
    Array.from(list).forEach((el) => {
      el.classList.remove(active);
    });

    idx.current.classList.add(active);
  };

  const {
    category__filterBtn,
    category__titles,
    sectionTitles,
    sectionTitle,
    sectionDot,
    titleContainer__primaryTitle,
  } = styles;

  return (
    <div
      className={
        index === 0 ? `${category__titles} ${sectionTitle}` : `${sectionTitle}`
      }
    >
      <div
        className={
          index === 0
            ? `${sectionTitles} ${category__filterBtn} ${active}`
            : `${sectionTitles} ${category__filterBtn}`
        }
        ref={idx}
        id="elements"
        onClick={() => setActive()}
      >
        <span className={sectionDot}></span>
        <h1 className={titleContainer__primaryTitle}>{title}</h1>
      </div>
    </div>
  );
};

export default CategoryItems;
