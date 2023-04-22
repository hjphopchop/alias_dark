import { CATEGORIES } from '@/common/routes';
import SearchInput from '@/common/utils/components/SearchInput/SearchInput';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import CategoriesList from '@/modules/categories/components/CategoriesList';
import CreateCategoryForm from '@/modules/categories/components/CreateCategoryForm';
import UploadImage from '@/modules/categories/components/CreateCategoryForm';
import GetCategories from '@/modules/categories/graphql/query/GetCategories';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

const CategoriesPage = () => {
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState<any>({});
  const [isOpenCreateCategory, setIsOpenCreateCategory] = useState(false);
  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(event.target.value);
  }, []);

  const { data, loading } = useQuery(GetCategories);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data.categories);

  const handleCreateForm = () => {
    setIsOpenCreateCategory(true);
  };
  return (
    <div className="mx-[60px] flex flex-col items-stretch justify-center gap-[30px]">
      <div className="flex items-center justify-between">
        <h1 className="pb-6 text-2xl">Категории</h1>
        <div>
          <SearchInput onChange={handleSearch} />
          <button onClick={handleCreateForm}>Создать</button>
        </div>
      </div>

      <CategoriesList categories={data.categories.data} />
      {isOpenCreateCategory && (
        <CreateCategoryForm onClose={setIsOpenCreateCategory} />
      )}
      {/* <Image
        src={'/../public/uploads/091a7dd7-8833-4e20-8824-b7ccb1983741.jpg'}
        alt="t"
        width={500}
        height={500}
      /> */}
    </div>
  );
};

CategoriesPage.auth = CATEGORIES.auth;
CategoriesPage.getLayout = getLayout;

export default CategoriesPage;
