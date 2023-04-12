import React from 'react';

const PlayersTurn = ({ setIsEndGame, player, setIsEndTimer }: any) => {
  return (
    <div>
      <div>Очередь игрока {player}</div>
      <button
        onClick={() => {
          setIsEndGame(false);
          setIsEndTimer(false);
        }}
      >
        Начать
      </button>
    </div>
  );
};

export default PlayersTurn;
