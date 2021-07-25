import styles from "../styles/style.module.scss";
const Floater = () => {
  const { floater, show } = styles;
  return (
    <a href="#" className={`${floater} ${show}`}>
      <svg>
        <use xlinkHref="/images/sprite.svg#icon-arrow-up"></use>
      </svg>
    </a>
  );
};

export default Floater;
