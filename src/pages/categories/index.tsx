import { CATEGORIES } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import React from 'react';

const CategoriesPage = () => {
  return <div>categoriesPage</div>;
};

CategoriesPage.auth = CATEGORIES.auth;
CategoriesPage.getLayout = getLayout;

export default CategoriesPage;
