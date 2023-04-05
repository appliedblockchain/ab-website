import React from 'react';
import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '@mui/material';

type PropType = {
  selected: boolean;
  imgSrc: string;
  imgWdth: number;
  imgHgth: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, imgWdth, imgHgth, onClick } = props;

  return (
    <div
      className={clsx(
        classes.embla__thumbs__slide,
        selected ? classes.embla__thumbs__slide__selected : '',
      )}
    >
      <Button
        onClick={onClick}
        className={classes.embla__thumbs__slide__button}
        type="button"
      >
        <Image
          src={imgSrc}
          alt={imgSrc}
          width={imgWdth}
          height={imgHgth}
          className={clsx(selected ? classes.whiteLogo : classes.logo)}
        />
      </Button>
    </div>
  );
};
