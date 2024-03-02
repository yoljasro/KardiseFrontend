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
import Head from "next/head";

const About: FC<any> = () => {
    return (
        <>

            <Head>
                <title>About Page</title>
                <meta name="description" content="Kardise About Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/img/logo.png" />
            </Head>

            <div className={styles.about}>
                <Zoom cascade>
                    <div className={styles.about__background}>
                        <p className={styles.about__title}>О нас</p>
                        {/* <Zoom cascade > */}
                        {/* <div className={styles.about__card}>
                            <div className={styles.about__line}>
                                <p className={styles.about__call}>ПОЗВОНИТЕ НАМ СЕГОДНЯ </p>
                                <p className={styles.about__number}>
                                    <a href="tel:+998933891312">
                                        + 998 93 389 13 12
                                    </a>
                                </p>
                                <p className={styles.about__number}>
                                    <a href="tel:+998933895439">
                                        + 998 93 389 54 39
                                    </a>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </Zoom>
                <Group />
                <Motto />
                <Info />
            </div>
        </>
    );
};

export default About;