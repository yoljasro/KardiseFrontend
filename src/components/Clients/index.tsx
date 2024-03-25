import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.sass";
import { Client } from '../../types';
import { clientsAPI } from '../API';
import { FC } from "react";
import { Fade } from "react-reveal";

export const Clients: FC<any> = () => {
    const [clients, setClients] = useState<any>([]);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoClick = () => {
        if (videoRef.current) {
            const video = videoRef.current;

            if (video.paused) {
                video.play().then(() => video.requestFullscreen());
            } else {
                video.pause();
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
                    <p className={styles.client__subTitle}>Наши Проекты</p>
                    <div className={styles.client__cards}>
                        {clients.map((client: Client) => (
                            <div className={styles.client__videos} key={client._id}>
                                <div className={styles.client__video} onClick={handleVideoClick}>
                                    <video ref={videoRef} className={styles.client__videoPlay} width="100%" height="500">
                                        <source src={`https://api.kardise.com${client.video}`} type="video/mp4" />
                                    </video>
                                    <div className={styles.client__play}>
                                        <div className={styles.client__play__triangle}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
        </>
    );
};
