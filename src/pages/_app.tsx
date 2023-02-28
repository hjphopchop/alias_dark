import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AnimatePresence>
  );
}
