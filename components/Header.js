import styles from "../styles/style.module.scss";
import Link from "next/link";
import Hero from "./Hero";
import { useState, useEffect } from "react";
const Header = () => {
  const {
    container,
    open,
    active,
    header,
    header__navigation,
    header__container,
    header__nav,
    header__menuToggle,
    header__closeToggle,
    header__menu,
    header__menuTop,
    header__category,
    header__logo,
    header__logoContainer,
    header__linkScroll,
    header__ul,
    header__li,
    header__a,
    header__icons,
    header__iconItem,
    header__cartTotal,
  } = styles;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(active);
    } else {
      document.body.classList.remove(active);
    }
  }, [isOpen]);
  return (
    <header className={header}>
      <div className={header__navigation}>
        <div className={`${header__container} ${container}`}>
          <nav className={header__nav}>
            <div className={header__menuToggle} onClick={() => setIsOpen(true)}>
              <svg>
                <use xlinkHref="/images/sprite.svg#icon-menu"></use>
              </svg>
            </div>

            <div className={header__logoContainer}>
              <Link href="/">
                <a className={`${header__linkScroll} ${header__logo}`}>PHONE</a>
              </Link>
            </div>

            <div
              className={isOpen ? `${header__menu} ${open}` : `${header__menu}`}
            >
              <div className={header__menuTop}>
                <span className={header__category}>PHONE</span>
                <a
                  href="#"
                  className={header__closeToggle}
                  onClick={() => setIsOpen(false)}
                >
                  <svg>
                    <use xlinkHref="/images/sprite.svg#icon-cross"></use>
                  </svg>
                </a>
              </div>

              <ul className={header__ul}>
                <li className={header__li}>
                  <a
                    href="#header"
                    className={`${header__a} ${header__linkScroll}`}
                  >
                    Home
                  </a>
                </li>
                <li className={header__li}>
                  <a
                    href="#category"
                    className={`${header__a} ${header__linkScroll}`}
                  >
                    Category
                  </a>
                </li>
                <li className={header__li}>
                  <a
                    href="#news"
                    className={`${header__a} ${header__linkScroll}`}
                  >
                    Blog
                  </a>
                </li>
                <li className={header__li}>
                  <a
                    href="#contact"
                    className={`${header__a} ${header__linkScroll}`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className={header__icons}>
              <a href="#" className={header__iconItem}>
                <svg>
                  <use xlinkHref="/images/sprite.svg#icon-user"></use>
                </svg>
              </a>
              <a href="#" className={header__iconItem}>
                <svg>
                  <use xlinkHref="/images/sprite.svg#icon-search"></use>
                </svg>
              </a>
              <a href="#" className={header__iconItem}>
                <svg>
                  <use xlinkHref="/images/sprite.svg#icon-shopping-basket"></use>
                </svg>
                <span className={header__cartTotal}>0</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
