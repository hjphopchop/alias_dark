import { CATEGORIES } from '@/common/routes';
import SearchInput from '@/common/utils/components/SearchInput/SearchInput';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import CategoriesList from '@/modules/categories/components/CategoriesList';
import GetCategories from '@/modules/categories/graphql/query/GetCategories';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import React, { ChangeEvent, useCallback, useState } from 'react';

const CategoriesPage = () => {
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState<any>({});
  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(event.target.value);
  }, []);
  const { data, loading } = useQuery(GetCategories);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data.categories);
  return (
    <div className="mx-[60px] flex flex-col items-stretch justify-center gap-[30px]">
      <div className="flex items-center justify-between">
        <h1 className="pb-6 text-2xl">Категории</h1>
        <SearchInput onChange={handleSearch} />
      </div>

      <CategoriesList categories={data.categories.data} />
    </div>
  );
};

CategoriesPage.auth = CATEGORIES.auth;
CategoriesPage.getLayout = getLayout;

export default CategoriesPage;
