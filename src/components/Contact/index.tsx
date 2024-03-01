import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react icons
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaTelegram } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
// react reveal
import { Fade, Zoom, Flip, Rotate } from "react-reveal";

export const Contact: FC<any> = () => {
    return (
        <div className={styles.contact}>
            <Fade left cascade>
                <div className={styles.contact__numbers}>
                    <p>
                        <a href="tel:+998933891312">
                            + 998 93 389 13 12
                        </a>
                    </p>
                    <p>
                        <a href="tel:+998933895439">
                            + 998 93 389 54 39
                        </a>
                        </p>
                </div>
            </Fade >


            <div className={styles.contact__socials}>
                <Rotate cascade>
                    <GrInstagram className={styles.contact__icon} />
                    <FaFacebookF className={styles.contact__icon} />
                    {/* <FaLinkedinIn className={styles.contact__icon} /> */}
                    <FaTelegram className={styles.contact__icon} />
                    <FaYoutube className={styles.contact__icon} />
                </Rotate>

            </div>
        </div >
    );
};