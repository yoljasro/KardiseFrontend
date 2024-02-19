import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.sass";

export const Nav: FC<any> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
      <hr className={styles.nav__hr} />
      <Link href={"/"}>
        <Image
          className={styles.nav__logo}
          src={"/assets/img/logo.png"}
          alt="logo"
          width={139}
          height={44}
        />
      </Link>

      <div className={styles.nav__burger} onClick={toggleMenu}>
        <div className={styles.nav__burgerLine}></div>
        <div className={styles.nav__burgerLine}></div>
        <div className={styles.nav__burgerLine}></div>
      </div>

      <ul className={`${styles.nav__menu} ${isMenuOpen ? styles.navOpen__menu : ""}`}>
        <div className={styles.nav__btn}>
          <button className={styles.nav__menuCloseBtn} onClick={closeMenu}>X</button>
        </div>
        <Link onClick={closeMenu} href={"/about"}>
          <li>O нас</li>
        </Link>
        <li>Услуги</li>
        <li>Проекты</li>
        <li>Техника Парк</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

