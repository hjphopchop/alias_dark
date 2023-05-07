import React, { memo } from 'react';

const SearchInput = memo(function SearchInput({ onChange, placeholder }: any) {
  return (
    <input
      className="cursor-default rounded border-gray-100 bg-[#F1F5F9] py-2 pl-2 text-left text-black focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm"
      onChange={(event) => onChange(event)}
      placeholder={placeholder ? placeholder : 'Найти'}
      type="search"
    />
  );
});

export default SearchInput;
