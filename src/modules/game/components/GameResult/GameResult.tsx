import { useTeamsContext } from '@/providers/TeamsProvider';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const GameResult = ({ teams, pointToWin }: any) => {
  const router = useRouter();
  const [isEndGame, setIsEndGame] = useState(false);
  const newRound = () => {
    router.push('/game');
  };

  console.log(teams);
  const headers = ['Место', 'Команда', 'Очки'];
  useEffect(() => {
    teams.sort((a: any, b: any) => b.point - a.point);
    if (teams[0].point >= pointToWin) {
      setIsEndGame(true);
    }
  }, [teams, pointToWin]);
  return (
    <>
      <div className="flex h-full flex-col items-center  gap-10 ">
        <h1 className="self-start text-2xl">Результаты</h1>

        <div className="grid min-w-[30vw] max-w-full  grid-cols-[1fr,4fr,1fr] overflow-auto rounded-xl border border-gray-800 ">
          {headers.map((item) => (
            <>
              <div className="bg-green-500 px-3 py-3 text-[18px] font-[700] leading-[19px]">
                {item}
              </div>
            </>
          ))}
          {teams.map((item: any, index: number) => (
            <>
              <div className="flex items-center  px-3 py-3 text-[16px] font-[400] leading-[17px] ">
                {index + 1}
              </div>
              <div className="flex items-center  px-3 py-3 text-[16px] font-[400] leading-[17px] ">
                {item.title}
              </div>
              <div className="flex items-center  px-3 py-3 text-[16px] font-[400] leading-[17px]  ">
                {item.point}
              </div>
            </>
          ))}
        </div>
        {isEndGame ? (
          <>
            <button onClick={newRound}>Начать новую игру</button>
          </>
        ) : (
          <>
            {' '}
            <button onClick={newRound}>Продолжить</button>
          </>
        )}
      </div>
    </>
  );
};

export default GameResult;
