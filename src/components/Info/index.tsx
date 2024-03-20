import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../Btn";
// react-reveal
import { Rotate, Flip, Fade, Zoom } from "react-reveal";

export const Info: FC<any> = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__container}>
        <div className={styles.info__content}>
          <Zoom cascade>
            <p className={styles.info__text}>Компания KARDISE - многопрофильная структура, масштабы <br /> бизнеса которой выходят за рамки исключительно девелоперской деятельности.
              Деятельность группы сфокусирована на нескольких бизнес-направлениях:</p>
          </Zoom>
          <ul className={styles.info__list}>
            <Fade left cascade>
              <li>Проектирование. </li>
              <li>Строительство промышленных и гражданских обьектов.</li>
              <li>Полный спектр проектно-инженерных работ.</li>
            </Fade>
          </ul>
        </div>

        <div className={styles.info__contentTwo}>
          <Zoom cascade>
            <p className={styles.info__text}>Основными направлениями деятельности компании KARDISE <br /> являются:</p>
          </Zoom>
          <ul className={styles.info__list}>
              <li>Проектирование. </li>
              <li>Строительно-монтажные работы.</li>
              <li>Устройство инженерии и телекоммуникаций.</li>
              <li>Отделочные работы и благоустройство территорий.</li>
              <li>Производство металических и железо-бетонных конструкций.</li>
          </ul>
        </div>
      </div>

      {/* <div className={styles.info__mediaCards}>
        <div className={styles.info__card}>
          <Image src={'/assets/img/ruler.svg'} alt="ruler" width={78} height={75} />
          <p className={styles.info__cardTitle}>Строительная группа</p>
        </div>
        <div className={styles.info__card}>
          <Image src={'/assets/img/shape.svg'} alt="ruler" width={78} height={75} />
          <div>
            <p className={styles.info__cardTitle}>ИТР - состав</p>
            <p className={styles.info__cardDesc}>Инженер строитель (прораб) - 10 человек; Инженер техники безопасности - 2 человека; Геодезист - 2 человека.</p>
          </div>
        </div>

        <div className={styles.info__card}>
          <Image src={'/assets/img/infoicon.svg'} alt="ruler" width={78} height={75} />
          <div>
            <p className={styles.info__cardTitle}>Проектная группа</p>
            <p className={styles.info__cardDesc}>Инженер конструктор - 7 человек; Архитектор - 3 человека;
              Главный инженер - 2 человека;
              Инженер ОВ - 3человека; Инженер ВК - 3человека; Инженер ЭС - 3 человека;
              Инженер сметчик - 3 человека;
              Инженер ТХ - 3человека;
              Инженер слаботочных систем - 3 человека.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};