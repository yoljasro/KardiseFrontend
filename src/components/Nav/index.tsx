import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react icons
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Nav: FC<any> = () => {
    return (
        <div className={styles.nav}>
            <hr className={styles.nav__hr} />
            <Link href={'/'}>
                <Image className={styles.nav__logo} src={'/assets/img/logo.png'} alt="logo" width={139} height={44} />
            </Link>

            <ul className={styles.nav__menu}>
                <Link href={'/about'}>
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