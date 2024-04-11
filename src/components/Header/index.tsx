import React, { useState } from "react";
import styles from "./index.module.sass";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../Btn";
import { Zoom, Fade } from "react-reveal";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export const Header: FC<any> = () => {
    const t = useTranslations();

    const handleLocationClick = () => {
        window.open('https://www.google.com/maps/place/KARDISE/@41.244411,69.2949916,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae5fdaedd98031:0x756930c8ce018e4e!8m2!3d41.244407!4d69.2975665!16s%2Fg%2F11j48j4fwl?entry=ttu');
    };

    return (
        <div className={styles.header}>
            <div className={styles.header__info}>
                <Fade left cascade>
                    <p className={styles.header__text}>{t("header.title")}</p>
                </Fade>
            </div>
            <Fade bottom cascade>
                <div className={styles.header__cards}>
                    <div className={styles.header__card} onClick={handleLocationClick}>
                        <p className={styles.header__title}><FaLocationDot /></p>
                        <p className={styles.header__subTitle}>{t("header.location")}</p>
                    </div>
                    <div className={styles.header__cardTwo}>
                        <p className={styles.header__title}>26+</p>
                        <p className={styles.header__subTitle}>{t("header.skill")}</p>
                    </div>
                    <div className={styles.header__directions}>
                        <p className={styles.header__companyText}>{t("info.activities")}</p>
                        <div className={styles.header__content}>
                            <div className={styles.header__media}>
                                <Image src={'/assets/img/shape.svg'} alt="shape" width={61} height={63} />
                                <p className={styles.header__subInfo}>{t("header.project")} </p>
                            </div>
                            <div className={styles.header__media}>
                                <Image src={'/assets/img/ruler.svg'} alt="shape" width={61} height={63} />
                                <p className={styles.header__subInfo}>{t("header.supply")}</p>
                            </div>
                            <div className={styles.header__media}>
                                <Image src={'/assets/img/measuring-tool.svg'} alt="shape" width={61} height={63} />
                                <p className={styles.header__subInfo}>{t("header.build")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};
