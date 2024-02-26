import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react icons
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube  , FaInstagram} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
// react reveal
import { Fade, Zoom , Flip , Rotate} from "react-reveal";

export const Contact: FC<any> = () => {
    return (
        <div className={styles.contact}>
            <Fade left cascade>
                <div className={styles.contact__numbers}>
                    <p>+ 998 93 389 13 12</p>
                    <p>+ 998 93 389 54 39</p>
                </div>
            </Fade>


            <div className={styles.contact__socials}>
                <Rotate  cascade>
                <GrInstagram className={styles.contact__icon} />
                    <FaFacebookF className={styles.contact__icon} />
                    <FaLinkedinIn className={styles.contact__icon} />
                    <FaYoutube className={styles.contact__icon} />
                </Rotate>

            </div>
        </div >
    );
};