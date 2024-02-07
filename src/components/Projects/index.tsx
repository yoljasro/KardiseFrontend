import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react icons
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Btn } from "../Btn";

export const Projects: FC<any> = () => {
    return (
        <div className={styles.project}>
            <p className={styles.project__title}>НАМ  ДОВЕРЯЮТ </p>
            <p className={styles.project__subTitle}>Наши Проекты</p>
            <div className={styles.project__cards}>
                <div className={styles.project__card}>
                    <div className={styles.project__card__info}>
                        <p className={styles.project_type}>КОММЕРЧЕСКИЙ </p>
                        <p className={styles.project__name}>TASHKENT TABACCO</p>
                        {/* <Btn/> */}
                    </div>
                </div>
                <div className={styles.project__card}>
                    <div className={styles.project__card__info}>
                        <p className={styles.project_type}>КОММЕРЧЕСКИЙ </p>
                        <p className={styles.project__name}>TASHKENT TABACCO</p>
                    </div>
                </div>
                <div className={styles.project__card}>
                    <div className={styles.project__card__info}>
                        <p className={styles.project_type}>КОММЕРЧЕСКИЙ </p>
                        <p className={styles.project__name}>TASHKENT TABACCO</p>
                    </div>
                </div>
                <div className={styles.project__card}>
                    <div className={styles.project__card__info}>
                        <p className={styles.project_type}>КОММЕРЧЕСКИЙ </p>
                        <p className={styles.project__name}>TASHKENT TABACCO</p>
                    </div>
                </div>
                <div className={styles.project__card}>
                    <div className={styles.project__card__info}>
                        <p className={styles.project_type}>КОММЕРЧЕСКИЙ </p>
                        <p className={styles.project__name}>TASHKENT TABACCO</p>
                    </div>
                </div>
                <div className={styles.project__card}>
                    <div className={styles.project__card__info}>
                        <p className={styles.project_type}>КОММЕРЧЕСКИЙ </p>
                        <p className={styles.project__name}>TASHKENT TABACCO</p>
                    </div>
                </div>
            </div>

        </div>
    );
};