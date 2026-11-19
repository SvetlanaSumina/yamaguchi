import feather from '../assets/icons/feather-mob.svg';
import girl from '../assets/slides/slide-1/girl.png';
import girlMob from '../assets/slides/slide-mob/girl-mob.png';
import star from '../assets/slides/slide-1/star.png';
import starMob from '../assets/slides/slide-mob/star-mob.png';
import { Badge } from '../badge/badge';
import { Pill } from '../pill/pill';

import styles from './slide-light.module.css';

export const SlideLight = () => {
  return (
    <section className={styles.slide}>
      <div className={styles.desktop}>
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
      </div>
      <div className={styles.mobile}>
        <Pill icon={feather} kind="light">
          лёгкость
          <br />
          и комфорт
          <br />в руке
        </Pill>
        <h2 className={styles.mobTitle}>суперлёгкий</h2>
        <Badge className={styles.mobWeight} tone="light" size="s">
          500 г
        </Badge>
        <img className={styles.mobGirl} src={girlMob} alt="" />
        <img className={styles.mobStar} src={starMob} alt="Не тяжелее чашки кофе" />
        <p className={styles.mobText}>
          Уменьшает усталость рук при сушке волос, делая процедуру удобной и приятной даже после
          напряжённого рабочего дня.
        </p>
      </div>
    </section>
  );
};
