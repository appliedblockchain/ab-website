import classes from '@/styles/HomePage/StayInTouchSection.module.css';
import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import clsx from 'clsx';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px',
  backgroundColor: theme.palette.primary.main,
}));

function StayInTouchSection() {
  return (
    <StyledSection item container xs={12}>
      <Grid item xs={6} className={clsx('flex-centered', 'column', classes.texts)}>
        <Typography variant="h4" color="white">
          Stay in touch
        </Typography>
        <Typography variant="subtitle1" color="white">
          Announcements can be found in our blog. Press contact:
        </Typography>
      </Grid>
    </StyledSection>
  );
}

export default StayInTouchSection;
