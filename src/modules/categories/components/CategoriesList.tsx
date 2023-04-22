import React from 'react';
import CategoriesItem from './CategoriesItem';

const CategoriesList = ({ categories }: any) => {
  console.log(categories);
  return (
    <div className="flex flex-wrap justify-between">
      {categories.map((category: any) => (
        <CategoriesItem item={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoriesList;
