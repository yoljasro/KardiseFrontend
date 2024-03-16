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
            <div className={styles.contact__adress}>
                <p>8A, Ташкентская кольцевая автомобильная дорога</p>
            </div>


            <div className={styles.contact__socials}>
                <Rotate cascade>
                    <Link target="_blank" href={'https://www.instagram.com/kardisedevelopment/'}>
                    <GrInstagram className={styles.contact__icon} />
                    </Link>
                    <Link  target="_blank" href={'https://fb.com/KardiseDevelopment'}>
                    <FaFacebookF className={styles.contact__icon} />
                    </Link>
                    <Link target="_blank" href={'https://t.me/kardise_engineering'}>
                    <FaTelegram className={styles.contact__icon} />
                    </Link>
                    <Link target="_blank" href={'https://www.youtube.com/watch?v=TDo1OF0_bMM'}>
                    <FaYoutube className={styles.contact__icon} />
                    </Link>
                </Rotate>

            </div>
        </div >
    );
};