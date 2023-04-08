import Image from 'next/image';
import React from 'react';

const CategoriesItem = ({ item }: any) => {
  return (
    <div className="relative">
      <div className="absolute bottom-[-1px] left-[-1px] m-0 min-w-[100px] rounded-bl-xl rounded-tr-xl bg-[rgba(0,0,0,0.7)] p-2 pr-5">
        <h3>{item.title}</h3>
      </div>
      <Image
        className="h-[250px] w-[350px] rounded-xl object-cover object-center "
        src={item.image?.url}
        width={300}
        height={400}
        alt="rex"
      />
    </div>
  );
};

export default CategoriesItem;
