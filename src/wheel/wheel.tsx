import dryerActive from '../assets/icons/dryer-active.svg';
import feather from '../assets/icons/feather.svg';
import motor from '../assets/icons/motor.svg';

import styles from './wheel.module.css';

export const Wheel = () => {
  return (
    <>
      <div className={styles.wheel} aria-hidden>
        <svg className={styles.ring} viewBox="0 0 706 706">
          <circle cx="353" cy="353" r="353" />
        </svg>
      </div>

      <button type="button" className={styles.featherBtn}>
        <img className={styles.feather} src={feather} alt="" />
      </button>
      <button type="button" className={styles.motorBtn}>
        <img className={styles.motor} src={motor} alt="" />
      </button>
      <button type="button" className={styles.active}>
        <img className={styles.dryer} src={dryerActive} alt="" />
      </button>
      <span className={styles.caption}>
        <span className={styles.label}>Фен-стайлер 2 в 1</span>
      </span>
    </>
  );
};
