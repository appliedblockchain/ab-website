import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import { carousel } from '@/data/carouselTestimonials';
import { Thumb } from './EmblaCarouselThumbsButton';
import { Typography, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    // containScroll: 'keepSnaps',
    dragFree: true,
    loop: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaMainRef}>
        <div className={classes.embla__container}>
          {carousel.map((slide) => (
            <div className={classes.embla__slide} key={uuidv4()}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  height={400}
                  width={420}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center">
                      <Image
                        width={60}
                        height={60}
                        src={slide.avatar}
                        alt={slide.avatar}
                      />
                      <Box
                        display="flex"
                        flexDirection="column"
                        className={classes.author}
                      >
                        <Typography variant="h6" color="primary.contrastText">
                          {slide.author}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          display="flex"
                        >
                          {slide.position} at{' '}
                          <Link
                            href={slide.linkToCaseStudy}
                            className={classes.company}
                          >
                            <Typography variant="subtitle1" color="primary">
                              {slide.company}
                            </Typography>
                          </Link>
                        </Typography>
                      </Box>
                    </Box>
                    <Box width="295px" height="180px" className="onlyMobile">
                      <ReactPlayer
                        width="295px"
                        height="180px"
                        url={slide.linkToVideo}
                      />
                    </Box>
                    <Box className={classes.quote}>
                      <Typography
                        variant="subtitle1"
                        color="primary.contrastText"
                      >
                        &quot;{slide.quote}&quot;
                      </Typography>
                    </Box>
                  </Box>
                  <Link href={slide.linkToCaseStudy}>
                    <Typography variant="body2" color="primary">
                      Case study
                    </Typography>
                  </Link>
                </Box>
                <Box width="485px" height="336px" className="onlyDesktop">
                  <ReactPlayer
                    width="485px"
                    height="336px"
                    url={slide.linkToVideo}
                  />
                </Box>
              </Box>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.embla__thumbs}>
        <IconButton onClick={scrollPrev}>
          <ArrowBack />
        </IconButton>
        <div className={classes.embla__thumbs__viewport} ref={emblaThumbsRef}>
          <div className={classes.embla__thumbs__container}>
            {carousel.map((slide, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={slide.logo.src}
                imgHgth={60}
                imgWdth={120}
                key={uuidv4()}
              />
            ))}
          </div>
        </div>
        <IconButton onClick={scrollNext}>
          <ArrowForward />
        </IconButton>
      </div>
    </div>
  );
}

export default Carousel;
