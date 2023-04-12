import { CATEGORYSELECTION } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import { useRouter } from 'next/router';
import React from 'react';

const CategorySelectionPage = () => {
  const router = useRouter();
  const startGame = () => {
    router.push('/game');
  };

  return (
    <>
      <button onClick={startGame}> Продолжить</button>
    </>
  );
};

CategorySelectionPage.auth = CATEGORYSELECTION.auth;

CategorySelectionPage.getLayout = getLayout;

export default CategorySelectionPage;
