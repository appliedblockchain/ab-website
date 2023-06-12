import classes from '@/styles/components/Header.module.css';
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  styled,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: typeof window !== 'undefined' ? window : undefined,
  });

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: trigger
      ? theme.palette.common.white
      : theme.palette.primary.main,
    color: trigger ? theme.palette.common.black : theme.palette.common.white,
    transition: trigger ? '0.3s' : '0.5s',
    opacity: trigger ? 0.95 : 1,
    boxShadow: 'none',
  }));

  const StyledoOutlinedButton = styled(Link)(() => ({
    padding: '12px 16px',
    borderRadius: '50px',
    border: '2px solid' + (trigger ? '#000' : '#ffff'),
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
            src={trigger ? '/blue-ab-logo.svg' : '/white-ab-logo.svg'}
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
