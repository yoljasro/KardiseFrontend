import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react icons

export const Process: FC<any> = () => {
    return (
        <div className={styles.process}>
            <p className={styles.process__title}>ЧТО МЫ ДЕЛАЕМ </p>
            <p className={styles.process__subTitle}>Процес работы</p>
        </div>
    );
};