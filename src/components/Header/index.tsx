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

export const Header: FC<any> = () => {
    return (
        <div className={styles.header}>
            <div  className={styles.header__info}>
                <p className={styles.header__text}>Лидер - в сфере проектирования
                    и строительства</p>
                    <Btn/>
            </div>
        </div>
    );
};