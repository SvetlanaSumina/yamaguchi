import center from '../assets/slides/slide_1/dryer_center.png';
import dryer from '../assets/slides/slide_1/dryer.png';
import styler from '../assets/slides/slide_1/styler.png';
import { Badge } from '../badge/badge';

import styles from './slide.module.css';

export const Slide = () => {
  return (
    <section className={styles.slide}>
      <div className={styles.peach} />
      <div className={styles.mist} />
      <div className={styles.coral} />
      <img className={styles.dryer} src={dryer} alt="" />
      <img className={styles.styler} src={styler} alt="" />
      <img className={styles.center} src={center} alt="" />
      <h1 className={styles.title}>
        ФЕН И СТАЙЛЕР
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
    </section>
  );
};
