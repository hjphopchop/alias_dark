import React, { useState } from 'react';
import logo from '@/assets/img/logo2.svg';
import Image from 'next/image';
import { BurgerIcon, HomeIcon, LogoutIcon } from '@/assets/icons/layoutIcons';
import { motion, Variants } from 'framer-motion';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  return (
    <header className="h-max">
      <ul className="flex w-screen items-center justify-between px-[50px] py-5 ">
        <li className="h-[50px] w-[50px] rounded-xl  bg-[#3c77e6] p-3">
          <Link href={'/'}>
            {' '}
            <HomeIcon />{' '}
          </Link>
        </li>
        <li className="rounded-xl bg-[#3c77e6] ">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => signOut({ redirect: false })}
            className="flex h-[50px] w-[150px] items-center justify-center    "
          >
            <motion.div
              className="flex items-center justify-between"
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <LogoutIcon />
              <span>Выйти</span>
            </motion.div>
          </motion.button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
