import motor from '../assets/slides/slide_1/image.png';
import star from '../assets/slides/slide_1/star_power.png';

import styles from './slide-motor.module.css';

export const SlideMotor = () => {
  return (
    <section className={styles.slide}>
      <img className={styles.photo} src={motor} alt="" />
      <h2 className={styles.title}>
        Для ценителей комфорта
        <br />
        и качества в уходе за волосами
      </h2>
      <p className={styles.note}>Бесщеточный мотор BLDC</p>
      <img className={styles.star} src={star} alt="Салонная мощность" />
    </section>
  );
};
