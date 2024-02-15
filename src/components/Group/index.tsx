import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../Btn";
// react icons

export const Group: FC<any> = () => {
    return (
        <div className={styles.group}>
            <div className={styles.group__person}>
                <div className={styles.group__card}>
                    <p className={styles.group__cardTitle}>26+</p>
                    <p className={styles.group__cardSubTitle}>ГОДЫ ОПЫТА </p>
                </div>
            </div>

            <div className={styles.group__info}>
                <p className={styles.group__title}>О НАС </p>
                <p className={styles.group__desc}>Мы предоставляем лучшее <br /> обслуживание клиентов</p>
                <div className={styles.group__storyCard}>
                    <p className={styles.group__storyCardInfo}>Историянашегоразвития—это иллюстрация прочных и надежных стремлений нашей созидательной работы, многогранной трудовой деятельности коллектива компании,того,как мы постепенно продвигаясь,смогли предвидетьи просчитать будущие шаг и на многое годы вперед.</p>
                    <p className={styles.group__storyCardName}> Kardise group</p>
                </div>
                <Btn/>
            </div>
        </div>
    );
};