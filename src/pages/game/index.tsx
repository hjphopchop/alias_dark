import { GAME } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import React from 'react';

const GamePage = () => {
  return (
    <div>
      <div>Сама Игра</div>
    </div>
  );
};
GamePage.auth = GAME.auth;

GamePage.getLayout = getLayout;
export default GamePage;
