import { TEAMS } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTeamsContext } from '@/providers/TeamsProvider';
import CreateTeamForm from '@/modules/game/components/forms/CreateTeamForm';
import { useRouter } from 'next/router';

const test = ['бобры', 'мыши', 'желуди'];
const TeamsPage = () => {
  const { teams, deleteTeam }: any = useTeamsContext();
  console.log(teams);
  const [isShowForm, setIsShowForm] = useState(false);

  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/game/categorySelection');
  };

  return (
    <>
      <div className="px-[50px]">
        <h3 className="text-2xl"> Выбор команд</h3>
        <ul className="flex flex-wrap justify-start gap-10 pt-10">
          {teams.map((item: any, index: any) => (
            <li key={index} className=" flex flex-col items-center ">
              <div className="relative flex h-[250px] w-[200px] items-end justify-center  overflow-hidden rounded-b-2xl bg-green-400">
                <Image
                  src={'data:image/png;base64,' + item?.image?.file}
                  width={190}
                  height={190}
                  className="absolute bottom-[-5px]"
                  alt="avatar"
                />
                <button
                  className="absolute top-0 right-0"
                  onClick={() => deleteTeam(item.id)}
                >
                  {' '}
                  Удалить
                </button>
              </div>
              <span className=" ">{item.title}</span>
            </li>
          ))}
          <li className="flex h-[250px] w-[200px] items-center gap-2 rounded-b-xl bg-green-600">
            <button
              className="h-[250px] w-[200px] rotate-6 rounded-b-xl bg-green-400"
              onClick={() => setIsShowForm((prev) => !prev)}
            >
              +
            </button>
          </li>
        </ul>
        <button
          className="my-5 rounded-xl bg-blue-600 px-3 py-2"
          onClick={handleClick}
        >
          {' '}
          Дальше
        </button>
      </div>
      {isShowForm && <CreateTeamForm onClose={setIsShowForm} />}
    </>
  );
};

TeamsPage.auth = TEAMS.auth;

TeamsPage.getLayout = getLayout;
export default TeamsPage;
