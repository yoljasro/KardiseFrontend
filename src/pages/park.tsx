import React, { useState } from "react";
//styles
import styles from "../styles/park.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react-reveal
import { Rotate, Flip, Fade, Zoom, Reveal } from "react-reveal";
import Head from "next/head";


const Park: FC<any> = () => {
    return (
        <>

            <Head>
                <title>Park Technician</title>
                <meta name="description" content="Kardise Park Technician page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/img/logo.png" />
            </Head>

            <div className={styles.park}>
                <Zoom cascade>
                    <div className={styles.park__background}>
                        <p className={styles.park__title}>Парк Техники</p>
                        {/* <div className={styles.park__card}>
                            <div className={styles.park__line}>
                                <p className={styles.park__call}>ПОЗВОНИТЕ НАМ СЕГОДНЯ </p>
                                <p className={styles.park__number}>
                                    <a href="tel:+998933891312">
                                        + 998 93 389 13 12
                                    </a>
                                </p>
                                <p className={styles.park__number}>
                                    <a href="tel:+998933895439">
                                        + 998 93 389 54 39
                                    </a>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </Zoom>

                <Fade bottom cascade>
                    <div className={styles.park__cards}>
                        <div className={styles.park__content}>
                            <Image src={'/assets/img/park.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            <div className={styles.park__info}>
                                <p className={styles.park__cardName}>КРАН ZOOMLION QY55V</p>
                                <div className={styles.park__statistics}>
                                    <Fade cascade>
                                        <ul className={styles.park__listone}>
                                            <li>Объём двигателя</li>
                                            <li>Наработка</li>
                                            <li>Высота подъёма</li>
                                            <li>Высота подъёма</li>
                                        </ul>
                                    </Fade>
                                    <ul className={styles.park__listtwo}>
                                        <li>10 000 куб. см.</li>
                                        <li>1м/4.</li>
                                        <li>59,00 м.</li>
                                        <li>55 тг.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.park__content}>
                            <div className={styles.park__info}>
                                <p className={styles.park__cardName}>KPAH ZOOMLION QY35V</p>
                                <div className={styles.park__statistics}>
                                    <Fade cascade>
                                        <ul className={styles.park__listone}>
                                            <li>Объём двигателя</li>
                                            <li>Наработка</li>
                                            <li>Высота подъёма</li>
                                            <li>Высота подъёма</li>
                                        </ul>
                                    </Fade>
                                    <ul className={styles.park__listtwo}>
                                        <li>10 000 куб. см.</li>
                                        <li>1м/4.</li>
                                        <li>59,00 м.</li>
                                        <li>55 тг.</li>
                                    </ul>
                                </div>
                            </div>
                            <Image src={'/assets/img/park.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                        </div>


                        <div className={styles.park__content}>
                            <Image src={'/assets/img/park.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            <div className={styles.park__info}>
                                <p className={styles.park__cardName}>САМОСВАЛ HOWO 6X4 20M3</p>
                                <div className={styles.park__statistics}>
                                    <Fade cascade>
                                        <ul className={styles.park__listone}>
                                            <li>Колесная формула</li>
                                            <li>Грузоподъемность</li>
                                            <li>Габариты кузова (Д*Ш*В)</li>
                                            <li> мм</li>
                                        </ul>
                                    </Fade>
                                    <ul className={styles.park__listtwo}>
                                        <li>6x4.</li>
                                        <li>До 25 т.</li>
                                        <li>8,5*2,5*2,9 м.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.park__content}>
                            <div className={styles.park__info}>
                                <p className={styles.park__cardName}>ЭКСКАВАТОР DOSAN DX140</p>
                                <div className={styles.park__statistics}>
                                    <Fade cascade>
                                        <ul className={styles.park__listone}>
                                            <li> Эксплуатационная масса</li>
                                            <li>Объем ковша</li>
                                        </ul>
                                    </Fade>
                                    <ul className={styles.park__listtwo}>
                                        <li>13750-15560 kr.</li>
                                        <li>0.24-0.76 M3</li>
                                    </ul>
                                </div>
                            </div>
                            <Image src={'/assets/img/park.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                        </div>
                    </div>
                </Fade>
            </div >
        </>
    );
};

export default Park;