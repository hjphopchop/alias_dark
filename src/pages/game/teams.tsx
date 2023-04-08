import { TEAMS } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import React from 'react';

const TeamsPage = () => {
  return <div>Выбор команд</div>;
};

TeamsPage.auth = TEAMS.auth;

TeamsPage.getLayout = getLayout;
export default TeamsPage;
