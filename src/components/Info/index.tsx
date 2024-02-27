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
      <div>
        <div className={styles.info__content}>
          <Zoom cascade>
            <p className={styles.info__text}>Компания KARDISE - многопрофильная структура, масштабы бизнеса которой выходят за рамки исключительно девелоперской деятельности.
              Деятельность группы сфокусирована на нескольких бизнес-направлениях</p>
          </Zoom>
          <ul className={styles.info__list}>
            <Fade left cascade>
              <li>строительство и девелопмент </li>
              <li>инвестиции в землю</li>
              <li>инвестиции в сфере общепита</li>
              <li>инвестиции в сфере обслуживание машин и механизмов.</li>
            </Fade>
          </ul>
        </div>

        <div className={styles.info__contentTwo}>
          <Zoom cascade>
            <p className={styles.info__text}>Основными направлениями деятельности компании KARDISE являются:</p>
          </Zoom>
          <ul className={styles.info__list}>
              <li>строительство объектов жилья, социальных объектов и коммерческой недвижимости </li>
              <li>оформление земельных участков под строительство </li>
              <li>проектные и архитектурные работы </li>
              <li>строительно-монтажные работы</li>
              <li> устройство инженерии и телекоммуникаций</li>
              <li>снос и реконструкция ветхого жилого фонда </li>
              <li>отделочные работы и благоустройство территорий</li>
              <li>производствостроительныхматериалови конструкций.</li>
          </ul>
        </div>
      </div>

      <div className={styles.info__mediaCards}>
        <Zoom right cascade>
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
          <Image src={'/assets/img/ruler.svg'} alt="ruler" width={78} height={75} />
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
        </Zoom>
      </div>
    </div>
  );
};