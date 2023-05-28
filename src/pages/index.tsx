import { HOME } from '@/common/routes';

import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import CreateSettings from '@/modules/settings/graphql/mutation/CreateSettings';
import GetSettings from '@/modules/settings/graphql/query/GetSettings';
import { useMutation, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
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
      <div>4443333</div>
      <button onClick={startGame}>Начать игру</button>
    </>
  );
};
Home.getLayout = getLayout;
Home.auth = HOME.auth;

export default Home;
