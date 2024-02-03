import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";

export const Construction: FC<any> = () => {
    return (
        <div className={styles.construction}>
            <Image src={'/assets/img/img.png'} alt="image" className={styles.construction__image} width={850} height={600} />
            <div className={styles.construction__card}>
                <p className={styles.construction__title}>Строительная группа</p>
                <p className={styles.construction__number}>600+</p>
            </div>
            <div className={styles.construction__card}>
                <p className={styles.construction__title}>ИТР - состав</p>
                <p className={styles.construction__numberText}>14+</p>
            </div>
            <div className={styles.construction__card}>
                <p className={styles.construction__title}>Проектная группа</p>
                <p className={styles.construction__number}>30+</p>
            </div>
        </div>
    );
};