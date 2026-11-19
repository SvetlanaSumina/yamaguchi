import cn from 'classnames';

import styles from './badge.module.css';

type BadgeProps = {
  tone: 'light' | 'dark';
  size: 's' | 'l';
  className?: string;
  children: string;
};

export const Badge = ({ tone, size, className, children }: BadgeProps) => {
  return <div className={cn(styles.badge, styles[tone], styles[size], className)}>{children}</div>;
};
