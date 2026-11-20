import cn from 'classnames';

import dryer from '../assets/icons/dryer.svg';
import dryerActive from '../assets/icons/dryer-active.svg';
import feather from '../assets/icons/feather.svg';
import featherActive from '../assets/icons/feather-active.svg';
import motor from '../assets/icons/motor.svg';
import motorActive from '../assets/icons/motor-active.svg';

import styles from './wheel.module.css';

const icons = [
  { id: 'dryer', idle: dryer, active: dryerActive, label: 'Фен-стайлер 2 в 1' },
  { id: 'feather', idle: feather, active: featherActive, label: 'Суперлёгкий' },
  { id: 'motor', idle: motor, active: motorActive, label: 'Инновационный японский мотор' },
];

export const Wheel = () => {
  return (
    <>
      <div className={styles.wheel}>
        <svg className={styles.ring} viewBox="0 0 706 706" aria-hidden>
          <circle cx="353" cy="353" r="353" />
        </svg>
        {icons.map((icon, index) => (
          <button
            key={icon.id}
            type="button"
            className={cn(styles.icon, styles[icon.id], index === 0 && styles.current)}
            data-icon
            aria-label={icon.label}
          >
            <img className={styles.idle} src={icon.idle} alt="" data-state="idle" />
            <img className={styles.on} src={icon.active} alt="" data-state="on" />
          </button>
        ))}
      </div>
      <span className={styles.caption}>
        {icons.map((icon, index) => (
          <span
            key={icon.id}
            className={cn(styles.label, icon.id === 'motor' && styles.motorLabel, index === 0 && styles.current)}
            data-label
          >
            {icon.label}
          </span>
        ))}
      </span>
    </>
  );
};
