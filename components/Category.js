import styles from "../styles/style.module.scss";
import CategoryItems from "./subcomponents/CategoryItems";
import ProductItem from "./subcomponents/ProductItems";

const Category = ({ products }) => {
  const {
    container,
    titleContainer,
    sectionActive,
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

  return (
    <section className={category}>
      <div className={`${categroy__tabList}`}>
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

        <div className={`${category__container} ${container}`}>
          <div className={category__center}>
            {products.map((product, idx) => (
              <ProductItem product={product} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
