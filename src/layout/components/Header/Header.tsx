import React, { useState } from 'react';
import logo from '@/assets/img/logo2.svg';
import Image from 'next/image';
import { BurgerIcon, HomeIcon } from '@/assets/icons/layoutIcons';
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
        <li className="flex h-[50px] w-[250px] items-center justify-center rounded-xl  bg-[#3b393b]">
          <h1 className="text-3xl text-white">ALIAS dark</h1>
        </li>
        <li className="h-[50px] w-[50px] rounded-xl bg-[#3c77e6] ">
          <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className="flex flex-col items-end gap-3"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-[50px] w-[50px] items-center justify-center    "
            >
              <motion.div
                className=""
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              >
                <BurgerIcon />
              </motion.div>
            </motion.button>

            <motion.ul
              className=" flex w-[450px] flex-col items-center justify-center gap-1 bg-[#fcfcfc] p-5 text-black"
              variants={{
                open: {
                  clipPath: 'inset(0% 0% 0% 0% round 10px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.25,
                  },
                },
                closed: {
                  clipPath: 'inset(10% 50% 90% 50% round 10px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.4,
                  },
                },
              }}
              style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
              <motion.li variants={itemVariants}>
                {' '}
                <Link href={'/'}>Правила</Link>{' '}
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href={'/settings'}> Настройки</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                {' '}
                <button onClick={() => signOut({ redirect: false })}>
                  Выйти
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
