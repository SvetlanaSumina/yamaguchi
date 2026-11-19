import styles from './app.module.css';
import { Slide } from './slide/slide';
import { SlideLight } from './slide/slide-light';
import { SlideMotor } from './slide/slide-motor';
import { Wheel } from './wheel/wheel';

export const App = () => {
  return (
    <main className={styles.page}>
      <Wheel />
      <Slide />
      <SlideLight />
      <SlideMotor />
    </main>
  );
};
