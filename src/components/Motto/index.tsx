import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../Btn";
// react-reveal
import { Rotate, Flip, Fade, Zoom } from "react-reveal";
// react icons
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrStatusGood } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { MdViewTimeline } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi"
import { useTranslations } from "next-intl";

export const Motto: FC<any> = () => {
    const t = useTranslations()
    return (
        <div className={styles.motto}>
            <div className={styles.motto__background}>
                <Fade left cascade>
                    <div className={styles.motto__content}>
                    <p className={styles.motto__name}>{t("motto.title")}</p>
                    <p className={styles.motto__title}>{t("motto.name")}</p>
                    </div>
                </Fade>
                <Fade bottom cascade>
                <div className={styles.motto__cards}>
                    <div className={styles.motto__card}>
                        <div className={styles.motto__icon}>
                            <VscWorkspaceTrusted />
                           </div>
                        <div className={styles.motto__cardInfo}>
                            <p className={styles.motto__cardTitle}>{t("motto.reality")}</p>
                        </div>
                    </div>
                    <div className={styles.motto__card}>
                        <div className={styles.motto__icon}>
                            <GiTrophyCup  />
                        </div>
                        <div className={styles.motto__cardInfo}>
                            <p className={styles.motto__cardTitle}>{t("motto.quality")}</p>
                        </div>
                    </div>
                    <div className={styles.motto__card}>
                    <div className={styles.motto__icon}>
                            <MdAccessTime />
                        </div>
                        <div className={styles.motto__cardInfo}>
                            <p className={styles.motto__cardTitle}>{t("motto.speed")}</p>
                        </div>
                    </div>
                </div>
            </Fade>
            </div>
        </div>
    );
};