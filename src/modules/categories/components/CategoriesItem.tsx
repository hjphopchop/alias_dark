import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { useCategoryContext } from '@/providers/CategoriesProvider';

const CategoriesItem = ({ item, selecteable = false }: any) => {
  const [objectUrl, setObjectUrl] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const { addCategory, removeCategory }: any = useCategoryContext();
  useEffect(() => {
    axios
      .get('/api/images/download', {
        params: { id: item.imageId },
      })
      .then(async ({ data }) => {
        setObjectUrl('data:image/png;base64,' + data.file);
      });
  }, [item.imageId]);
  const itemClasses = classnames('relative', {
    'border-r-4 border-spacing-0 border-collapse border-box border-pink-500':
      isSelected,
    '': !isSelected,
  });
  const handleClickItem = () => {
    if (!isSelected) {
      console.log('da');
      addCategory(item.id);
    }
    if (isSelected) {
      removeCategory(item.id);
    }
    setIsSelected(!isSelected);
  };
  return (
    <>
      {selecteable ? (
        <>
          <div className={itemClasses} onClick={handleClickItem}>
            <div className="absolute bottom-[-1px] left-[-1px] m-0 w-[100px] rounded-bl-xl rounded-tr-xl bg-[rgba(0,0,0,0.7)] bg-pink-500 p-2 pr-5   ">
              <h3>{item.title}</h3>
            </div>
            <Image
              className="h-[250px] w-[350px] rounded-xl object-cover object-center "
              src={objectUrl}
              width={300}
              height={400}
              alt="rex"
            />
          </div>{' '}
        </>
      ) : (
        <>
          <div className="relative">
            <div className="absolute bottom-[-1px] left-[-1px] m-0 min-w-[100px] rounded-bl-xl rounded-tr-xl bg-[rgba(0,0,0,0.7)] p-2 pr-5">
              <h3>{item.title}</h3>
            </div>
            <Image
              className="h-[250px] w-[350px] rounded-xl object-cover object-center "
              src={objectUrl}
              width={300}
              height={400}
              alt="rex"
            />
          </div>{' '}
        </>
      )}
    </>
  );
};

export default CategoriesItem;
