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
                <link rel="icon" href="/assets/img/logoseo.png" />+
            </Head>

            <Zoom cascade>
                <div className={styles.park}>
                    <div className={styles.park__background}>
                        <p className={styles.park__title}>Парк Техники</p>
                    </div>
                    <Fade bottom cascade>
                        <div className={styles.park__cards}>
                            <div className={styles.park__content}>
                                <Image src={'/assets/img/park01.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>КРАН ZOOMLION QY55V</p>
                                    <p className={styles.park__cardName}>KPAH ZOOMLION QY35V</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.park__content}>
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>САМОСВАЛ HOWO 6X4 20M3</p>
                                    <p className={styles.park__cardName}>САМОСВАЛ МАЗ 5551</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                                <Image src={'/assets/img/park06.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            </div>


                            <div className={styles.park__content}>
                                <Image src={'/assets/img/park02.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>ЭКСКАВАТОР DOSAN DX140</p>
                                    <p className={styles.park__cardName}>ЭКСКАВАТОР DOSAN DX210</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.park__content}>
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>ВИБРОКАТОК  XCMG XS143J</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                                <Image src={'/assets/img/park05.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            </div>

                            <div className={styles.park__content}>
                                <Image src={'/assets/img/park04.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>СЕДЕЛЬНЫЙ ТЯГАЧ HOWO 6X4</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.park__content}>
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>ПОГРУЗЧИК ДОСАН SD300</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                                <Image src={'/assets/img/park03.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            </div>

                            <div className={styles.park__content}>
                            <Image src={'/assets/img/grader1.jpg'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>LUIGONG 4180 ГРЕЙДЕР ТЯЖЕЛОГО КЛАССА</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.park__content}>
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>LUIGONG B160C БУЛЬДОЗЕР</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                                <Image src={'/assets/img/buldozer.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            </div>


                        </div>
                    </Fade>
                </div >
            </Zoom>
        </>
    );
};

export default Park;