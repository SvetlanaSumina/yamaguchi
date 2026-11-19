import motorIcon from '../assets/icons/motor-mob.svg';
import motor from '../assets/slides/slide-1/image.png';
import motorMob from '../assets/slides/slide-mob/image-mob.png';
import star from '../assets/slides/slide-1/star-power.png';
import starMob from '../assets/slides/slide-mob/star-power-mob.png';
import { Pill } from '../pill/pill';

import styles from './slide-motor.module.css';

export const SlideMotor = () => {
  return (
    <section className={styles.slide}>
      <div className={styles.desktop}>
        <img className={styles.photo} src={motor} alt="" />
        <h2 className={styles.title}>
          Для ценителей комфорта
          <br />
          и качества в уходе за волосами
        </h2>
        <p className={styles.note}>Бесщеточный мотор BLDC</p>
        <img className={styles.star} src={star} alt="Салонная мощность" />
      </div>
      <div className={styles.mobile}>
        <Pill icon={motorIcon} kind="motor">
          инновационный
          <br />
          японский мотор
        </Pill>
        <h2 className={styles.mobLead}>Для ценителей</h2>
        <p className={styles.mobAccent}>
          комфорта
          <br />и качества
        </p>
        <p className={styles.mobTail}>в уходе за волосами</p>
        <div className={styles.mobPhoto}>
          <img src={motorMob} alt="" />
          <p className={styles.mobNote}>
            Бесщеточный
            <br />
            мотор BLDC
          </p>
        </div>
        <img className={styles.mobStar} src={starMob} alt="Салонная мощность" />
      </div>
    </section>
  );
};
