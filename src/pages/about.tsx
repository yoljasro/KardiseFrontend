import React, { useState } from "react";
//styles
import styles from "../styles/about.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
import { Group } from "../components/Group";
import { Motto } from "../components/Motto";
import { Info } from "../components/Info";
// react-reveal
import { Rotate, Flip, Fade, Zoom } from "react-reveal";

const About: FC<any> = () => {
    return (
        <>
            <Zoom cascade>
                <div className={styles.about}>
                    <div className={styles.about__background}>
                        <p className={styles.about__title}>О нас</p>
                        <Zoom  cascade >
                            <div className={styles.about__card}>
                                <div className={styles.about__line}>
                                    <p className={styles.about__call}>ПОЗВОНИТЕ НАМ СЕГОДНЯ </p>
                                    <p className={styles.about__number}>+ 998 93 389 13 12</p>
                                    <p className={styles.about__number}>+ 998 93 389 54 39</p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <Group />
                    <Motto />
                    <Info />
                </div>
            </Zoom>
        </>
    );
};

export default About;