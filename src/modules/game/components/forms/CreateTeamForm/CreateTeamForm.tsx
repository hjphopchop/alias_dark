import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { nanoid } from 'nanoid';
import CustomSelect from '../../Teams/CustomSelect';
import { useTeamsContext } from '@/providers/TeamsProvider';
import { Container } from '@/common/components/Container';
import { CloseIcon } from '@/assets/icons/icons';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type TeamFormProps = {
  onClose: (x: boolean) => void;
  isActive: boolean;
};
const validationSchema = yup.object({
  title: yup
    .string()
    .max(40, 'Максимум 40 символов')
    .required('Необходимо заполнить'),
  image: yup.object().required('Необходимо выбрать изображение'),
});

const CreateTeamForm = ({ onClose, isActive }: TeamFormProps) => {
  const resolver = yupResolver(validationSchema);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver });
  const { addTeam } = useTeamsContext();
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    axios.get('/api/images/downloadAvatars').then(async ({ data }) => {
      setAvatars(data);
    });
  }, []);

  const handleClose = () => {
    onClose(false);
  };
  const onSubmit = (data: any) => {
    const teamData = { ...data, id: nanoid(), points: 0 };
    addTeam(teamData);
    onClose(false);
  };

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  console.log(errors);

  return (
    <Container isActive={isActive} center fullScreen shading>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-[500px] rounded-xl bg-white px-[20px] py-[35px] text-black"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl ">Создание команды</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            className="hover:rotate-2"
          >
            <CloseIcon />
          </motion.button>
        </div>

        <form
          className="flex flex-col  items-stretch justify-center gap-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative flex items-center  gap-5 ">
            <span className="w-[100px]">Название</span>
            <input
              type="text"
              className={`w-[200px]  rounded-[5px]  px-2 py-1  ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-1 focus:ring-[#3c77e6] sm:text-sm sm:leading-6
              ${
                errors.title
                  ? 'ring-1 ring-red-500 focus:ring-1  focus:ring-red-500'
                  : ''
              }`}
              placeholder="Введите название"
              {...register('title')}
            />

            {errors.title && (
              <span className="absolute left-[120px] bottom-[-20px] text-xs">
                {errors.title?.message}
              </span>
            )}
          </div>

          <div className="relative flex items-center gap-5 ">
            <span className="w-[100px]">Изображение</span>
            <CustomSelect
              avatars={avatars}
              control={control}
              styles={`w-[200px] ${
                errors.image
                  ? 'ring-1 ring-red-500 focus:ring-1  focus:ring-red-500'
                  : ''
              }`}
              {...register('image')}
            />
            {errors.image && (
              <span className="absolute left-[120px] bottom-[-20px] text-xs">
                {errors.image?.message}
              </span>
            )}
          </div>

          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            value={'Создать'}
            className="w-[120px] cursor-pointer self-end rounded-[10px] bg-[#3c77e6] py-1 px-1 text-white "
          />
        </form>
      </motion.div>
    </Container>
  );
};

export default CreateTeamForm;
