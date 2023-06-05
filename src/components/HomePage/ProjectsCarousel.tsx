import { Project } from '@/utils/types';
import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from '../ProjectCard';

interface Props {
  projects: Project[];
}

let nextItemTimer: NodeJS.Timer;

type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};

const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props;

  return (
    <div
      className={clsx(selected ? 'carousel-dot-selected' : 'carousel-dot')}
      onClick={onClick}
    ></div>
  );
};

const ProjectsCarousel = ({ projects }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('init', () => {
      const scrollSnaps = emblaApi.scrollSnapList();
      setScrollSnaps(scrollSnaps);
      nextItemTimer = setInterval(() => {
        emblaApi.scrollNext();
      }, 2500);
    });

    emblaApi.on('pointerUp', () => {
      clearInterval(nextItemTimer);
    });

    emblaApi.on('select', () => {
      const selected = emblaApi.selectedScrollSnap();
      setSelectedIndex(selected);
    });
  }, [emblaApi]);

  return (
    <>
      <div className={clsx('embla', 'emblaMaxWidth')} ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div key={uuidv4() + index}>
              <ProjectCard
                key={index}
                project={project}
                className={clsx('embla__slide')}
              />
            </div>
          ))}
        </div>
        <div className={clsx('flex-centered')}>
          {projects.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsCarousel;
