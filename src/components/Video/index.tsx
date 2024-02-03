import React from 'react';
//styles
import styles from "./index.module.sass";
// next components
import Image from "next/image";
import Link from "next/link";

export const Video: React.FC = () => {

    return (
        <div className={styles.video}>
            <Image className={styles.video__image} src={'/assets/img/video.jpg'} alt='video' width={1900} height={500} />
        </div >
    );
};

