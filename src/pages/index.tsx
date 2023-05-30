import { HOME } from '@/common/routes';

import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import Home from '@/modules/home/components/Home';
import CreateSettings from '@/modules/settings/graphql/mutation/CreateSettings';
import GetSettings from '@/modules/settings/graphql/query/GetSettings';
import { useMutation, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {
  console.log('я отрисовался))');
  const router = useRouter();
  const { data: session } = useSession();
  const {
    data: settings,
    loading,
    error,
  } = useQuery(GetSettings, {
    variables: {
      userId: session?.user?.id,
    },
  });
  const [createSettings] = useMutation(CreateSettings);

  const startGame = () => {
    if (!settings?.settings.length) {
      createSettings({
        variables: {
          userId: session?.user?.id,
        },
      });
    }
    router.push('/game/teams');
  };

  return (
    <>
      <Home />
    </>
  );
};
HomePage.getLayout = getLayout;
HomePage.auth = HOME.auth;

export default HomePage;
