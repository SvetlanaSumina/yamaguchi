import styles from './app.module.css';
import { Slide } from './slide/slide';
import { SlideLight } from './slide/slide-light';
import { SlideMotor } from './slide/slide-motor';
import { useSlideScroll } from './slider/use-slide-scroll';
import { Wheel } from './wheel/wheel';

export const App = () => {
  const pageRef = useSlideScroll();

  return (
    <main ref={pageRef} className={styles.page}>
      <Wheel />
      <Slide />
      <SlideLight />
      <SlideMotor />
    </main>
  );
};
