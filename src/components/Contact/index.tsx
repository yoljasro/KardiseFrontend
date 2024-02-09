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

export const Contact: FC<any> = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact__numbers}>
                <p>+ 998 93 389 13 12</p>
                <p>+ 998 93 389 54 39</p>
            </div>
            <div className={styles.contact__socials}>
                <FaTwitter  />
                <FaFacebookF />
                <FaLinkedinIn />
                <FaYoutube />
                <p> Write your number: </p>
            </div>  
        </div>
    );
};