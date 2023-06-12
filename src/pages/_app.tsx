import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/utils/theme';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Head from 'next/head';
import Header from '@/components/Header';
import StayInTouchSection from '@/components/StayInTouchSection';
import Footer from '@/components/Footer';

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default function App({ Component, pageProps }: AppProps) {
  const cache = createEmotionCache();

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Head>
            <title>Applied Blockchain</title>
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <Component {...pageProps} />
          <StayInTouchSection />
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}
