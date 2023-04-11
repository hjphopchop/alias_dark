import React from 'react';
import { useForm } from 'react-hook-form';

const CreateTeamForm = ({ addTeam, onClose }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    addTeam({ title: data.title, point: 0 });
    onClose(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default CreateTeamForm;
