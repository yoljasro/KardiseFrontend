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
import { GrInstagram } from "react-icons/gr"
// react-reveal
import { Rotate, Flip, Zoom , Fade} from "react-reveal";

export const Footer: FC<any> = () => {
    return (
        <>
            <Fade  cascade>
                <div className={styles.footer}>
                    <div className={styles.footer__contact}>
                        <Fade left cascade>
                            <p className={styles.footer__title}>KARDISE</p>
                            <p className={styles.footer__subTitle}>ENGINEERING</p>
                            <p className={styles.footer__call}>ПОЗВОНИТЕ НАМ СЕГОДНЯ</p>
                            <p className={styles.footer__phone}>+ 998 93 389 13 12</p>
                        </Fade>
                        <Rotate cascade>
                            <div className={styles.footer__social}>
                                <div className={styles.footer__circle}><GrInstagram className={styles.footer__circle__icon} /></div>
                                <div className={styles.footer__circle}><FaFacebookF className={styles.footer__circle__icon} /></div>
                                <div className={styles.footer__circle}><FaLinkedinIn className={styles.footer__circle__icon} /></div>
                                <div className={styles.footer__circle}><FaYoutube className={styles.footer__circle__icon} /></div>
                            </div>
                        </Rotate>
                        <p className={styles.footer__reserved}>KARDISE © Все права защищены. Авторские права 2024.</p>
                    </div>
                    <div className={styles.footer__links}>
                        <Rotate cascade>
                            <p className={styles.footer__menu}>Быстрые ссылки</p>
                            <ul className={styles.footer__nav}>
                                <li>
                                    <Link className={styles.footer__link} href={'/about'}>
                                        О нас
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.footer__link} href={'/services'}>
                                        Услуги
                                    </Link>
                                </li>

                                <li>
                                    <Link className={styles.footer__link} href={'/park'}>
                                        Техника Парк
                                    </Link>
                                </li>
                            </ul>
                        </Rotate>
                    </div>
                </div>
            </Fade >
        </>
    );
};