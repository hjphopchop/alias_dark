import { GAME } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import { GameSession } from '@/modules/game/components/GameSession';
import PlayersTurn from '@/modules/game/components/PlayersTurn/PlayersTurn';
import CategoriesProvider from '@/providers/CategoriesProvider';
import GameProvider from '@/providers/GameProvider';
import { useTeamsContext } from '@/providers/TeamsProvider';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const GamePage = () => {
  const [playerIndex, setPlayerIndex] = useState<number>(0);
  const [isEndRound, setIsEndRound] = useState(true);
  const { teams }: any = useTeamsContext();

  const router = useRouter();
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
            teams={teams}
          />
        </>
      )}
    </div>
  );
};
GamePage.auth = GAME.auth;

GamePage.getLayout = getLayout;
export default GamePage;
