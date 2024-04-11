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
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";


const Park: FC<any> = () => {
    const t = useTranslations()
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
                        <p className={styles.park__title}>{t("footer.park")}</p>
                    </div>
                    <Fade bottom cascade>
                        <div className={styles.park__cards}>
                            <div className={styles.park__content}>
                                <Image src={'/assets/img/park01.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>{t("park.first")}</p>
                                    <p className={styles.park__cardName}>{t("park.second")}</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.park__content}>
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>{t("park.third")}</p>
                                    <p className={styles.park__cardName}>{t("park.fourth")}</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                                <Image src={'/assets/img/park06.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            </div>


                            <div className={styles.park__content}>
                                <Image src={'/assets/img/park02.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>{t("park.five")}</p>
                                    <p className={styles.park__cardName}>{t("park.six")}</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.park__content}>
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>{t("park.seven")}</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                                <Image src={'/assets/img/park05.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            </div>

                            <div className={styles.park__content}>
                                <Image src={'/assets/img/park04.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>{t("park.eight")}</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.park__content}>
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>{t("park.nine")}</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                                <Image src={'/assets/img/park03.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                            </div>

                            <div className={styles.park__content}>
                            <Image src={'/assets/img/grader1.jpg'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>{t("park.ten")}</p>
                                    <div className={styles.park__statistics}>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.park__content}>
                                <div className={styles.park__info}>
                                    <p className={styles.park__cardName}>{t("park.x")}</p>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
      props: {
        messages: (await import(`../messages/${locale}.json`)).default,
      },
    };
  };