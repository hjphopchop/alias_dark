import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MenuRoute } from '../menuRoutes';

import { motion } from 'framer-motion';

type MenuItemProps = {
  route: MenuRoute;
};

const MenuItem = ({ route }: MenuItemProps) => {
  const [isHover, setHover] = useState(false);
  //   const variants = {
  //     hover: { rotate: 20 },
  //     noHover: { rotate: 0 },
  //   };
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className=""
    >
      <Link href={route.link} className="flex  items-center gap-3">
        <motion.span
          animate={isHover ? 'hover' : 'noHover'}
          variants={route.variants}
        >
          <route.icon />
        </motion.span>
        <span>{route.title}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
