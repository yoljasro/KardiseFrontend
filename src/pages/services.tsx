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
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const Services: FC<any> = () => {
    const t = useTranslations()
    return (
        <>

            <Head>
                <title>Services Page</title>
                <meta name="description" content="Kardise Services Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/img/logoseo.png" />
            </Head>
            <Zoom cascade>
                <div className={styles.services}>
                    <div className={styles.services__background}>
                        <p className={styles.services__title}>{t("footer.services")}</p>
                    </div>

                    <Zoom bottom cascade>
                        <div className={styles.services__cards}>
                            <div className={styles.services__content}>
                                <Image src={'/assets/img/projector.png'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                                <div className={styles.services__info}>
                                    <p className={styles.services__cardName}>{t("header.project")}</p>
                                    <Fade right cascade>
                                    </Fade>
                                </div>

                            </div>

                            <div className={styles.services__content}>
                                <div className={styles.services__info}>
                                    <p className={styles.services__cardName}>{t("header.supply")}</p>
                                    <Fade right cascade>
                                    </Fade>
                                </div>
                                <Image src={'/assets/img/bars-min.jpg'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                            </div>

                            <div className={styles.services__content}>
                                <Image src={'/assets/img/montaj.png'} alt="serviceImage" className={styles.services__image} width={589} height={433} />
                                <div className={styles.services__info}>
                                    <p className={styles.services__cardName}>{t("info.installation")}</p>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
      props: {
        messages: (await import(`../messages/${locale}.json`)).default,
      },
    };
  };