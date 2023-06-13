import { CloseIcon, PlusIcon } from '@/assets/icons/icons';
import { useTeamsContext } from '@/providers/TeamsProvider';
import Image from 'next/image';
import React from 'react';
import TeamItem from './TeamItem';
import { Team } from '../../types/TeamTypes';
import { motion } from 'framer-motion';

type TeamListProps = {
  showForm: () => void;
};
const TeamsList = ({ showForm }: TeamListProps) => {
  const { teams } = useTeamsContext();

  return (
    <ul className="flex flex-wrap justify-start gap-10 pt-10">
      {teams?.map((item: Team) => (
        <TeamItem key={item.id} item={item} />
      ))}
      <li className="flex h-[250px] w-[200px] rotate-6 items-center justify-center gap-2 rounded-b-xl bg-green-600">
        <div className="  h-[250px] w-[200px] -rotate-6 rounded-b-xl bg-green-400">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" flex h-full w-full items-center justify-center text-black"
            onClick={showForm}
          >
            <PlusIcon />
          </motion.button>
        </div>
      </li>
    </ul>
  );
};

export default TeamsList;
