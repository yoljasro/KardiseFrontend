// index.tsx yoki index.js fayl

import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.sass";
import { Client } from '../../types';
import { clientsAPI } from '../API';
import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

export const Clients: FC<any> = () => {
    const [clients, setClients] = useState<any>([]);
    const videoRef = useRef<HTMLVideoElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const handleVideoClick = () => {
        if (videoRef.current) {
            const video = videoRef.current;

            if (video.paused) {
                video.play();
                video.requestFullscreen();
            } else {
                video.pause();
            }
        }
    };

    const handleImageClick = (client: Client) => {
        if (videoRef.current && imageRef.current) {
            const video = videoRef.current;
            const videoSource = `http://152.42.162.108${client.video}`;
            const image = imageRef.current;

            if (video.paused) {
                video.src = videoSource;
                video.load();
                video.play();
                video.requestFullscreen();
                image.style.display = "none"; // Rasmni yashirish
            } else {
                video.pause();
                image.style.display="none"
            }
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
            <Fade cascade>
                <div className={styles.client}>
                    <p className={styles.client__title}>НАМ ДОВЕРЯЮТ  </p>
                    <p className={styles.client__subTitle}>Наши клиенты</p>
                    <div className={styles.client__cards}>
                        {clients.map((client: Client) => (
                            <div className={styles.client__videos} key={client._id}>
                                <div className={styles.client__video} onClick={() => handleImageClick(client)}>
                                    <Image ref={imageRef} className={styles.client__image} alt="image" src="/assets/img/uzumPage.png" width={300} height={200} />
                                    <div className={styles.client__play}>
                                        <div className={styles.client__triangle}></div>
                                    </div>
                                    <video ref={videoRef} className={styles.client__video__video}>
                                        <source src="" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        ))}     
                    </div>
                </div>
            </Fade>
        </>
    );
};

