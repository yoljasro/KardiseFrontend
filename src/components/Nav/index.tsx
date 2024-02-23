import React, { FC, useState, useEffect  , useRef} from "react";
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
    <div  className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <Fade left cascade className={styles.branding__container}>
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
      </Fade>


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
        <Link onClick={closeMenu} href={"/services"}>
          <li>Услуги</li>
        </Link>
        {/* <li>Проекты</li> */}
        <Link onClick={closeMenu} href={"/park"}>
          <li>Парк Техники</li>
        </Link>
        {/* <li>Контакты</li> */}
      </ul>
    </div>
  );
};

