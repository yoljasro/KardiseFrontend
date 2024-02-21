import React, { useState } from "react";
//styles
import styles from "../styles/park.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
// constants

const Park: FC<any> = () => {
    return (
        <div className={styles.park}>
            <div className={styles.park__background}>
                <p className={styles.park__title}>Парк Техники</p>
                <div className={styles.park__card}>
                    <div className={styles.park__line}>
                        <p className={styles.park__call}>ПОЗВОНИТЕ НАМ СЕГОДНЯ </p>
                        <p className={styles.park__number}>+ 998 93 389 13 12</p>
                        <p className={styles.park__number}>+ 998 93 389 54 39</p>
                    </div>
                </div>
            </div>

            <div className={styles.park__cards}>
                <div className={styles.park__content}>
                    <Image src={'/assets/img/park.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                    <div className={styles.park__info}>
                        <p className={styles.park__cardName}>КРАН ZOOMLION QY55V</p>
                        <div className={styles.park__statistics}>
                            <ul className={styles.park__listone}>
                                <li>Объём двигателя</li>
                                <li>Наработка</li>
                                <li>Высота подъёма</li>
                                <li>Высота подъёма</li>
                            </ul>
                            <ul className={styles.park__listtwo}>
                                <li>10 000 куб. см.</li>
                                <li>1м/4.</li>
                                <li>59,00 м.</li>
                                <li>55 тг.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.park__content}>
                    <div className={styles.park__info}>
                        <p className={styles.park__cardName}>KPAH ZOOMLION QY35V</p>
                        <div className={styles.park__statistics}>
                            <ul className={styles.park__listone}>
                                <li>Объём двигателя</li>
                                <li>Наработка</li>
                                <li>Высота подъёма</li>
                                <li>Высота подъёма</li>
                            </ul>
                            <ul className={styles.park__listtwo}>
                                <li>10 000 куб. см.</li>
                                <li>1м/4.</li>
                                <li>59,00 м.</li>
                                <li>55 тг.</li>
                            </ul>
                        </div>
                    </div>
                    <Image src={'/assets/img/park.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                </div>


                <div className={styles.park__content}>
                    <Image src={'/assets/img/park.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                    <div className={styles.park__info}>
                        <p className={styles.park__cardName}>САМОСВАЛ HOWO 6X4 20M3</p>
                        <div className={styles.park__statistics}>
                            <ul className={styles.park__listone}>
                                <li>Колесная формула</li>
                                <li>Грузоподъемность</li>
                                <li>Габариты кузова (Д*Ш*В)</li>
                                <li> мм</li>
                            </ul>
                            <ul className={styles.park__listtwo}>
                                <li>6x4.</li>
                                <li>До 25 т.</li>
                                <li>8,5*2,5*2,9 м.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.park__content}>
                    <div className={styles.park__info}>
                        <p className={styles.park__cardName}>ЭКСКАВАТОР DOSAN DX140</p>
                        <div className={styles.park__statistics}>
                            <ul className={styles.park__listone}>
                                <li> Эксплуатационная масса</li>
                                <li>Объем ковша</li>
                            </ul>
                            <ul className={styles.park__listtwo}>
                                <li>13750-15560 kr.</li>
                                <li>0.24-0.76 M3</li>
                            </ul>
                        </div>
                    </div>
                    <Image src={'/assets/img/park.png'} alt="parkmage" className={styles.park__image} width={589} height={433} />
                </div>
            </div>
        </div >
    );
};

export default Park;