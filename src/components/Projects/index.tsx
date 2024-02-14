// Projects.tsx
import React, { useEffect, useState } from 'react';
import { fetchData, clientsAPI } from '../API'; // ApiComponent manzilini to'g'rilang
import { Project } from '../../types'; // TypeScript Types yoki Interface
// styles
import styles from './index.module.sass'
// next components
import Image from "next/image";
import Link from "next/link";

export const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await fetchData('/projects'); // projects endpointni qo'shing
                setProjects(data || []);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className={styles.project}>
            <p className={styles.project__title}>НАМ ДОВЕРЯЮТ </p>
            <p className={styles.project__subTitle}>Наши Проекты</p>
            <div className={styles.project__cards}>
                {projects.map((project) => (
                    <div style={{ backgroundImage: `url(http://localhost:5000${project.image.replace(/\\/g, '/')})` }} className={styles.project__card} key={project._id}>
                        <div className={styles.project__card__info}>
                            <p className={styles.project__type}>{project.title}</p>
                            <p className={styles.project__name}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
