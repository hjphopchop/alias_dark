import { CloseIcon, PlusIcon } from '@/assets/icons/icons';
import { useTeamsContext } from '@/providers/TeamsProvider';
import Image from 'next/image';
import React from 'react';
import TeamItem from './TeamItem';
import { Team } from '../../types/TeamTypes';

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
        <div className=" flex h-[250px] w-[200px] -rotate-6 items-center justify-center  rounded-b-xl bg-green-400">
          <button className=" bg-green-400 text-black" onClick={showForm}>
            <PlusIcon />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default TeamsList;
