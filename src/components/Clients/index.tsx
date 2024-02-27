import React, { useEffect, useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { Client } from '../../types'; // TypeScript Types or Interface
import { fetchData, clientsAPI } from '../API'; // ApiComponent manzilini to'g'rilang
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// react-reveal
import { Rotate  , Flip , Zoom , Fade} from "react-reveal";

export const Clients: FC<any> = () => {
    const [clients, setClients] = useState<any>([]);

    const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
        const video = event.currentTarget;
        if (video.paused) {
            video.play();
            video.requestFullscreen(); // Videoni full ekran rejimiga o'tkazish
        } else {
            video.pause();
        }
    };

   
useEffect(() => {
    const fetchClients = async () => {
        try {
            const data = await clientsAPI();
            setClients(data || []);
            console.log(data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    fetchClients();
}, []);

    return (
        <>
            <Fade  cascade>
                <div className={styles.client}>
                    <p className={styles.client__title}>НАМ ДОВЕРЯЮТ  </p>
                    <p className={styles.client__subTitle}>Наши клиенты</p>
                    <div className={styles.client__cards}>
                        {clients.map((client) => (
                            <div className={styles.client__videos} key={client._id}>
                                {/* <p className={styles.client__videoTitle}>{client.title}</p> */}
                                <video onClick={handleVideoClick} className={styles.client__video} controls >
                                    <source src={`http://152.42.162.108${client.video}`} type="video/mp4" />
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
        </>
    );
};