import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { get, set } from 'cypress/types/lodash';
import Image from 'next/image';
import ImageInput from './ImageInput';
import { useMutation } from '@apollo/client';
import CreateCategory from '../graphql/mutation/CreateCategory';

const CreateCategoryForm = ({ onClose }: any) => {
  const { register, handleSubmit } = useForm();

  const [create] = useMutation(CreateCategory);
  const [testImg, setTestImg] = useState('');
  const onChange = (e: any) => {
    console.log('refresh');
    setTestImg(URL.createObjectURL(e.target.files[0]));
  };
  const onSubmit = async (data: any) => {
    const body = new FormData();
    console.log(data);
    body.append('theFiles', data.image[0]);
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };
    await axios
      .post('/api/images/upload', body, config)
      .then((imageData) => {
        console.log('Успех');
        create({
          variables: {
            categoryData: {
              title: data.title,
              description: data.description,
              imageId: imageData.data.data.id,
              oficial: true,
            },
            questionData: [
              {
                title: '1',
              },
              { title: '2' },
            ],
          },
        });
      })

      .then(() => onClose())
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
        <input
          {...register('title', { required: true })}
          placeholder="Введите название"
        />
        <input
          {...register('description', { required: true })}
          placeholder="Введите описание"
        />
        <textarea
          {...register('questions', { required: true })}
          placeholder="Введите список слов через запятую"
        />

        <ImageInput
          {...register('image', { required: true })}
          onChange={onChange}
        />
        <input type="submit" />
      </form>
      {testImg && <Image src={testImg} width={200} height={200} alt="r" />}
    </>
  );
};

export default CreateCategoryForm;
