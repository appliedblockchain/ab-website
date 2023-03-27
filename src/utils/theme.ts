import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000A1E',
    },
    primary: {
      light: '#A8D2FF',
      main: '#007BFF',
      dark: '#0062CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FFD686',
      main: '#FF6F00',
      dark: '#C05400',
      contrastText: '#FFFFFF',
    },
    error: {
      light: '#FED6DD',
      main: '#FF224A',
      dark: '#BD0022',
      contrastText: '#FFFFFF',
    },
    warning: {
      light: '#FDF1C4',
      main: '#FAD961',
      dark: '#BC9506',
      contrastText: '#000A1E',
    },
    info: {
      light: '#D6EBFB',
      main: '#2196F3',
      dark: '#0960A5',
      contrastText: '#FFFFFF',
    },
    success: {
      light: '#C9F1E2',
      main: '#00A96B',
      dark: '#00613D',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FCFF',
    },
    action: {
      disabled: 'rgba(0, 10, 30, 0.26)',
      focus: 'rgba(0, 10, 30, 0.12)',
      selected: 'rgba(0, 10, 30, 0.08)',
      hover: 'rgba(0, 10, 30, 0.04)',
    },
    grey: {
      900: '#1E2126',
      800: '#242931',
      700: '#73838D',
      600: '#87949D',
      500: '#9BA6AD',
      400: '#AFB8BD',
      300: '#C3C9CD',
      200: '#D7DBDE',
      100: '#EBEDEE',
      50: '#F5F6F7',
    },
    text: {
      primary: '#000A1E',
      secondary: '#4A4D52',
      disabled: '#687183',
    },
    brand: {
      facebook: '#1877F2',
      github: '#6CC644',
      linkedin: '#2977C9',
      medium: '#1DB954',
      twitter: '#1DA1F2',
    },
    divider: 'rgba(0, 10, 30, 0.12)',
  },
  typography: {
    fontFamily: 'Chivo',
    h1: {
      fontWeight: '900',
      fontSize: '80px',
      lineHeight: '135%',
      fontStyle: 'black',
      '@media screen and (max-width:900px)': {
        fontSize: '42px',
        lineHeight: '125%',
      },
    },
    h2: {
      fontWeight: '400',
      fontSize: '64px',
      lineHeight: '125%',
      fontStyle: 'bold',
      '@media screen and (max-width:900px)': {
        fontSize: '32px',
      },
    },
    h3: {
      fontWeight: '400',
      fontSize: '48px',
      lineHeight: '125%',
      fontStyle: 'bold',
      '@media screen and (max-width:900px)': {
        fontSize: '24px',
      },
    },
    h4: {
      fontWeight: '400',
      fontSize: '40px',
      lineHeight: '125%',
      fontStyle: 'bold',
      '@media screen and (max-width:900px)': {
        fontSize: '22px',
      },
    },
    h5: {
      fontWeight: '400',
      fontSize: '32px',
      lineHeight: '150%',
      fontStyle: 'bold',
      '@media screen and (max-width:900px)': {
        fontSize: '20px',
      },
    },
    h6: {
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '120%',
      fontStyle: 'bold',
      '@media screen and (max-width:900px)': {
        fontSize: '18px',
      },
    },
    subtitle1: {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '150%',
      '@media screen and (max-width:900px)': {
        fontSize: '16px',
      },
    },
    subtitle2: {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '150%',
      fontStyle: 'bold',
      '@media screen and (max-width:900px)': {
        fontSize: '16px',
      },
    },
    body1: {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '150%',
      '@media screen and (max-width:900px)': {
        fontSize: '14px',
      },
    },
    body2: {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '150%',
      fontStyle: 'bold',
      '@media screen and (max-width:900px)': {
        fontSize: '14px',
      },
    },
    button: {
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '100%',
      fontStyle: 'bold',
    },
    caption: {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '100%',
      fontStyle: 'bold',
      '@media screen and (max-width:900px)': {
        fontSize: '10px',
      },
    },
    caption2: {
      fontWeight: '400',
      fontSize: '13px',
      lineHeight: '100%',
      fontStyle: 'bold',
      // '@media screen and (max-width:900px)': {
      //   fontSize: '11px',
      // },
    },
    overline: {
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '150%',
      '@media screen and (max-width:900px)': {
        fontSize: '12px',
      },
    },
  },
});
