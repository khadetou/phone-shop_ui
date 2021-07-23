import styles from "../styles/style.module.scss";
import CategoryItems from "./subcomponents/CategoryItems";
const Category = () => {
  const {
    titleContainer,
    sectionActive,
    container,
    category,
    categroy__tabList,
    category__tabs,
    category__center,
    category__container,
  } = styles;
  const categoryI = [
    "All products",
    "Trending Products",
    "Special Products",
    "Featured Products",
  ];

  console.log(categoryI);
  return (
    <section className={category}>
      <div className={`${categroy__tabList} ${container}`}>
        <div className={`${category__tabs} ${titleContainer}`}>
          {categoryI.map((category, idx) => (
            <CategoryItems
              key={idx}
              title={category}
              index={idx}
              active={sectionActive}
            />
          ))}
        </div>

        <div className={category__container}>
          <div className={category__center}></div>
        </div>
      </div>
    </section>
  );
};

export default Category;
