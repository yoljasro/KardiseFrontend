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
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const About: FC<any> = () => {
    const t = useTranslations()
    return (
        <>

            <Head>
                <title>About Page</title>
                <meta name="description" content="Kardise About Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/img/logoseo.png" />
            </Head>
            <Zoom cascade>
            <div className={styles.about}>
                    <div className={styles.about__background}>
                        <p className={styles.about__title}>{t("footer.about")}</p>
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
                <Group />
                <Motto />
                <Info />
            </div>
            </Zoom>
        </>
    );
};

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
      props: {
        messages: (await import(`../messages/${locale}.json`)).default,
      },
    };
  };