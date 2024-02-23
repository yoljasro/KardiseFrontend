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
            <Image
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
          <Link onClick={closeMenu} href={"/about"}>
            <Zoom cascade>
              <li>O нас</li>
            </Zoom>
          </Link>
          <Link onClick={closeMenu} href={"/services"}>
            <Zoom cascade>
              <li>Услуги</li>
            </Zoom>
          </Link>
          {/* <li>Проекты</li> */}
          <Link onClick={closeMenu} href={"/park"}>
            <Zoom cascade>
              <li>Парк Техники</li>
            </Zoom>
          </Link>
          {/* <li>Контакты</li> */}

        </Fade>
      </ul>
    </div>
  );
};

