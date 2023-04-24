import { CATEGORYSELECTION } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import CategoriesList from '@/modules/categories/components/CategoriesList';
import GetCategories from '@/modules/categories/graphql/query/GetCategories';
import CategoriesProvider, {
  useCategoryContext,
} from '@/providers/CategoriesProvider';
import { useQuery } from '@apollo/client';
import React from 'react';

const CategorySelectionPage = () => {
  const { data, loading } = useQuery(GetCategories);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CategoriesProvider>
        <CategoriesList categories={data.categories.data} selecteable />
      </CategoriesProvider>
    </>
  );
};

CategorySelectionPage.auth = CATEGORYSELECTION.auth;

CategorySelectionPage.getLayout = getLayout;

export default CategorySelectionPage;
