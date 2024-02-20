// Projects.tsx
import React, { useEffect, useState } from 'react';
import { projectsLogoAPI } from '../API';
import { ProjectLogoResponse, ProjectLogos } from '../../types';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//styles
import styles from './index.module.sass'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

export const ProjectsLogo: React.FC = () => {
    const [projectLogos, setProjectLogos] = useState<ProjectLogos[]>([]);

    useEffect(() => {
        const fetchProjectsLogos = async () => {
            try {
                const data = await projectsLogoAPI();
                setProjectLogos(data || []); // O'zgartirildi
                console.log(data)
            } catch (error) {
                console.error('Error fetching projectlogos:', error);
            }
        };

        fetchProjectsLogos();
    }, []);

    return (
        <div className={styles.projectsLogo}>
          <p className={styles.projectsLogo__title}>НАМ ДОВЕРЯЮТ </p>
          <p className={styles.projectsLogo__subTitle}>Наши Проекты</p>
          {projectLogos.length > 0 ? (
            <Carousel
              className={styles.projectLogo__carousel}
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              rewindWithAnimation={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .6"
              transitionDuration={200}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-90-px"
            >
              {projectLogos.map((logo, index) => (
                <div key={index} className={styles.projectsLogo__logos}>
                  <img
                    // className={styles.projectLogo__logo}
                    src={`http://localhost:5000${logo.image}`}
                    alt={`Logo ${index + 1}`}
                    width="100%" 
                    height="auto" 
                  />
                </div>
              ))}
            </Carousel>
            ) : (
                <p>Rasmlar yuklanmoqda...</p>
            )
            }
        </div >
    );
};
