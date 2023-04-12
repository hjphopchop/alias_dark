import { RESULTS } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import { useRouter } from 'next/router';
import React from 'react';

const GameResultsPage = () => {
  const router = useRouter();
  const newRound = () => {
    router.push('/game');
  };
  return (
    <>
      <div>gameResult</div>
      <button onClick={newRound}>Продолжить</button>
    </>
  );
};

GameResultsPage.auth = RESULTS.auth;

GameResultsPage.getLayout = getLayout;

export default GameResultsPage;
