import classes from '@/styles/components/Header.module.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

export default function Header() {
  return (
    <AppBar position="fixed" color="primary" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Link href="/" className={clsx(classes.logo, 'flex-centered')}>
          <Image
            className={classes.logoIcon}
            width="203"
            height="46"
            alt="logo"
            src="/white-ab-logo.svg"
          />
        </Link>
        <div className="flex-centered">
          <Link href="/products" className={classes.button}>
            <Typography color="primary.contrastText">Products</Typography>
          </Link>
          <Link href="/projects" className={classes.button}>
            <Typography color="primary.contrastText">Projects</Typography>
          </Link>
          <Link href="/solutions" className={classes.button}>
            <Typography color="primary.contrastText">Solutions</Typography>
          </Link>
          <Link href="/company" className={classes.button}>
            <Typography color="primary.contrastText">Company</Typography>
          </Link>
          <Link href="/resources" className={classes.button}>
            <Typography color="primary.contrastText">Resources</Typography>
          </Link>
          <Link href="/contact-us">
            <Button className="button">
              <Typography color="primary.contrastText">Contact us</Typography>
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
