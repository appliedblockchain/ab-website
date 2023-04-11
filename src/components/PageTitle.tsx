import React from 'react';
import { Typography, styled, Grid } from '@mui/material';

type Props = {
  title: string;
  subtitle: string;
};

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '80px 120px',
  backgroundColor: theme.palette.primary.main,
  '@media screen and (max-width:900px)': {
    padding: '60px 16px 50px 16px',
  },
}));

function PageTitle({ title, subtitle }: Props) {
  return (
    <StyledSection item container xs={12}>
      <Grid item xs={12} marginBottom="24px">
        <Typography color="common.white" variant="h3">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="common.white" variant="subtitle1">
          {subtitle}
        </Typography>
      </Grid>
    </StyledSection>
  );
}

export default PageTitle;
