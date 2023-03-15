import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
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
    success: {
      light: '#C9F1E2',
      main: '#00A96B',
      dark: '#00613D',
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
    background: {
      default: '#FFFFFF',
      paper: '#F5F6F7',
    },
    action: {
      disabled: 'rgba(0, 10, 30, 0.26)',
      focus: 'rgba(0, 10, 30, 0.12)',
      selected: 'rgba(0, 10, 30, 0.08)',
      hover: 'rgba(0, 10, 30, 0.04)',
      // default: '#E0E0E0',
    },
    grey: {
      900: '#4B5F6C',
      800: '#5F717C',
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
      secondary: 'rgba(0, 10, 30, 0.54)',
      disabled: 'rgba(0, 10, 30, 0.38)',
      // hint: 'rgba(0, 10, 30, 0.38)',
    },
    brand: {
      facebook: '#1877F2',
      github: '#6CC644',
      linkedin: '#2977C9',
      medium: '#1DB954',
      twitter: '#1DA1F2',
    },
    black: '#000A1E',
    white: '#FFFFFF',
    divider: 'rgba(0, 10, 30, 0.12)',
  },
});
