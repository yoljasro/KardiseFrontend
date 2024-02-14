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

export const Clients: FC<any> = () => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const data = await clientsAPI();
                setClients(data || []);
                console.log(data) // Agar ma'lumotlar bo'lmasa, bo'sh array bilan to'ldiring
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []);

    return (
        <div className={styles.client}>
            <p className={styles.client__title}>НАМ ДОВЕРЯЮТ  </p>
            <p className={styles.client__subTitle}>Наши клиенты</p>
            <div className={styles.client__cards}>
                {clients.map((client) => (
                    <div className={styles.client__videos} key={client._id}>
                        <p className={styles.client__videoTitle}>{client.title}</p>
                        <video className={styles.client__video} controls autoPlay>
                            <source src={`http://localhost:5000${client.video}`} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};