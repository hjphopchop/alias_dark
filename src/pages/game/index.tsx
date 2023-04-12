import { GAME } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import { GameSession } from '@/modules/game/components/GameSession';
import PlayersTurn from '@/modules/game/components/PlayersTurn/PlayersTurn';
import GameProvider from '@/providers/GameProvider';
import { useTeamsContext } from '@/providers/TeamsProvider';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const GamePage = () => {
  const [playerIndex, setPlayerIndex] = useState<number>(0);
  const [isEndRound, setIsEndRound] = useState(false);
  const { teams }: any = useTeamsContext();

  const router = useRouter();
  console.log(teams);
  console.log('player', playerIndex);
  useEffect(() => {
    if (teams.length === playerIndex) {
      setIsEndRound(true);
      router.push('game/gameResults');
    }
  }, [playerIndex, router, teams.length]);

  return (
    <div>
      {!isEndRound && (
        <>
          <div>Сама Игра</div>
          <div>Игрок {teams[playerIndex]?.title}</div>
          <GameProvider>
            <GameSession
              setPlayerIndex={setPlayerIndex}
              playerIndex={playerIndex}
              teams={teams}
            />
          </GameProvider>
        </>
      )}
    </div>
  );
};
GamePage.auth = GAME.auth;

GamePage.getLayout = getLayout;
export default GamePage;
