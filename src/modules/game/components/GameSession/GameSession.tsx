import React, { useEffect, useState } from 'react';
import Timer from '../Timer';
import { composeMiddlewareFns } from 'nexus/dist/plugin';
import { useGameContext } from '@/providers/GameProvider';
import PlayersTurn from '../PlayersTurn/PlayersTurn';
import { useTeamsContext } from '@/providers/TeamsProvider';

const GameSession = ({ setPlayerIndex, playerIndex }: any) => {
  const { words, removeWord }: any = useGameContext();
  const { teams, changePoints }: any = useTeamsContext();
  const [isEndGame, setIsEndGame] = useState(true);
  const [isEndTimer, setIsEndTimer] = useState(false);

  console.log('player', playerIndex);

  const skipWord = () => {
    removeWord(words[words.length - 1]);
    isEndTimer && setIsEndGame(true);
  };
  const nextWord = () => {
    removeWord(words[words.length - 1]);
    changePoints(teams[playerIndex].title, 1);
    isEndTimer && setPlayerIndex(playerIndex + 1);
    isEndTimer && setIsEndGame(true);
  };

  return (
    <>
      {isEndGame ? (
        <PlayersTurn
          setIsEndGame={setIsEndGame}
          setIsEndTimer={setIsEndTimer}
          player={teams[playerIndex]?.title}
        />
      ) : (
        <div className="relative  mx-[50px] flex min-h-[80vh] flex-col items-center justify-center ">
          <div className=" flex w-[450px] items-center justify-center border-2 border-zinc-400 py-10 text-3xl">
            {words[words.length - 1]}
          </div>
          <div className="flex w-[450px] items-center  justify-between">
            <button
              onClick={skipWord}
              className="mt-4 w-[150px] bg-blue-500 p-2"
            >
              Пропустить
            </button>
            <button
              onClick={nextWord}
              className="mt-4 w-[150px] bg-blue-500 p-2"
            >
              Дальше
            </button>
          </div>
          <div className="absolute top-0 right-0">
            <Timer setIsEndTimer={setIsEndTimer} initialTime={10} />
          </div>
        </div>
      )}
    </>
  );
};

export default GameSession;
