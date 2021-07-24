import styles from "../styles/style.module.scss";
const Floater = () => {
  const { floater } = styles;
  return (
    <a href="#" className={floater}>
      <svg>
        <use xlinkHref="/images/sprite.svg#icon-arrow-up"></use>
      </svg>
    </a>
  );
};

export default Floater;
