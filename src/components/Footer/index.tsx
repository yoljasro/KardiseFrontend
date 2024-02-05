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

export const Footer: FC<any> = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__contact}>
                <p className={styles.footer__title}>KARDISE</p>
                <p className={styles.footer__subTitle}>ENGINEERING</p>
                <p className={styles.footer__call}>ПОЗВОНИТЕ НАМ СЕГОДНЯ</p>
                <p className={styles.footer__phone}>+ 998 93 389 13 12</p>
                <div className={styles.footer__social}>
                    <div className={styles.footer__circle}><FaTwitter className={styles.footer__icon} /></div>
                    <div className={styles.footer__circle}><FaFacebookF className={styles.footer__icon} /></div>
                    <div className={styles.footer__circle}><FaLinkedinIn className={styles.footer__icon} /></div>
                    <div className={styles.footer__circle}><FaYoutube className={styles.footer__icon} /></div>
                </div>
                <p className={styles.footer__reserved}>KARDISE © Все права защищены. Авторские права 2024.</p>
            </div>
            <div className={styles.footer__links}>
                <p className={styles.footer__menu}>Быстрые ссылки</p>
                <ul className={styles.footer__nav}>
                    <li>О нас</li>
                    <li>Услуги</li>
                    <li>Проекты</li>
                    <li>Техника Парк</li>
                    <li>Контакты</li>
                </ul>
            </div>
        </div>
    );
};