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
import { useTranslations } from "next-intl";

export const Info: FC<any> = () => {
  const t = useTranslations();

  return (
    <div className={styles.info}>
      <div className={styles.info__container}>
        <div className={styles.info__content}>
          <Zoom cascade>
            <p className={styles.info__text}>{t("info.title")}</p>
          </Zoom>
          <ul className={styles.info__list}>
            <Fade left cascade>
              <li>{t("info.project")}</li>
              <li>{t("info.build")}</li>
              <li>{t("info.work")}</li>
            </Fade>
          </ul>
        </div>

        <div className={styles.info__contentTwo}>
          <Zoom cascade>
            <p className={styles.info__text}>{t("info.activities")}</p>
          </Zoom>
          <ul className={styles.info__list}>
              <li>{t("info.project")}. </li>
              <li>{t("info.installation")}</li>
              <li>{t("info.injener")}</li>
              <li>{t("info.landscape")}</li>
              <li>{t("info.production")}.</li>
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