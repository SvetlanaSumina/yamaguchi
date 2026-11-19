import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './pill.module.css';

type PillProps = {
  icon: string;
  kind: 'light' | 'motor';
  children: ReactNode;
};

export const Pill = ({ icon, kind, children }: PillProps) => {
  return (
    <div className={styles.pill}>
      <div className={cn(styles.ring, styles[kind])} />
      <img className={cn(styles.icon, styles[kind])} src={icon} alt="" />
      <p className={cn(styles.title, styles[kind])}>{children}</p>
    </div>
  );
};
