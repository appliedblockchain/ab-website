import React, { useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { logos } from '@/data/carouselLogos';
import classes from '@/styles/HomePage/GrowSection.module.css';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const TrustedCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: false,
  });
  const rafId = useRef(0);

  const animate = useCallback(() => {
    if (!embla || !rafId.current) return;

    const engine = embla.internalEngine();
    engine.location.add(-1);
    engine.target.set(engine.location);
    engine.scrollLooper.loop(-1);
    engine.slideLooper.loop();
    engine.translate.to(engine.location);
    rafId.current = requestAnimationFrame(animate);
  }, [embla]);

  const startAutoScroll = useCallback(() => {
    rafId.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopAutoScroll = useCallback(() => {
    rafId.current = cancelAnimationFrame(rafId.current) || 0;
  }, []);

  useEffect(() => {
    if (!embla) return;

    embla.on('pointerDown', stopAutoScroll);
    embla.on('settle', startAutoScroll);

    startAutoScroll();
    return () => stopAutoScroll();
  }, [embla, startAutoScroll, stopAutoScroll]);

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={viewportRef}>
        <div className={classes.embla__container}>
          {logos.map((logo) => (
            <div className={classes.embla__slide} key={logo.src}>
              <div className={classes.embla__slide__inner}>
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  key={uuidv4()}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCarousel;
