import { RESULTS } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import GameResult from '@/modules/game/components/GameResult/GameResult';
import GetSettings from '@/modules/settings/graphql/query/GetSettings';
import { useTeamsContext } from '@/providers/TeamsProvider';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const GameResultsPage = () => {
  const session = useSession();
  const { data, loading } = useQuery(GetSettings, {
    variables: {
      userId: session?.data?.user?.id,
    },
  });
  const { teams }: any = useTeamsContext();
  console.log(session?.data?.user?.id);
  const pointToWin = data?.settings[0]?.pointToWin;

  return (
    <>
      <GameResult teams={teams} pointToWin={pointToWin} />
    </>
  );
};

GameResultsPage.auth = RESULTS.auth;

GameResultsPage.getLayout = getLayout;

export default GameResultsPage;
