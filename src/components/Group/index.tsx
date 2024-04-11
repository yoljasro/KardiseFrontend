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
import { useTranslations } from "next-intl";

export const Group: FC<any> = () => {
    const t = useTranslations()
    return (
        <>
            <Zoom cascade>
                <div className={styles.group}>
                    <div className={styles.group__person}>
                        <div className={styles.group__card}>
                            <p className={styles.group__cardTitle}>26+</p>
                            <p className={styles.group__cardSubTitle}>{t("group.clients")} </p>
                        </div>
                    </div>
                    <>
                        <Fade bottom cascade>
                            <div className={styles.group__info}>
                                <p className={styles.group__title}> {t("footer.about")}</p>
                                <p className={styles.group__desc}>{t("group.clients")}</p>
                                <div className={styles.group__storyCard}>
                                    <p className={styles.group__storyCardInfo}>{t("group.info")}</p>
                                </div>
                            </div>
                        </Fade>
                    </>
                </div>
            </Zoom>

        </>

    );
};