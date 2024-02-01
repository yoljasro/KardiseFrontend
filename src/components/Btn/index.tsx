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

export const Btn: FC<any> = () => {
    return (
        <div className={styles.btn}>
            УЗНАТЬ БОЛЬШЕ 
            <Image src={'/assets/img/arrow.svg'} alt="arrow"  width={13} height={14}/>
        </div>
    );
};