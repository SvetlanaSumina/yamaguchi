import styles from './app.module.css';
import { Wheel } from './wheel/wheel';

export const App = () => {
  return (
    <main className={styles.page}>
      <Wheel />
      <section className={styles.slide} />
    </main>
  );
};
