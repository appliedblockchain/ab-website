import classes from '@/styles/components/Footer.module.css';
import { footerMenu } from '@/data/footerMenu';
import { Grid, Typography, styled } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const StyledFooter = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  padding: '60px 120px',
}));

export default function Footer() {
  return (
    <StyledFooter container>
      <Grid item container xs={12}>
        {footerMenu.map((column) => (
          <Grid
            item
            xs={6}
            md={2}
            className={clsx('flex-centered', 'column', classes.menu)}
            key={uuidv4()}
          >
            <Typography
              variant="body2"
              color="grey.500"
              className={classes.columnTitle}
            >
              {column.title}
            </Typography>
            {column.items.map((item) => (
              <Link
                href={item.link}
                key={uuidv4()}
                className={classes.menuItem}
              >
                <Typography variant="body1" color="common.white">
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Grid>
        ))}
      </Grid>
      <Grid item xs={2} className="flex-centered">
        <Image width="203" height="46" alt="logo" src="/white-ab-logo.svg" />
        <Link href="/privacy-police" className={classes.privacyPolice}>
          <Typography variant="body1" color="common.white">
            Privacy Policy
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="overline" color="grey.400">
          © Copyright 2022 Applied Blockchain Ltd. All rights reserved. Applied
          Blockchain Ltd is a company registered in England and Wales. Company
          No. 09686276
        </Typography>
      </Grid>
    </StyledFooter>
  );
}
