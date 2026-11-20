import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DESKTOP = '(min-width: 1024px)';
const DURATION = 0.35;

export const useSlideScroll = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const slides = gsap.utils.toArray<HTMLElement>('section', page);

    if (slides.length < 2) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add(DESKTOP, () => {
      let current = 0;

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
          { yPercent: 0, autoAlpha: 1, duration: DURATION, ease: 'power1.inOut', overwrite: 'auto' },
        );
        gsap.to(outgoing, {
          yPercent: forward ? 100 : -100,
          autoAlpha: 0,
          duration: DURATION,
          ease: 'power1.inOut',
          overwrite: 'auto',
        });
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

      return () => {
        trigger.kill();
      };
    });

    return () => {
      media.revert();
    };
  }, []);

  return pageRef;
};
