'use client';

import { FormInputPost } from '@/types/FormPost';
import { Tag } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

export default function FormPost({ submit, isEditing }: FormPostProps) {
  const { register, handleSubmit } = useForm<FormInputPost>();

  // 태그 가져오기
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: async () => {
      const response = await axios.get('/api/tags');
      return response.data;
    },
  });

  console.log(dataTags);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex flex-col items-center justify-center gap-5 mt-10'
    >
      <input
        type='text'
        {...register('title', { required: true })}
        placeholder='제목을 작성해주세요'
        className='input input-bordered w-full max-w-lg'
      ></input>
      <textarea
        {...register('content', { required: true })}
        className='textarea textarea-bordered w-full max-w-lg'
        placeholder='내용을 입력해주세요'
      ></textarea>

      {isLoadingTags ? (
        <span className="loading loading-infinity loading-lg"></span>
      ) : (
        <select
          {...register('tag', { required: true })}
          className='select select-bordered w-full max-w-lg'
          defaultValue={''}
        >
          <option disabled value=''>
            분야를 선택하세요
          </option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      <button type='submit' className='btn w-full max-w-lg'>
        {isEditing ? '업로드' : '수정'}
      </button>
    </form>
  );
}
