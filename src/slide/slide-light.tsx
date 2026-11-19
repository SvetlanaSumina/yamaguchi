import girl from '../assets/slides/slide_1/girl.png';
import star from '../assets/slides/slide_1/star.png';
import { Badge } from '../badge/badge';

import styles from './slide-light.module.css';

export const SlideLight = () => {
  return (
    <section className={styles.slide}>
      <div className={styles.glow} />
      <img className={styles.girl} src={girl} alt="" />
      <img className={styles.star} src={star} alt="Не тяжелее чашки кофе" />
      <h2 className={styles.title}>
        супер-
        <br />
        лёгкий
      </h2>
      <p className={styles.text}>
        Уменьшает усталость рук при сушке волос, делая процедуру удобной и приятной даже после
        напряжённого рабочего дня.
      </p>
      <Badge className={styles.weight} tone="light" size="s">
        500 г
      </Badge>
    </section>
  );
};
