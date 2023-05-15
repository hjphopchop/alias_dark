import { GAME } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import { GameSession } from '@/modules/game/components/GameSession';
import PlayersTurn from '@/modules/game/components/PlayersTurn/PlayersTurn';
import GetSettings from '@/modules/settings/graphql/query/GetSettings';
import CategoriesProvider from '@/providers/CategoriesProvider';
import GameProvider from '@/providers/GameProvider';
import { useTeamsContext } from '@/providers/TeamsProvider';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const GamePage = () => {
  const [playerIndex, setPlayerIndex] = useState<number>(0);
  const [isEndRound, setIsEndRound] = useState(true);
  const { teams }: any = useTeamsContext();

  const router = useRouter();
  const { data: session } = useSession();
  const { data, loading } = useQuery(GetSettings, {
    variables: {
      userId: session?.user?.id,
    },
    fetchPolicy: 'network-only',
  });
  const settingsData = data?.settings[0];
  console.log(teams);
  useEffect(() => {
    console.log('Это работает');
    console.log('teams length', teams.length);
    console.log('index', playerIndex);
    if (teams.length === playerIndex) {
      console.log('выполнился конец');
      setIsEndRound((prev) => !prev);
      router.push('game/gameResults');
    }
  }, [teams.length, router, playerIndex]);

  return (
    <div>
      {isEndRound && (
        <>
          <GameSession
            setPlayerIndex={setPlayerIndex}
            playerIndex={playerIndex}
            settingsData={settingsData}
          />
        </>
      )}
    </div>
  );
};
GamePage.auth = GAME.auth;

GamePage.getLayout = getLayout;
export default GamePage;
