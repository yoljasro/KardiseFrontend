import React, { useState } from "react";
//styles
import styles from "../styles/services.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// constants
import { ServicesArray, ServicesType } from "@/constants";

const Services: FC<any> = () => {
    return (
        <div className={styles.services}>
            <div className={styles.services__background}>
                <p className={styles.services__title}>Услуги</p>
                <div className={styles.services__card}>
                    <div className={styles.services__line}>
                        <p className={styles.services__call}>ПОЗВОНИТЕ НАМ СЕГОДНЯ </p>
                        <p className={styles.services__number}>+ 998 93 389 13 12</p>
                        <p className={styles.services__number}>+ 998 93 389 54 39</p>
                    </div>
                </div>
            </div>

            <div className={styles.services__cards}>
                <div className={styles.services__content}>
                    <Image src={'/assets/img/service1.jpg'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                    <div className={styles.services__info}>
                        <p className={styles.services__cardName}>Услуга I</p>
                        <p className={styles.services__cardType}>cтроительство объектов жилья, социальных
                            объектов и коммерческой недвижимости</p>
                    </div>
                </div>

                <div className={styles.services__content}>
                    <div className={styles.services__info}>
                        <p className={styles.services__cardName}>Услуга II</p>
                        <p className={styles.services__cardType}>оформление земельных участков под строительство</p>
                    </div>
                    <Image src={'/assets/img/service2.jpg'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                </div>
            </div>
        </div>
    );
};

export default Services;