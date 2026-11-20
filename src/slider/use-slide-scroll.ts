import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DESKTOP = '(min-width: 1024px)';
const DURATION = 0.35;
const EASE = 'power1.inOut';
const RADIUS = 353;
const STEP = (18.07 * Math.PI) / 180;
const TURN = Math.PI * 2;

const slot = (icon: number, active: number, count: number) => {
  const delta = (icon - active + count) % count;

  if (delta === 0) return 0;

  return delta === 1 ? -STEP : STEP;
};

export const useSlideScroll = () => {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const slides = gsap.utils.toArray<HTMLElement>('section', page);
    const icons = gsap.utils.toArray<HTMLElement>('[data-icon]', page);
    const labels = gsap.utils.toArray<HTMLElement>('[data-label]', page);

    if (slides.length < 2) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add(DESKTOP, () => {
      let current = 0;
      const count = icons.length;
      const motions = icons.map((icon, index) => {
        const angle = slot(index, 0, count);
        const active = index === 0;

        gsap.set(icon, {
          left: RADIUS,
          top: RADIUS,
          xPercent: -50,
          yPercent: -50,
          x: Math.cos(angle) * RADIUS,
          y: Math.sin(angle) * RADIUS,
          width: active ? 103 : 74,
          height: active ? 103 : 74,
          backgroundColor: active ? '#dbdbdb' : '#746d68',
          zIndex: active ? 3 : 2,
        });
        gsap.set(icon.querySelector('[data-state="idle"]'), { autoAlpha: active ? 0 : 1 });
        gsap.set(icon.querySelector('[data-state="on"]'), { autoAlpha: active ? 1 : 0 });

        return { angle };
      });

      labels.forEach((label, index) => {
        gsap.set(label, { autoAlpha: index === 0 ? 1 : 0 });
      });

      const turn = (active: number, forward: boolean) => {
        icons.forEach((icon, index) => {
          const motion = motions[index];
          const clockwise = ((slot(index, active, count) - motion.angle) % TURN + TURN) % TURN;
          const travel = clockwise === 0 ? 0 : forward ? clockwise : clockwise - TURN;

          gsap.to(motion, {
            angle: motion.angle + travel,
            duration: DURATION,
            ease: EASE,
            overwrite: 'auto',
            onUpdate: () => {
              gsap.set(icon, {
                x: Math.cos(motion.angle) * RADIUS,
                y: Math.sin(motion.angle) * RADIUS,
              });
            },
          });

          const on = index === active;

          gsap.set(icon, { zIndex: on ? 3 : 2 });
          gsap.to(icon, {
            width: on ? 103 : 74,
            height: on ? 103 : 74,
            backgroundColor: on ? '#dbdbdb' : '#746d68',
            duration: DURATION,
            ease: EASE,
            overwrite: 'auto',
          });
          gsap.to(icon.querySelector('[data-state="idle"]'), {
            autoAlpha: on ? 0 : 1,
            duration: DURATION,
            ease: EASE,
            overwrite: 'auto',
          });
          gsap.to(icon.querySelector('[data-state="on"]'), {
            autoAlpha: on ? 1 : 0,
            duration: DURATION,
            ease: EASE,
            overwrite: 'auto',
          });
        });

        labels.forEach((label, index) => {
          gsap.to(label, {
            autoAlpha: index === active ? 1 : 0,
            duration: DURATION,
            ease: EASE,
            overwrite: 'auto',
          });
        });
      };

      gsap.set(slides[0], { xPercent: 0, yPercent: 0, autoAlpha: 1, zIndex: 1 });
      gsap.set(slides.slice(1), { xPercent: 0, yPercent: -100, autoAlpha: 0, zIndex: 0 });

      const show = (next: number) => {
        if (next === current || !slides[next]) return;

        const forward = next > current;
        const incoming = slides[next];
        const outgoing = slides[current];

        current = next;

        gsap.set(incoming, { zIndex: 1 });
        gsap.set(outgoing, { zIndex: 0 });
        gsap.fromTo(
          incoming,
          { yPercent: forward ? -100 : 100, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: DURATION, ease: EASE, overwrite: 'auto' },
        );
        gsap.to(outgoing, {
          yPercent: forward ? 100 : -100,
          autoAlpha: 0,
          duration: DURATION,
          ease: EASE,
          overwrite: 'auto',
        });
        turn(next, forward);
      };

      const trigger = ScrollTrigger.create({
        trigger: page,
        pin: true,
        start: 'top top',
        end: () => `+=${window.innerHeight * (slides.length - 1)}`,
        snap: 1 / (slides.length - 1),
        onUpdate: (self) => {
          show(Math.round(self.progress * (slides.length - 1)));
        },
      });

      const onClick = (event: Event) => {
        const index = icons.indexOf(event.currentTarget as HTMLElement);

        if (index < 0) return;

        const y = trigger.start + ((trigger.end - trigger.start) * index) / (slides.length - 1);

        trigger.scroll(y);
      };

      icons.forEach((icon) => icon.addEventListener('click', onClick));

      return () => {
        icons.forEach((icon) => icon.removeEventListener('click', onClick));
        trigger.kill();
      };
    });

    return () => {
      media.revert();
    };
  }, []);

  return pageRef;
};
