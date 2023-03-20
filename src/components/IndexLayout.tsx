import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface IndexLayoutProps {
  children?: ReactNode;
}

export function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <>
      <Head>
        <title>Applied Blockchain</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
