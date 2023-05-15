import Container from '@/common/components/Container/Container';
import Image from 'next/image';
import React from 'react';

const PlayersTurn = ({ setIsEndGame, player, setIsEndTimer }: any) => {
  const handleClick = () => {
    setIsEndGame(true);
    setIsEndTimer(false);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="mt-3 text-xl">{player?.title}, приготовься</span>
        <div className=" flex h-[250px] w-[250px] items-center justify-center overflow-hidden rounded-full bg-green-600">
          <Image
            className="object-cover object-center"
            src={'data:image/png;base64,' + player?.image?.file}
            width={190}
            height={190}
            alt="avatar"
          />
        </div>
        <button
          onClick={handleClick}
          className="rounded-xl bg-blue-600 px-3 py-2"
        >
          Начать
        </button>
      </div>
    </>
  );
};

export default PlayersTurn;
