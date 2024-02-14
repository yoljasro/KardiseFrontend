import React, { useState } from "react";
//styles
import styles from "../styles/about.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react icons

const About: FC<any> = () => {
    return (
        <div className={styles.about}>
            <div className={styles.about__background}>
                <p className={styles.about__title}>О нас</p>
                <div className={styles.about__card}></div>
            </div>
        </div>
    );
};

export default About;