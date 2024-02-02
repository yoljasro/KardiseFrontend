import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react icons
import { Btn } from "../Btn";

export const About: FC<any> = () => {
    return (
        <div className={styles.about}>
            <div className={styles.about__info}>
                <p className={styles.about__title}>О НАС </p>
                <p className={styles.about__desc}>C нашими знаниями <br />
                    мы гарантируем успех</p>
                <p className={styles.about__speed}>НАДЕЖНОСТЬ. КАЧЕСТВО.  СКОРОСТЬ.</p>
                <p className={styles.about__company}>KARDISE реализует проекты в о всех регионах Узбекистана, а также в странах СНГ. Компания образованав 1997году, и сегодня численность рабочихи служащих превышает 800человек.</p>
                <Btn />
            </div>
            <div className={styles.about__info}>
                <Image src={"/assets/img/video-overlay.png"} alt="overlay" width={500} height={600} />
            </div>
        </div>
    );
};