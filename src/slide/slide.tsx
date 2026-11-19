import center from '../assets/slides/slide-1/dryer-center.png';
import dryer from '../assets/slides/slide-1/dryer.png';
import styler from '../assets/slides/slide-1/styler.png';
import centerMob from '../assets/slides/slide-mob/dryer-center-mob.png';
import dryerMob from '../assets/slides/slide-mob/dryer-mob.png';
import stylerMob from '../assets/slides/slide-mob/styler-mob.png';
import { Badge } from '../badge/badge';

import styles from './slide.module.css';

export const Slide = () => {
  return (
    <section className={styles.slide}>
      <div className={styles.desktop}>
        <div className={styles.peach} />
        <div className={styles.mist} />
        <div className={styles.coral} />
        <img className={styles.dryer} src={dryer} alt="" />
        <img className={styles.styler} src={styler} alt="" />
        <img className={styles.center} src={center} alt="" />
        <h1 className={styles.title}>
          ФЕН и СТАЙЛЕР
          <br />
          в уникальном дизайне
        </h1>
        <Badge className={styles.mainBadge} tone="light" size="l">
          2 в 1
        </Badge>
        <Badge className={styles.dryerBadge} tone="dark" size="s">
          Фен
        </Badge>
        <Badge className={styles.stylerBadge} tone="light" size="s">
          Стайлер
        </Badge>
      </div>
      <div className={styles.mobile}>
        <img className={styles.mobBg} src={centerMob} alt="" />
        <h1 className={styles.mobTitle}>
          ФЕН и СТАЙЛЕР
          <br />
          в уникальном дизайне
        </h1>
        <Badge className={styles.mobMain} tone="light" size="l">
          2 в 1
        </Badge>
        <img className={styles.mobDryer} src={dryerMob} alt="" />
        <img className={styles.mobStyler} src={stylerMob} alt="" />
        <Badge className={styles.mobFen} tone="dark" size="s">
          Фен
        </Badge>
        <Badge className={styles.mobStylerBadge} tone="light" size="s">
          Стайлер
        </Badge>
      </div>
    </section>
  );
};
