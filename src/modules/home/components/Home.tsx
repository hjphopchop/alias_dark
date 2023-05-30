import React from 'react';
import Menu from './Menu';

const Home = () => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-5 `}
    >
      <h1 className="font-zaychik text-6xl text-white">Alias dark</h1>
      <Menu />{' '}
    </div>
  );
};

export default Home;
