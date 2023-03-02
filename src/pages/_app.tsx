import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { AppInitialState, useApollo } from '@/graphql/client';
import { Session } from 'next-auth';
import Auth, { AuthProps } from '@/components/auth/Auth';
import { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client';

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
  console.log(session);
  const client = useApollo(initialApolloState);
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <AnimatePresence mode="wait" initial={true}>
          {Component.auth ? (
            <Auth {...Component.auth}>
              {getLayout(<Component {...pageProps} />)}
            </Auth>
          ) : (
            getLayout(<Component {...pageProps} />)
          )}
        </AnimatePresence>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
