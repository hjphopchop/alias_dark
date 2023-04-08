import { RESULTS } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import React from 'react';

const gameResultsPage = () => {
  return <div>gameResult</div>;
};

gameResultsPage.auth = RESULTS.auth;

gameResultsPage.getLayout = getLayout;

export default gameResultsPage;
