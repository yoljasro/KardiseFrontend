import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react icons
import { Btn } from "../Btn";
import { Fade, Zoom } from "react-reveal";
import { useTranslations } from "next-intl";

export const About: FC<any> = () => {
    const t = useTranslations();

    return (
        <div className={styles.about}>
            <Fade left cascade>
                <div className={styles.about__info}>
                    <p className={styles.about__title}>{t("about.title")} </p>
                    <p className={styles.about__desc}>{t("about.desc")}</p>
                    <p className={styles.about__speed}>{t("about.speed")}</p>
                    <p className={styles.about__company}>{t("about.info")}</p>
                    <div className={styles.about__btn}>
                        <Link href={'/about'}>
                            <Btn />
                        </Link>
                    </div>
                </div>
            </Fade>
            <Fade right cascade> <Zoom cascade>
                <div className={styles.about__content}>
                    <Image className={styles.about__image} src={"/assets/img/video-overlay.png"} alt="overlay" width={500} height={600} />
                </div>
            </Zoom>
            </Fade>
        </div>
    );
};