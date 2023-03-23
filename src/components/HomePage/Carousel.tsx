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

function Carousel() {
  const options = {};

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
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
          {carousel.map((slide, index) => (
            <div className={classes.embla__slide} key={index}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  height={400}
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
                          {slide.author} {index}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {slide.position} at{' '}
                          <Link href={slide.linkToCaseStudy}>
                            {slide.company}
                          </Link>
                        </Typography>
                      </Box>
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
                <Box width="485px" height="336px">
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
                index={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={slide.logo.src}
                imgHgth={slide.logo.height}
                imgWdth={slide.logo.width}
                key={index}
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
