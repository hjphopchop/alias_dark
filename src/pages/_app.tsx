import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { AppInitialState, useApollo } from '@/graphql/client';
import { Session } from 'next-auth';
import Auth, { AuthProps } from '@/modules/auth/Auth';
import { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client';
import TeamsProvider from '@/providers/TeamsProvider';
import GameProvider from '@/providers/GameProvider';

import localFont from '@next/font/local';
const sofia = localFont({
  src: '../../public/fonts/ZenGothic-Light.ttf',
  preload: true,
  variable: '--font-sofia',
});
const zaychik = localFont({
  src: '../../public/fonts/Zaychik-Regular.ttf',
  preload: true,
  variable: '--font-zaychik',
});

type NextPagePropsExtra = {
  initialApolloState: AppInitialState;
  session: Session;
};

export type GetLayoutFn = (page: ReactElement) => ReactNode;

export type NextPageWithExtra = NextPage & {
  auth?: AuthProps;
  getLayout?: GetLayoutFn;
};

export type AppPropsWithExtra<P = unknown> = {
  Component: NextPageWithExtra;
  pageProps: P;
};
const App = ({
  Component,
  pageProps: { session, initialApolloState, ...pageProps },
}: AppPropsWithExtra<NextPagePropsExtra>): React.ReactElement => {
  const client = useApollo(initialApolloState);
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <AnimatePresence mode="wait" initial={true}>
          <TeamsProvider>
            <GameProvider>
              {Component.auth ? (
                <Auth {...Component.auth}>
                  <html className={`${zaychik.variable} ${sofia.variable} `}>
                    {getLayout(<Component {...pageProps} />)}
                  </html>
                </Auth>
              ) : (
                <html className={`${zaychik.variable} ${sofia.variable}  `}>
                  {getLayout(<Component {...pageProps} />)}
                </html>
              )}
            </GameProvider>
          </TeamsProvider>
        </AnimatePresence>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
