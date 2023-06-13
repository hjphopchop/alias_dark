import { SyntheticEvent, useState } from 'react';
import CreateTeamForm from '../forms/CreateTeamForm/CreateTeamForm';
import { useRouter } from 'next/router';
import TeamsList from './TeamsList';
import { motion, AnimatePresence } from 'framer-motion';

const Teams = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const router = useRouter();
  const handleNext = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push('/game/categorySelection');
  };
  const handleShowForm = () => {
    setIsShowForm((prev) => !prev);
  };

  return (
    <>
      <div className="px-[50px]">
        <h3 className="text-2xl"> Выбор команд</h3>
        <TeamsList showForm={handleShowForm} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="my-5 rounded-xl bg-blue-600 px-3 py-2"
          onClick={handleNext}
        >
          {' '}
          Дальше
        </motion.button>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isShowForm && (
          <CreateTeamForm isActive={isShowForm} onClose={setIsShowForm} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Teams;
