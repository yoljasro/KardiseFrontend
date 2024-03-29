import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.sass";
import { Client } from '../../types';
import { clientsAPI } from '../API';
import { FC } from "react";
import { Fade } from "react-reveal";

export const Clients: FC<any> = () => {
    const [clients, setClients] = useState<any>([]);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Massivdagi har bir element ref'ni yoki null'ni saqlaydi

    const handleVideoClick = (index: number) => () => { // Indeks orqali alohida funksiya ochish
        const video = videoRefs.current[index];

        if (video && !video.paused) { // Videoni to'g'ri obyekt bo'lib bo'lishini va to'xtatilmaganligini tekshirish
            video.pause();
        } else if (video) {
            video.play().then(() => video.requestFullscreen());
        }
    };

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const data = await clientsAPI();
                setClients(data || []);
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
                        {clients.map((client: Client, index: number) => ( // Indeks sifatida index qo'shildi
                            <div className={styles.client__videos} key={client._id}>
                                <div className={styles.client__video} onClick={handleVideoClick(index)}> {/* Alohwda funksiya chaqirilishi */}
                                    <video ref={(ref) => videoRefs.current[index] = ref} className={styles.client__videoPlay} width="100%" height="500">
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