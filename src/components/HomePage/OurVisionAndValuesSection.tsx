import classes from '@/styles/HomePage/OurVisionAndValuesSection.module.css';
import React from 'react';
import { Grid, Typography, styled, Button } from '@mui/material';
import clsx from 'clsx';

const StyledSection = styled(Grid)(({ theme }) => ({
  height: '1100px',
  padding: '120px',
  backgroundImage: "url('/adi-ben-ari-bg.svg')",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

function OurVisionAndValuesSection() {
  return (
    <StyledSection item container xs={12}>
      <Grid item xs={12} className={clsx('flex-centered', 'column')}>
        <Typography variant="h4" color="primary">
          Our vision and values
        </Typography>
        <Typography variant="h2" color="white">
          Adi Ben-Ari
        </Typography>
        <Typography variant="subtitle1" color="white">
          Founder & CEO at Applied Blockchain
        </Typography>
        <Button className="button" variant="contained">
          <Typography variant="button" textTransform="none" color="white">
            About us
          </Typography>
        </Button>
      </Grid>
    </StyledSection>
  );
}

export default OurVisionAndValuesSection;
