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
            <Zoom cascade>
                <div className={styles.services}>
                    <div className={styles.services__background}>
                        <p className={styles.services__title}>Услуги</p>
                    </div>

                    <Zoom bottom cascade>
                        <div className={styles.services__cards}>
                            <div className={styles.services__content}>
                                <Image src={'/assets/img/projector.png'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                                <div className={styles.services__info}>
                                    <p className={styles.services__cardName}>Проектирование.</p>
                                    <Fade right cascade>
                                    </Fade>
                                </div>

                            </div>

                            <div className={styles.services__content}>
                                <div className={styles.services__info}>
                                    <p className={styles.services__cardName}>Поставка строительных материалов и оборудования.</p>
                                    <Fade right cascade>
                                    </Fade>
                                </div>
                                <Image src={'/assets/img/bars.jpg'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                            </div>

                            <div className={styles.services__content}>
                                <Image src={'/assets/img/montaj.png'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                                <div className={styles.services__info}>
                                    <p className={styles.services__cardName}>Строительно-Монтажные работы.</p>
                                    <Fade right cascade>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div >
            </Zoom>
        </>
    );
};

export default Services;