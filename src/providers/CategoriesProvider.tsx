import React, { createContext, useContext, useEffect, useState } from 'react';

const CategoriesContext = createContext({});

const CategoriesProvider = ({ children }: any) => {
  const [selected, setSelected] = useState<any>([]);
  const addCategory = (id: string): void => {
    setSelected([...selected, id]);
  };

  const removeCategory = (id: string): void => {
    try {
      setSelected((prevItems: Array<string>) =>
        prevItems.filter((item: string) => item !== id)
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  const contextValue = {
    selected,
    addCategory,
    removeCategory,
  };
  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
export const useCategoryContext = () => useContext(CategoriesContext);

export default CategoriesProvider;
