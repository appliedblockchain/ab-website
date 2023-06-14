import classes from '@/styles/components/Footer.module.css';
import React from 'react';
import { Grid, Typography, styled, IconButton, Box } from '@mui/material';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { socialNetworks } from '@/data/socialNetworks';
import Image from 'next/image';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px',
  backgroundColor: theme.palette.primary.main,
  '@media screen and (max-width:900px)': {
    padding: '40px 24px',
  },
}));

function StayInTouchSection() {
  return (
    <StyledSection item container xs={12}>
      <Grid
        item
        xs={12}
        md={6}
        className={clsx('flex-centered', 'column', classes.texts)}
      >
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
        <Box>
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
        </Box>
      </Grid>
    </StyledSection>
  );
}

export default StayInTouchSection;
