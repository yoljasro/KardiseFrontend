import React, { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import anime, { AnimeInstance } from "animejs"
import styles from "./index.module.sass";

//react-reveal
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'



export const Nav: FC<any> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

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
      <Fade left cascade className={styles.branding__container}>
        <hr className={styles.nav__hr} />
        <Link href={"/"}>
          <Fade left cascade>
            <img
              className={styles.nav__logo}
              src={"/assets/img/logo.png"}
              alt="logo"
              width={139}
              height={44}
            />
          </Fade>

        </Link>
      </Fade>


      <div className={styles.nav__burger} onClick={toggleMenu}>
        <div className={styles.nav__burgerLine}></div>
        <div className={styles.nav__burgerLine}></div>
        <div className={styles.nav__burgerLine}></div>
      </div>


      <ul className={`${styles.nav__menu} ${isMenuOpen ? styles.navOpen__menu : ""}`}>
        <Fade right cascade>
          <div className={styles.nav__btn}>
            <button className={styles.nav__menuCloseBtn} onClick={closeMenu}>X</button>
          </div>
          <Zoom cascade>
            <Link className={styles.nav__link} onClick={closeMenu} href={"/about"}>
              <li className={styles.nav__li}>
                O нас</li>
            </Link>
          </Zoom>
          <Zoom cascade>
            <Link className={styles.nav__link} onClick={closeMenu} href={"/services"}>
              <li className={styles.nav__li}>Услуги</li>
            </Link>
          </Zoom>
          <Zoom cascade>
            <Link className={styles.nav__link} onClick={closeMenu} href={"/park"}>
              <li className={styles.nav__li}>Парк Техники</li>
            </Link>
          </Zoom>

        </Fade>
      </ul>
    </div >
  );
};

