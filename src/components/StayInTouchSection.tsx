import classes from '@/styles/components/Footer.module.css';
import React from 'react';
import { Grid, Typography, styled, IconButton, Box } from '@mui/material';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { socialNetworks } from '@/data/socialNetworks';
import Image from 'next/image';
import Script from 'next/script';


function StayInTouchSection() {
  return (
    <Grid container item xs={12} className='stay-in-touch-main-container' justifyContent={'space-between'}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" color="primary.contrastText">
          Stay in touch
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary.contrastText"
          className={classes.announceText}
        >
          Announcements can be found in our blog. Press contact:
        </Typography>
        <Grid container item>
          {socialNetworks.map((el) => (
            <IconButton
            className={classes.iconButton}
            key={uuidv4()}
            href={el.href}
            >
              <Image
                width="32"
                height="32"
                alt={el.title}
                src={'/social/' + el.title + '.svg'}
                />
            </IconButton>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <div className="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/32RioGTUcthAAfecFePcCcRAEQDTP9bAXe1GM1YjmqG0xzCxQLLB2wsfwn1PNECYz">
          <Script src="https://webforms.pipedrive.com/f/loader"></Script>
        </div>
      </Grid>
      </Grid>
  );
}

export default StayInTouchSection;
