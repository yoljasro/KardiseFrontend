import React, { useState } from "react";
//styles
import styles from "../styles/services.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react-reveal
import { Rotate, Flip, Fade, Zoom } from "react-reveal";
import Head from "next/head";

const Services: FC<any> = () => {
    return (
        <>

            <Head>
                <title>Services Page</title>
                <meta name="description" content="Kardise Services Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/img/logo.png" />
            </Head>

            <div className={styles.services}>
                <Zoom cascade>
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
                </Zoom>

                <Zoom bottom cascade>
                    <div className={styles.services__cards}>
                        <div className={styles.services__content}>
                            <Image src={'/assets/img/service1.jpg'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                            <div className={styles.services__info}>
                                <Flip cascade>
                                    <p className={styles.services__cardName}>Услуга I</p>
                                </Flip>
                                <Fade right cascade>
                                    <p className={styles.services__cardType}>cтроительство объектов жилья, социальных
                                        объектов и коммерческой недвижимости</p>
                                </Fade>
                            </div>

                        </div>

                        <div className={styles.services__content}>
                            <div className={styles.services__info}>
                                <Flip cascade>
                                    <p className={styles.services__cardName}>Услуга II</p>
                                </Flip>
                                <Fade right cascade>
                                    <p className={styles.services__cardType}>оформление земельных участков под строительство</p>
                                </Fade>
                            </div>
                            <Image src={'/assets/img/service2.jpg'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                        </div>

                        <div className={styles.services__content}>
                            <Image src={'/assets/img/service3.jpg'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                            <div className={styles.services__info}>
                                <Flip cascade>
                                    <p className={styles.services__cardName}>Услуга III</p>
                                </Flip>
                                <Fade right cascade>
                                    <p className={styles.services__cardType}>проектные и архитектурные работы</p>
                                </Fade>
                            </div>
                        </div>

                        <div className={styles.services__content}>
                            <div className={styles.services__info}>
                                <Flip cascade>
                                    <p className={styles.services__cardName}>Услуга IV</p>
                                </Flip>
                                <Fade right cascade>
                                    <p className={styles.services__cardType}>строительно-монтажные работы</p>
                                </Fade>
                            </div>
                            <Image src={'/assets/img/service4.jpg'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                        </div>
                    </div>
                </Zoom>
            </div >
        </>
    );
};

export default Services;