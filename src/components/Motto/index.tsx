import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../Btn";
// react-reveal
import { Rotate, Flip, Fade, Zoom } from "react-reveal";

export const Motto: FC<any> = () => {
    return (
        <div className={styles.motto}>
            <div className={styles.motto__background}>
                <Flip cascade>
                <p className={styles.motto__name}>Девиз компании</p>
                <p className={styles.motto__title}>«Будущее берет старт в настоящем»</p>
                </Flip>
                <Btn />
            </div>
            <Fade bottom cascade>
            <div className={styles.motto__cards}>
                <div className={styles.motto__card}>
                    <Image src={'/assets/img/1.svg'} alt="number" width={70} height={72} />
                    <div className={styles.motto__cardInfo}>
                        <p className={styles.motto__cardTitle}>НАДЕЖНОСТЬ</p>
                    </div>
                </div>
                <div className={styles.motto__card}>
                    <Image src={'/assets/img/2.svg'} alt="number" width={70} height={72} />
                    <div className={styles.motto__cardInfo}>
                        <p className={styles.motto__cardTitle}>КАЧЕСТВО</p>
                    </div>
                </div>
                <div className={styles.motto__card}>
                    <Image src={'/assets/img/3.svg'} alt="number" width={70} height={72} />
                    <div className={styles.motto__cardInfo}>
                        <p className={styles.motto__cardTitle}>СКОРОСТЬ</p>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};