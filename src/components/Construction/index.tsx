import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
import { Zoom, Fade } from "react-reveal";
import { useTranslations } from "next-intl";

export const Construction: FC<any> = () => {
    const t = useTranslations()

    return (
        <div>

            <div className={styles.construction}>
                <Fade left cascade>
                    <Image src={'/assets/img/img.png'} alt="image" className={styles.construction__image} width={850} height={600} />
                </Fade>
                <Zoom top cascade>
                    <div className={styles.construction__card}>
                        <p className={styles.construction__title}>{t("construction.project")}</p>
                        <p className={styles.construction__number}>30+ </p>
                    </div>
                </Zoom>
                <Zoom top cascade>
                    <div className={styles.construction__card}>
                        <p className={styles.construction__title}>{t("construction.content")}</p>
                        <p className={styles.construction__numberText}>40+</p>
                    </div>
                </Zoom>
                <Zoom top cascade>
                    <div className={styles.construction__card}>
                        <p className={styles.construction__title}>{t("construction.group")}</p>
                        <p className={styles.construction__number}>800+</p>
                    </div>
                </Zoom>
            </div >
        </div>
    );
};