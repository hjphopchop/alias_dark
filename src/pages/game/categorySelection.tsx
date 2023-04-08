import { CATEGORYSELECTION } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import React from 'react';

const categorySelectionPage = () => {
  return <div>categorySelection</div>;
};

categorySelectionPage.auth = CATEGORYSELECTION.auth;

categorySelectionPage.getLayout = getLayout;

export default categorySelectionPage;
