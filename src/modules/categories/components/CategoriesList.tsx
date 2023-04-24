import React, { useState } from 'react';
import CategoriesItem from './CategoriesItem';
import { useCategoryContext } from '@/providers/CategoriesProvider';
import { useRouter } from 'next/router';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import GetQuestions from '../graphql/query/GetQuestions';
import { useGameContext } from '@/providers/GameProvider';

const CategoriesList = ({ categories, selecteable = false }: any) => {
  const { selected }: any = useCategoryContext();
  const { addWords, removeWord }: any = useGameContext();
  const [isLoading, setLoading] = useState(false);
  const [getQuestion, { data: questionData }] = useLazyQuery(GetQuestions);
  const router = useRouter();
  const words: Array<string> = [];

  const startGame = () => {
    setLoading(true);
    getQuestion({
      variables: {
        categoriesId: selected,
      },
    })
      .then((data) => {
        console.log('data', data.data.questions);
        data.data.questions.map((item: any) => {
          words.push(item.title);
        });
        addWords(words);
        setLoading(false);
      })

      .then(() => router.push('/game'));
  };
  if (selecteable) {
    console.log('выбранные категории:', selected);
  }
  return (
    <>
      <div className="flex flex-wrap justify-between">
        {categories.map((category: any) => (
          <CategoriesItem
            item={category}
            key={category.id}
            selecteable={selecteable}
          />
        ))}
      </div>
      {selecteable && <button onClick={startGame}> Продолжить</button>}
      {isLoading && <div className="h-10 w-20 bg-red-500">ЗАгрузка</div>}
    </>
  );
};

export default CategoriesList;
