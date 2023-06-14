import classes from '@/styles/components/Header.module.css';
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  styled,
  Theme,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const routesWithWhiteHeader = ['/projects/[slug]'];

function getHeaderColorFalseTrigger(theme: Theme, route: string) {
  if (routesWithWhiteHeader.includes(route)) {
    return theme.palette.common.black;
  }
  return theme.palette.common.white;
}

function getLogoNotTrigger(route: string) {
  if (routesWithWhiteHeader.includes(route)) {
    return '/blue-ab-logo.svg';
  }
  return '/white-ab-logo.svg';
}

function getBorderColorNotTrigger(route: string) {
  if (routesWithWhiteHeader.includes(route)) {
    return '#000';
  }
  return '#ffff';
}

export default function Header() {
  const { route } = useRouter();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: typeof window !== 'undefined' ? window : undefined,
  });

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: trigger ? theme.palette.common.white : 'transparent',
    color: trigger
      ? theme.palette.common.black
      : getHeaderColorFalseTrigger(theme, route),
    transition: trigger ? '0.3s' : '0.5s',
    opacity: trigger ? 0.95 : 1,
    boxShadow: 'none',
  }));

  const StyledoOutlinedButton = styled(Link)(() => ({
    padding: '12px 16px',
    borderRadius: '50px',
    border: '2px solid' + (trigger ? '#000' : getBorderColorNotTrigger(route)),
  }));

  return (
    <StyledAppBar position="fixed" color="primary" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Link href="/" className={clsx(classes.logo, 'flex-centered')}>
          <Image
            className={classes.logoIcon}
            width="203"
            height="46"
            alt="logo"
            src={trigger ? '/blue-ab-logo.svg' : getLogoNotTrigger(route)}
          />
        </Link>
        <div className={clsx('flex-centered', 'onlyDesktop')}>
          <Link href="/products" className={classes.button}>
            <Typography>Products</Typography>
          </Link>
          <Link href="/projects" className={classes.button}>
            <Typography>Projects</Typography>
          </Link>
          <Link href="/solutions" className={classes.button}>
            <Typography>Solutions</Typography>
          </Link>
          <Link href="/company" className={classes.button}>
            <Typography>Company</Typography>
          </Link>
          <Link href="/resources" className={classes.button}>
            <Typography>Resources</Typography>
          </Link>
          <StyledoOutlinedButton href="/contact-us">
            <Typography>Contact us</Typography>
          </StyledoOutlinedButton>
        </div>
        <MenuIcon className="onlyMobile" />
      </Toolbar>
    </StyledAppBar>
  );
}
