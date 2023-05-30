import React from 'react';
import { MenuRoute, menuRoutes } from '../menuRoutes';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <>
      <ul className="flex flex-col items-stretch gap-5 px-8 py-5 text-center font-sofia text-2xl  text-white">
        {menuRoutes.map((route: MenuRoute) => (
          <MenuItem key={route.title} route={route} />
        ))}
      </ul>
    </>
  );
};

export default Menu;
