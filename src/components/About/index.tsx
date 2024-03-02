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
import { Fade , Zoom } from "react-reveal";

export const About: FC<any> = () => {
    return (
        <div className={styles.about}>
            <Fade left cascade>
                <div className={styles.about__info}>
                    <p className={styles.about__title}>О НАС </p>
                    <p className={styles.about__desc}>C нашими знаниями <br />
                        мы гарантируем успех</p>
                    <p className={styles.about__speed}>НАДЕЖНОСТЬ. КАЧЕСТВО.  СКОРОСТЬ.</p>
                    <p className={styles.about__company}>KARDISE реализует проекты в о всех регионах Узбекистана, а также в странах СНГ. Компания образованав 1997году, и сегодня численность рабочихи служащих превышает 800человек.</p>
                    <div className={styles.about__btn}>
                        <Btn />
                    </div>
                </div>  
            </Fade>
            <Fade right cascade> <Zoom cascade>
                <div className={styles.about__content}>
                    <Image className={styles.about__image} src={"/assets/img/video-overlay.png"} alt="overlay" width={500} height={600} />
                </div>
                </Zoom>
            </Fade>
        </div>
    );
};