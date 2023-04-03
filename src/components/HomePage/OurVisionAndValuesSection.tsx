import React from 'react';
import { Grid, Typography, styled, Button, IconButton } from '@mui/material';
import clsx from 'clsx';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const StyledSection = styled(Grid)(({ theme }) => ({
  height: '1100px',
  backgroundImage: "url('/adi-ben-ari-bg.svg')",
  backgroundColor: theme.palette.grey[900],
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '@media screen and (max-width:900px)': {
    height: '600px',
  },
}));

const StyledPlayCircleIcon = styled(PlayCircleIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: '130px',
  height: '130px',
  margin: '60px 0',
  '@media screen and (max-width:900px)': {
    width: '80px',
    height: '80px',
  },
}));

function OurVisionAndValuesSection() {
  return (
    <StyledSection item container xs={12}>
      <Grid item xs={12} className={clsx('flex-centered', 'column')}>
        <Typography variant="h4" color="primary">
          Our vision and values
        </Typography>
        <Typography variant="h2" color="primary.contrastText">
          Adi Ben-Ari
        </Typography>
        <Typography variant="subtitle1" color="grey.100">
          Founder & CEO at Applied Blockchain
        </Typography>
        <IconButton
          onClick={() => window.open('https://www.youtube.com/', '_blank')}
        >
          <StyledPlayCircleIcon />
        </IconButton>
        <Button className="button" variant="contained">
          <Typography
            variant="button"
            textTransform="none"
            color="primary.contrastText"
          >
            About us
          </Typography>
        </Button>
      </Grid>
    </StyledSection>
  );
}

export default OurVisionAndValuesSection;
