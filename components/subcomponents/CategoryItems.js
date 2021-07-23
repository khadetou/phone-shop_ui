import styles from "../../styles/style.module.scss";
const CategoryItems = ({ title, active, index }) => {
  console.log(index);
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
      >
        <span className={sectionDot}></span>
        <h1 className={titleContainer__primaryTitle}>{title}</h1>
      </div>
    </div>
  );
};

export default CategoryItems;
