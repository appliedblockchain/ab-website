import classes from '../styles/Header.module.css';
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
        <div className='flex-centered'>
          <Link href="/products" className={clsx("link-no-underline", classes.button)}>
            <Typography color="white">Products</Typography>
          </Link>
          <Link href="/projects" className={clsx("link-no-underline", classes.button)}>
            <Typography color="white">Projects</Typography>
          </Link>
          <Link href="/solutions" className={clsx("link-no-underline", classes.button)}>
            <Typography color="white">Solutions</Typography>
          </Link>
          <Link href="/company" className={clsx("link-no-underline", classes.button)}>
            <Typography color="white">Company</Typography>
          </Link>
          <Link href="/resources" className={clsx("link-no-underline", classes.button)}>
            <Typography color="white">Resources</Typography>
          </Link>
          <Link href="/contact-us" className="link-no-underline">
            <Button className="button">
              <Typography color="white">Contact us</Typography>
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
