import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { set } from 'cypress/types/lodash';
import Image from 'next/image';

const CreateCategoryForm = ({ onClose }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [createObjectURL, setCreateObjectURL] = useState<string | undefined>(
    undefined
  );
  const [imageId, setImageId] = useState<string | undefined>(undefined);
  const onSubmit = async (data: any) => {
    console.log(data.image[0]);
    const body = new FormData();
    body.append('theFiles', data.image[0]);
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: any) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };
    await axios
      .post('/api/images/upload', body, config)
      .then((data) => {
        console.log('Успех');
        console.log(data.data.data.id);
        setImageId(data.data.data.id);
      })
      .catch((e) => {
        console.log('error', e);
      });
  };

  useEffect(() => {
    if (imageId) {
      axios
        .get('api/images/download', {
          params: { id: imageId },
        })
        .then((imageData: any) => {
          console.log(imageData);
          setCreateObjectURL('data:image/png;base64,' + imageData.data.file);
        });
    }
  }, [imageId]);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center bg-pink-800 text-lg text-black"
      >
        {/* register your input into the hook by invoking the "register" function */}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register('title', { required: true })}
          placeholder="Введите название"
        />
        <input
          {...register('description', { required: true })}
          placeholder="Введите описание"
        />
        <textarea placeholder="Введите список слов через запятую" />
        <input type="file" {...register('image', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
        {createObjectURL && (
          <Image src={createObjectURL} alt="" width={200} height={200} />
        )}
      </form>
    </>
  );
};

export default CreateCategoryForm;
