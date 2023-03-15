import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from '@/utils/theme';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default function App({ Component, pageProps }: AppProps) {
  const cache = createEmotionCache();

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}
