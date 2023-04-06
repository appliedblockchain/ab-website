import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import { carousel } from '@/data/carouselTestimonials';
import { Thumb } from './EmblaCarouselThumbsButton';
import { Typography, Box, IconButton, styled, Modal } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';

const StyledPlayCircleIcon = styled(PlayCircleIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: '130px',
  height: '130px',
  '@media screen and (max-width:900px)': {
    width: '80px',
    height: '80px',
  },
}));

function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openModal, setOpenModal] = useState('');

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    loop: true,
  });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
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
                    <Box
                      width="295px"
                      height="180px"
                      className="onlyMobile"
                      marginTop="32px"
                    >
                      <div
                        className={classes.image}
                        style={{ backgroundImage: `url(${slide.videoImage})` }}
                      >
                        <IconButton
                          onClick={() =>
                            slide.linkToVideo.includes('youtu')
                              ? setOpenModal(slide.company)
                              : window.open(slide.linkToVideo, '_blank')
                          }
                        >
                          <StyledPlayCircleIcon />
                        </IconButton>
                      </div>
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
                  <div
                    className={classes.image}
                    style={{ backgroundImage: `url(${slide.videoImage})` }}
                  >
                    <IconButton
                      onClick={() =>
                        slide.linkToVideo.includes('youtu')
                          ? setOpenModal(slide.company)
                          : window.open(slide.linkToVideo, '_blank')
                      }
                    >
                      <StyledPlayCircleIcon />
                    </IconButton>
                  </div>
                </Box>
              </Box>
              <Modal
                className={classes.modal}
                open={openModal === slide.company}
                onClose={() => setOpenModal('')}
              >
                <div className={classes.modalContent}>
                  <ReactPlayer
                    className={clsx('onlyDesktop', classes.video)}
                    width="820px"
                    height="460px"
                    url={slide.linkToVideo}
                  />
                  <ReactPlayer
                    className={clsx('onlyMobile', classes.video)}
                    width="295px"
                    height="180px"
                    url={slide.linkToVideo}
                  />
                  <IconButton
                    className="onlyDesktop"
                    onClick={() => setOpenModal('')}
                  >
                    <CloseIcon className={classes.closeIcon} />
                  </IconButton>
                </div>
              </Modal>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.embla__thumbs}>
        <IconButton onClick={scrollPrev} className={classes.arrowBack}>
          <ArrowBack />
        </IconButton>
        <div className={classes.embla__thumbs__viewport} ref={emblaThumbsRef}>
          <div className={classes.embla__thumbs__container}>
            {carousel.map((slide, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={slide.logo}
                imgHgth={60}
                imgWdth={120}
                key={index}
              />
            ))}
          </div>
        </div>
        <IconButton onClick={scrollNext} className={classes.arrowForward}>
          <ArrowForward className={classes.arrowIcon} />
        </IconButton>
      </div>
    </div>
  );
}

export default Carousel;
