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
import { Btn } from "../Btn";
// react-reveal
import { Zoom, Fade } from "react-reveal";

export const Header: FC<any> = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__info}>
                <Fade left cascade>
                    <p className={styles.header__text}>Лидер - в сфере   проектирования
                        и строительства</p>
                </Fade>
                <div className={styles.header__btn}>
                    <Btn />
                </div>
            </div>
            <Fade bottom cascade>
                <div className={styles.header__cards}>
                    <div className={styles.header__card}>
                        <p className={styles.header__title}>13+</p>
                        <p className={styles.header__subTitle}>Завершенные Проекты</p>
                    </div>

                    <div className={styles.header__cardTwo}>
                        <p className={styles.header__title}>40+</p>
                        <p className={styles.header__subTitle}>Лет Опыта</p>
                    </div>
                        <div className={styles.header__directions}>
                            <p className={styles.header__companyText}>Основными направлениями
                                деятельности компании KARDISE являются:</p>
                            <div className={styles.header__content}>
                                <div className={styles.header__media}>
                                    <Image src={'/assets/img/shape.svg'} alt="shape" width={61} height={63} />
                                    <p className={styles.header__subInfo}>Проектирования </p>
                                </div>
                                <div className={styles.header__media}>
                                    <Image src={'/assets/img/ruler.svg'} alt="shape" width={61} height={63} />
                                    <p className={styles.header__subInfo}>Монтаж </p>
                                </div>
                                <div className={styles.header__media}>
                                    <Image src={'/assets/img/measuring-tool.svg'} alt="shape" width={61} height={63} />
                                    <p className={styles.header__subInfo}>Строительство</p>
                                </div>
                            </div>
                        </div>
                </div>
            </Fade>
        </div>
    );
};