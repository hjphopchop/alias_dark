import { DIRTYADDIMAGES } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import ImageInput from 'src/modules/categories/components/ImageInput';

const DirtyAddImagesPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    const body = new FormData();
    console.log(data);
    body.append('theFiles', data.image[0]);
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };
    await axios
      .post('/api/images/uploadAvatar', body, config)
      .then(() => {
        console.log('Успех');
      })
      .catch((e) => {
        console.log('error', e);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center bg-pink-800 text-lg text-black"
      >
        <ImageInput {...register('image', { required: true })} />
        <input type="submit" />
      </form>
    </>
  );
};

export default DirtyAddImagesPage;

DirtyAddImagesPage.auth = DIRTYADDIMAGES.auth;

DirtyAddImagesPage.getLayout = getLayout;
